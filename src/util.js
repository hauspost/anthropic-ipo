/* Shared helpers: formatting, DOM, tooltips, sharing, theme. */
const U = (() => {
  const EDGAR_DOC = "https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm";
  const EDGAR_INDEX = "https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function el(tag, attrs = {}, ...children) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else if (k === "html") node.innerHTML = v; // only ever used with our own static strings
      else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v === true ? "" : v);
    }
    for (const c of children.flat()) {
      if (c == null || c === false) continue;
      node.append(c instanceof Node ? c : document.createTextNode(String(c)));
    }
    return node;
  }

  // $ billions with sensible precision. Input in billions.
  function bn(v, opts = {}) {
    if (v == null || Number.isNaN(v)) return "—";
    const a = Math.abs(v);
    let s;
    if (a >= 1000) s = (a / 1000).toFixed(a >= 10000 ? 1 : 2).replace(/\.?0+$/, "") + "T";
    else if (a >= 100) s = a.toFixed(0) + "B";
    else if (a >= 10) s = a.toFixed(opts.d ?? 1).replace(/\.0$/, "") + "B";
    else if (a >= 1) s = a.toFixed(opts.d ?? 1).replace(/\.0$/, "") + "B";
    else s = (a * 1000).toFixed(0) + "M";
    const sign = v < 0 ? (opts.paren ? "" : "−") : "";
    const out = sign + "$" + s;
    return v < 0 && opts.paren ? "($" + s + ")" : out;
  }
  const pct = (v, d = 0) => (v == null ? "—" : (v < 0 ? "−" : "") + Math.abs(v * 100).toFixed(d) + "%");
  const mult = (v, d = 1) => (v == null ? "—" : v.toFixed(d).replace(/\.0$/, "") + "×");

  // Link to the filing. Text fragments (#:~:text=) jump to the quoted words in browsers that support them.
  function edgarLink(snippet) {
    if (!snippet) return EDGAR_DOC;
    return EDGAR_DOC + "#:~:text=" + encodeURIComponent(snippet).replace(/-/g, "%2D");
  }

  function pageChip(page, snippet) {
    return el("a", { class: "pg", href: edgarLink(snippet), target: "_blank", rel: "noopener", title: "Open the S-1 on SEC.gov" }, "p." + page);
  }

  /* toast */
  let toastTimer;
  function toast(msg) {
    let t = $(".toast");
    if (!t) { t = el("div", { class: "toast", role: "status", "aria-live": "polite" }); document.body.append(t); }
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.hidden = true; }, 2200);
  }

  function pageUrl(hash) {
    const base = window.SITE_URL || location.href.split("#")[0];
    return hash ? base + "#" + hash : base;
  }

  async function copyText(text, okMsg = "Link copied") {
    try { await navigator.clipboard.writeText(text); toast(okMsg); }
    catch (e) {
      const ta = el("textarea", { class: "sr-only" }); ta.value = text; document.body.append(ta); ta.select();
      try { document.execCommand("copy"); toast(okMsg); } catch (_) { toast("Copy this link: " + text); }
      ta.remove();
    }
  }

  function shareX(text, hash) {
    const u = "https://x.com/intent/post?text=" + encodeURIComponent(text) + "&url=" + encodeURIComponent(pageUrl(hash));
    return u;
  }

  /* glossary tooltips */
  function initGlossary(glossary) {
    const map = new Map(glossary.map((g) => [g.key, g]));
    let tip;
    const show = (target) => {
      const g = map.get(target.dataset.term);
      if (!g) return;
      if (!tip) { tip = el("div", { class: "tip", role: "tooltip", id: "term-tip" }); document.body.append(tip); }
      tip.replaceChildren(el("b", { text: g.term }), document.createTextNode(g.plain));
      tip.hidden = false;
      const r = target.getBoundingClientRect();
      const tw = tip.offsetWidth, th = tip.offsetHeight;
      let x = Math.min(Math.max(16, r.left + r.width / 2 - tw / 2), window.innerWidth - tw - 16);
      let y = r.top - th - 8;
      if (y < 56) y = r.bottom + 8;
      tip.style.left = x + "px"; tip.style.top = y + "px";
      target.setAttribute("aria-describedby", "term-tip");
    };
    const hide = () => { if (tip) tip.hidden = true; };
    $$(".term").forEach((t) => {
      if (!map.has(t.dataset.term)) return;
      t.tabIndex = 0;
      t.addEventListener("mouseenter", () => show(t));
      t.addEventListener("mouseleave", hide);
      t.addEventListener("focus", () => show(t));
      t.addEventListener("blur", hide);
      t.addEventListener("click", (e) => { e.preventDefault(); show(t); });
    });
    window.addEventListener("scroll", hide, { passive: true });
  }

  /* theme toggle: cycles system → light → dark */
  function initTheme() {
    const btn = $(".theme-toggle");
    if (!btn) return;
    const root = document.documentElement;
    let saved = null;
    try { saved = localStorage.getItem("ant-theme"); } catch (_) {}
    if (saved === "light" || saved === "dark") root.dataset.theme = saved;
    const label = () => {
      const t = root.dataset.theme || "system";
      btn.setAttribute("aria-label", "Color theme: " + t + ". Click to change.");
      btn.title = "Theme: " + t;
      btn.textContent = t === "dark" ? "☾" : t === "light" ? "☀" : "◐";
    };
    btn.addEventListener("click", () => {
      const cur = root.dataset.theme || "system";
      const next = cur === "system" ? "light" : cur === "light" ? "dark" : "system";
      if (next === "system") delete root.dataset.theme; else root.dataset.theme = next;
      try { localStorage.setItem("ant-theme", next); } catch (_) {}
      label();
      document.dispatchEvent(new CustomEvent("themechange"));
    });
    label();
  }

  /* chart tooltip inside a positioned container */
  function chartTip(container) {
    const tip = el("div", { class: "chart-tip", hidden: true, role: "status" });
    container.append(tip);
    return {
      show(x, y, head, rows) {
        tip.replaceChildren();
        if (head) tip.append(el("div", { class: "t-head", text: head }));
        rows.forEach((r) => {
          const key = el("span", { class: "t-key" });
          if (r.color) { const i = el("i"); i.style.background = r.color; key.append(i); }
          key.append(document.createTextNode(r.label));
          tip.append(el("div", { class: "t-row" }, key, el("b", { text: r.value })));
        });
        tip.hidden = false;
        const cw = container.clientWidth;
        const tw = tip.offsetWidth;
        let left = x + 14;
        if (left + tw > cw) left = Math.max(0, x - tw - 14);
        tip.style.left = left + "px";
        tip.style.top = Math.max(0, y - 10) + "px";
      },
      hide() { tip.hidden = true; },
    };
  }

  function css(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  return { $, $$, el, bn, pct, mult, edgarLink, pageChip, toast, copyText, shareX, pageUrl, initGlossary, initTheme, chartTip, css, EDGAR_DOC, EDGAR_INDEX };
})();
