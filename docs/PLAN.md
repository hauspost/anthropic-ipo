# ANT S-1 Explorer — Project Plan

_v1 (initial, pre-research) — written 2026-10-26, the day Anthropic, PBC publicly filed its Form S-1._
_v2 (revised after research) is appended below once Phase 1 completes._

## 1. Goal

An independent, interactive website that lets a smart non-specialist (business degree, fluent in AI scaling
economics, not a financial analyst) understand what Anthropic disclosed in its S-1, how to read it, and what the
fights are about — while being rigorous enough that finance and AI experts share it on X.

Success looks like:
- A reader can explain the five or six numbers that matter after ~5 minutes of scrolling.
- Every number traces to a printed page in the S-1 (or a named outside source) in one click.
- Each controversy is shown from both sides, with the filing's own words placed next to the critics' claims.
- Individual charts and findings work as standalone, screenshot-able, linkable cards (the unit of virality on X).
- It never pretends to be Anthropic and it never gives investment advice.

## 2. Unknown unknowns, made explicit

| Question | Initial answer |
|---|---|
| Has it actually been filed? | Yes. S-1 filed 2026-10-26 on EDGAR (CIK 2130357, accession 0001628280-26-067168), after a confidential DRS on 2026-06-01 and five DRS/A amendments. ~421 pages + 30 exhibits. Price range and share counts are still blank. |
| Primary source | Pull straight from SEC EDGAR (HTML), convert to page-indexed text, cite **printed** page numbers. Exhibits: charter, LTBT agreement, material contracts. |
| Secondary sources | Wire and newspaper reporting (Reuters, WSJ, Bloomberg, FT, CNBC, The Information), IPO specialists (Renaissance Capital), expert newsletters, verified X threads. |
| Whose analysis to emulate (finance) | **Aswath Damodaran** (narrative-and-numbers valuation, "what do you have to believe"), **Matt Levine** (plain-English explanation of odd structures), **Jay Ritter** (IPO mechanics, lock-ups, first-day pops), **short-seller forensic reading** in the Chanos tradition (follow the cash, the commitments, the footnotes), **credit-analyst lens** (can obligations be covered?), **sell-side bull/base/bear framing**. |
| Whose analysis to emulate (AI) | **SemiAnalysis / Dylan Patel** (compute cost and capacity), **Epoch AI** (compute trends, price declines), **Ben Thompson** (strategy, distribution, partners), **Ed Zitron / Gary Marcus** (the bear case on AI unit economics), **Zvi Mowshowitz** and AI-governance voices on the LTBT. |
| Whose design to emulate | **NYT Graphics / The Upshot** (annotated charts, "you draw it"), **FT Visual & Data** (John Burn-Murdoch: one clear message per chart), **Bloomberg Graphics**, **The Pudding** (scrollytelling essays), **Bret Victor / Nicky Case** (explorable explanations: let the reader move the assumption), **Distill.pub** (hover-citations, footnotes), **Tufte** (data-ink, small multiples), **Our World in Data** (sourcing transparency, downloadable data). |
| Tools | No-build static site: semantic HTML + CSS custom properties + vanilla JS + D3 v7 (pinned via cdnjs). Loads instantly, deploys anywhere (GitHub Pages / Vercel / Netlify) and as a claude.ai Artifact. Playwright for QA screenshots and to render the social card (OG image). |
| Jargon problem | Every finance term gets an inline hover definition (glossary drawn from the S-1's own "Select Defined Terms" + plain-English rewrite). A "Plain English" voice throughout; numbers always paired with a comparison a layperson can feel. |
| Virality mechanics | Strong headline numbers above the fold; each chart has a deep link (#anchor), a "copy link" and "share on X" button with prefilled text; OG/Twitter card image; mobile-first layout (most X traffic is mobile); a quiz/"guess the number" hook. |
| Legal/ethics | Independent analysis, not affiliated with Anthropic or the underwriters, not investment advice; quote-sized excerpts only; no Anthropic logo or brand styling. |

## 3. Scope (v1)

In scope: the S-1 as filed 2026-10-26 (and differences vs. leaked drafts where reported), the public debate
around it, and context needed to judge it (comparables, AI capex, OpenAI).
Out of scope: price targets / buy-sell opinions, live market data (no price exists yet), full model of the company.

## 4. Information architecture (initial)

1. **Hero** — "The most consequential IPO filing in AI, read for you." Five headline numbers, each linked to its page.
2. **The S-1 in 90 seconds** — what an S-1 is, what's blank, timeline to listing.
3. **Growth** — revenue trajectory (annual, interim, quarterly if disclosed), customer cohorts.
4. **Where the money goes** — Sankey/flow of revenue → compute → people → loss.
5. **The $80.7B loss, explained** — waterfall from operating loss to net loss; "cash vs. accounting" toggle.
6. **The compute mountain** — commitments by year vs. revenue; interactive coverage simulator ("can they pay?").
7. **Follow the money (circularity)** — network of investors who are also suppliers and channels.
8. **Who controls Anthropic** — voting power vs. economic ownership by class (A/N/T/F/E), LTBT explained.
9. **Valuation lab** — reverse-DCF: what you must believe for $0.5T / $1T / $2T.
10. **Risk Factor Explorer** — every risk factor, filterable; the ones no prospectus has had before.
11. **Controversy court** — each fight: claim, filing's words, bull, bear, our read.
12. **Expert map** — who says what (bull ↔ bear × finance ↔ AI), with links.
13. **Lock-up calendar & IPO mechanics.**
14. **Glossary, methodology, sources.**

## 5. Phases

0. Plan (this document).
1. Research, in parallel: (a) S-1 extraction — financials, risk factors, governance/cap table/lock-ups, business;
   (b) outside world — news timeline, expert commentary, controversies, comparables/context data.
2. Revise plan: cut, merge, re-rank sections by what the research says is genuinely interesting.
3. Build: data layer (one JSON with citations) → layout and typography → charts → interactives → share layer.
4. QA: fact-check every number against the text, Playwright screenshots (desktop / mobile / dark), accessibility
   pass, performance; publish and push.

---

# v2 — revised after the research phase (2026-10-26, evening)

## What the research changed

1. **The filing is richer and stranger than the leaks suggested.** The public S-1 adds an 8-page founders' letter
   (image-only, so most text scrapers will miss it), a quarter-by-quarter revenue-vs-compute chart, Q2 2026 GAAP
   operating *profit* ($1.0B, 8% margin), and dozens of AI-safety disclosures that have never appeared in a
   prospectus (models breaking into real systems during a misconfigured evaluation, export restrictions that took two
   models offline worldwide, an FTC civil investigative demand, the Department of War supply-chain-risk ruling).
2. **The headline compute number is blank, but it can be added up.** The S-1 leaves "aggregate committed spend of
   more than $____" blank. Its own footnotes give: $265.6B purchase commitments + $321.4B leases not yet commenced
   (June 30) + ~$266B signed after June 30, i.e. **≈$855B of signed minimums**, plus $145–170B the company estimates
   but excludes. That reconstruction, shown transparently, is the single most shareable original finding.
3. **The drafts are public too.** Six confidential drafts (June–October) were released with the S-1. The post-June-30
   commitments line grew from ~$98B (Sept 4 draft) to ~$154B (Oct 1) to ~$245B (today): the bill grew during SEC review.
4. **Circularity is documented, not alleged.** Amazon's next $15B unlocks in $5B steps as Amazon *delivers compute*;
   Google's draws are sized to TPU capacity delivered; Broadcom leases ~$161B of TPU hardware and offers a $42B
   facility that exists only to lend Anthropic the rent (9% PIK, converts to stock at a 10% discount); AMD sells >$20B
   of GPUs and buys up to $5B of stock as they're deployed. Cloud marketplaces carry 48% of revenue.
5. **Governance is genuinely novel.** One Class F share = 50.1% of the stockholder vote forever (it re-scales), an
   unfunded trust elects 4 of 7 directors, employees get a non-economic vote, the strategic partners are non-voting
   and therefore absent from the related-party and 5%-holder tables. A 5% "public benefit" equity fund plus up to 2%
   more per sustained 50% stock rise (a reverse performance fee).

## Revised information architecture

| # | Section | Job | Key interactive |
|---|---|---|---|
| 0 | Hero | Thesis + six numbers that matter, each linked to its page | Red-herring legend; blanks rendered as blanks |
| 1 | The short version | Seven findings a reader should leave with | Jump links; share buttons |
| 2 | Growth | $0.4B → $11.6B a quarter; ≥$100K customers 20 → 11,900 | Quarterly chart; "guess Q2 revenue" quiz |
| 3 | Unit economics | Revenue per $ of compute 0.40× → 2.08×; margins | Two aligned panels (no dual axis); GAAP vs adjusted toggle |
| 4 | The $80.7B loss | Why net loss ≠ business loss | Waterfall: operating result → fair-value charges → net loss |
| 5 | The compute bill | ~$855B signed + ~$150B estimated; who it's owed to | Ladder chart; partner bars by firmness; drafts chart; "can they pay?" simulator |
| 6 | The money goes round | Who is investor, supplier, lender, channel and customer at once | Interactive partner map with money-in vs money-out |
| 7 | Who controls Anthropic | Votes vs economics; LTBT; sunsets | Control diagram; "what happens if…" scenarios |
| 8 | The founders' letter, annotated | The most quotable pages, with margin notes | Filing slips + notes |
| 9 | Fill in the blank (valuation) | What you must believe at $0.5T–$3T | Reverse-DCF sliders; IPO-size and multiple comparisons |
| 10 | Risk factor explorer | Every risk factor, the unprecedented ones flagged | Search + category filters |
| 11 | Controversy court | 9 fights, both sides, the filing's own words, our read | Case switcher with confidence meter |
| 12 | Expert map | Who argues what | Filterable cards (bull / bear / mixed × finance / AI) |
| 13 | Drafts, timeline and lock-ups | How the story changed; when shares unlock | Timeline; lock-up staircase chart |
| 14 | Glossary, method, sources | Trust layer | Hover definitions sitewide |

## Production decisions

- Single self-contained HTML (inlined CSS/JS/data, D3 7.9.0 from cdnjs, Google Fonts) so it works as a claude.ai
  Artifact and on any static host. Build: `python3 tools/build.py` → `dist/index.html` + `dist/artifact.html`.
- Type: Archivo (our voice; expanded widths for headlines, condensed for numbers), Gelasio (the filing's voice — it is
  metrically compatible with Georgia, the face the S-1 is set in), IBM Plex Mono (citations, axes).
- Color: cool paper neutrals, "red-herring" red reserved for annotations; chart series from a CVD-validated palette.
- Every figure: hover/focus tooltip, table view, deep link, share-on-X text, page citation.
- Every claim from outside the filing names its source and date; every derived number shows its arithmetic.

## Status (end of day one)

- Built and published: `dist/index.html` (static hosting) and a private claude.ai Artifact.
- QA: 99 quoted passages machine-checked against their cited pages (`tools/verify.py`); desktop and phone
  layouts reviewed in light and dark themes; no console errors.
- Open items: expected S-1/A with the price range, share counts and commitment totals (rerun the pipeline);
  Damodaran's promised intrinsic valuation and other post-filing commentary; Amazon and Alphabet Q3 results
  (Oct 28–29) showing their latest gains on Anthropic stakes.
