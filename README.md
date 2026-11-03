# Anthropic S-1, Annotated

An independent, interactive reading of Anthropic, PBC's Form S-1 (filed with the SEC on October 26, 2026),
updated for Amendment No. 1 (S-1/A, filed November 2, 2026). It covers the growth, the unit economics, the
$104B paper loss, the $895.4B compute bill, the circular financing, who controls the company, the founders'
letter, a reverse-valuation tool, all 88 risk factors, nine debates argued from both sides, an expert map, and
how six confidential drafts, the S-1 and its amendment changed. Every figure links to its printed page in the
amended filing; a few chips marked "orig." link to the original S-1.

**Open it:** `dist/index.html` is a single self-contained file. Open it in a browser or host it anywhere.

Not investment advice. Not affiliated with Anthropic or its underwriters.

## Repository layout

| Path | What it is |
|---|---|
| `dist/index.html` | The finished site (full HTML document with Open Graph / X card tags) |
| `dist/artifact.html` | The same page as a fragment for claude.ai Artifacts |
| `dist/og.png` | 1200×630 social card |
| `src/` | Page markup, styles and scripts (`page.html`, `styles.css`, `util.js`, `charts.js`, `app.js`) |
| `data/` | The JSON the page ships: financials, compute deals, risks, experts, glossary, editorial content |
| `research/` | Page-cited extracts of the S-1 and of outside coverage that the data was built from |
| `research/s1/` | The original S-1 converted to text page by page, plus its printed-page map |
| `research/s1a/` | Amendment No. 1 converted the same way, plus the risk-factor and expert updates applied on top of the S-1 research |
| `tools/` | Build, data-preparation, verification and social-card scripts |
| `docs/PLAN.md` | Project plan: v1 before research, v2 after |

## Build

```sh
python3 tools/prepare_data.py   # research/*.json  -> data/risks.json, experts.json, glossary.json
python3 tools/content.py        # editorial content -> data/content.json
python3 tools/build.py          # src/ + data/      -> dist/index.html, dist/artifact.html
python3 tools/verify.py         # checks quoted passages, snippets and headline numbers against the cited S-1/A page
node tools/og.js                # dist/og.png (needs Playwright)
node tools/test_nav.js [url]    # navigation tests at 7 screen widths (needs Playwright and a served dist/)
```

No package install is needed. The page loads D3 7.9.0 from cdnjs and fonts from Google Fonts.

## Deploy

The repository includes a GitHub Pages workflow (`.github/workflows/pages.yml`) that publishes `dist/` on every
push to `main` (or on demand from the Actions tab). Enable it under **Settings → Pages → Source: GitHub Actions**.
On a free GitHub plan Pages requires a public repository; on Pro a private repository can publish, but the site
itself is always public. The Open Graph image URL in
`tools/build.py` (`SITE_URL`) assumes `https://hauspost.github.io/anthropic-ipo/`; change it if you host
elsewhere, rebuild, and X will show the card when the link is posted.

## Updating when the filing is amended

Amendment No. 1 was handled like this, and the next amendment (expected to add the price range) can follow the
same steps:

1. Download the new filing from EDGAR and convert it to page-indexed text (`research/s1a/` shows the format:
   a list of page texts plus a 0-based index → printed-page map).
2. Diff it against the previous version and write the changes up (`research/amendment1_changes.md`).
3. Map old printed pages to new ones by text overlap, then re-point the page chips. Pages shift unevenly
   (0 to +5 for Amendment No. 1), so match on text, not a fixed offset.
4. Update `data/fin.json`, `data/compute.json`, `tools/content.py`, the overlays in `research/s1a/` and the
   prose in `src/page.html`; then rebuild, run `tools/verify.py`, `tools/og.js` and `tools/test_nav.js`.
