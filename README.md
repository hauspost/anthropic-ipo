# Anthropic S-1, Annotated

An independent, interactive reading of Anthropic, PBC's Form S-1 (filed with the SEC on October 26, 2026).
It covers the growth, the unit economics, the $80.7B paper loss, the roughly trillion-dollar compute bill, the
circular financing, who controls the company, the founders' letter, a reverse-valuation tool, all 88 risk
factors, nine debates argued from both sides, an expert map, and how six confidential drafts changed.
Every figure links to its printed page in the filing.

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
| `research/s1/` | The S-1 converted to text page by page, plus the printed-page map used for checking |
| `tools/` | Build, data-preparation, verification and social-card scripts |
| `docs/PLAN.md` | Project plan: v1 before research, v2 after |

## Build

```sh
python3 tools/prepare_data.py   # research/*.json  -> data/risks.json, experts.json, glossary.json
python3 tools/content.py        # editorial content -> data/content.json
python3 tools/build.py          # src/ + data/      -> dist/index.html, dist/artifact.html
python3 tools/verify.py         # checks every quoted passage against its cited S-1 page
node tools/og.js                # dist/og.png (needs Playwright)
```

No package install is needed. The page loads D3 7.9.0 from cdnjs and fonts from Google Fonts.

## Deploy

The repository includes a GitHub Pages workflow (`.github/workflows/pages.yml`) that publishes `dist/` on every
push to `main`. Enable it under **Settings → Pages → Source: GitHub Actions**. The Open Graph image URL in
`tools/build.py` (`SITE_URL`) assumes `https://hauspost.github.io/anthropic-ipo/`; change it if you host
elsewhere, rebuild, and X will show the card when the link is posted.

## Updating when the filing is amended

The S-1 will be amended before pricing to fill in the price range, share counts and commitment totals. To update:
download the new filing from EDGAR, rerun the text conversion into `research/s1/`, update `data/fin.json`,
`data/compute.json` and `tools/content.py` where numbers changed, then rebuild and rerun `tools/verify.py`.
