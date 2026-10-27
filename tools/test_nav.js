// Navigation regression test. Usage: node tools/test_nav.js [url]
// Serves nothing itself: point it at a running copy of dist/index.html.
// Checks, at several widths: no layout shift in the top bar while scrolling, nothing clipped,
// the right section is reported as current, the Contents menu opens/closes/navigates correctly,
// and the side rail (wide screens only) never overlaps the content.
const { chromium } = require("playwright");
const url = process.argv[2] || "http://localhost:8765/index.html";
const WIDTHS = [390, 768, 1024, 1280, 1440, 1600, 1920];
let failures = 0;
const fail = (w, msg) => { failures++; console.log(`  FAIL @${w}px: ${msg}`); };

(async () => {
  const browser = await chromium.launch();
  for (const w of WIDTHS) {
    const page = await browser.newPage({ viewport: { width: w, height: 860 } });
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto(url, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    if (errors.length) fail(w, "page errors: " + errors.join("; "));

    // 1. Scroll through the page: the bar's controls must not move, resize, clip or overlap.
    const H = await page.evaluate(() => document.documentElement.scrollHeight);
    const snap = () => page.evaluate(() => {
      const r = (s) => { const e = document.querySelector(s); const b = e.getBoundingClientRect(); return { x: Math.round(b.left), r: Math.round(b.right), w: Math.round(b.width), h: Math.round(b.height) }; };
      const cur = document.querySelector("#nav-current");
      return { brand: r(".brand"), cur: r("#nav-current"), toggle: r("#toc-toggle"), theme: r(".theme-toggle"), bar: r(".topbar"),
        title: document.querySelector(".nav-title").textContent, docW: document.documentElement.scrollWidth, vw: window.innerWidth,
        curOverflowY: cur.scrollHeight > cur.clientHeight + 1 };
    });
    const shots = [];
    for (let y = 0; y <= H; y += Math.round(H / 50)) {
      await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), y);
      await page.waitForTimeout(40);
      shots.push(await snap());
    }
    for (const k of ["brand", "toggle", "theme", "cur", "bar"]) {
      const xs = new Set(shots.map((s) => s[k].x + ":" + s[k].w + ":" + s[k].h));
      if (xs.size > 1) fail(w, `${k} moved or resized while scrolling (${[...xs].join(" | ")})`);
    }
    const s0 = shots[0];
    if (s0.docW > s0.vw) fail(w, `page scrolls sideways (${s0.docW} > ${s0.vw})`);
    if (s0.brand.r > s0.cur.x + 1 || s0.cur.r > s0.toggle.x + 1 || s0.toggle.r > s0.theme.x + 1) fail(w, "top-bar items overlap");
    if (s0.theme.r > s0.vw) fail(w, "theme button off-screen");
    if (shots.some((s) => s.curOverflowY)) fail(w, "current-section label wraps");

    // 2. The reported section matches the content under the bar, for every section.
    const ids = await page.evaluate(() => [...document.querySelectorAll("#toc-list a")].map((a) => a.dataset.id));
    if (ids.length !== 15) fail(w, `expected 15 menu entries, found ${ids.length}`);
    for (const id of ids) {
      const ok = await page.evaluate(async (id) => {
        const s = document.getElementById(id);
        window.scrollTo({ top: s.getBoundingClientRect().top + window.scrollY + 60, behavior: "instant" });
        await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
        const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
        const a = document.querySelector('#toc-list a[aria-current="location"]');
        return { got: a && a.dataset.id, atBottom };
      }, id);
      if (ok.got !== id && !(ok.atBottom && ok.got === ids[ids.length - 1])) fail(w, `section ${id}: menu marks ${ok.got}`);
    }

    // 3. Contents menu: opens, focuses the current entry, fits on screen, closes on Escape / outside click, navigates.
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.waitForTimeout(80);
    await page.click("#toc-toggle");
    let st = await page.evaluate(() => {
      const p = document.querySelector("#toc-panel"), b = p.getBoundingClientRect();
      return { hidden: p.hidden, exp: document.querySelector("#toc-toggle").getAttribute("aria-expanded"), left: b.left, right: b.right, bottom: b.bottom,
        vh: innerHeight, vw: innerWidth, focusIn: p.contains(document.activeElement) };
    });
    if (st.hidden || st.exp !== "true") fail(w, "menu did not open");
    if (st.left < 0 || st.right > st.vw || st.bottom > st.vh + 1) fail(w, `menu off-screen (${Math.round(st.left)}..${Math.round(st.right)}, bottom ${Math.round(st.bottom)})`);
    if (!st.focusIn) fail(w, "focus not moved into the menu");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Escape");
    st = await page.evaluate(() => ({ hidden: document.querySelector("#toc-panel").hidden, focus: document.activeElement && document.activeElement.id }));
    if (!st.hidden || st.focus !== "toc-toggle") fail(w, "Escape did not close the menu and return focus");
    await page.click("#toc-toggle");
    await page.mouse.click(Math.round(w / 2), 840);
    if (!(await page.evaluate(() => document.querySelector("#toc-panel").hidden))) fail(w, "outside click did not close the menu");
    await page.click("#toc-toggle");
    await page.click('#toc-list a[data-id="control"]');
    await page.waitForTimeout(1600);
    st = await page.evaluate(() => {
      const s = document.getElementById("control").getBoundingClientRect(), bar = document.querySelector(".topbar").getBoundingClientRect();
      return { hidden: document.querySelector("#toc-panel").hidden, top: s.top, barBottom: bar.bottom, title: document.querySelector(".nav-title").textContent };
    });
    if (!st.hidden) fail(w, "menu stayed open after choosing a section");
    if (st.top < st.barBottom - 2 || st.top > st.barBottom + 40) fail(w, `jump landed badly: section top ${Math.round(st.top)} vs bar ${Math.round(st.barBottom)}`);
    if (st.title !== "Who controls it") fail(w, `bar shows "${st.title}" after jumping to control`);

    // 4. Side rail: shown only on wide screens, never over the content.
    const rail = await page.evaluate(() => {
      const r = document.querySelector("#toc-rail"); const vis = r.offsetParent !== null || getComputedStyle(r).position === "fixed" && getComputedStyle(r).display !== "none";
      if (!vis) return { vis: false };
      const rb = r.getBoundingClientRect();
      const wides = [...document.querySelectorAll(".wide, .measure")].map((e) => e.getBoundingClientRect()).filter((b) => b.width > 0);
      const minLeft = Math.min(...wides.map((b) => b.left));
      return { vis: true, right: rb.right, minLeft, bottom: rb.bottom, vh: innerHeight };
    });
    if (w >= 1540 && !rail.vis) fail(w, "side rail missing");
    if (w < 1540 && rail.vis) fail(w, "side rail shown on a narrow screen");
    if (rail.vis && rail.right > rail.minLeft - 8) fail(w, `rail overlaps content (rail right ${Math.round(rail.right)}, content left ${Math.round(rail.minLeft)})`);
    if (rail.vis && rail.bottom > rail.vh) fail(w, "rail taller than the screen");

    console.log(`${w}px: checked ${shots.length} scroll positions, ${ids.length} sections, menu and rail`);
    await page.close();
  }
  await browser.close();
  console.log(failures ? `${failures} failure(s)` : "all navigation checks passed");
  process.exit(failures ? 1 : 0);
})();
