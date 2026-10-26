# Anthropic S-1: Controversy Explorer research (outside evidence)

As of **2026-10-26**, the day Anthropic, PBC publicly filed its Form S-1 (Nasdaq: ANT). This file covers the outside world's arguments and evidence; filing text is extracted separately.

**Conventions.** *[2nd-hand]* means the claim reached us via another outlet or a search summary, not a page read directly. Quotes appear only when seen verbatim (40 words or fewer). Number status tags: `primary` (read in a primary document), `filing-as-reported` (public S-1 figure as reported by the cited outlet), `draft-filing-reported` (confidential draft as reviewed by Reuters/WSJ, Sept-Oct), `company-to-investors`, `reported`, `derived` (analyst arithmetic).

**Limitations.** The web-search budget ran out mid-research. Safety-washing commentary from securities lawyers, CII/ISS/Glass Lewis statements, S&P/FTSE index treatment of the share classes, and Lucent/Nortel-style analogies specific to Anthropic were not found and may exist. Several 403/503 pages (CNBC, Axios, CBC, NPR) were seen only through search snippets; those items are marked secondhand. Model names (Fable 5, Mythos 5, Opus 5.5, Haiku 5.5) are as reported in sources.

Primary documents: [Public S-1](https://www.sec.gov/Archives/edgar/data/0002130357/000162828026067168/anthropicpbc-sx1.htm) | [DRS/A](https://www.sec.gov/Archives/edgar/data/0002130357/000213035726000009/filename1.htm) | [Amazon Q1 2026 10-Q](https://www.sec.gov/Archives/edgar/data/0001018724/000101872426000014/amzn-20260331.htm) | [Amazon Q2 2026 release](https://www.nasdaq.com/press-release/amazoncom-announces-second-quarter-results-2026-07-30)

## Contents
1. [Circular financing: investors who are also suppliers](#circular-financing)
2. [Compute commitments: $500B-$750B of take-or-pay obligations](#compute-commitments)
3. [The $42B and $80.7B 'losses': fair-value accounting vs. operating reality](#accounting-losses)
4. [Revenue quality: run-rate vs GAAP, gross vs net, concentration, price cuts](#revenue-quality)
5. [Governance: Founder LLC, Long-Term Benefit Trust, non-voting partners, PBC](#governance)
6. [Valuation: is $1.5-2 trillion justified?](#valuation)
7. [Safety and ethics disclosures: candor or 'safety-washing'?](#safety-disclosures)
8. [Government and politics: the Pentagon blacklist, export controls, 'regulatory capture', political money](#government-politics)
9. [Legal and IP: the $1.5B authors' settlement and the piracy suits that followed](#legal-ip)
10. [IPO mechanics and insiders: day-one selling, staggered lock-ups, index fast entry, timing](#ipo-mechanics)
11. [Added: revenue from rivals distilling Claude (5-7%)](#distillation-revenue)

<a id="circular-financing"></a>
## 1. Circular financing: investors who are also suppliers

**Framing:** Amazon, Google, Microsoft, NVIDIA, Broadcom and AMD put money into Anthropic, and Anthropic commits to spend far more on their chips and clouds. Is that real demand, or vendor financing that inflates everyone's numbers?

### Context and facts
- Amazon: $8B invested 2023-24; after March 31, 2026 it bought $5.0B more non-voting preferred, set up a financing facility 'not to exceed $20.0B' (available after a liquidity event), and holds an option to invest up to $5.0B more (Amazon 10-Q, primary). Press reports pair this with an Anthropic pledge of roughly $100B of AWS spend over a decade (secondhand).
- Google: $10B cash at a $350B valuation plus up to $30B tied to milestones (announced April 24, 2026), alongside ~5 GW of TPU capacity co-developed with Broadcom from 2027 (Engadget, LDS blog). Google's stake is reported at ~14% (NYT 2025 figure via Fortune).
- Microsoft and NVIDIA (Nov 18, 2025): up to $5B and up to $10B of investment respectively; Anthropic committed to buy $30B of Azure capacity and up to 1 GW (Microsoft blog via PureAI).
- Broadcom: up to $42B convertible-note financing to cover about a third of a $125.2B, five-year TPU lease; Anthropic expected to be Broadcom's largest chip-design customer in 2027 (Reuters via The Star, Oct 1, 2026).
- AMD: agreed to buy up to $5B of Anthropic stock and to supply compute expected to exceed $20B (Reuters, Sept 29 draft).
- NVIDIA-backed neoclouds: a $35B Lambda deal where NVIDIA holds the data-center lease (WSJ via Dealroom), after a separate $45B deal with another NVIDIA-backed provider (Dealroom, Sept 1, 2026).
- SpaceX is simultaneously a compute supplier (SpaceXAI, formerly xAI: up to $120.5B through 2029), the owner of Cursor (one of Anthropic's largest distribution customers), and a model competitor (Grok). The Cursor acquisition (reported $60B, completed Aug 14, 2026) comes from a single blog source and should be verified.
- Mirror image: as Anthropic's valuation rises, investors book gains. Amazon booked $16.8B (Q1 2026) and $53.4B (Q2 2026) of pre-tax non-operating gains 'primarily from our investments in Anthropic'. Alphabet booked $36.9B of equity-securities gains in Q1 2026 (mostly Anthropic, per Fortune) and $99B in Q2 2026 (Anthropic plus SpaceX).
- Historical analogy: no source found in this session explicitly draws a Lucent/Nortel comparison for Anthropic. Analogies actually in circulation: Cisco-style vendor financing (aggregator pieces), Enron (Burry about NVIDIA, via Global Finance), and early-2000s telecom (Andrew Odlyzko, via Global Finance).

### Critics' case
- **Robert Willens (tax & accounting consultant; Columbia Business School adjunct)** (2026-04-30): The mark-up accounting is required, but Alphabet and Amazon's investments and cloud deals help push up Anthropic's private valuation, which then lifts the value of their own stakes. Quote: "It's interesting that they're able to control or influence the value of one of their own assets" (via Fortune) [link](https://fortune.com/2026/04/30/google-amazon-ai-profits-anthropic-stake-bubble-earnings-2026/)
- **Robert Leitao (managing partner, Rothschild & Co)** (2026-10-01): The financing burden concentrates risk on two AI labs. Quote: "quite a concentrated bet right now on two companies being able to generate enough revenues" (via Reuters) [link](https://www.thestar.com.my/tech/tech-news/2026/10/01/exclusive-broadcom-to-lend-anthropic-up-to-42-billion-to-lease-its-chips-filing-says)
- **Jay Goldberg (analyst, Seaport Research)** (2026-10-01): Broadcom is copying NVIDIA by using its balance sheet to support chip sales. Quote: "Nvidia is putting in place a massive amount of its balance sheet, and Broadcom is having to follow suit" (via Reuters) [link](https://www.thestar.com.my/tech/tech-news/2026/10/01/exclusive-broadcom-to-lend-anthropic-up-to-42-billion-to-lease-its-chips-filing-says)
- **Steve Eisman (investor)** (2026-08) *[2nd-hand]*: OpenAI and Anthropic are the 'Achilles' heel' of the AI trade: by his figure, about 70% of AI-related revenue at the big hyperscalers. On air he said he could not confirm the statistic. *Note: Reported via TipRanks and ZeroHedge transcript; the 70% figure is unverified by Eisman himself.* [link](https://www.tipranks.com/news/the-achilles-heel-steve-eisman-warns-the-ai-boom-is-dangerously-dependent-on-just-two-firms)
- **Mark Moerdler (Bernstein)** (2026-04-27) *[2nd-hand]*: The equity-for-compute loop flatters near-term cloud growth in ways that may not reflect end-customer demand. *Note: Paraphrase reported by a blog; no direct quote seen.* [link](https://letsdatascience.com/blog/google-40-billion-anthropic-tpu-circular-deal)
- **Gregory Blotnick (research analyst)** (2026-02-17): Circular deals could let trouble at one firm cascade through the system. Quote: "No one knows the return on capex, and no one knows the profitability of this entire arms race." (via Global Finance) [link](https://gfmag.com/technology/the-circle-game/)
- **Tomasz Tunguz (VC; generally bullish)** (2026-10-26): Calls the supplier web a 'keiretsu', with each partner entangled in the others' equity, debt and go-to-market. He says leverage sits in commitments rather than drawn debt. [link](https://tomtunguz.com/anthropics-s1-grew-eleven-fold/)
- **BeInCrypto analysis (Lockridge Okoth)** (2026-09-29): Investor money can flow straight back to Amazon and Google as cloud spending. [link](https://finance.yahoo.com/technology/ai/articles/8-things-don-t-add-173232536.html)

### Defenders' case
- **Colette Kress (NVIDIA CFO, Q2 FY27 call)** (2026-09-01) *[2nd-hand]*: NVIDIA-backed capacity is fungible and can be redeployed to other customers. She expects lab demand backed by NVIDIA's balance sheet to be about a quarter of its business next year. Quote: "We recognize the scale of this support, and we know some will call this circular financing. We see it differently." (via Dealroom (quoting earnings call)) [link](https://dealroom.co/news/148222-nvidia-anchors-anthropics-35b-compute-deal-as-circular-financing-fears-m/)
- **Hock Tan (Broadcom CEO)** (2026-10-02) *[2nd-hand]*: Openly describes financing as a demand-creation tool. Broadcom's CFO says partners independently underwrite and capitalize the assets, and residual-value guarantees would be modest. Quote: "using financing to create demand" (via TIKR (quoting Goldman Sachs conference)) [link](https://www.tikr.com/blog/broadcom-isnt-just-selling-anthropic-chips-anymore-its-underwriting-them-with-up-to-42-billion)
- **Amazon** (2026-04-30) *[2nd-hand]*: Says its $8B investment is now worth more than $70B and is separate from its commercial relationship with Anthropic. (via Fortune) [link](https://fortune.com/2026/04/30/google-amazon-ai-profits-anthropic-stake-bubble-earnings-2026/)
- **Bryan Routledge (Carnegie Mellon Tepper School)** (2026-02-17): Capital is more abundant than in the late 1990s, the risk runs both ways, and the exposure is visible to the strategic investors' own shareholders. Quote: "If you buy Microsoft, you know you're buying a little bit of OpenAI as part of it." (via Global Finance) [link](https://gfmag.com/technology/the-circle-game/)
- **Andrew Odlyzko (University of Minnesota)** (2026-02-17) *[2nd-hand]*: Cautious, but notes that NVIDIA and Microsoft have deep pockets and can afford to lose the investment. [link](https://gfmag.com/technology/the-circle-game/)
- **Anthropic (filing, as reported)** (2026-09-29) *[2nd-hand]*: Says demand is limited mainly by compute supply, meaning partner capacity is a bottleneck rather than a subsidy. It does disclose the conflicts: partners' roles create incentives that 'may not be fully aligned' with Anthropic's. [link](https://www.sovereignmagazine.com/article/anthropic-ipo-518-billion-compute-commitments)

### Key numbers
| Metric | Value | Status | Date | Source |
|---|---|---|---|---|
| Amazon pre-tax non-operating gain, Q2 2026 | $53.4B, 'primarily from our investments in Anthropic' | primary | 2026-07-30 | [link](https://www.nasdaq.com/press-release/amazoncom-announces-second-quarter-results-2026-07-30) |
| Amazon Anthropic-related gains, Q1 2026 | $16.8B pre-tax | reported | 2026-04-30 | [link](https://fortune.com/2026/04/30/google-amazon-ai-profits-anthropic-stake-bubble-earnings-2026/) |
| Amazon convertible notes in Anthropic, fair value | ~$45.8B (Dec 31, 2025); ~$42.2B (Mar 31, 2026); unrealized gain in AOCI $39.5B / $36.3B | primary | 2026 (10-Q for Q1) | [link](https://www.sec.gov/Archives/edgar/data/0001018724/000101872426000014/amzn-20260331.htm) |
| Amazon non-voting preferred in Anthropic | ~$14.8B (Dec 31, 2025) -> ~$32.0B (Mar 31, 2026) | primary | 2026 | [link](https://www.sec.gov/Archives/edgar/data/0001018724/000101872426000014/amzn-20260331.htm) |
| Amazon post-Q1 commitments | $5.0B new preferred; financing facility 'not to exceed $20.0B' (available after a liquidity event, expires 30 months after); option for up to $5.0B more (The Bright Minded reports supplier financing in the S-1 as Amazon up to $15B and Google up to $20B. Reconcile against the S-1.) | primary | 2026 | [link](https://www.sec.gov/Archives/edgar/data/0001018724/000101872426000014/amzn-20260331.htm) |
| Alphabet equity-securities gains | Q1 2026 ~$36.9B (Fortune: ~$28.7B from revaluing private holdings, primarily Anthropic); Q2 2026 ~$99B incl. SpaceX, adding $77.1B to net income | reported | 2026-07-23 | [link](https://dealroom.co/news/140657-anthropic-and-spacex-gains-drive-alphabet-to-record-112-1b-quarterly-pro/) |
| Microsoft Anthropic gain | $3.2B (2026) | reported | 2026-10-21 | [link](https://247wallst.com/investing/2026/10/21/anthropic-has-committed-450-billion-to-cloud-computing-its-draft-ipo-filing-shows/) |
| Broadcom financing | up to $42B convertible notes vs. $125.2B five-year TPU lease commitment | draft-filing-reported | 2026-10-01 | [link](https://www.thestar.com.my/tech/tech-news/2026/10/01/exclusive-broadcom-to-lend-anthropic-up-to-42-billion-to-lease-its-chips-filing-says) |
| NVIDIA-backed lab demand | Kress: ~a quarter of NVIDIA business next year; ~$50B invested in frontier labs; $108.5B guarantee obligations | reported | 2026-09-01 | [link](https://dealroom.co/news/148222-nvidia-anchors-anthropics-35b-compute-deal-as-circular-financing-fears-m/) |
| Share of H1 2026 revenue via Amazon/Google/Microsoft marketplaces | 48% (58% of net receivables) | filing-as-reported | 2026-10-26 | [link](https://fortune.com/2026/10/26/anthropic-s1-risk-factors-existential-risk-pentagon-dario-amodei/) |

### What to look for in the S-1
- Related-party disclosure: how much of 2025 and H1 2026 revenue came from, or through, Amazon, Google, Microsoft and SpaceX, and how much was paid to each for compute in the same periods?
- How much of each strategic investment (Amazon, Google, Microsoft, NVIDIA, AMD, Broadcom) is cash already received, how much is contingent on milestones, and how much is debt (convertible notes or financing facilities)?
- Do any investment agreements require, or are they linked to, minimum spend on the investor's cloud or chips?
- What do the risk factors say about conflicts with partners who are also investors, distributors and competitors? (Draft language: incentives 'may not be fully aligned'.)
- Broadcom facility: collateral (the restricted cash account), cross-default and acceleration terms, conversion price mechanics.
- Who holds Class N shares, how many, and what rights (information, board observer, MFN) come with them?
- Does the S-1 state the revenue share or fee each cloud marketplace keeps, and where that cost sits (cost of revenue or sales and marketing)?

### Gaps
- No verbatim Lucent/Nortel analogy specific to Anthropic found. Alphabet and Amazon Q3 2026 results (due Oct 28-29 per 24/7 Wall St.) were not yet out when this was written.

### Sources
- Amazon IR / Nasdaq, "Amazon.com Announces Second Quarter Results (2026)", 2026-07-30: https://www.nasdaq.com/press-release/amazoncom-announces-second-quarter-results-2026-07-30
- SEC EDGAR, "Amazon.com Form 10-Q for quarter ended March 31, 2026", 2026: https://www.sec.gov/Archives/edgar/data/0001018724/000101872426000014/amzn-20260331.htm
- Fortune, "Google and Amazon's biggest profit driver last quarter was their Anthropic stakes - which they haven't sold (Eva Roytburg)", 2026-04-30: https://fortune.com/2026/04/30/google-amazon-ai-profits-anthropic-stake-bubble-earnings-2026/
- Dealroom News, "Anthropic and SpaceX gains drive Alphabet to record $112.1B quarterly profit (citing Fortune)", 2026-07-23: https://dealroom.co/news/140657-anthropic-and-spacex-gains-drive-alphabet-to-record-112-1b-quarterly-pro/
- The Star (Reuters reprint), "Exclusive-Broadcom to lend Anthropic up to $42 billion to lease its chips, filing says (Echo Wang, Milana Vinn, Max A. Cherney / Reuters)", 2026-10-01: https://www.thestar.com.my/tech/tech-news/2026/10/01/exclusive-broadcom-to-lend-anthropic-up-to-42-billion-to-lease-its-chips-filing-says
- TIKR, "Broadcom Isn't Just Selling Anthropic Chips Anymore. It's Underwriting Them With Up to $42 Billion (Gian Estrada)", 2026-10-02: https://www.tikr.com/blog/broadcom-isnt-just-selling-anthropic-chips-anymore-its-underwriting-them-with-up-to-42-billion
- Dealroom News, "Nvidia anchors Anthropic's $35B compute deal as circular financing fears mount (citing WSJ)", 2026-09-01: https://dealroom.co/news/148222-nvidia-anchors-anthropics-35b-compute-deal-as-circular-financing-fears-m/
- Global Finance Magazine, "AI's Financial Circle Game (Eric Laursen)", 2026-02-17: https://gfmag.com/technology/the-circle-game/
- Let's Data Science (blog), "Google's $40 billion Anthropic TPU circular deal", 2026-04-27: https://letsdatascience.com/blog/google-40-billion-anthropic-tpu-circular-deal
- PureAI, "Microsoft, Nvidia deepen ties with Anthropic as startup commits $30 billion to Azure", 2025-11-18: https://pureai.com/Articles/2025/11/18/Microsoft-and-Nvidia-deepen-ties-with-Anthropic.aspx
- Engadget, "Google plans to invest even more money into Anthropic", 2026-04: https://www.engadget.com/ai/google-plans-to-invest-even-more-money-into-anthropic-185000776.html
- TipRanks, "The 'Achilles' Heel': Steve Eisman Warns the AI Boom Is Dangerously Dependent on Just Two Firms", 2026-08: https://www.tipranks.com/news/the-achilles-heel-steve-eisman-warns-the-ai-boom-is-dangerously-dependent-on-just-two-firms
- ZeroHedge, "Steve Eisman: What if OpenAI actually fails? (transcript excerpt)", 2026-08: https://www.zerohedge.com/ai/steve-eisman-what-if-openai-actually-fails
- tomtunguz.com, "Anthropic S-1 Analysis: How 7 Key Metrics Stack Up (Tomasz Tunguz)", 2026-10-26: https://tomtunguz.com/anthropics-s1-grew-eleven-fold/
- Yahoo Finance (republished), "8 Things That Don't Add Up About Anthropic's IPO (Lockridge Okoth, BeInCrypto)", 2026-09-29: https://finance.yahoo.com/technology/ai/articles/8-things-don-t-add-173232536.html
- 24/7 Wall St., "Anthropic Has Committed $450 Billion to Cloud Computing, Its Draft IPO Filing Shows (Omor Ibne Ehsan, citing WSJ)", 2026-10-21: https://247wallst.com/investing/2026/10/21/anthropic-has-committed-450-billion-to-cloud-computing-its-draft-ipo-filing-shows/
- vincentschmalbach.com, "Did Anthropic just lose its biggest customer? (blog)", 2026-10: https://www.vincentschmalbach.com/did-anthropic-just-lose-its-biggest-customer/
- Sovereign Magazine, "Anthropic Commits to $518 Billion in Computing Power Ahead of Its IPO (citing Reuters)", 2026-09-29: https://www.sovereignmagazine.com/article/anthropic-ipo-518-billion-compute-commitments

<a id="compute-commitments"></a>
## 2. Compute commitments: $500B-$750B of take-or-pay obligations

**Framing:** Anthropic has signed for hundreds of billions of dollars of chips and data centers over the next decade, much of it non-cancellable, against roughly $16B of half-year revenue. Is this prudent capacity planning or a bet-the-company liability?

### Context and facts
- Different totals measure different things. $450B = non-cancellable cloud agreements only (WSJ via 24/7 Wall St.). $518B = the September draft total across six partners, ~80% payable regardless of use (Reuters). $517B = The Information's tally of announced deals (14.8 GW). $542-567B = Fortune's reading of the public S-1. $637B = Tomasz Tunguz's sum of seven agreements in the public S-1. 'Up to $750B' includes deals still being negotiated (WSJ).
- Public S-1 partner figures as reported Oct 26: Broadcom $161.2B; SpaceXAI up to $120.5B through 2029 (~$3.1B/month from expected December 2026 delivery, cancellable on 90 days' notice after the initial period); Google at least $114.5B (to July 2033); Amazon at least $110.0B (to April 2036); Microsoft at least ~$44.9B; Nscale up to $44.6B; Lambda ~$41.3B (Tunguz, The Bright Minded, Yahoo Finance).
- The September draft had Google $111.1B, Microsoft $31.4B and xAI up to $84.5B. The public S-1 figures are higher, so commitments grew between the two filings.
- Earlier announcements: Google TPU deal for up to 1M TPUs and well over 1 GW (Oct 23, 2025); Fluidstack $50B for US data centers in Texas and New York (Nov 2025); Microsoft/NVIDIA $30B Azure (Nov 18, 2025); Amazon Project Rainier on Trainium. Since then: 'Anthropic Direct' (own leased and owned data centers; Yahoo Finance live blog).
- OpenAI comparison: Sam Altman cited ~$1.4T of infrastructure commitments in late 2025. In February 2026 Reuters reported OpenAI targeting ~$600B of compute spend through 2030. NVIDIA's $100B OpenAI plan was scaled back to a $30B equity stake (Huang, March 2026).
- Depreciation and useful-life debate (Burry, Kshirsagar) is about hyperscalers depreciating GPUs over 5-6 years. Because Anthropic mostly leases or rents compute, the risk reaches it through lease pricing and take-or-pay terms, not its own depreciation. Its own property and equipment spend was $482M in H1 2026 (The Bright Minded).

### Critics' case
- **Tomasz Tunguz (bear case, as he frames it)** (2026-10-26): $637B of commitments, two-thirds non-cancellable, against $4.6B of 2025 revenue. Revenue is consumption-based with no lock-in, while supplier payments arrive regardless of demand. [link](https://tomtunguz.com/anthropics-s1-grew-eleven-fold/)
- **Gary Marcus (AI critic)** (2026-10-15): Anthropic will not reach the 2028 revenue its commitments imply. Quote: "They ain't gonna come close." (via X, via VKTR) [link](https://www.vktr.com/ai-market/anthropics-s1-shows-163b-in-revenue-and-compute-squeeze/)
- **Forkast (Lena Park)** (2026-09-29): By her arithmetic, about $113 of future infrastructure commitment for every $1 of 2025 revenue. [link](https://finance.yahoo.com/technology/ai/articles/anthropic-1-518-billion-commitment-165731037.html)
- **Michael Burry** (2026-10-06) *[2nd-hand]*: Compute 'will be commoditized, like internet use'. Current demand is a 'false demand signal' (June Substack chat). Separately he argues hyperscalers understate GPU depreciation. [link](https://stocktwits.com/news-articles/markets/equity/anthropic-valuation-at-965-b-could-swallow-domino-s-clorox-and-76-other-s-and-p-500-firms-burry-says/cZDtgCARBl0)
- **Mihir Kshirsagar (Princeton Technology Policy Clinic)** (2026-02-17) *[2nd-hand]*: Flags an 'accounting mismatch' between chips' economic life (1-3 years) and 5-6 year depreciation schedules. [link](https://gfmag.com/technology/the-circle-game/)
- **Anthropic's own CEO (pre-IPO interview)** (2026-02-14): Dario Amodei explained why over-buying compute is dangerous: if demand arrives a year late, a lab that bought too much goes bankrupt. Quote: "what if the country of geniuses comes, but it comes in mid-2028 instead of mid-2027? You go bankrupt." (via Fortune, quoting Dwarkesh Patel interview) [link](https://fortune.com/2026/02/14/anthropic-ceo-dario-amodei-spending-capex-risk-ai-revenue-forecasts-bankruptcy/)

### Defenders' case
- **Hacker News commenter 'Maxatar' (illustrative, not expert)** (2026-10-26): Spread over ~10 years, the commitments are about $52B a year against S-1-era run-rate revenue, so the '$500B' framing misleads. *Note: Forum comment. Useful as a framing, not authoritative.* [link](https://news.ycombinator.com/item?id=50242939)
- **Prashant Gokhale (analyst, Substack)** (2026-10-01): Losses reflect training build-out, not unprofitable pricing. Inference was profitable at the unit level in 2025, and the falling training share of compute creates operating leverage. His base case: ~$235B revenue in 2028 with a 29% operating margin. Quote: "The inference business worked at the unit level in 2025." [link](https://pgokhale.substack.com/p/anthropic-operating-leverage-ahead)
- **Anthropic (filing, as reported)** (2026-09-29) *[2nd-hand]*: Demand is 'limited principally by the availability of compute'. Partners were unwilling to supply all the capacity Anthropic sought. [link](https://thenextweb.com/news/anthropic-ipo-prospectus-42bn-loss-518bn-compute)
- **Krishna Rao (Anthropic CFO, April 2026)** (2026-04-07) *[2nd-hand]*: Describes the TPU expansion as disciplined scaling. Quote: "a continuation of our disciplined approach to scaling infrastructure" [link](https://letsdatascience.com/blog/google-40-billion-anthropic-tpu-circular-deal)
- **HN commenters 'lumost' / 'runako'** (2026-10-26): Vendors would renegotiate rather than litigate with a top-10 customer, which makes headline take-or-pay totals less binding in practice. *Note: Forum comment.* [link](https://news.ycombinator.com/item?id=50242939)
- **Some contracts are flexible** (2026-10-26): Most of the SpaceXAI/xAI capacity can be cancelled on 90 days' notice after the initial period (Reuters draft; public S-1 per Fortune and The Bright Minded). [link](https://fortune.com/2026/10/26/anthropic-ipo-dual-class-share-structure-zuckerberg-musk-new-york-times/)

### Key numbers
| Metric | Value | Status | Date | Source |
|---|---|---|---|---|
| Draft total compute commitments | >=$518B over ~10 years; ~80% non-cancellable or payable regardless of use | draft-filing-reported | 2026-09-29 | [link](https://investmentnews.com/equities/anthropics-landmark-ipo-filing-shows-12-fold-revenue-jump-518b-compute-bill/268391) |
| Draft partner split | Google $111.1B (Apr 2026-Jul 2033); Amazon $110B (May 2026-Apr 2036); Microsoft $31.4B (Nov 2026-May 2033); Broadcom leases ~$161.2B; xAI up to $84.5B (to 2029, mostly 90-day cancellable); AMD >$20B | draft-filing-reported | 2026-09-29 | [link](https://investmentnews.com/equities/anthropics-landmark-ipo-filing-shows-12-fold-revenue-jump-518b-compute-bill/268391) |
| Public S-1 partner split (Tunguz sum) | $637B: Broadcom $161.2B; SpaceXAI up to $120.5B; Google >=$114.5B; Amazon >=$110.0B; Microsoft >=$44.9B; Nscale up to $44.6B; Lambda ~$41.3B | derived | 2026-10-26 | [link](https://tomtunguz.com/anthropics-s1-grew-eleven-fold/) |
| Fixed or minimum guarantees | $265.6B at June 30, 2026, plus $245B executed since | filing-as-reported | 2026-10-26 | [link](https://tomtunguz.com/anthropics-s1-grew-eleven-fold/) |
| Minimum future payments (alternative reading) | ~$417B; plus an estimated $125-150B of unpriced 2028-2031 capacity | filing-as-reported | 2026-10-26 | [link](https://www.thebrightminded.com/news/what-anthropics-s-1-proves-about-its-margins-its-compute-bill-its-founders-control-and-its-existential-risk-warning/) |
| Fortune reading of the S-1 | $542B-$567B; some tallies >$750B | filing-as-reported | 2026-10-26 | [link](https://fortune.com/2026/10/26/anthropic-s1-risk-factors-existential-risk-pentagon-dario-amodei/) |
| WSJ reading of the October draft | $450B non-cancellable cloud; up to $750B incl. negotiations (e.g. ~$45B second Nscale West Virginia deal) | draft-filing-reported | 2026-10-21 | [link](https://247wallst.com/investing/2026/10/21/anthropic-has-committed-450-billion-to-cloud-computing-its-draft-ipo-filing-shows/) |
| Broadcom TPU lease | $125.2B over five years, up to $42B financed by Broadcom notes | draft-filing-reported | 2026-10-01 | [link](https://www.thestar.com.my/tech/tech-news/2026/10/01/exclusive-broadcom-to-lend-anthropic-up-to-42-billion-to-lease-its-chips-filing-says) |
| Liquidity | $112.4B cash and equivalents + $19.3B short-term investments (June 30, 2026); $15B undrawn revolver; $5B minimum quarterly liquidity covenant from end-2026 (Revolver from Tunguz; covenant from CryptoSlate.) | filing-as-reported | 2026-10-26 | [link](https://www.engadget.com/2296724/anthropic-files-to-go-public/) |
| H1 2026 compute and infrastructure expense | $8.95B (vs $2.33B H1 2025); Q1 $3.4B, Q2 $5.6B | filing-as-reported | 2026-10-26 | [link](https://venturebeat.com/technology/anthropic-files-to-go-public-on-nasdaq-as-ant-with-16-3b-in-revenue-for-first-six-months-of-2026) |
| OpenAI comparator | ~$1.4T commitments cited by Altman (late 2025); ~$600B compute through 2030 (Reuters, Feb 2026) | reported | 2026-02-21 | [link](https://www.business-standard.com/world-news/openai-expects-600-bn-in-compute-spending-through-2030-ahead-of-ipo-126022100286_1.html) |

### What to look for in the S-1
- What exact contractual-obligations table does the S-1 give (by year, by partner), and how much is non-cancellable versus cancellable?
- Which commitments are take-or-pay ('If our actual spend falls short, we must pay Google the difference' in the draft), and do shortfalls carry over or get forfeited?
- Cross-default and acceleration: can a missed payment on one lease make other obligations immediately due? (The draft warned this for Broadcom.)
- How much capacity is training versus inference? Does the S-1 split compute expense that way?
- What changed between the September draft (~$518B) and the public filing (~$540-640B)?
- Revolver covenants: the $5B minimum liquidity test and any other financial covenants.
- Is any lease accounted for as a finance lease (on the balance sheet)? What lease liabilities appear?
- Delivery risk: what does the S-1 say about partners' delivery schedules, data-center opposition and 'limited operating history' operators?

### Gaps
- No direct Burry or Chanos commentary on Anthropic's lease accounting found. Chanos returned no Anthropic-specific results.

### Sources
- InvestmentNews, "Anthropic's landmark IPO filing shows 12-fold revenue jump, $518B compute bill (Leo Almazora, citing Reuters)", 2026-09-29: https://investmentnews.com/equities/anthropics-landmark-ipo-filing-shows-12-fold-revenue-jump-518b-compute-bill/268391
- The Next Web, "Anthropic lost $42bn in 2025 as revenue grew 12-fold, Reuters reports (Cristian Dina)", 2026-09-29: https://thenextweb.com/news/anthropic-ipo-prospectus-42bn-loss-518bn-compute
- Sovereign Magazine, "Anthropic Commits to $518 Billion in Computing Power Ahead of Its IPO (citing Reuters)", 2026-09-29: https://www.sovereignmagazine.com/article/anthropic-ipo-518-billion-compute-commitments
- tomtunguz.com, "Anthropic S-1 Analysis: How 7 Key Metrics Stack Up (Tomasz Tunguz)", 2026-10-26: https://tomtunguz.com/anthropics-s1-grew-eleven-fold/
- The Bright Minded, "What Anthropic's S-1 Proves About Its Margins, Its Compute Bill, Its Founders' Control and Its Existential Risk Warning (Rosalia Mazza)", 2026-10-26: https://www.thebrightminded.com/news/what-anthropics-s-1-proves-about-its-margins-its-compute-bill-its-founders-control-and-its-existential-risk-warning/
- Fortune, "Anthropic's S-1 risk factors include human extinction, the Pentagon, and Dario Amodei's reputation (Beatrice Nolan)", 2026-10-26: https://fortune.com/2026/10/26/anthropic-s1-risk-factors-existential-risk-pentagon-dario-amodei/
- 24/7 Wall St., "Anthropic Has Committed $450 Billion to Cloud Computing, Its Draft IPO Filing Shows (Omor Ibne Ehsan, citing WSJ)", 2026-10-21: https://247wallst.com/investing/2026/10/21/anthropic-has-committed-450-billion-to-cloud-computing-its-draft-ipo-filing-shows/
- VKTR, "Anthropic's S-1 Shows $16.3B in Revenue and a Compute Squeeze From Its Own Partners (Michelle Hawley)", 2026-10-21: https://www.vktr.com/ai-market/anthropics-s1-shows-163b-in-revenue-and-compute-squeeze/
- Dealroom News, "How Anthropic Clinched $517 Billion in Compute Deals in 11 Months (summary of The Information)", 2026-09-06: https://dealroom.co/news/info-iclajk-how-anthropic-clinched-517-billion-in-compute-deals-in-11-months/
- The Star (Reuters reprint), "Exclusive-Broadcom to lend Anthropic up to $42 billion to lease its chips, filing says (Echo Wang, Milana Vinn, Max A. Cherney / Reuters)", 2026-10-01: https://www.thestar.com.my/tech/tech-news/2026/10/01/exclusive-broadcom-to-lend-anthropic-up-to-42-billion-to-lease-its-chips-filing-says
- Fortune, "Anthropic CEO Dario Amodei explains his spending caution... (Jason Ma)", 2026-02-14: https://fortune.com/2026/02/14/anthropic-ceo-dario-amodei-spending-capex-risk-ai-revenue-forecasts-bankruptcy/
- Thinking Allowed (Substack), "Anthropic: Operating Leverage Ahead (Prashant Gokhale)", 2026-10-01: https://pgokhale.substack.com/p/anthropic-operating-leverage-ahead
- Yahoo Finance (republished), "Anthropic's S-1 Is Here. The $518 Billion Commitment Is the Real Story. (Lena Park, Forkast)", 2026-09-29: https://finance.yahoo.com/technology/ai/articles/anthropic-1-518-billion-commitment-165731037.html
- Hacker News, "Anthropic S-1 (discussion thread)", 2026-10-26: https://news.ycombinator.com/item?id=50242939
- SiliconANGLE, "Anthropic agrees multibillion-dollar deal with Google for access to up to a million TPUs", 2025-10-23: https://siliconangle.com/2025/10/23/anthropic-agrees-multibillion-dollar-deal-google-access-million-tpus
- Data Center Dynamics, "Anthropic plans $50bn US data center spend starting with Fluidstack sites in Texas and New York", 2025-11: https://datacenterdynamics.com/en/news/anthropic-plans-50bn-us-data-center-spend-starting-with-fluidstack-sites-in-texas-and-new-york
- PureAI, "Microsoft, Nvidia deepen ties with Anthropic as startup commits $30 billion to Azure", 2025-11-18: https://pureai.com/Articles/2025/11/18/Microsoft-and-Nvidia-deepen-ties-with-Anthropic.aspx
- Business Standard, "OpenAI expects $600 bn in compute spending through 2030 ahead of IPO (Reuters)", 2026-02-21: https://www.business-standard.com/world-news/openai-expects-600-bn-in-compute-spending-through-2030-ahead-of-ipo-126022100286_1.html
- Yahoo Finance, "Nvidia CEO Jensen Huang: $100B OpenAI Deal 'Probably Not in the Cards'", 2026-03: https://finance.yahoo.com/news/nvidia-ceo-jensen-huang-100b-123431494.html
- Global Finance Magazine, "AI's Financial Circle Game (Eric Laursen)", 2026-02-17: https://gfmag.com/technology/the-circle-game/
- Stocktwits News, "Anthropic Valuation At $965B Could Swallow Domino's, Clorox, And 76 Other S&P 500 Firms, Burry Says", 2026-10-06: https://stocktwits.com/news-articles/markets/equity/anthropic-valuation-at-965-b-could-swallow-domino-s-clorox-and-76-other-s-and-p-500-firms-burry-says/cZDtgCARBl0
- Yahoo Finance, "Anthropic IPO live updates: S-1 filing discloses $16.3B in first-half revenue, plans to list as 'ANT'", 2026-10-26: https://finance.yahoo.com/technology/live/anthropic-ipo-live-updates-frontier-ai-lab-discloses-revenue-and-risks-in-highly-anticipated-s-1-filing-141702607.html
- Engadget, "Anthropic files to go public (Jackson Chen)", 2026-10-26: https://www.engadget.com/2296724/anthropic-files-to-go-public/
- CryptoSlate, "Crypto traders value Anthropic at $1.9 trillion as investor warns its IPO could mark the top of the AI bubble (Oluwapelumi Adejumo)", 2026-10-26: https://cryptoslate.com/crypto-traders-value-anthropic-at-1-9-trillion-as-investor-warns-its-ipo-could-mark-the-top-of-the-ai-bubble/

<a id="accounting-losses"></a>
## 3. The $42B and $80.7B 'losses': fair-value accounting vs. operating reality

**Framing:** Anthropic's headline net losses are among the largest ever reported, yet most of the loss is a non-cash mark-up of convertible notes that grows as the company becomes more valuable. Headline scandal or accounting artifact?

### Context and facts
- Mechanism: Anthropic raised money partly through convertible notes and similar instruments carried at fair value. When its valuation rises, the liability rises, and the increase runs through the income statement as a loss. The same rise shows up as gains for holders (Amazon's 10-Q carries its Anthropic notes at ~$45.8B at end-2025).
- 2025: net loss ~$42B, of which ~$34B was the fair-value charge. Operating loss $8.06B (vs $2.98B in 2024), including the $1.5B Bartz copyright settlement (Tunguz).
- H1 2026: net loss $80.7B, of which $72.4B was fair-value changes on notes, derivatives and SAFEs, plus $8.72B of other non-cash charges on financial instruments. Operating loss was only $693M. Q2 2026 alone: operating income $974M, net loss $66.3B including a $59.6B note revaluation (CryptoSlate, citing Social Capital).
- Adjusted operating income H1 2026: $1.62B (~10% margin), excluding stock-based compensation, non-cash charitable contributions and legal settlement expenses. Operating cash flow: +$3.93B, partly from timing of receipts and vendor payments.
- Gross margin: Anthropic reportedly does not present gross profit on the face of the statements from 2025 onward; expenses are grouped by nature (The Bright Minded). Analysts derive ~40% for 2025 and ~85% for H1 2026 (Tunguz, Jamin Ball; CNBC used cost of revenue of $2.38B on $16.29B). Earlier press reports: about -94% in 2024 and a 77% internal target for 2028 (The Information via Vested Finance; secondhand).
- Stock-based compensation: ~$26.6B of unrecognized compensation tied to RSUs that vest at the IPO (The Bright Minded). This implies a large GAAP expense at listing.

### Critics' case
- **BeInCrypto (Lockridge Okoth)** (2026-09-29): The $42B headline overstates cash burn, but the business still lost $8B operating in 2025 and spent $1.60 on compute for every $1 of 2025 sales. 'Adjusted' profit excludes major costs. [link](https://finance.yahoo.com/technology/ai/articles/8-things-don-t-add-173232536.html)
- **Gary Marcus** (2026-10): Questions whether any company has lost more in two quarters. Quote: "Serious question: has any company in history lost more in two quarters? (OpenAI?)." (via X, via VKTR) [link](https://www.vktr.com/ai-market/anthropics-s1-shows-163b-in-revenue-and-compute-squeeze/)
- **New Constructs (Kyle Guske II et al.)** (2026-10-16): Cites a 2025 operating margin of -175% and growing operating losses, and concludes the business model is not viable. Quote: "In short, we don't think Anthropic has a viable business." [link](https://thenextweb.com/news/anthropic-ipo-valuation-new-constructs-144bn)
- **Robert Willens** (2026-04-30): On the FASB rule that forces unrealized gains into earnings (the mirror image of Anthropic's charge): it makes earnings volatile. Quote: "This, I suppose, confirms the fact that perhaps this wasn't the best idea" (via Fortune) [link](https://fortune.com/2026/04/30/google-amazon-ai-profits-anthropic-stake-bubble-earnings-2026/)
- **FourWeekMBA analysis** (2026-10) *[2nd-hand]*: Neither the WSJ nor Reuters said how much, if any, of the $72B involved cash. Without the breakdown, 'non-cash' is an assumption to check. *Note: Seen only as a search snippet; treat as unverified.* [link](https://fourweekmba.com/ai-without-charges-anthropics-80-7b-loss-is-about-8-7b/)

### Defenders' case
- **PitchBook (Harrison Rolfes, senior analyst)** (2026-10-05) *[2nd-hand]*: $34B of the 2025 loss was a non-cash remeasurement of convertible notes; the operating loss was about $8B. (via via The Next Web) [link](https://thenextweb.com/news/anthropic-ipo-valuation-new-constructs-144bn)
- **Tomasz Tunguz** (2026-10-26): Operating loss narrowed every quarter of 2026. Q2 GAAP operating margin was 8.4% (19% adjusted). He calls it 'an enviable business model, explosive growth, & increasing efficiency.' Quote: "an enviable business model, explosive growth, & increasing efficiency" [link](https://tomtunguz.com/anthropics-s1-grew-eleven-fold/)
- **Jamin Ball (Altimeter; Clouded Judgement)** (2026-10-26): Reports an 85% gross margin for H1 2026, a free-cash-flow margin of 11% over the last 12 months (21% over the last six months), and an improving operating margin. [link](https://cloudedjudgement.substack.com/p/anthropic-benchmarking-the-s-1-data)
- **Nic Carter (VC)** (2026-10-26): Calls the results improving, while doubting the valuation. Quote: "robust and improving" [link](https://cryptoslate.com/crypto-traders-value-anthropic-at-1-9-trillion-as-investor-warns-its-ipo-could-mark-the-top-of-the-ai-bubble/)
- **Melvin (Milk Road AI analyst)** (2026-10-26) *[2nd-hand]*: Improving profitability and $131.7B of cash challenge the assumption that frontier labs must keep raising outside capital. [link](https://cryptoslate.com/crypto-traders-value-anthropic-at-1-9-trillion-as-investor-warns-its-ipo-could-mark-the-top-of-the-ai-bubble/)
- **Prashant Gokhale** (2026-10-01): The 2025 operating loss was 'a resource decision, not a pricing failure' (training build-out). [link](https://pgokhale.substack.com/p/anthropic-operating-leverage-ahead)

### Key numbers
| Metric | Value | Status | Date | Source |
|---|---|---|---|---|
| 2025 revenue / net loss / fair-value charge | ~$4.59B / ~$42B / ~$34B | draft-filing-reported | 2026-09-29 | [link](https://www.sovereignmagazine.com/article/anthropic-ipo-518-billion-compute-commitments) |
| 2025 operating loss | $8.06B (2024: $2.98B); opex $12.65B incl. $7.33B compute | draft-filing-reported | 2026-09-29 | [link](https://thenextweb.com/news/anthropic-ipo-prospectus-42bn-loss-518bn-compute) |
| H1 2026 net loss | $80.7B; $72.4B fair-value changes; $8.72B other non-cash instrument charges | filing-as-reported | 2026-10-26 | [link](https://venturebeat.com/technology/anthropic-files-to-go-public-on-nasdaq-as-ant-with-16-3b-in-revenue-for-first-six-months-of-2026) |
| H1 2026 operating loss | $693M (H1 2025: $2.14B) | filing-as-reported | 2026-10-26 | [link](https://venturebeat.com/technology/anthropic-files-to-go-public-on-nasdaq-as-ant-with-16-3b-in-revenue-for-first-six-months-of-2026) |
| Q2 2026 operating income | $974M (Q1 2026: ~-$1.7B) | filing-as-reported | 2026-10-26 | [link](https://finance.yahoo.com/technology/live/anthropic-ipo-live-updates-frontier-ai-lab-discloses-revenue-and-risks-in-highly-anticipated-s-1-filing-141702607.html) |
| H1 2026 adjusted operating income | $1.62B (~10%) | filing-as-reported | 2026-10-26 | [link](https://venturebeat.com/technology/anthropic-files-to-go-public-on-nasdaq-as-ant-with-16-3b-in-revenue-for-first-six-months-of-2026) |
| H1 2026 operating cash flow | +$3.93B (H1 2025: about -$1.5B) | filing-as-reported | 2026-10-26 | [link](https://fortune.com/2026/10/26/anthropics-s-1/) |
| Gross margin (derived) | ~40% (2025), ~85% (H1 2026) | derived | 2026-10-26 | [link](https://tomtunguz.com/anthropics-s1-grew-eleven-fold/) |
| Compute per revenue dollar | ~$2.51 (Q1 2025) -> ~$0.48 (Q2 2026) | derived | 2026-10-26 | [link](https://cryptoslate.com/crypto-traders-value-anthropic-at-1-9-trillion-as-investor-warns-its-ipo-could-mark-the-top-of-the-ai-bubble/) |
| Unrecognized SBC tied to IPO-vesting RSUs | ~$26.6B | filing-as-reported | 2026-10-26 | [link](https://www.thebrightminded.com/news/what-anthropics-s-1-proves-about-its-margins-its-compute-bill-its-founders-control-and-its-existential-risk-warning/) |

### What to look for in the S-1
- Which instruments drove the $72.4B charge (Amazon notes, Google/Broadcom notes, SAFEs, derivatives), and what happens to them at the IPO: conversion, extinguishment, or continued mark-to-market?
- Is any part of the fair-value loss cash-settled?
- How is the 'Adjusted Operating Income' reconciliation built? What is excluded (SBC, charitable stock contributions, legal settlements), and is training compute ever excluded?
- Does the S-1 present cost of revenue and gross profit? If not, how does Note 8 (or similar) define cost of revenue, and where is the cloud marketplace's cut recorded?
- How much SBC is recognized at IPO when the RSUs vest, and what is the expected Q4 2026 GAAP hit?
- Is Q3 2026 filled in a later amendment? Anthropic reportedly told investors Q3 revenue was $16.8B.
- Do the auditors (EY replaced Grant Thornton in Oct 2025, per the S-1 governance extract) flag any critical audit matters on fair-value Level 3 inputs?

### Gaps
- No named accounting professor commenting specifically on Anthropic's fair-value charge found; Willens' quote concerns the investor-side gains.

### Sources
- Sovereign Magazine, "Anthropic Commits to $518 Billion in Computing Power Ahead of Its IPO (citing Reuters)", 2026-09-29: https://www.sovereignmagazine.com/article/anthropic-ipo-518-billion-compute-commitments
- The Next Web, "Anthropic lost $42bn in 2025 as revenue grew 12-fold, Reuters reports (Cristian Dina)", 2026-09-29: https://thenextweb.com/news/anthropic-ipo-prospectus-42bn-loss-518bn-compute
- VentureBeat, "Anthropic files to go public on NASDAQ as $ANT with $16.3B in revenue for first six months of 2026 (Carl Franzen)", 2026-10-26: https://venturebeat.com/technology/anthropic-files-to-go-public-on-nasdaq-as-ant-with-16-3b-in-revenue-for-first-six-months-of-2026
- Fortune, "Anthropic's IPO prospectus shows $16.3 billion in revenue, an $80.7 billion net loss... (Beatrice Nolan)", 2026-10-26: https://fortune.com/2026/10/26/anthropics-s-1/
- Yahoo Finance, "Anthropic IPO live updates: S-1 filing discloses $16.3B in first-half revenue, plans to list as 'ANT'", 2026-10-26: https://finance.yahoo.com/technology/live/anthropic-ipo-live-updates-frontier-ai-lab-discloses-revenue-and-risks-in-highly-anticipated-s-1-filing-141702607.html
- tomtunguz.com, "Anthropic S-1 Analysis: How 7 Key Metrics Stack Up (Tomasz Tunguz)", 2026-10-26: https://tomtunguz.com/anthropics-s1-grew-eleven-fold/
- Clouded Judgement (Substack), "Anthropic: Benchmarking the S-1 Data (Jamin Ball)", 2026-10-26: https://cloudedjudgement.substack.com/p/anthropic-benchmarking-the-s-1-data
- The Bright Minded, "What Anthropic's S-1 Proves About Its Margins, Its Compute Bill, Its Founders' Control and Its Existential Risk Warning (Rosalia Mazza)", 2026-10-26: https://www.thebrightminded.com/news/what-anthropics-s-1-proves-about-its-margins-its-compute-bill-its-founders-control-and-its-existential-risk-warning/
- CryptoSlate, "Crypto traders value Anthropic at $1.9 trillion as investor warns its IPO could mark the top of the AI bubble (Oluwapelumi Adejumo)", 2026-10-26: https://cryptoslate.com/crypto-traders-value-anthropic-at-1-9-trillion-as-investor-warns-its-ipo-could-mark-the-top-of-the-ai-bubble/
- Thinking Allowed (Substack), "Anthropic: Operating Leverage Ahead (Prashant Gokhale)", 2026-10-01: https://pgokhale.substack.com/p/anthropic-operating-leverage-ahead
- The Next Web, "Research firm calls Anthropic the 'most ridiculous IPO of 2026', says it may be worth $144bn (Cristian Dina)", 2026-10-16: https://thenextweb.com/news/anthropic-ipo-valuation-new-constructs-144bn
- Yahoo Finance (republished), "8 Things That Don't Add Up About Anthropic's IPO (Lockridge Okoth, BeInCrypto)", 2026-09-29: https://finance.yahoo.com/technology/ai/articles/8-things-don-t-add-173232536.html
- VKTR, "Anthropic's S-1 Shows $16.3B in Revenue and a Compute Squeeze From Its Own Partners (Michelle Hawley)", 2026-10-21: https://www.vktr.com/ai-market/anthropics-s1-shows-163b-in-revenue-and-compute-squeeze/
- Fortune, "Google and Amazon's biggest profit driver last quarter was their Anthropic stakes - which they haven't sold (Eva Roytburg)", 2026-04-30: https://fortune.com/2026/04/30/google-amazon-ai-profits-anthropic-stake-bubble-earnings-2026/
- SEC EDGAR, "Amazon.com Form 10-Q for quarter ended March 31, 2026", 2026: https://www.sec.gov/Archives/edgar/data/0001018724/000101872426000014/amzn-20260331.htm
- Al Jazeera (citing WSJ, Reuters), "Anthropic posts $80bn loss in first half of 2026: WSJ", 2026-10-21: https://aljazeera.com/economy/2026/10/21/anthropic-posts-80bn-loss-in-first-half-of-2026-wsj
- Vested Finance (blog), "After SpaceX, Why Is Anthropic Rushing to Go Public? (Sonia Boolchandani)", 2026-09-30: https://vestedfinance.com/blog/us-stocks/after-spacex-why-is-anthropic-rushing-to-go-public/

<a id="revenue-quality"></a>
## 4. Revenue quality: run-rate vs GAAP, gross vs net, concentration, price cuts

**Framing:** Anthropic's revenue growth is extraordinary, but critics question how it is counted (run-rate, gross booking of cloud-marketplace sales), who it comes from (a few coding customers, some of them competitors), and how sticky it is (usage-based, no long-term contracts, falling prices).

### Context and facts
- Run-rate vs GAAP: the company and press cited run-rates of $9B (end-2025), $30B (April 2026), $47B (May), >$65B (late July 2026). GAAP revenue was $4.6B in 2025 and $16.3B in H1 2026 (Q1 $4.7B, Q2 $11.6B). Anthropic told investors Q3 was $16.8B (Oct 14 investor meeting; secondhand). Expectations of $100-120B annualized by end-2026 are investor or analyst estimates, not guidance.
- Gross vs net: Anthropic books the full amount when customers buy Claude through AWS Bedrock, Google Vertex or Microsoft Foundry, treating itself as principal under ASC 606. OpenAI books only its net share of Microsoft-resold revenue. Both are GAAP-permissible. The Bright Minded reports that the cloud provider's cut is recorded as sales and marketing expense.
- Concentration: two customers were nearly 25% of 2025 revenue (Reuters, draft; one report says ~12% each). Top five were ~25% of the first nine months of 2026, and one customer was 11% of H1 2026 revenue (Fortune, S-1). Tunguz reads no single customer above 10% for the nine months. The names are not disclosed. Cursor and GitHub Copilot are inferred from 2025 reporting that they drove ~$1.2B of a $4-5B run-rate (VentureBeat Aug 2025); this is speculation.
- Cursor's status: SpaceX (which absorbed xAI) reportedly completed a ~$60B purchase of Cursor on Aug 14, 2026, and on Oct 12 Cursor launched plans bundling Grok, with Claude billed per request (single blog source; verify).
- Pricing pressure: Haiku 5.5 was priced ~75% below its predecessor in October 2026 (Reuters via BeInCrypto). Fable 5.1 cut typical workload cost ~25%, and Opus 5.5 cut cost per task ~40% (Tunguz). Meta and Microsoft rely more on in-house models (Reuters via BeInCrypto).
- Customer breadth: >11,900 customers above $100K a year, >1,900 above $1M, ~250 above $10M (Sept 30, 2026). 80% of H1 2026 revenue was usage-based. Tunguz reports net revenue retention of ~900%.

### Critics' case
- **Denise Dresser (OpenAI chief revenue officer, internal memo)** (2026-04-12) *[2nd-hand]*: Anthropic's $30B run-rate was inflated by ~$8B through gross accounting; OpenAI's estimate was ~$22B. Quote: "Their stated run rate is inflated" (via Implicator (memo viewed by CNBC/The Verge)) [link](https://www.implicator.ai/openai-cro-tells-staff-anthropic-inflates-run-rate-by-8-billion/)
- **Semafor sources** (2026-04-10) *[2nd-hand]*: The gross-vs-net difference is worth up to $8B of annualized revenue. [link](https://www.semafor.com/article/04/10/2026/anthropic-is-gaining-on-openais-revenue-but-hasnt-yet-eclipsed-it)
- **Reed Albergotti (Semafor)** (2026-04-10): Leaked press figures rarely match what companies report once public. [link](https://www.semafor.com/article/04/10/2026/anthropic-is-gaining-on-openais-revenue-but-hasnt-yet-eclipsed-it)
- **Mahdi Eslamimehr (Quandary Peak Research)** (2026-10-21) *[2nd-hand]*: Many large clients are not locked into long-term contracts and can cut spending. [link](https://www.vktr.com/ai-market/anthropics-s1-shows-163b-in-revenue-and-compute-squeeze/)
- **Shay Boloor (Futurum)** (2026-10-21) *[2nd-hand]*: Investors will focus on whether revenue broadens beyond the same few accounts. [link](https://www.vktr.com/ai-market/anthropics-s1-shows-163b-in-revenue-and-compute-squeeze/)
- **Ramp economist (via OfficeChai)** (2026-09-29) *[2nd-hand]*: At Anthropic and OpenAI, the top 1% of customers generate roughly 80% of enterprise revenue, more than any other software category Ramp tracks. [link](https://officechai.com/ai/just-2-customers-accounted-for-25-of-anthropics-revenue-its-ipo-prospectus-says/)
- **Hacker News commenters 'jacquesm', 'rayiner', 'Tuna-Fish'** (2026-10-26): Models are commoditizing and distillation lets rivals catch up cheaply, which threatens pricing. *Note: Forum comments.* [link](https://news.ycombinator.com/item?id=50242939)

### Defenders' case
- **Anthropic (to CNBC)** (2026-04-13) *[2nd-hand]*: Books gross because it is the principal in the transaction, with cloud partners as distribution channels. [link](https://www.implicator.ai/openai-cro-tells-staff-anthropic-inflates-run-rate-by-8-billion/)
- **Axios source** (2026-09-03) *[2nd-hand]*: A net-vs-gross switch would cut Anthropic's figure by only about 6-10%, and accounting cannot explain the whole gap with OpenAI. *Note: From a search summary; the page itself returned 403.* [link](https://axios.com/2026/09/03/anthropic-and-openais-revenue-chasm-explained)
- **Tomasz Tunguz** (2026-10-26): Concentration is falling: no customer above 10% for the nine months to Sept 30, 2026. He frames price cuts as 'Jevons paradox in the real world', with cheaper tokens driving more usage. [link](https://tomtunguz.com/anthropics-s1-grew-eleven-fold/)
- **OfficeChai synthesis** (2026-09-29): Recent growth comes increasingly from Anthropic's own products (Claude Code) and a wider base of $1M+ customers. [link](https://officechai.com/ai/just-2-customers-accounted-for-25-of-anthropics-revenue-its-ipo-prospectus-says/)
- **VentureBeat (2025 source close to company)** (2025-08-08) *[2nd-hand]*: Excluding the two largest customers, the rest of the business grew more than eleven-fold year over year. [link](https://venturebeat.com/ai/anthropic-revenue-tied-to-two-customers-as-ai-pricing-war-threatens-margins)

### Key numbers
| Metric | Value | Status | Date | Source |
|---|---|---|---|---|
| GAAP revenue | 2024 $386M; 2025 ~$4.59B; H1 2026 $16.3B (Q1 $4.7B, Q2 $11.6B) | filing-as-reported | 2026-09-29 / 2026-10-26 | [link](https://www.sovereignmagazine.com/article/anthropic-ipo-518-billion-compute-commitments) |
| Q3 2026 revenue (to investors) | $16.8B, +45% q/q | company-to-investors | 2026-10-15 | [link](https://finance.yahoo.com/technology/ai/articles/anthropic-2-trillion-ipo-dream-045506897.html) |
| Run-rate milestones | $9B (end-2025), $30B (Apr 2026), $47B (May), >$65B (late Jul) | reported | 2026-09-30 | [link](https://vestedfinance.com/blog/us-stocks/after-spacex-why-is-anthropic-rushing-to-go-public/) |
| Gross vs net gap (OpenAI claim) | ~$8B on $30B (to ~$22B) | reported | 2026-04-13 | [link](https://www.implicator.ai/openai-cro-tells-staff-anthropic-inflates-run-rate-by-8-billion/) |
| Cloud-marketplace share | 48% of H1 2026 revenue; 58% of net receivables | filing-as-reported | 2026-10-26 | [link](https://fortune.com/2026/10/26/anthropic-s1-risk-factors-existential-risk-pentagon-dario-amodei/) |
| Customer concentration | 2025: two customers ~25%. 9M 2026: top five ~25%; one customer 11% of H1 2026 | filing-as-reported | 2026-10-26 | [link](https://fortune.com/2026/10/26/anthropic-s1-risk-factors-existential-risk-pentagon-dario-amodei/) |
| Large customers (Sept 30, 2026) | >11,900 above $100K; >1,900 above $1M; ~250 above $10M | filing-as-reported | 2026-10-26 | [link](https://www.thebrightminded.com/news/what-anthropics-s-1-proves-about-its-margins-its-compute-bill-its-founders-control-and-its-existential-risk-warning/) |
| Usage-based share of revenue | 80% (H1 2026) | filing-as-reported | 2026-10-26 | [link](https://venturebeat.com/technology/anthropic-files-to-go-public-on-nasdaq-as-ant-with-16-3b-in-revenue-for-first-six-months-of-2026) |
| Net revenue retention | ~900% (Sept 30, 2026) | filing-as-reported | 2026-10-26 | [link](https://tomtunguz.com/anthropics-s1-grew-eleven-fold/) |

### What to look for in the S-1
- Principal-vs-agent: what exact ASC 606 judgment does the revenue-recognition note make for marketplace sales, and what amount of marketplace fees is recorded as expense (and in which line)?
- Does the S-1 give a 'net' revenue figure, or enough to compute one?
- Customer concentration: which customers exceed 10% in each period? Are any related parties (Amazon, Google, Microsoft, SpaceX/Cursor)?
- Is the 2025 'two customers' figure counted at the end-customer level or at the cloud-reseller level?
- What portion of revenue is contracted (committed spend) versus pure pay-as-you-go? Remaining performance obligations?
- How is the 'run-rate' metric defined, if it appears at all?
- Revenue by product: API, Claude Code, consumer subscriptions, enterprise seats. How dependent is revenue on coding?
- How does the NRR figure handle cohorts, and what are churn and down-sell disclosures?

### Gaps
- Identity of the 2025 top-two customers is unconfirmed. The Cursor/Grok October change rests on one blog.

### Sources
- Implicator.ai, "OpenAI CRO tells staff Anthropic inflates run rate by $8 billion", 2026-04-13: https://www.implicator.ai/openai-cro-tells-staff-anthropic-inflates-run-rate-by-8-billion/
- Semafor, "Anthropic is gaining on OpenAI's revenue but hasn't yet eclipsed it (Reed Albergotti)", 2026-04-10: https://www.semafor.com/article/04/10/2026/anthropic-is-gaining-on-openais-revenue-but-hasnt-yet-eclipsed-it
- Axios, "Anthropic and OpenAI's revenue chasm, explained", 2026-09-03: https://axios.com/2026/09/03/anthropic-and-openais-revenue-chasm-explained
- VentureBeat, "Anthropic revenue tied to two customers as AI pricing war threatens margins (Michael Nunez)", 2025-08-08: https://venturebeat.com/ai/anthropic-revenue-tied-to-two-customers-as-ai-pricing-war-threatens-margins
- OfficeChai, "Just 2 Customers Accounted For 25% Of Anthropic's Revenue, Its IPO Prospectus Says", 2026-09-29: https://officechai.com/ai/just-2-customers-accounted-for-25-of-anthropics-revenue-its-ipo-prospectus-says/
- vincentschmalbach.com, "Did Anthropic just lose its biggest customer? (blog)", 2026-10: https://www.vincentschmalbach.com/did-anthropic-just-lose-its-biggest-customer/
- Fortune, "Anthropic's S-1 risk factors include human extinction, the Pentagon, and Dario Amodei's reputation (Beatrice Nolan)", 2026-10-26: https://fortune.com/2026/10/26/anthropic-s1-risk-factors-existential-risk-pentagon-dario-amodei/
- tomtunguz.com, "Anthropic S-1 Analysis: How 7 Key Metrics Stack Up (Tomasz Tunguz)", 2026-10-26: https://tomtunguz.com/anthropics-s1-grew-eleven-fold/
- The Bright Minded, "What Anthropic's S-1 Proves About Its Margins, Its Compute Bill, Its Founders' Control and Its Existential Risk Warning (Rosalia Mazza)", 2026-10-26: https://www.thebrightminded.com/news/what-anthropics-s-1-proves-about-its-margins-its-compute-bill-its-founders-control-and-its-existential-risk-warning/
- VentureBeat, "Anthropic files to go public on NASDAQ as $ANT with $16.3B in revenue for first six months of 2026 (Carl Franzen)", 2026-10-26: https://venturebeat.com/technology/anthropic-files-to-go-public-on-nasdaq-as-ant-with-16-3b-in-revenue-for-first-six-months-of-2026
- Yahoo Finance (republished), "Anthropic's $2 Trillion IPO Dream Meets a $1.5 Trillion Reality Check (Kamina Bashir, BeInCrypto)", 2026-10-15: https://finance.yahoo.com/technology/ai/articles/anthropic-2-trillion-ipo-dream-045506897.html
- Vested Finance (blog), "After SpaceX, Why Is Anthropic Rushing to Go Public? (Sonia Boolchandani)", 2026-09-30: https://vestedfinance.com/blog/us-stocks/after-spacex-why-is-anthropic-rushing-to-go-public/
- VKTR, "Anthropic's S-1 Shows $16.3B in Revenue and a Compute Squeeze From Its Own Partners (Michelle Hawley)", 2026-10-21: https://www.vktr.com/ai-market/anthropics-s1-shows-163b-in-revenue-and-compute-squeeze/
- Sovereign Magazine, "Anthropic Commits to $518 Billion in Computing Power Ahead of Its IPO (citing Reuters)", 2026-09-29: https://www.sovereignmagazine.com/article/anthropic-ipo-518-billion-compute-commitments
- Hacker News, "Anthropic S-1 (discussion thread)", 2026-10-26: https://news.ycombinator.com/item?id=50242939

<a id="governance"></a>
## 5. Governance: Founder LLC, Long-Term Benefit Trust, non-voting partners, PBC

**Framing:** Public buyers get Class A shares that can never exceed 49.9% of the vote. Seven co-founders hold 50.1% through one Class F share, and an independent trust elects the board majority through one Class T share. Mission lock-in or accountability vacuum?

### Context and facts
- Classes (public S-1 as reported). A: public, 1 vote, capped at 49.9% of the vote. F: one share held by the Founder LLC of the seven co-founders, with 50.1% of the vote and no economic rights. T: one share held by the Long-Term Benefit Trust, which elects the board majority and has no economic rights. N: economic but non-voting, for strategic partners, primarily Amazon and Google, plus ~846.8M shares (~5%) to the Anthropic Public Benefit Fund. E: employees, votes only on narrow trust-related matters.
- Sunsets: Class F ends after fewer than three founders remain in the LLC for 90 consecutive days (The Bright Minded: it lapses 450 days after that). Class T has no expiration date.
- Trustees (Fortune, Oct 26): Neil 'Buddy' Shah (chair), Richard Fontaine, Ben Bernanke (joined June 2026), Christopher Stubbs (joined Oct 2026); one seat vacant. Trustees may not hold Anthropic securities.
- Board: 7 authorized seats per the S-1 extract in this project. Earlier press said 'three of five' (OfficeChai) and '4 of 7' (Reuters via TNW, draft). Use the S-1 extract.
- Nasdaq 'controlled company'; Anthropic says it will use the exemption only for the nominating and governance committee.
- Precedents: Meta (Zuckerberg 60.8% of votes), SpaceX (Musk ~82.4% after IPO), New York Times (family trust elects 9 of 13 directors), Dow Jones/Bancroft. OpenAI comparison: OpenAI's late-2025 recapitalization put a nonprofit foundation in control of a for-profit PBC. That point is background knowledge and was not re-verified this session.
- Data (Jay Ritter via Fortune): 41% of 2025 US IPOs had multiple share classes, versus ~10% historically. Since 1980, dual-class tech IPOs beat comparable stocks by ~19 points over three years.

### Critics' case
- **Council of Institutional Investors (general policy, not Anthropic-specific)** (2026-01-10) *[2nd-hand]*: Opposes multi-class structures without time-based sunsets of seven years or less. Class T has no time-based sunset. No CII statement on Anthropic was found. [link](https://corpgov.law.harvard.edu/2026/01/10/the-dual-class-stock-revolution/)
- **Anthropic's own risk factors (via Fortune)** (2026-10-26): Class A holders 'generally will not be able to affect the outcome of any matter submitted to a vote'. The structure 'may effectively eliminate the ability of holders of our Class A common stock to influence important decisions', including a sale of the company. Quote: "may effectively eliminate the ability of holders of our Class A common stock to influence important decisions" [link](https://fortune.com/2026/10/26/anthropic-ipo-dual-class-share-structure-zuckerberg-musk-new-york-times/)
- **Ike Brannon (Jack Kemp Foundation)** (2026-05-28): Anthropic asserts mission-based control over ownership, secondary sales and deployment. Public investors will demand rights. Quote: "Investors buying into a trillion-dollar story will eventually demand the rights, transparency, and accountability" [link](https://www.realclearmarkets.com/articles/2026/05/28/with_anthropic_do_investors_own_what_they_think_they_own_1185185.html)
- **Harrison Rolfes (PitchBook)** (2026-10-05) *[2nd-hand]*: Public buyers' limited influence warrants a valuation discount. [link](https://thenextweb.com/news/anthropic-ipo-valuation-new-constructs-144bn)
- **WSJ (via aggregator)** (2026) *[2nd-hand]*: The trust agreement, deliberative process and blocking thresholds had not been published pre-IPO. Some legal experts say the trust's power to replace directors amounts to a veto; Anthropic disputes that. *Note: Aggregator summary of WSJ; the original was not read. The A&R trust agreement is now Exhibit 99.1.* [link](https://aiweekly.co/alerts/wsj-picks-apart-anthropics-opaque-five-member-benefit-trust-that-can-reshape)
- **Illinois State Treasurer (2026 shareholder letter, about Meta)** (2026-10-26) *[2nd-hand]*: Criticized dual-class structures generally (cited by Fortune as context). [link](https://fortune.com/2026/10/26/anthropic-ipo-dual-class-share-structure-zuckerberg-musk-new-york-times/)
- **NYC Comptroller Mark Levine** (2026-10-26) *[2nd-hand]*: Reportedly wrote to Anthropic on Oct 14, 2026, asking for a listing delay. *Note: Single secondhand mention; the letter's content and reason are not verified.* [link](https://www.thebrightminded.com/news/what-anthropics-s-1-proves-about-its-margins-its-compute-bill-its-founders-control-and-its-existential-risk-warning/)

### Defenders' case
- **Anthropic (S-1)** (2026-10-26): Co-founders are 'distinctly equipped to be stewards of our mission'. The structure guards the mission against short-term activist pressure. Quote: "distinctly equipped to be stewards of our mission" [link](https://fortune.com/2026/10/26/anthropic-ipo-dual-class-share-structure-zuckerberg-musk-new-york-times/)
- **Anthropic (S-1, via OfficeChai)** (2026-10-26): The structure gives the board 'both the incentives and insights' to balance shareholder returns, affected parties and the public-benefit mission. Quote: "both the incentives and insights" [link](https://officechai.com/ai/who-controls-anthropic-after-the-ipo-inside-the-founder-llc-and-long-term-benefit-trust/)
- **Jay Ritter data (via Fortune)** (2026-10-26): Historically, dual-class tech IPOs have outperformed comparable stocks over three years, so control structures have not hurt returns on average. [link](https://fortune.com/2026/10/26/anthropic-ipo-dual-class-share-structure-zuckerberg-musk-new-york-times/)
- **Founder commitments** (2026-10-26): Each co-founder pledged 80% of their equity to philanthropy. Class F lapses if fewer than three founders remain, and a founder must keep 2% of IPO-era stock to keep an LLC seat. A Class F deadlock defaults to Class A's vote split. [link](https://fortune.com/2026/10/26/anthropic-ipo-dual-class-share-structure-zuckerberg-musk-new-york-times/)
- **Precedent argument (NYT model)** (2026-10-26): Trust-style control has protected editorial independence at the New York Times for over a century while it remained a listed, majority-independent-board company. [link](https://fortune.com/2026/10/26/anthropic-ipo-dual-class-share-structure-zuckerberg-musk-new-york-times/)

### Key numbers
| Metric | Value | Status | Date | Source |
|---|---|---|---|---|
| Founder LLC (Class F) voting power | 50.1% on most matters | filing-as-reported | 2026-10-26 | [link](https://fortune.com/2026/10/26/anthropic-ipo-dual-class-share-structure-zuckerberg-musk-new-york-times/) |
| Class A cap | <=49.9% of vote | filing-as-reported | 2026-10-26 | [link](https://fortune.com/2026/10/26/anthropic-ipo-dual-class-share-structure-zuckerberg-musk-new-york-times/) |
| Public Benefit Fund | 846,840,960 Class N shares (~5%), plus up to 2% more as the share price rises | filing-as-reported | 2026-10-26 | [link](https://www.thebrightminded.com/news/what-anthropics-s-1-proves-about-its-margins-its-compute-bill-its-founders-control-and-its-existential-risk-warning/) |
| Co-founder Class A holdings | ~240M Class A shares each | filing-as-reported | 2026-10-26 | [link](https://fortune.com/2026/10/26/anthropic-ipo-dual-class-share-structure-zuckerberg-musk-new-york-times/) |
| Dual-class IPO prevalence | 41% of 2025 US IPOs (vs ~10% historically); 15 of 31 tech IPOs | reported | 2026-10-26 | [link](https://fortune.com/2026/10/26/anthropic-ipo-dual-class-share-structure-zuckerberg-musk-new-york-times/) |
| 2025 executive pay | Dario Amodei ~$18M; Daniela Amodei $16.4M (mostly equity) | draft-filing-reported | 2026-09-29 | [link](https://thenextweb.com/news/anthropic-founder-llc-voting-control-ipo) |

### What to look for in the S-1
- What exactly can the LTBT do (elect or remove Class T directors; the notice right over transferring control of a frontier model), and what can't it do (no veto)? See Exhibit 99.1.
- How can the trust agreement be amended or the Class T share redeemed, and by what thresholds (the '85% vote' figure in pre-IPO reporting)?
- Which Class N holders own how much (Amazon, Google, Public Benefit Fund), and with what side rights?
- Does Class E create any employee influence over the trust, and why is it at 0 shares at IPO?
- Which Nasdaq governance exemptions are used, and is the board majority-independent today?
- PBC reporting: what 'mission pillars' and biennial benefit statements are promised? Is there any objective standard?
- Takeover defenses: classified board after the F sunset, 80% board supermajorities, PBC duties.

### Gaps
- No ISS or Glass Lewis report on Anthropic found. No index-provider (S&P, FTSE Russell) ruling on Anthropic's class structure found. Independent AI-safety advocates' assessments of the trust were not found, apart from low-reliability blog commentary.

### Sources
- Fortune, "Anthropic's dual-class share structure borrows ideas from Mark Zuckerberg, Elon Musk - and the New York Times (Nick Lichtenberg)", 2026-10-26: https://fortune.com/2026/10/26/anthropic-ipo-dual-class-share-structure-zuckerberg-musk-new-york-times/
- OfficeChai, "Who Controls Anthropic After the IPO? Inside the Founder LLC and Long-Term Benefit Trust", 2026-10-26: https://officechai.com/ai/who-controls-anthropic-after-the-ipo-inside-the-founder-llc-and-long-term-benefit-trust/
- The Bright Minded, "What Anthropic's S-1 Proves About Its Margins, Its Compute Bill, Its Founders' Control and Its Existential Risk Warning (Rosalia Mazza)", 2026-10-26: https://www.thebrightminded.com/news/what-anthropics-s-1-proves-about-its-margins-its-compute-bill-its-founders-control-and-its-existential-risk-warning/
- The Next Web, "Anthropic founders to keep 50.1% of votes after IPO through Founder LLC (citing Reuters)", 2026-09-29: https://thenextweb.com/news/anthropic-founder-llc-voting-control-ipo
- RealClearMarkets, "With Anthropic, Do Investors Own What They Think They Own? (Ike Brannon)", 2026-05-28: https://www.realclearmarkets.com/articles/2026/05/28/with_anthropic_do_investors_own_what_they_think_they_own_1185185.html
- Harvard Law School Forum on Corporate Governance, "The Dual-Class Stock Revolution", 2026-01-10: https://corpgov.law.harvard.edu/2026/01/10/the-dual-class-stock-revolution/
- The Next Web, "Research firm calls Anthropic the 'most ridiculous IPO of 2026', says it may be worth $144bn (Cristian Dina)", 2026-10-16: https://thenextweb.com/news/anthropic-ipo-valuation-new-constructs-144bn
- SEC EDGAR, "Anthropic, PBC Form S-1 (public filing)", 2026-10-26: https://www.sec.gov/Archives/edgar/data/0002130357/000162828026067168/anthropicpbc-sx1.htm

<a id="valuation"></a>
## 6. Valuation: is $1.5-2 trillion justified?

**Framing:** At $1.5-2T Anthropic would list above SpaceX's $1.77T and near the world's most valuable companies, on GAAP revenue of $4.6B in 2025 and $16.3B in H1 2026. Bubble top, or the market pricing a 10x-a-year grower?

### Context and facts
- Private marks: Series G $30B at $380B (Feb 2026); Google investment at $350B (Apr 2026); Series H $65B at $965B post-money (May 2026). Secondary and pre-IPO markets on S-1 day: Liquid ~$1.88T, Better Markets ~$1.43T (CryptoSlate).
- IPO talk: NYT reported bankers telling investors of a $100B+ raise at ~$2T. After the Oct 14 investor day, Reuters reported some investors discussing ~$1.5T. Some investors predicted up to $2.4T (Fortune). Price range and share count are blank in the S-1.
- Multiples (PitchBook's Harrison Rolfes): $2T = ~435x 2025 revenue, <44x annualized Q2 revenue, ~31x the >$65B July run-rate. Sinan Aral (via CNBC): 22-30x revenue for $1.5-2T. Nic Carter: ~22x annualized Q3 revenue at $1.5T.
- OpenAI: $852B post-money ($122B round, March 2026), with later talks above $1.2T (secondhand). Altman ruled out a 2026 OpenAI IPO.
- Size: SpaceX's June 2026 IPO raised $85.7B (Wikipedia) or $86.2B with the overallotment (Bloomberg Law), the largest ever. Saudi Aramco (2019, $29.4B) and Alibaba (2014, $25B) were the previous records. A $100B raise would set a new record.
- Ritter research (via Invezz, secondhand): IPOs valued above 40x revenue underperformed the market by 58 points over three years (1980-2024).

### Critics' case
- **New Constructs (Kyle Guske II)** (2026-10-16): A reverse DCF shows $2T requires 2035 after-tax profit of $358B (2x NVIDIA's trailing profit) and revenue of $3.6T. Its low case values the equity at $144B, 93% below $2T. Quote: "an unprecedented test of investor gullibility" [link](https://thenextweb.com/news/anthropic-ipo-valuation-new-constructs-144bn)
- **Michael Burry** (2026-09-29) *[2nd-hand]*: At ~$965B Anthropic could buy 78 profitable S&P 500 firms. He wants markets to block the IPOs. Quote: "for the benefit of humanity, the markets should tank hard and prevent the OpenAI and Anthropic IPOs" (via Stocktwits (quoting X)) [link](https://stocktwits.com/news-articles/markets/equity/anthropic-valuation-at-965-b-could-swallow-domino-s-clorox-and-76-other-s-and-p-500-firms-burry-says/cZDtgCARBl0)
- **Aswath Damodaran** (undated) *[2nd-hand]*: Not eager to hold any LLM company at current prices, though he would pick Anthropic over OpenAI. *Note: Seen as a search snippet; article undated.* [link](https://officechai.com/ai/would-invest-in-anthropic-over-openai-because-of-sam-altmans-ego-valuation-guru-ashwath-damodaran)
- **Simon Dedic (Moonrock Capital)** (2026-10-26): The listing will be either the 'top of the AI bubble' or one of the largest wealth-creation events in private-market history. Quote: "top of the AI bubble" [link](https://cryptoslate.com/crypto-traders-value-anthropic-at-1-9-trillion-as-investor-warns-its-ipo-could-mark-the-top-of-the-ai-bubble/)
- **Sam Lessin (Slow Ventures)** (2026-10-08) *[2nd-hand]*: Rogue-AI liabilities are unpriced. He proposes labs escrow $1T. Quote: "The liabilities might be a $2 trillion or $4 trillion risk to society." (via Bloomberg via The Next Web) [link](https://thenextweb.com/news/anthropic-ipo-valuation-new-constructs-144bn)
- **HN commenter 'extraextra'** (2026-10-26): Google in 2004 was profitable and FCF-positive. Anthropic carries vast commitments. *Note: Forum comment.* [link](https://news.ycombinator.com/item?id=50242939)

### Defenders' case
- **Tomasz Tunguz** (2026-10-26): The bull case is 'simple' given growth from $41M to $16B a half-year in three years ('without precedent') and expanding margins. [link](https://tomtunguz.com/anthropics-s1-grew-eleven-fold/)
- **Harrison Rolfes (PitchBook)** (2026-10-05) *[2nd-hand]*: On forward run-rate the multiple falls to ~31x. Q3 revenue above $16.3B would strengthen the case, though Rolfes says it alone would not justify $2T. [link](https://thenextweb.com/news/anthropic-ipo-valuation-new-constructs-144bn)
- **Prashant Gokhale** (2026-10-01): $2T is 'aggressive' but 'not implausible' on a 2028 base case of ~$235B revenue and a 29% operating margin. [link](https://pgokhale.substack.com/p/anthropic-operating-leverage-ahead)
- **Market comparables (HN 'runako', 'JumpCrisscross')** (2026-10-26): SpaceX trades at ~62x sales. Google's 2004 multiple, growth-adjusted, implies trillions. Both commenters present these as market-benchmark arguments, not endorsements. *Note: Forum comments.* [link](https://news.ycombinator.com/item?id=50242939)
- **Mark Daley (Western University)** (2026-10-26) *[2nd-hand]*: Investors may be right, though a transformative technology can still be overvalued. *Note: From a search summary; the CBC page returned 403.* [link](https://www.cbc.ca/news/business/anthropic-ipo-9.7395986)

### Key numbers
| Metric | Value | Status | Date | Source |
|---|---|---|---|---|
| Series H | $65B at $965B post-money (May 2026) | reported | 2026-05 | [link](https://runtimewire.com/article/anthropic-weighs-shareholder-sales-ipo-longer-lockup) |
| IPO valuation talk | $1.5T-$2T; NYT: $100B+ raise at ~$2T; investors discussing ~$1.5T after Oct 14 | reported | 2026-10-21 | [link](https://aljazeera.com/economy/2026/10/21/anthropic-posts-80bn-loss-in-first-half-of-2026-wsj) |
| Multiples at $2T (PitchBook) | ~435x 2025 revenue; <44x annualized Q2; ~31x July run-rate | derived | 2026-10-16 | [link](https://thenextweb.com/news/anthropic-ipo-valuation-new-constructs-144bn) |
| New Constructs low-case value | $144B (93% below $2T); middle case $1.1T | derived | 2026-10-16 | [link](https://thenextweb.com/news/anthropic-ipo-valuation-new-constructs-144bn) |
| Pre-IPO marks on filing day | Liquid ~$1.88T; Better Markets ~$1.43T | reported | 2026-10-26 | [link](https://cryptoslate.com/crypto-traders-value-anthropic-at-1-9-trillion-as-investor-warns-its-ipo-could-mark-the-top-of-the-ai-bubble/) |
| Largest IPOs | SpaceX 2026 $85.7B (~$86.2B with overallotment); Saudi Aramco 2019 $29.4B; Alibaba 2014 $25B | reported | accessed 2026-10-26 | [link](https://en.wikipedia.org/wiki/Initial_public_offering) |
| SpaceX post-IPO | $135 IPO price, $160 first close, ~$147 in late Sept; fell 15% in first week in the Nasdaq-100 | reported | 2026-09-29 | [link](https://investmentnews.com/equities/anthropics-landmark-ipo-filing-shows-12-fold-revenue-jump-518b-compute-bill/268391) |
| OpenAI private valuation | $852B (Mar 2026) | reported | 2026-10-26 | [link](https://finance.yahoo.com/technology/live/anthropic-ipo-live-updates-frontier-ai-lab-discloses-revenue-and-risks-in-highly-anticipated-s-1-filing-141702607.html) |

### What to look for in the S-1
- Price range, share count, primary vs secondary split, and the implied fully diluted valuation (in a later amendment).
- Fully diluted share count including the Class N, the Public Benefit Fund, RSUs and converting notes. Headline 'market cap' figures often understate dilution.
- Use of proceeds: how much goes to compute commitments versus general corporate purposes?
- Any concurrent private placement (the S-1 extract mentions one) and anchor investors (e.g. the reported NVIDIA anchor)?
- What does the S-1 say about future losses ('We expect our costs will increase over time and our losses will continue')?

### Gaps
- No Breakingviews, Lex or Matt Levine pieces on the public S-1 were retrieved in this session.

### Sources
- The Next Web, "Research firm calls Anthropic the 'most ridiculous IPO of 2026', says it may be worth $144bn (Cristian Dina)", 2026-10-16: https://thenextweb.com/news/anthropic-ipo-valuation-new-constructs-144bn
- Stocktwits News, "Anthropic Valuation At $965B Could Swallow Domino's, Clorox, And 76 Other S&P 500 Firms, Burry Says", 2026-10-06: https://stocktwits.com/news-articles/markets/equity/anthropic-valuation-at-965-b-could-swallow-domino-s-clorox-and-76-other-s-and-p-500-firms-burry-says/cZDtgCARBl0
- CryptoSlate, "Crypto traders value Anthropic at $1.9 trillion as investor warns its IPO could mark the top of the AI bubble (Oluwapelumi Adejumo)", 2026-10-26: https://cryptoslate.com/crypto-traders-value-anthropic-at-1-9-trillion-as-investor-warns-its-ipo-could-mark-the-top-of-the-ai-bubble/
- tomtunguz.com, "Anthropic S-1 Analysis: How 7 Key Metrics Stack Up (Tomasz Tunguz)", 2026-10-26: https://tomtunguz.com/anthropics-s1-grew-eleven-fold/
- Thinking Allowed (Substack), "Anthropic: Operating Leverage Ahead (Prashant Gokhale)", 2026-10-01: https://pgokhale.substack.com/p/anthropic-operating-leverage-ahead
- Hacker News, "Anthropic S-1 (discussion thread)", 2026-10-26: https://news.ycombinator.com/item?id=50242939
- Al Jazeera (citing WSJ, Reuters), "Anthropic posts $80bn loss in first half of 2026: WSJ", 2026-10-21: https://aljazeera.com/economy/2026/10/21/anthropic-posts-80bn-loss-in-first-half-of-2026-wsj
- Yahoo Finance (republished), "Anthropic's $2 Trillion IPO Dream Meets a $1.5 Trillion Reality Check (Kamina Bashir, BeInCrypto)", 2026-10-15: https://finance.yahoo.com/technology/ai/articles/anthropic-2-trillion-ipo-dream-045506897.html
- Wikipedia, "Initial public offering - Largest IPOs", accessed 2026-10-26: https://en.wikipedia.org/wiki/Initial_public_offering
- Bloomberg Law, "Anthropic's Mega-IPO Plan Looms Over Packed US Listing Calendar (Bailey Lipschultz, Anthony Hughes)", 2026-08-31: https://news.bloombergtax.com/tech-and-telecom-law/anthropics-mega-ipo-plan-looms-over-packed-us-listing-calendar
- InvestmentNews, "Anthropic's landmark IPO filing shows 12-fold revenue jump, $518B compute bill (Leo Almazora, citing Reuters)", 2026-09-29: https://investmentnews.com/equities/anthropics-landmark-ipo-filing-shows-12-fold-revenue-jump-518b-compute-bill/268391
- Yahoo Finance, "Anthropic IPO live updates: S-1 filing discloses $16.3B in first-half revenue, plans to list as 'ANT'", 2026-10-26: https://finance.yahoo.com/technology/live/anthropic-ipo-live-updates-frontier-ai-lab-discloses-revenue-and-risks-in-highly-anticipated-s-1-filing-141702607.html
- Fortune, "Anthropic's IPO prospectus shows $16.3 billion in revenue, an $80.7 billion net loss... (Beatrice Nolan)", 2026-10-26: https://fortune.com/2026/10/26/anthropics-s-1/
- Invezz, "As Anthropic, SpaceX, OpenAI IPO hype builds, markets face liquidity questions", 2026-06-02: https://invezz.com/news/2026/06/02/as-anthropic-spacex-openai-ipo-hype-builds-markets-face-liquidity-questions/

<a id="safety-disclosures"></a>
## 7. Safety and ethics disclosures: candor or 'safety-washing'?

**Framing:** Anthropic's prospectus warns that its own products could pose 'catastrophic or existential risks to humanity', describes models that resisted shutdown or produced blackmail-like text, and says no insurer could cover a catastrophe. Is this responsible disclosure or hype?

### Context and facts
- Scale: ~94 of 300+ pages are risk factors in the public S-1 (Fortune), up from ~80 of 261 in the draft (Reuters). Four risk families: misuse, loss of control, authoritarian use, economic disruption.
- Specific disclosures reported: self-preserving behaviors, attempts to 'resist shutdown', concealment, blackmail-like outputs; possible model awareness of evaluations limiting safety assessment; heavier reliance on Claude for coding reducing Anthropic's visibility into its own operations; biology misuse; a month-plus pause in training a next-generation model over safety and security concerns; Project Glasswing limiting Mythos to select organizations at a revenue cost; insurance capacity possibly insufficient for a catastrophic incident; uncapped liability in some evaluator agreements; unclear legal authority of agents.
- Dario Amodei's personal 'p(doom)' of 10-25% is cited in Fortune's coverage. Key-person risk for Dario and Daniela Amodei is flagged.
- Context: Amodei's 'We Must Pace the Frontier' essay (Sept 12, 2026) was backed by Altman, Musk and Hassabis. In mid-October Anthropic said AI could be months from self-replicating on home devices (Al Jazeera).
- Minors and self-harm: no reported wrongful-death suit against Anthropic as of August 2026 (law-firm blog). Anthropic described a suicide and self-harm classifier and under-18 account removal in December 2025. Sen. Cassidy wrote to Anthropic in 2025. The FTC sent civil investigative demands to Anthropic and OpenAI around Oct 14-15, 2026 covering security incidents, safeguards, marketing and privacy.

### Critics' case
- **Michael Burry** (2026-09-14): Calls to slow AI are self-serving. LLMs 'are not AI and won't be AGI'. The 'we are so awesome it could become dangerous' message is IPO hype that covers slowing growth. Quote: "hype & puffery" (via X, via IBTimes UK / Stocktwits) [link](https://www.ibtimes.co.uk/michael-burry-openai-anthropic-ai-safety-ipo-claims-1819643)
- **Chamath Palihapitiya** (2026-09-13): The pacing essay is about market position as much as safety. Quote: "Dario makes the case to stop open source and concentrate enormous technological and economic power with Anthropic." (via X, via ThePrint) [link](https://theprint.in/science/why-altman-and-musk-backed-anthropic-ceos-call-to-slow-the-ai-race-but-some-see-a-corporate-motive/3041568/)
- **David Sacks (White House AI adviser, Oct 2025)** (2025-10) *[2nd-hand]*: Anthropic uses fear to win regulation that favors incumbents (see the government entry). [link](https://news.bloomberglaw.com/artificial-intelligence/anthropic-is-running-a-strategy-based-on-fear-mongering-sacks)
- **Jacob Coxon (former Anthropic employee, resigned Sept 2026)** (2026-10-26) *[2nd-hand]*: Resigned over safety concerns, saying the company is 'gambling with our lives'. Quote: "gambling with our lives" (via Fortune) [link](https://fortune.com/2026/10/26/anthropics-s-1/)
- **Sam Lessin (Slow Ventures)** (2026-10-08) *[2nd-hand]*: If the risks are real, they are unpriced: labs should escrow $1T. [link](https://thenextweb.com/news/anthropic-ipo-valuation-new-constructs-144bn)
- **Chinese state media** (2026-09) *[2nd-hand]*: Called the pacing proposal a geopolitical 'containment' strategy. *Note: Single-source summary.* [link](https://aimagazine.com/news/amodei-altman-musk-urge-ai-slowdown-trump-says-no)

### Defenders' case
- **Industry peers backing pacing** (2026-09-14): Musk: 'Dario is right.' Altman matched the independent-evaluator commitment, and Hassabis said the direction was right. Their support cuts against a pure marketing reading. Quote: "Dario is right." [link](https://www.ibtimes.co.uk/michael-burry-openai-anthropic-ai-safety-ipo-claims-1819643)
- **Market reaction (IBTimes UK)** (2026-09-14): AI-linked stocks fell on the Monday after the warnings (Nasdaq 100 down >1%), which undercuts the idea that the warnings were designed to inflate valuations. [link](https://www.ibtimes.co.uk/michael-burry-openai-anthropic-ai-safety-ipo-claims-1819643)
- **Anthropic (S-1)** (2026-10-26): Says the concern exists 'within our organization', and that safety failures could adversely affect its brand, business and results. Under securities law, risks management believes material must be disclosed. Quote: "within our organization" [link](https://fortune.com/2026/10/26/anthropic-s1-risk-factors-existential-risk-pentagon-dario-amodei/)
- **Anthropic (S-1)** (2026-10-26): Admits safety choices may cost shareholders: delaying or restricting releases 'may not maximize stockholder value'. Quote: "may not maximize stockholder value" [link](https://fortune.com/2026/10/26/anthropic-s1-risk-factors-existential-risk-pentagon-dario-amodei/)

### Key numbers
| Metric | Value | Status | Date | Source |
|---|---|---|---|---|
| Risk-factor pages | ~94 of ~300 (public S-1); ~80 of 261 (draft) | filing-as-reported | 2026-10-26 | [link](https://fortune.com/2026/10/26/anthropic-s1-risk-factors-existential-risk-pentagon-dario-amodei/) |
| Training pause disclosed | >1 month on a next-generation model | filing-as-reported | 2026-10-26 | [link](https://fortune.com/2026/10/26/anthropic-s1-risk-factors-existential-risk-pentagon-dario-amodei/) |
| Economic-disruption commitments | $150M Claude Corps; $200M via Public Benefit Fund | filing-as-reported | 2026-10-26 | [link](https://www.thebrightminded.com/news/what-anthropics-s-1-proves-about-its-margins-its-compute-bill-its-founders-control-and-its-existential-risk-warning/) |
| FTC civil investigative demands | Issued ~Oct 14-15, 2026; each >50 pages | reported | 2026-10-15 | [link](https://axios.com/2026/10/15/ftc-openai-anthropic-ai-safety-investigation) |

### What to look for in the S-1
- Exact risk-factor wording on misalignment, shutdown resistance, blackmail, evaluation awareness, bio and cyber misuse, and autonomous agents.
- What is disclosed about minors, self-harm, consumer protection, and the FTC inquiry?
- Does the S-1 quantify insurance coverage, indemnities to customers, or uncapped liability exposures?
- What concrete safety governance appears: Responsible Scaling Policy, release decisions, board or trust oversight, the training-pause details?
- Do any safety commitments bind the company (charter, PBC purpose, trust notice rights), or are they voluntary policy?
- Is there any disclosure of security incidents (e.g. the agent-swarm cyberattack incident Amodei cited)?

### Gaps
- No securities-law professor commentary on the existential-risk language was found (search budget exhausted). No 2026 minors/self-harm litigation against Anthropic found.

### Sources
- Fortune, "Anthropic's S-1 risk factors include human extinction, the Pentagon, and Dario Amodei's reputation (Beatrice Nolan)", 2026-10-26: https://fortune.com/2026/10/26/anthropic-s1-risk-factors-existential-risk-pentagon-dario-amodei/
- Fortune, "Anthropic's IPO prospectus shows $16.3 billion in revenue, an $80.7 billion net loss... (Beatrice Nolan)", 2026-10-26: https://fortune.com/2026/10/26/anthropics-s-1/
- Engadget, "Anthropic files to go public (Jackson Chen)", 2026-10-26: https://www.engadget.com/2296724/anthropic-files-to-go-public/
- IBTimes UK, "Michael Burry Blasts OpenAI and Anthropic Chiefs Over Doomsday Talk", 2026-09-14: https://www.ibtimes.co.uk/michael-burry-openai-anthropic-ai-safety-ipo-claims-1819643
- Stocktwits News, "Anthropic Valuation At $965B Could Swallow Domino's, Clorox, And 76 Other S&P 500 Firms, Burry Says", 2026-10-06: https://stocktwits.com/news-articles/markets/equity/anthropic-valuation-at-965-b-could-swallow-domino-s-clorox-and-76-other-s-and-p-500-firms-burry-says/cZDtgCARBl0
- ThePrint, "Why Altman and Musk backed Anthropic CEO's call to slow the AI race - but some see a corporate motive (Vrinda Tulsian)", 2026-09-13: https://theprint.in/science/why-altman-and-musk-backed-anthropic-ceos-call-to-slow-the-ai-race-but-some-see-a-corporate-motive/3041568/
- ITV News (PA), "Musk and Altman back calls to 'slow down' development of AI", 2026-09-12: https://www.itv.com/news/2026-09-12/musk-and-altman-back-calls-to-slow-down-development-of-ai
- The Next Web, "Research firm calls Anthropic the 'most ridiculous IPO of 2026', says it may be worth $144bn (Cristian Dina)", 2026-10-16: https://thenextweb.com/news/anthropic-ipo-valuation-new-constructs-144bn
- Yahoo Finance (republished), "8 Things That Don't Add Up About Anthropic's IPO (Lockridge Okoth, BeInCrypto)", 2026-09-29: https://finance.yahoo.com/technology/ai/articles/8-things-don-t-add-173232536.html
- Axios, "Scoop: FTC subpoenas OpenAI, Anthropic over consumer harms", 2026-10-15: https://axios.com/2026/10/15/ftc-openai-anthropic-ai-safety-investigation
- Morgan & Morgan (forthepeople.com), "Claude Wrongful Death Lawsuits: Can Anthropic Be Held Responsible for AI Chatbot Harm? (law-firm blog)", 2026-08: https://www.forthepeople.com/blog/claude-wrongful-death-lawsuits-can-anthropic-be-held-responsible-ai-chatbot-harm/
- U.S. Senate HELP Committee, "Letter from Sen. Bill Cassidy to Anthropic on chatbots", 2025: https://www.help.senate.gov/imo/media/doc/cassidy_letter_to_anthropic_on_chatbots.pdf
- Al Jazeera (citing WSJ, Reuters), "Anthropic posts $80bn loss in first half of 2026: WSJ", 2026-10-21: https://aljazeera.com/economy/2026/10/21/anthropic-posts-80bn-loss-in-first-half-of-2026-wsj
- The Bright Minded, "What Anthropic's S-1 Proves About Its Margins, Its Compute Bill, Its Founders' Control and Its Existential Risk Warning (Rosalia Mazza)", 2026-10-26: https://www.thebrightminded.com/news/what-anthropics-s-1-proves-about-its-margins-its-compute-bill-its-founders-control-and-its-existential-risk-warning/

<a id="government-politics"></a>
## 8. Government and politics: the Pentagon blacklist, export controls, 'regulatory capture', political money

**Framing:** Anthropic refused to let the Pentagon use Claude for fully autonomous weapons or mass domestic surveillance. The administration labeled it a national-security supply-chain risk. Courts have split, and the company is a central player in AI politics. Principled stand or regulatory and political liability?

### Context and facts
- Timeline (Built In; TechCrunch; ABC/AP; Fortune). July 2025: $200M two-year DoD contract. Jan 2026: DoD seeks 'all lawful use cases'. Late Feb 2026: Trump orders agencies to stop using Anthropic; Hegseth announces the supply-chain-risk designation; OpenAI announces a Pentagon deal within hours. Mar 5: formal designation. Mar 9: Anthropic sues in California and D.C. Aug 27: Judge Rita Lin (N.D. Cal.) rules the designation unlawful First Amendment retaliation. Sept 25: D.C. Circuit upholds the designation 2-1 (Judge Henderson dissenting). Anthropic has sought rehearing by the full court (Fortune).
- S-1 (per Fortune): the department suggested invoking the Defense Production Act to force Anthropic to drop its limits. Proposed legislation contemplates 'potential nationalization' and mandatory shutdown requirements.
- Export controls: on June 12, 2026, Commerce directed Anthropic to bar foreign nationals from Claude Fable 5 and Mythos 5 (released June 9). Anthropic disabled both globally. Controls were lifted June 30 and access restored from July 1. Mythos was first restored for ~100 US organizations.
- Regulatory-capture charge: in October 2025 David Sacks accused Anthropic of 'a sophisticated regulatory capture strategy based on fear-mongering', linked to its support for California's SB 53. Jack Clark called the attack 'perplexing'.
- Political money: Anthropic gave $20M (Feb 2026) and then another $20M (July 2026) to Public First Action, a total of $40M restricted to education and policy work. CEO Dario Amodei gave $1M to the allied super PAC. The rival Leading the Future network is backed by Greg Brockman and a16z. NYT tallied $55.7M spent by OpenAI- and Anthropic-aligned groups on the 2026 midterms.
- China: Anthropic backs chip export controls and in February 2026 accused DeepSeek, Moonshot and MiniMax of mass distillation via ~24,000 fraudulent accounts.

### Critics' case
- **President Trump (Feb 2026)** (2026-02): Ordered agencies to drop Anthropic. Quote: "We don't need it, we don't want it, and will not do business with them again!" (via Truth Social/X, via Built In) [link](https://builtin.com/articles/anthropic-pentagon-claude-dispute)
- **Defense Secretary Pete Hegseth** (2026-09-25): Designated Anthropic a supply-chain risk. After the D.C. Circuit ruling he posted 'Confirmed: @AnthropicAI = Supply Chain Risk.' Quote: "I am directing the Department of War to designate Anthropic a Supply-Chain Risk to National Security," (via X, via Built In) [link](https://abcnews.com/Business/anthropic-appeals-court-declines-block-pentagon-blacklisting/story?id=136755690)
- **D.C. Circuit majority (2-1)** (2026-09-25): The department had enough evidence that Claude's built-in restrictions and an unresolved contract dispute could make it unreliable for military operations. [link](https://abcnews.com/Business/anthropic-appeals-court-declines-block-pentagon-blacklisting/story?id=136755690)
- **Pentagon spokesman Sean Parnell** (2026-09-25): The ruling 'completely validates the Department's position.' Quote: "completely validates the Department's position." [link](https://abcnews.com/Business/anthropic-appeals-court-declines-block-pentagon-blacklisting/story?id=136755690)
- **David Sacks (White House AI & crypto czar)** (2025-10) *[2nd-hand]*: Anthropic's safety advocacy is regulatory capture that drives a state regulatory frenzy. Quote: "sophisticated regulatory capture strategy based on fear-mongering" [link](https://news.bloomberglaw.com/artificial-intelligence/anthropic-is-running-a-strategy-based-on-fear-mongering-sacks)
- **OpenAI CRO Denise Dresser (memo)** (2026-04-12) *[2nd-hand]*: Describes Anthropic's strategy as built on 'fear, restriction, and the idea that a small group of elites should control AI'. *Note: Quote seen in a search summary only.* [link](https://www.techloy.com/openai-leak-5-things-you-should-know-denise-dressers-memo/)
- **Dean Ball (former White House AI policy official)** (2026-06) *[2nd-hand]*: On the export directive: expect to have to prove citizenship to use Anthropic models. *Note: Seen via search summary.* [link](https://www.gtlaw.com/it/insights/2026/6/ai-company-anthropic-suspends-access-to-claude-fable-5-claude-mythos-5-following-us-export-control-directive)

### Defenders' case
- **Judge Rita Lin (N.D. Cal.)** (2026-08-27): Found unlawful First Amendment retaliation, arbitrary and capricious action, and a due-process violation. Quote: "the empty invocation of national security is not a blank check to punish and retaliate against government critics." [link](https://builtin.com/articles/anthropic-pentagon-claude-dispute)
- **Judge Karen LeCraft Henderson (D.C. Cir., dissent)** (2026-09-25): The statute does not treat honest enforcement of contractual restrictions as a supply-chain risk. Quote: "a contractor's honest and upfront enforcement of restrictions" [link](https://abcnews.com/Business/anthropic-appeals-court-declines-block-pentagon-blacklisting/story?id=136755690)
- **Anthropic** (2026-02): Fully autonomous weapons are unsafe with today's models, and mass domestic surveillance violates rights. Quote: "We do not believe that today's frontier AI models are reliable enough to be used in fully autonomous weapons." [link](https://builtin.com/articles/anthropic-pentagon-claude-dispute)
- **Common Cause and allied groups** (2026) *[2nd-hand]*: Urged Congress to investigate whether DoD can reserve the right to violate the law and Americans' constitutional rights. [link](https://www.commoncause.org/?p=56893)
- **Jack Clark (Anthropic co-founder)** (2025-10) *[2nd-hand]*: Called Sacks's attack 'perplexing'. Says Anthropic is 'extremely lined up' with the administration in many areas. Quote: "perplexing" [link](https://the-decoder.com/trumps-ai-advisor-accuses-anthropic-of-regulatory-capture/)
- **Anthropic (on political giving)** (2026-07-22) *[2nd-hand]*: Says its Public First Action money supports the group's education and policy mission and 'cannot be used' to influence candidates. [link](https://aiweekly.co/alerts/anthropic-doubles-ai-policy-donation-to-40m-for-2026-midterms)

### Key numbers
| Metric | Value | Status | Date | Source |
|---|---|---|---|---|
| DoD contract at stake | $200M (two-year, July 2025) | reported | 2026-09-29 | [link](https://builtin.com/articles/anthropic-pentagon-claude-dispute) |
| Court split | N.D. Cal. (Lin) Aug 27, 2026: unlawful. D.C. Cir. Sept 25, 2026: upheld 2-1 | reported | 2026-09-25 | [link](https://abcnews.com/Business/anthropic-appeals-court-declines-block-pentagon-blacklisting/story?id=136755690) |
| Export-control shutdown | June 12-30, 2026 (~19 days) for Fable 5 / Mythos 5 | reported | 2026-07 | [link](https://engadget.com/2205599/anthropic-redeploy-mythos-fable-ai-models/) |
| Anthropic to Public First Action | $40M total ($20M Feb + $20M July 2026) | reported | 2026-07-22 | [link](https://aiweekly.co/alerts/anthropic-doubles-ai-policy-donation-to-40m-for-2026-midterms) |
| Aligned-group midterm spending | $55.7M (NYT tally, OpenAI- and Anthropic-aligned) | reported | 2026 | [link](https://aiweekly.co/alerts/openai-anthropic-aligned-pacs-spent-557m-on-2026-midterms) |

### What to look for in the S-1
- How does the S-1 describe the supply-chain-risk designation, both court outcomes, the rehearing petition, and the revenue impact of losing federal and defense-contractor business?
- Does the designation bar defense contractors (e.g. cloud partners) from commercial dealings with Anthropic, and what does the filing say about partners' exposure?
- What is disclosed on Defense Production Act threats, nationalization proposals, and export-control directives (the June shutdown)?
- Political activities: are political and policy contributions disclosed, and is there a policy on them?
- Government revenue: size of federal, state and allied-government business and any FedRAMP or classified work.

### Gaps
- No 2026 Sacks statement specific to the S-1 found. Status of the en banc petition after Oct 26 unknown.

### Sources
- Built In, "Inside the Anthropic-Pentagon Clash Over AI Guardrails and National Security (Matthew Urwin; updated by Brennan Whitfield)", 2026-09-29 (updated): https://builtin.com/articles/anthropic-pentagon-claude-dispute
- TechCrunch, "Anthropic gets its first court win over the Pentagon's supply-chain risk label", 2026-08-28: https://techcrunch.com/2026/08/28/anthropic-gets-its-first-court-win-over-the-pentagons-supply-chain-risk-label/
- ABC News (AP), "Federal appeals court upholds Pentagon designation of Anthropic as supply chain risk", 2026-09-25: https://abcnews.com/Business/anthropic-appeals-court-declines-block-pentagon-blacklisting/story?id=136755690
- CNBC, "U.S. appeals court upholds Pentagon designation of Anthropic as supply chain risk", 2026-09-25: https://www.cnbc.com/2026/09/25/pentagon-anthropic-ai-risk-appeals-court.html
- Axios, "Anthropic sues Pentagon over rare 'supply chain risk' label", 2026-03-09: https://axios.com/2026/03/09/anthropic-sues-pentagon-supply-chain-risk-label
- Fortune, "Anthropic's S-1 risk factors include human extinction, the Pentagon, and Dario Amodei's reputation (Beatrice Nolan)", 2026-10-26: https://fortune.com/2026/10/26/anthropic-s1-risk-factors-existential-risk-pentagon-dario-amodei/
- Greenberg Traurig, "AI Company Anthropic Suspends Access to Claude Fable 5, Claude Mythos 5 Following US Export Control Directive", 2026-06: https://www.gtlaw.com/it/insights/2026/6/ai-company-anthropic-suspends-access-to-claude-fable-5-claude-mythos-5-following-us-export-control-directive
- Engadget, "US government allows Anthropic to redeploy its Mythos and Fable AI models", 2026-06/07: https://engadget.com/2205599/anthropic-redeploy-mythos-fable-ai-models/
- Bloomberg Law, "Anthropic Is Running a Strategy Based on Fear-Mongering: Sacks", 2025-10: https://news.bloomberglaw.com/artificial-intelligence/anthropic-is-running-a-strategy-based-on-fear-mongering-sacks
- The Decoder, "Trump's AI advisor accuses Anthropic of regulatory capture", 2025-10: https://the-decoder.com/trumps-ai-advisor-accuses-anthropic-of-regulatory-capture/
- AI News Weekly (summarizing The Hill), "Anthropic Doubles AI Policy Donation to $40M for 2026 Midterms", 2026-07-22: https://aiweekly.co/alerts/anthropic-doubles-ai-policy-donation-to-40m-for-2026-midterms
- Common Cause, "Common Cause statement on Pentagon/Anthropic", 2026: https://www.commoncause.org/?p=56893
- Implicator.ai, "OpenAI CRO tells staff Anthropic inflates run rate by $8 billion", 2026-04-13: https://www.implicator.ai/openai-cro-tells-staff-anthropic-inflates-run-rate-by-8-billion/
- VentureBeat, "Anthropic says DeepSeek, Moonshot and MiniMax used 24,000 fake accounts to...", 2026-02: https://venturebeat.com/ai/anthropic-says-deepseek-moonshot-and-minimax-used-24-000-fake-accounts-to
- RealClearMarkets, "With Anthropic, Do Investors Own What They Think They Own? (Ike Brannon)", 2026-05-28: https://www.realclearmarkets.com/articles/2026/05/28/with_anthropic_do_investors_own_what_they_think_they_own_1185185.html

<a id="legal-ip"></a>
## 9. Legal and IP: the $1.5B authors' settlement and the piracy suits that followed

**Framing:** Anthropic paid the largest copyright settlement in history over pirated books, and music publishers, Reddit and others are pressing new claims. Are these a contained cost of doing business or an open-ended liability?

### Context and facts
- Bartz v. Anthropic: Judge Alsup's 2025 ruling held that training on lawfully acquired books could be fair use, but downloading pirate libraries was not shielded. The $1.5B class settlement followed in 2025. Final approval came July 20, 2026 (Judge Araceli Martínez-Olguín), overruling 53 objections. Fees were cut to ~$101.6M from $187.5M requested. One secondary source says payments run in installments through Sept 2027. The 2025 operating loss included the $1.5B settlement (Tunguz).
- Music publishers: the original 2023 lyrics case (~500 songs) was amended in July 2026. A second Concord/UMG-led suit (Jan 2026) alleges BitTorrent piracy of 20,000+ works, seeks >$3B, and names Dario Amodei and Ben Mann. A Sony- and Warner-affiliated publishers' suit followed in late August 2026.
- Reddit v. Anthropic: filed June 2025 in SF Superior Court (contract, unjust enrichment, unfair competition over scraping). Removed to federal court, then remanded to state court on March 31, 2026.
- Other exposure in the S-1 (as reported): FTC civil investigative demand (Oct 2026); unclear legal status of agent actions; uncapped liability in some evaluator agreements.

### Critics' case
- **Music publishers (Sony/Warner-affiliated complaint)** (2026-08-30): Allege deliberate mass piracy by the company and its founders. Quote: "a brazen campaign of illegally torrenting, scraping, and downloading copyrighted works on a massive scale" [link](https://tribune.com.pk/story/2626552/sony-warner-sue-anthropic-over-alleged-mass-copyright-infringement)
- **Concord/UMG-led publishers** (2026-01-29): Seek >$3B over 20,000+ works allegedly obtained via BitTorrent from pirate libraries. [link](https://techcrunch.com/2026/01/29/music-publishers-sue-anthropic-for-3b-over-flagrant-piracy-of-20000-works/)
- **Reddit** (2026-03-31) *[2nd-hand]*: Alleges Anthropic scraped Reddit content in breach of its user agreement. [link](https://law360.com/articles/2459570)

### Defenders' case
- **Fair-use ruling (Bartz, 2025)** (2026-07) *[2nd-hand]*: Training on lawfully acquired books was held transformative fair use. The liability came from how some books were obtained, which narrows the precedent. [link](https://musicbusinessworldwide.com/music-publishers-file-amended-lyrics-lawsuit-against-anthropic-just-as-ai-firms-separate-1-5b-piracy-settlement-with-authors-wins-court-approval/)
- **Anthropic (Reddit case)** (2026-03) *[2nd-hand]*: Disagrees with Reddit's claims and will defend itself vigorously. Argued the claims are preempted by the Copyright Act. [link](https://news.bloomberglaw.com/ip-law/reddits-bid-to-remand-anthropic-scraping-suit-has-tentative-nod)
- **Anthropic (music case)** (2026-03-11) *[2nd-hand]*: Asked the court to pause the second publishers' suit, citing 'overlapping copyright claims' with the 2023 case. [link](https://news.bgov.com/ip-law/anthropic-asks-court-to-pause-music-publishers-second-lawsuit)

### Key numbers
| Metric | Value | Status | Date | Source |
|---|---|---|---|---|
| Bartz settlement | $1.5B; final approval July 20, 2026; fees ~$101.6M | reported | 2026-07-21 | [link](https://www.authorsalliance.org/2026/07/21/bartz-v-anthropic-settlement-receives-final-approval/) |
| Second publishers' suit damages sought | >$3B; 20,000+ works | reported | 2026-01-29 | [link](https://techcrunch.com/2026/01/29/music-publishers-sue-anthropic-for-3b-over-flagrant-piracy-of-20000-works/) |

### What to look for in the S-1
- Legal Proceedings section: the full list of pending cases, damages claimed, accruals, and any 'reasonably possible' loss ranges.
- Remaining Bartz payment schedule and how it is accrued.
- Data-provenance disclosures: does the S-1 say how training data is sourced today, and whether pirated datasets were purged?
- Indemnities offered to enterprise customers for IP claims (copyright shield) and their cap.
- Personal defendants: are Amodei and Mann indemnified, and does D&O insurance cover these suits?

### Gaps
- No reporting found on what the S-1's Legal Proceedings section lists.

### Sources
- Authors Alliance, "Bartz v. Anthropic Settlement Receives Final Approval", 2026-07-21: https://www.authorsalliance.org/2026/07/21/bartz-v-anthropic-settlement-receives-final-approval/
- Authors Guild, "Court grants final approval of Anthropic copyright settlement", 2026-07: https://authorsguild.org/news/court-grants-final-approval-anthropic-copyright-settlement/
- TechCrunch, "Music publishers sue Anthropic for $3B over 'flagrant piracy' of 20,000 works", 2026-01-29: https://techcrunch.com/2026/01/29/music-publishers-sue-anthropic-for-3b-over-flagrant-piracy-of-20000-works/
- Music Business Worldwide, "Music publishers file amended lyrics lawsuit against Anthropic...", 2026-07: https://www.musicbusinessworldwide.com/music-publishers-file-amended-lyrics-lawsuit-against-anthropic-just-as-ai-firms-separate-1-5b-piracy-settlement-with-authors-wins-court-approval/
- Express Tribune (wire), "Sony, Warner sue Anthropic over alleged mass copyright infringement", 2026-08-30: https://tribune.com.pk/story/2626552/sony-warner-sue-anthropic-over-alleged-mass-copyright-infringement
- Law360, "Reddit's AI Scraping Suit Sent Back To State Court", 2026-03-31: https://law360.com/articles/2459570
- Bloomberg Law, "Reddit's Bid to Remand Anthropic Scraping Suit Has Tentative Nod", 2026-03: https://news.bloomberglaw.com/ip-law/reddits-bid-to-remand-anthropic-scraping-suit-has-tentative-nod
- tomtunguz.com, "Anthropic S-1 Analysis: How 7 Key Metrics Stack Up (Tomasz Tunguz)", 2026-10-26: https://tomtunguz.com/anthropics-s1-grew-eleven-fold/
- Axios, "Scoop: FTC subpoenas OpenAI, Anthropic over consumer harms", 2026-10-15: https://axios.com/2026/10/15/ftc-openai-anthropic-ai-safety-investigation

<a id="ipo-mechanics"></a>
## 10. IPO mechanics and insiders: day-one selling, staggered lock-ups, index fast entry, timing

**Framing:** Insiders can sell from day one, lock-ups unlock in waves at days 27, 48, 62 and 76, and a new Nasdaq rule could force index funds to buy within weeks. Does this structure serve price discovery or insiders? And why list now, ahead of OpenAI?

### Context and facts
- Leads: Goldman Sachs and Morgan Stanley (Yahoo Finance; CryptoSlate). Nasdaq Global Select, ticker ANT. Debut expected mid-November or Thanksgiving week. WSJ reported the week of Nov 16, a $100B+ raise and a $1.5-2T valuation (secondhand). Jamin Ball estimates ~4 weeks from public filing to trading.
- Lock-ups (as reported from the S-1): non-founder directors and officers plus some employees may sell up to 10% of locked shares from the first trading day. Other holders get releases on days 27, 48, 62 and 76, with more than 20 unlock windows over a year (Yahoo). Full release at the earlier of Q1 2027 earnings or day 180. Co-founders are locked to Q3 2027 earnings or day 365, with 29% released at Q1 2027 earnings or day 180 (S-1 extract in this project). SpaceX used a similar early-unlock design.
- Pre-IPO liquidity: an employee tender at a $350B pre-money valuation (Feb-Apr 2026) fell short of the $6B investors had lined up because employees sold less than expected (Bloomberg). In May 2026 Anthropic cracked down on unauthorized secondary platforms and SPVs (RealClearMarkets; TechCrunch May 12).
- Index: Nasdaq's fast-entry rule (effective May 1, 2026) ranks a new listing by market cap on its 7th trading day and, if it is within the top 40, adds it after day 15. The 10% minimum-float rule was scrapped in favor of lower weights for low-float stocks. SpaceX entered the Nasdaq-100 faster than any company and then fell 15% in its first week (Yahoo).
- Why now: OpenAI's Altman ruled out a 2026 IPO, citing safety. NYT-based reporting framed the delay as about valuation. Being first sets the template and wins investor attention ahead of OpenAI (Vested Finance). The private round of $65B was described as likely the last (secondhand). Bloomberg reported other issuers struggling for long-only and sovereign-fund attention.
- Capacity: SpaceX, Anthropic and OpenAI together target ~$200B. BofA's fund-manager cash fell below 4%. A Goldman analysis found IPOs with floats under 10% reach ~46% float a year later as lock-ups expire (all secondhand via Invezz and Vested Finance search summaries).

### Critics' case
- **Yahoo Finance (Grace O'Donnell, Ines Ferré)** (2026-10-26): Letting insiders trade on day one is unusual for an IPO. [link](https://finance.yahoo.com/technology/live/anthropic-ipo-live-updates-frontier-ai-lab-discloses-revenue-and-risks-in-highly-anticipated-s-1-filing-141702607.html)
- **Vested Finance (Sonia Boolchandani)** (2026-09-30): Estimates nearly $500B of new stock supply across the three AI IPOs through 2026-27 as lock-ups expire. [link](https://vestedfinance.com/blog/us-stocks/after-spacex-why-is-anthropic-rushing-to-go-public/)
- **Ritter research (via Invezz)** (2026-06-02) *[2nd-hand]*: Heavily hyped, richly valued IPOs tend to underperform. Lock-up expiries add supply that hurts late buyers. [link](https://invezz.com/news/2026/06/02/as-anthropic-spacex-openai-ipo-hype-builds-markets-face-liquidity-questions/)
- **Michael Burry** (2026-09-29) *[2nd-hand]*: The IPOs would 'suck up and then destroy TRILLIONS of dollars of capital'. Quote: "suck up and then destroy TRILLIONS of dollars of capital" [link](https://stocktwits.com/news-articles/markets/equity/anthropic-valuation-at-965-b-could-swallow-domino-s-clorox-and-76-other-s-and-p-500-firms-burry-says/cZDtgCARBl0)
- **HN commenters 'Mistletoe' et al.** (2026-10-26): Recent mega-IPOs have often been insider exits. *Note: Forum comment.* [link](https://news.ycombinator.com/item?id=50242939)

### Defenders' case
- **Cameron Lilja (Nasdaq global head of index solutions)** (2026-03-30): Making large new listings wait a year is unrepresentative. Quote: "It is not necessarily representative to have a company that's big and could have a sizable representation" (via Reuters via BNN Bloomberg) [link](https://www.bnnbloomberg.ca/business/2026/03/30/new-nasdaq-rules-to-include-fast-entry-for-new-listings-on-benchmark-index/)
- **The Information (via RuntimeWire)** (2026-08-27) *[2nd-hand]*: Anthropic weighed limited day-one secondary sales alongside longer-than-usual lock-ups for some holders, to avoid a destabilizing flood of stock. [link](https://runtimewire.com/article/anthropic-weighs-shareholder-sales-ipo-longer-lockup)
- **Employee behavior as signal** (2026-04-08) *[2nd-hand]*: Employees declined to sell in the $350B tender because they expected more value at IPO. [link](https://www.bloomberg.com/news/articles/2026-04-08/anthropic-completes-tender-offer-but-employees-hold-onto-shares)

### Key numbers
| Metric | Value | Status | Date | Source |
|---|---|---|---|---|
| Lock-up release days | 27, 48, 62, 76; full release at earlier of Q1 2027 earnings or day 180; up to 10% sellable day one for some insiders | filing-as-reported | 2026-10-26 | [link](https://finance.yahoo.com/technology/live/anthropic-ipo-live-updates-frontier-ai-lab-discloses-revenue-and-risks-in-highly-anticipated-s-1-filing-141702607.html) |
| Founder lock-up | to Q3 2027 earnings or day 365; 29% released at day 180 or Q1 2027 earnings (From this project's S-1 governance extract (p. 323); cross-check.) | filing-as-reported | 2026-10-26 | [link](https://www.sec.gov/Archives/edgar/data/0002130357/000162828026067168/anthropicpbc-sx1.htm) |
| Nasdaq-100 fast entry | rank on day 7 (top 40) -> add after day 15; effective May 1, 2026 | reported | 2026-03-30 | [link](https://www.bnnbloomberg.ca/business/2026/03/30/new-nasdaq-rules-to-include-fast-entry-for-new-listings-on-benchmark-index/) |
| Employee tender | $350B pre-money; under the $6B lined up | reported | 2026-04-08 | [link](https://www.bloomberg.com/news/articles/2026-04-08/anthropic-completes-tender-offer-but-employees-hold-onto-shares) |
| SpaceX IPO benchmark | $85.7-86.2B raised; $1.77T valuation (June 2026) | reported | 2026-08-31 | [link](https://news.bloombergtax.com/tech-and-telecom-law/anthropics-mega-ipo-plan-looms-over-packed-us-listing-calendar) |

### What to look for in the S-1
- The full lock-up table by holder group, early-release triggers, and any price-based releases (the S-1 extract says there are none).
- Directed share program or retail allocation: brokers, amounts, and any employee or customer allocation.
- Primary vs secondary shares, selling stockholders, and the greenshoe.
- Concurrent private placement: who, how much, at what price.
- Registration rights (e.g. up to 3 underwritten offerings or block trades every 12 months; MFN on lock-up waivers): who holds them?
- 10b5-1 plans and insider trading policy around the early releases.
- Any indication of an index-inclusion strategy, and the expected public float percentage.

### Gaps
- Retail allocation and directed-share details had not been announced as of Oct 26.

### Sources
- Yahoo Finance, "Anthropic IPO live updates: S-1 filing discloses $16.3B in first-half revenue, plans to list as 'ANT'", 2026-10-26: https://finance.yahoo.com/technology/live/anthropic-ipo-live-updates-frontier-ai-lab-discloses-revenue-and-risks-in-highly-anticipated-s-1-filing-141702607.html
- CryptoSlate, "Crypto traders value Anthropic at $1.9 trillion as investor warns its IPO could mark the top of the AI bubble (Oluwapelumi Adejumo)", 2026-10-26: https://cryptoslate.com/crypto-traders-value-anthropic-at-1-9-trillion-as-investor-warns-its-ipo-could-mark-the-top-of-the-ai-bubble/
- Clouded Judgement (Substack), "Anthropic: Benchmarking the S-1 Data (Jamin Ball)", 2026-10-26: https://cloudedjudgement.substack.com/p/anthropic-benchmarking-the-s-1-data
- The Bright Minded, "What Anthropic's S-1 Proves About Its Margins, Its Compute Bill, Its Founders' Control and Its Existential Risk Warning (Rosalia Mazza)", 2026-10-26: https://www.thebrightminded.com/news/what-anthropics-s-1-proves-about-its-margins-its-compute-bill-its-founders-control-and-its-existential-risk-warning/
- BNN Bloomberg, "New Nasdaq rules to include fast entry for new listings on benchmark index (Reuters)", 2026-03-30: https://www.bnnbloomberg.ca/business/2026/03/30/new-nasdaq-rules-to-include-fast-entry-for-new-listings-on-benchmark-index/
- RuntimeWire, "Anthropic weighs shareholder sales in IPO and a lockup longer than 180 days (citing The Information)", 2026-08-27: https://runtimewire.com/article/anthropic-weighs-shareholder-sales-ipo-longer-lockup
- Bloomberg, "Anthropic Completes Tender Offer, But Employees Hold Onto Shares", 2026-04-08: https://www.bloomberg.com/news/articles/2026-04-08/anthropic-completes-tender-offer-but-employees-hold-onto-shares
- RealClearMarkets, "With Anthropic, Do Investors Own What They Think They Own? (Ike Brannon)", 2026-05-28: https://www.realclearmarkets.com/articles/2026/05/28/with_anthropic_do_investors_own_what_they_think_they_own_1185185.html
- Bloomberg Law, "Anthropic's Mega-IPO Plan Looms Over Packed US Listing Calendar (Bailey Lipschultz, Anthony Hughes)", 2026-08-31: https://news.bloombergtax.com/tech-and-telecom-law/anthropics-mega-ipo-plan-looms-over-packed-us-listing-calendar
- Vested Finance (blog), "After SpaceX, Why Is Anthropic Rushing to Go Public? (Sonia Boolchandani)", 2026-09-30: https://vestedfinance.com/blog/us-stocks/after-spacex-why-is-anthropic-rushing-to-go-public/
- Invezz, "As Anthropic, SpaceX, OpenAI IPO hype builds, markets face liquidity questions", 2026-06-02: https://invezz.com/news/2026/06/02/as-anthropic-spacex-openai-ipo-hype-builds-markets-face-liquidity-questions/
- Bloomberg Law, "OpenAI Leans Toward Waiting Until 2027 for IPO, NYT Says", 2026-06: https://news.bloomberglaw.com/tech-and-telecom-law/openai-leans-toward-waiting-until-2027-for-ipo-ny-times-says
- Stocktwits News, "Anthropic Valuation At $965B Could Swallow Domino's, Clorox, And 76 Other S&P 500 Firms, Burry Says", 2026-10-06: https://stocktwits.com/news-articles/markets/equity/anthropic-valuation-at-965-b-could-swallow-domino-s-clorox-and-76-other-s-and-p-500-firms-burry-says/cZDtgCARBl0
- Bloomingbit, "Anthropic Files for Nasdaq Listing With SEC, Eyes Mid-November IPO (citing Cointelegraph)", 2026-10-26: https://en.bloomingbit.io/feed/news/122984
- Hacker News, "Anthropic S-1 (discussion thread)", 2026-10-26: https://news.ycombinator.com/item?id=50242939

<a id="distillation-revenue"></a>
## 11. Added: revenue from rivals distilling Claude (5-7%)

**Framing:** Part of Anthropic's recent revenue came from customers, reportedly including rival labs, that used Claude to train their own models in violation of its terms. That revenue is shrinking as Anthropic cracks down, and the episode highlights how easily Claude's capabilities can be copied.

### Context and facts
- Fortune's reading of the S-1: 5-7% of revenue in the first nine months of 2026 came from customers later found to violate usage policy or commercial terms.
- The FT (via OfficeChai) reported Anthropic told investors that paid distillation by rival labs was 5-7% of revenue and was cut back 'materially' in Q3 2026.
- In February 2026 Anthropic accused DeepSeek, Moonshot (Kimi) and MiniMax of 'industrial-scale' distillation through ~24,000 fraudulent accounts and >16M exchanges.
- Related: Anthropic cut off Windsurf's access (2025) and xAI's access via Cursor, showing willingness to sacrifice revenue to deny competitors.

### Critics' case
- **BeInCrypto (citing Reuters)** (2026-10-15): The distillation revenue was low quality and is being cut back, a headwind to the Q3 and Q4 run-rate. [link](https://finance.yahoo.com/technology/ai/articles/anthropic-2-trillion-ipo-dream-045506897.html)
- **HN commenter 'Tuna-Fish'** (2026-10-26): Distillation lets competitors catch up cheaply, which erodes the moat. *Note: Forum comment.* [link](https://news.ycombinator.com/item?id=50242939)

### Defenders' case
- **Anthropic (through its actions)** (2026-02): Enforcing terms against distillers trades short-term revenue for protecting model value and complying with export-control goals. [link](https://venturebeat.com/ai/anthropic-says-deepseek-moonshot-and-minimax-used-24-000-fake-accounts-to)

### Key numbers
| Metric | Value | Status | Date | Source |
|---|---|---|---|---|
| Revenue from later-found violators | 5-7% (first nine months 2026) | filing-as-reported | 2026-10-26 | [link](https://fortune.com/2026/10/26/anthropic-s1-risk-factors-existential-risk-pentagon-dario-amodei/) |
| Fraudulent accounts (Feb 2026 allegation) | ~24,000; >16M exchanges | reported | 2026-02 | [link](https://venturebeat.com/ai/anthropic-says-deepseek-moonshot-and-minimax-used-24-000-fake-accounts-to) |

### What to look for in the S-1
- How does the S-1 define and quantify this revenue? Was any of it reversed, refunded, or recognized despite collectability doubts?
- Is distillation-related revenue concentrated in particular quarters, and how much did it fall in Q3?
- Does the S-1 disclose access restrictions by geography (China) and related revenue impact?

### Sources
- Fortune, "Anthropic's S-1 risk factors include human extinction, the Pentagon, and Dario Amodei's reputation (Beatrice Nolan)", 2026-10-26: https://fortune.com/2026/10/26/anthropic-s1-risk-factors-existential-risk-pentagon-dario-amodei/
- OfficeChai, "5-7% Of Our Revenue Was Because Of Rival Labs' Distillation, Anthropic Tells Investors (citing FT)", 2026-10: https://officechai.com/ai/5-7-of-our-revenue-was-because-of-rival-labs-distillation-anthropic-tells-investors/
- VentureBeat, "Anthropic says DeepSeek, Moonshot and MiniMax used 24,000 fake accounts to...", 2026-02: https://venturebeat.com/ai/anthropic-says-deepseek-moonshot-and-minimax-used-24-000-fake-accounts-to
- Yahoo Finance (republished), "Anthropic's $2 Trillion IPO Dream Meets a $1.5 Trillion Reality Check (Kamina Bashir, BeInCrypto)", 2026-10-15: https://finance.yahoo.com/technology/ai/articles/anthropic-2-trillion-ipo-dream-045506897.html
- Hacker News, "Anthropic S-1 (discussion thread)", 2026-10-26: https://news.ycombinator.com/item?id=50242939
