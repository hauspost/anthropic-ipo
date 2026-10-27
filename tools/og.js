// Render tools/og.html to dist/og.png (1200×630) for Open Graph / X cards.
// Usage: node tools/og.js   (needs Playwright; the cloud image ships with it)
const path = require("path");
const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.goto("file://" + path.resolve(__dirname, "og.html"), { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.resolve(__dirname, "../dist/og.png") });
  await browser.close();
  console.log("dist/og.png written");
})();
