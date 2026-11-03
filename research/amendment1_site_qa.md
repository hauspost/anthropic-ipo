# Pre-publication fact-check: S-1/A site update (rendered page, 2026-11-03)

Reviewed the rendered page at http://localhost:8765/index.html, extracted with Playwright (`review/extract.js` produced `page_text.txt`, `S1.json`, `chips.json` and `svgs.json`). I also checked the content that only shows on interaction: collapsed risk cards, every debate case, tooltip and table data, the expert arguments and the simulator code.
Primary sources: `research/s1a/s1a_pages.json` plus its pagemap (amendment, printed pages), and `research/s1/` (original S-1). Search helper: `review/f.py`. I rebuilt the simulator in `review/sim.py`. Amazon figures come from the saved Amazon 10-Q (`scratchpad/dl_amzn/amzn10q.htm`). The repo was not modified. Note: a first run of the extractor briefly wrote its four output files into the repo root. I moved them to the scratchpad straight away, and `git status` is clean.

Page numbers are printed pages of the **amendment** unless marked "orig.".

---

## Ranked problems

### 1. Economics: "no gross margin to quote" is false (P1, factual)
- **Where:** Unit economics, first prose paragraph (`src/page.html`).
- **Current:** "The S-1 does not split costs into "cost of revenue" and operating expenses, so there is no gross margin to quote. Instead it reports one big line, compute and infrastructure, which covers both training new models and serving customers [p.159]."
- **Why wrong:** Note 8 to the financial statements gives operating expenses by function (**p. F-39**). For the nine months to Sept 30, 2026, cost of revenue was $4,812M on revenue of $33,242M, a gross margin of about **85.5%** (FY2025: $2,773M on $4,585M, about 39.5%). Research and development was $19,240M. MD&A points readers to this table (p. 146–147: "See Note 8 … for a functional presentation of our operating expenses, including cost of revenue … substantially all of the cost of revenue consists of compute and infrastructure expenses associated with customer-serving workloads"). The original S-1 had the same table (orig. F-39). The site also contradicts itself: the loss debate cites Jamin Ball's "85% gross margin for H1 2026", and the expert cards cite Tunguz's "~40% gross margin" and Rolfes's "~44%". The chip is also wrong. p. 159 is the Adjusted Net Income reconciliation; the definition of compute expense is on p. 146.
- **Replace with:** "The income statement doesn't split costs into "cost of revenue" and operating expenses. It reports one big line, compute and infrastructure, which covers research, model development, serving customers and Anthropic's own use of Claude [p.146]. A note to the accounts does regroup costs by function [p.F-39]. Cost of revenue, mostly the compute that serves customers, was $4.8 billion in the first nine months of 2026, an implied gross margin of about 85%. Most compute, though, is booked as research and development ($19.2 billion), and that is what produces the models customers pay for. So the chart below sets the whole compute line against revenue, quarter by quarter."

### 2. Risk-factor cards still describe the original S-1 (P2, stale; visible when a card is expanded)
The fix belongs in `research/s1a/risk_updates.json`, which feeds `data/risks.json`. These four entries were not updated:
- **rf-a-003** ("If our actual compute requirements differ materially…", cited p. 32).
  - **Current:** "Aggregate committed spend of "more than $[blank]" as of and subsequent to Sept. 30, 2026 (amount blank in this filing), …; $[blank] expected before Dec. 31, 2030; remainder 2031–2045; $[blank] due in next 12 months".
  - **Why wrong:** the amendment fills in all three amounts on p. 33: "approximately $895.4 billion … approximately $447.5 billion … Approximately $69.8 billion".
  - **Replace with:** "Aggregate committed spend of approximately $895.4 billion as of and subsequent to Sept. 30, 2026, substantially all compute/infrastructure; ~$447.5 billion expected before Dec. 31, 2030; substantially all the rest 2031–2045; ~$69.8 billion due in the 12 months after Sept. 30, 2026 (p. 33)". Consider moving the page to 33.
- **rf-b-005** (growth management, p. 64).
  - **Current:** "revenue $197M in Q4 2024 (Q3 2026 figure left blank in this draft)".
  - **Why wrong:** p. 64 now reads "$197 million … to $17.0 billion for the three months ended September 30, 2026".
  - **Replace with:** "revenue $197M in Q4 2024 to $17.0B in Q3 2026".
- **rf-b-010** (government, p. 73).
  - **Current:** "Government agencies are only about 1% of revenue …" and "Government contracts ~1% of revenue in each period".
  - **Why wrong:** p. 72 now says "less than 2% of our revenue in each of the periods presented". This also contradicts the site's own Washington debate ("less than 2% … (p. 72)").
  - **Replace with:** "Government agency contracts are less than 2% of revenue …" and "Government agency contracts <2% of revenue in each period (p. 72)".
- **rf-a-019** (indebtedness, p. 59).
  - **Current:** "As of June 30, 2026 Anthropic owed $6.2 billion …" and "$6.2 billion total indebtedness at June 30, 2026".
  - **Why wrong:** p. 59 now says "As of September 30, 2026, our total indebtedness was $6.2 billion".
  - **Replace with:** "September 30, 2026" in both places.

### 3. Expert map: "The five strongest bull/bear arguments" still use H1 and leak figures, undated (P2, stale)
Source: `data/experts.json` `bull_args` and `bear_args`, built from `research/expert_commentary.json`.
- **bull_args[0]**
  - **Current:** "Revenue went from ~$41M to $16.3B a half-year in about three years. H1-2026 operating loss narrowed to $693M, Q2 showed an operating profit, operating cash flow turned positive (+$3.9B) and adjusted operating income was profitable."
  - **Why wrong:** Q3 is now reported. The nine-month operating loss was $1.26B and Q3 had a loss of $567M (p. 138, F-7). Operating cash flow was +$6.6B for the nine months (p. 172). Adjusted operating income was $4.1B (p. 138).
  - **Replace with:** "Revenue went from $41M in 2023 to $33.2B in the first nine months of 2026. Q2 was the first quarter with an operating profit ($974M); Q3 slipped to a $567M loss after a $2.0B non-cash donation charge, for a nine-month operating loss of $1.3B. Operating cash flow was +$6.6B over nine months and adjusted operating income $4.1B."
- **bull_args[1]**
  - **Current:** "$72.4B of the $80.7B H1 net loss …"
  - **Replace with:** "$94.3B of the $104.0B nine-month net loss …" (F-7).
- **bull_args[3]**
  - **Current:** "an undrawn $15B revolver"
  - **Replace with:** "$14.8B available on its revolver" (p. 139).
- **bear_args[1]**
  - **Current:** "Hundreds of billions in mostly non-cancelable compute obligations ($518B-$637B depending on definition; ~$410B non-cancelable per the leak)".
  - **Why wrong:** the filed total now exists.
  - **Replace with:** "$895.4B of compute commitments as filed in the amendment, of which $213.8B is terminable or conditional (pre-amendment estimates ran $518B–$637B)" (pp. 6, 173).
- **bear_args[3]**
  - **Current:** "The top two customers are ~20% of revenue."
  - **Why wrong:** the amendment says "no single customer represented more than 10% of our revenue for the nine months ended September 30, 2026; our top five customers represented approximately 25%" (p. 57). F-15 shows no customer at 10% or more in 9M 2026. The "top two ≈20%" figure was H1, from the Oct 9 draft.
  - **Replace with:** "The top five customers were about 25% of nine-month 2026 revenue, though none exceeded 10% (p. 57)."

### 4. Page chips that do not contain the cited fact (P1, citations)
| Where | Current chip | Fact is actually on | Fix |
|---|---|---|---|
| Growth, caveat 2 ("5–7% of revenue … broke the rules") | p.147 | **p. 146** ("approximately 5% to 7% of our revenue for the nine months"); p. 147 does not contain it | `data-pg="146"` |
| Revenue debate, critic 3 | "S-1/A p. 147; FT via Fortune" | **p. 146** | "S-1/A p. 146; FT via Fortune" |
| Circle, "Four details" bullet 2 (Google's $10B option at the IPO price) | p.172 (cash flows) | **p. 171** (also the p. 168 table footnote) | `data-pg="171"` |
| Economics, compute "covers both training … and serving customers" | p.159 | **p. 146** (definition); F-39 | see item 1 |
| Growth, "about 20 at the end of 2023" | p.136 | p. 136 has the >11,900 figure only; "approximately 20 as of December 31, 2023" is on **p. 144** | add a p.144 chip, or move the chip |
| Customers chart foot: "Source: S-1/A p. 136 and the MD&A chart" | — | The **Jun 2026 ">6,000" point is not in the amendment** (not in the text, and not in the MD&A chart, which shows only Dec 23/24/25 and Sep 26). It is from orig. pp. 148, 158 | "Sources: S-1/A pp. 136, 144, 161 and the MD&A chart; June 2026 point from the original S-1 (orig. p. 148)" |
| "Five founders leave" scenario | p.256 | 90-day trigger, 450-day transition and Class F/E cancellation are on **pp. 251 and 255** (p. 256 has only the successor/10-year detail) | `"page": "255"` |
| Ledger "Cash and short-term investments $131.8B" | p.139 (snippet "$146.6 billion of liquidity") | p. 139 gives the components ($95.6B + $36.3B, which rounds to $131.9B); **$131,845M** is on **pp. 25 and 128** | page "128", or keep p.139 and accept the rounding |
| Partners → Microsoft "'significant equity investments'" | pages "74, 174" | phrase is on **p. 75** | "75, 174" |

### 5. Timeline: Series H entry quotes the stale H1 charge (P2)
- **Where:** Timeline, "May 28, 2026" (`content.py` TIMELINE[8]).
- **Current:** "The markup that drives the $72.4B fair-value charge."
- **Why wrong:** $72.4B was the H1 total, Q1 plus Q2 (12,791 + 59,597, from p. 160). The nine-month figure is $94.3B (F-7), and the Series H quarter alone was $59.6B (p. 160).
- **Replace with:** "The markup behind most of 2026's $94.3B fair-value charge ($59.6B of it in Q2)."

### 6. Compute, "How close we got": gap explanation has a wrong-direction item and misses the biggest one (P3, derived)
- **Current:** "The gap mixes deals signed or enlarged since (Google's minimum rose by $6.8 billion), payments made in the third quarter, and rounding."
- **Why wrong:**
  - Q3 payments **reduce** the Sept-30 balances, so they cannot help explain why the filed total is *higher*.
  - The $855B left out short-term minimums because the original S-1 left them blank: orig. p. 170 reads "Minimum payments under such contracts were approximately $ as of ." The amendment counts **$17.4B** of them (p. 174), which is about 43% of the $40B gap on its own.
- **Replace with:** "The filing doesn't bridge the two. Pushing the total up: deals signed or enlarged since (Google's minimum rose by $6.8 billion) and $17.4 billion of short-term minimums the original S-1 left blank. Pulling it down: payments made in the third quarter. The rest is timing and rounding."

### 7. "Broadcom and AMD … put money in" contradicts the filing and the site's own chart (P1/P3)
- **Where:** Seven things #5 ("Amazon, Google, Broadcom and AMD all put money in"). Circle lede ("Amazon, Google, Broadcom and AMD each put money into Anthropic, and each is owed far more …").
- **Why wrong:**
  - Broadcom's $42B note facility is undrawn ("$ —" principal outstanding, p. 168), and Anthropic "may issue, if needed" (p. 59).
  - AMD's up-to-$5.0B stock purchase starts in 2027 on delivery milestones (p. 166).
  - The site's own butterfly chart shows $0 invested for both, and AMD is not owed any fixed amount (">$20B (est.)", outside the total).
- **Replace with:**
  - Seven things: "Amazon and Google have invested billions; Broadcom offers a $42 billion loan facility to pay its own rent, and AMD has agreed to buy up to $5 billion of stock from 2027. Several of these unlock only as the partner delivers its own chips or cloud capacity."
  - Circle lede: "Amazon and Google have put money into Anthropic, and Broadcom and AMD have agreed to lend or invest. Each sells it far more in chips and cloud capacity."

### 8. Named-deals chart shades Lambda as "Minimum, non-cancelable" (P1, chart label)
- **Where:** Compute, "The named compute deals" (`data/compute.json` lambda, `amount_type: "fixed"`).
- **Why wrong:** p. 175 says "fees accruing only as capacity is delivered to and accepted by us". Of the $41.3B, "approximately $34.9 billion" can be terminated by "either party … if Lambda does not timely secure the facility lease". The deal's own tooltip says so, so the shading contradicts it.
- **Fix:** set `amount_type` to `"up_to"` (the "Up to or cancelable" shade), with basis "approximately; $34.9B terminable if Lambda can't secure its site".

### 9. Zvi quote linked to a post that predates it (P4, attribution)
- **Where:** "Can growth last?" debate, critic 2: "“Anthropic revenue hit a highly disappointing $16.8 billion in the third quarter” — Zvi Mowshowitz, 2026-10". It links to `thezvi.substack.com/p/ai-188-gemini-dot-argon` (Oct 1).
- **Why wrong:** the $16.8B figure was first reported after the Oct 14 investor day. `research/expert_commentary.md` puts this quote in "AI #190: Scion of the Times" (2026-10-15). The `ex("zvi", text=…)` helper reuses the Oct 1 card's URL. The figure is the press-reported number; the filing later showed $16.96B (p. 160).
- **Fix:** in `content.py`, replace the `ex(...)` call with `{"text": "“Anthropic revenue hit a highly disappointing $16.8 billion in the third quarter” (the press-reported figure; the filing later showed $16.96B)", "who": "Zvi Mowshowitz, 2026-10", "url": "https://thezvi.substack.com/p/ai-190-scion-of-the-times"}`. The Zvi expert card (dated 2026-10-01) mixes the two posts in the same way.

### 10. Dan Ives's affiliation on the Nov 3 card (P4)
- **Where:** Expert map card "Dan Ives — Wedbush Securities (tech analyst)", 2026-11-03, Bloomberg via Stocktwits.
- **Why wrong:** `research/amendment_commentary.md` gives "Dan Ives (Yorkville; formerly Wedbush)". The sources disagree ("Yorkville Advisors (Stocktwits), Yorkville Ives & Co. (Bloomberg listing) or Wedbush (older coverage)"), but the Nov 3 source itself says Yorkville.
- **Replace with:** affiliation "Yorkville (formerly Wedbush)". In bull_args[4], "Dan Ives (Wedbush)" can stay only if it is dated to his Sept 29 Wedbush-era quote.

### 11. Tunguz card misdescribes his $637B (P4)
- **Current:** "Bear case: $637B of commitments ($265.6B fixed/minimum at June 30 plus $245B since)…"
- **Why wrong:** 265.6 + 245 = 510.6, not 637. `research/controversies.md` shows that $637B is his **sum of the seven named deals** in the S-1: 161.2 + 120.5 + 114.5 + 110.0 + 44.9 + 44.6 + 41.3 = 637.0.
- **Replace with:** "Bear case: $637B of commitments (his sum of the seven named deals in the S-1), two-thirds non-cancelable, …"

### 12. S&P 500 rule attributed to the Motley Fool (P4)
- **Where:** Valuation, "Who can buy": "The S&P 500 requires positive GAAP earnings over the latest four quarters combined and in the latest quarter, plus 12 months of trading … (Motley Fool, Sept 23)".
- **Why wrong:** the linked Fool piece is about Nasdaq-100 fast entry. The precise S&P wording comes from our advisor's summary of S&P DJI methodology, which was never fetched (ETF Stream returned 403, per `amendment1_advisor_review.md` B23).
- **Replace with:** "… which Anthropic's losses rule out for now (S&P Dow Jones Indices methodology; on Nasdaq fast entry, Motley Fool, Sept 23)". Or soften to "S&P 500 rules require positive GAAP earnings and a seasoning period (ETF Stream)".

### 13. "What the amendment changed": "the donation charge explains the swing" contradicts the company's attribution (P5, framing)
- **Current:** "A $2.0 billion non-cash donation-matching charge explains the swing. On the company's adjusted measure, margin fell from 19% to 15% because of $5.0 billion of pricier short-term compute."
- **Why:** the arithmetic is right. Ex-donation Q3 operating income was −567 + 1,960 = $1,393M, against Q2's $974M (p. 163). But the company says the loss was "primarily driven by $5.0 billion of compute under short-term commitments … and $2.0 billion of non-cash charges" (p. 138), and Seven things #2 says "The real squeeze was compute". A hostile reader will set the two side by side.
- **Replace with:** "The $2.0 billion non-cash donation-matching charge is bigger than the whole swing: without it, Q3 earned about $1.4 billion, roughly Q2's 8% margin. The company also blames $5.0 billion of pricier short-term compute, and on its adjusted measure margin fell from 19% to 15%."

### 14. Compute debate "Our read": the $213.8B does not "buy time" (P5, overstatement)
- **Current:** "If growth slows, the $131.8B of cash and short-term investments and the $213.8B of cancelable or conditional deals buy time. The rest is owed."
- **Why:** only "$4.3 billion" of the $69.8B due in the next 12 months is conditional or terminable (p. 174). The conditions are mostly the counterparty's ("ability to secure financing, facilities, or regulatory approvals", p. 173), so they are not options Anthropic can use if its own growth slows.
- **Replace with:** "If growth slows, the $131.8B of cash and short-term investments buys time. The $213.8B of terminable or conditional deals helps less than it sounds: only $4.3B of the next 12 months' $69.8B is of that kind, and most conditions sit with suppliers, not with Anthropic. The rest is owed."

### 15. Glossary "pay-for-intelligence / consumption" (P2)
- **Current:** "It made up about 80% of revenue in H1 2026 (F-26)."
- **Replace with:** "It made up about 79% of revenue in the first nine months of 2026 (F-26)." F-26 gives $26,306M of $33,242M. Source: `research/s1_glossary.json`.

### 16. Partners → Amazon detail (P2)
- **Current:** "$6.2B of notes outstanding at June 30 convert into non-voting Class N shares at the IPO…"
- **Replace with:** "at September 30" (pp. 59, 173).

### 17. Rounds chart annotation "IPO talk $1.5–2T" (P2, minor)
- **Where:** `src/app.js` line ~916; data source labelled "WSJ, FT, CNBC" (Oct 26).
- **Why:** since the amendment the reported talk is about $1.5T (Reuters, WSJ: $1.5–1.6T). $2T was the earlier figure. The timeline and the valuation debate already say so.
- **Replace with:** "IPO talk: ~$2T earlier, ~$1.5T now".

### 18. Smaller wording and precision issues (P5)
- **"$150–175 billion for TPU and AMD capacity"** (compute lede and prose, ladder label, simulator hint). The filing's footnote (p. 174) covers "certain other compute and infrastructure arrangements that do not specify a fixed dollar commitment" and doesn't itemize. The site's own deals chart shows TPU $125–150B plus AMD ">$20B", which comes to $145–170B+. Say "mainly additional TPU capacity and AMD systems".
- **Google minimum "raised in October"** (partner detail; the deals tooltip says "in the October amendments"). The filing says "amended between May and October 2026" (p. 174; orig. p. 170 had "between May and August"). Say "raised in an amendment made after the original S-1's August cutoff, by October".
- **"Almost half the money arrives through rivals' clouds"** (growth caveat 3; growth takeaway "almost half of it is collected by competitors"). The figure is 44% for the nine months. The implied Q3-only share is about 40%: (0.44 × 33,242 − 0.48 × 16,286) / 16,956. Consider "More than 40% of the money …".
- **"$69.8 billion … about a year of revenue at Q3's pace"** (Seven things #4, compute lede, compute debate read). The arithmetic is fine (Q3 × 4 = $67.8B), but readers will hear "all its revenue". Add, at least once: "about 1.8 times Q3's compute spending at an annual rate, against $131.8B of cash and short-term investments".
- **Growth prose:** "Q4 2025 grew 48%, and growth then jumped to 132% and 144% after Opus 4.5 launched at a lower price". Opus 4.5 launched in **November 2025**, inside Q4. The filing ties only the Q1 jump (48% to 132%) to it, among "several factors" (p. 199). Suggest: "…Q4 2025 grew 48%; after Opus 4.5 launched in November at a lower price, growth jumped to 132% in Q1 (the company cites several factors) and 144% in Q2".
- **Simulator description:** "short-term minimums within a year". The code puts $6.0B in Q4 2026 and $18.0B across calendar 2027, so about $4.5B falls after Sept 2027. The $69.8B anchor is still met: 13.23 + 0.75 × 75.47 = 69.8. Either say "within about a year" or move the 2027 short-term amount into the first nine months of 2027. A related clarity point: at 1.72x, "affordable" means Q3's cost structure, which was a −3% GAAP margin (+8% ex-donation), not a profit.
- **Compute debate defender** "Anthropic (filing, as reported) (as reported)". The label is duplicated, and the point is now in the filing itself (p. 31: "we have in the past sought quantities of compute from CSPs in excess of what those partners were willing to provide"). Cite "S-1/A p. 31".
- **Risk highlight "Suppliers on borrowed money."** The filing says "third-party financing or credit support" (p. 31), which is broader than borrowing. Use "Suppliers that need outside financing."

---

## What I checked and found correct
- **Q3 and nine-month figures** (p. 160, p. 163, F-7). All match: revenue $16,956M (+46.7% q/q, +1,127% y/y); compute $9,863M (58%); operating result −$567M and Q2 +$974M; adjusted $2,463M (15%) and Q2 19%; net loss −$23,291M; nine-month revenue $33.2B, operating loss −$1.26B, fair value −$94.3B, other −$10.4B, tax −$0.4B, net loss −$104.0B; FY2025 revenue $4.6B; every waterfall bar; every GAAP and adjusted margin bar from −249% to −3%; Q2 other expense $8.4B; interest $2.4B; SBC $1.07B; donation charge $1.96B; RSU $8.2B / $24.1B (p. 66).
- **Derived numbers:**
  - ex-donation Q3 +$1,393M (8.2%), against Q2's 8.4%;
  - "Compute costs rose $4.3 billion as revenue rose $5.4 billion" (4,305 / 5,401); no "80¢" claim remains on the page;
  - first-half short-term compute ≈ $1.5B (6.5 − 5.0; p. 151, p. 162), labelled as derived; the original S-1 gave no H1 figure, so nothing conflicts;
  - 22x (1,500 / 67.8) and 43x (1,500 / 35.28 = 42.5) multiples, with "22–30 times" covering $1.5–2T;
  - ≈$1.06T (895.4 + 162.5);
  - implied price $89, revenue needed in 2031 $364B, 40% a year; the "$490B at $2T" debate figure (485.9);
  - SpaceXAI $3.1B a month ≈ 31% of Q3 compute;
  - 52% (mechanical) growth before price cuts; 45-fold; 86 × $197M.
- **Simulator** (rebuilt in `review/sim.py`). The schedule matches the filing's anchors: table $320.0B as filed; $447.5B through 2030; Q4'26 + ¾ × 2027 = $69.8B. At the defaults (150%, 1.7x, estimates left out) it shows 2027 revenue $135B, a 56% compute share and no shortfall, as the readout says. The takeaway paragraph checks out:
  - 2027 contracted $75.5B, so about $130B of revenue at 1.72x, 2.4 times $54B;
  - cash covers the 2027–31 gap from 71% growth at 1.72x (69% at 1.7x), and from 91% (90%) with estimates;
  - 2028–30 contracted $109–127B, so "$110–130B" holds.
- **Compute components:** $313.8B / $6.2B (p. 173); $17.4B, $451.2B, $100.2B, $6.6B, $150–175B, $4.3B (p. 174); $213.8B (p. 173); $895.4B, $447.5B, $69.8B (pp. 6, 33, 139, 174); named deals and terms (pp. 174–176), including Microsoft to June 2033 (orig.: May 2033).
- **Cash, liquidity and customer metrics:** cash $131.8B and liquidity $146.6B; >11,900 / >1,900 / ~250 customers, $24.5B = 74%; 79% / 21% (F-26); CSP 44% / 52% receivables / 11% in 2023 (p. 58); RPO $13.8B (F-26); top five ~25% (p. 57).
- **Amendment-specific claims:** retail brokers and "anticipates … a portion" (p. 330); Run-Rate Revenue still blank (p. 198); safety quotes and "new" status (pp. 29, 52, 188); the front-matter highlights page ($23.3B net loss, (3)%, >4x: `coverart9e.jpg`); 4.3x on the MD&A chart (`mda3e.jpg`).
- **Amazon 10-Q figures:** $62.8B of 9M preferred-stock markups, $140.3B AOCI gain, $39M of Q3 private upward adjustments, and "after $62.8B in the first half" (Q3 was about zero, so this is consistent).
- **Stale-statement sweep:** apart from the items above, "first half", "June 30", "Q2", "48%" and "$855B" appear only where labelled as the original S-1 or as our earlier estimate. The ledger, readouts and hints are updated ("Q3 2026 actual: 58%", $131.8B, $16.96B).

**Nothing found** in priority 3 beyond item 6 and the simulator-description nit in item 18. All other derived numbers and the simulator takeaway reproduce exactly.
