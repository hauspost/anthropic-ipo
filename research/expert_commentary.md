# Expert Map: commentary on Anthropic's IPO (leaks to S-1)

Compiled 2026-10-26. Expert commentary on Anthropic's IPO: leaks / announcements Jun-Oct 2026 plus public S-1 filed 2026-10-26.

**Method / caveats:** WebSearch + WebFetch. Quotes only where text was actually seen; quote_type says how. Many Bloomberg/CNBC/WSJ/FT/Breakingviews/PitchBook/Morningstar pages returned 401/403 to the fetcher; those items are paraphrased from secondary sources or search snippets and flagged.

**Quote labels:** `verbatim_primary` = seen verbatim on the author's own page or document; `verbatim_secondary` = seen verbatim as quoted in a fetched secondary article; `verbatim_x_index` = X post text as shown in the search index page title (x.com not fetchable); date decoded from the post ID; `verbatim_snippet` = quoted text seen only in a search-result snippet; original blocked -- treat as unverified until checked; `paraphrase` = no verbatim text seen; faithful paraphrase


## At a glance

| Expert | Affiliation | Stance | Date | One-line take |
|---|---|---|---|---|
| Aswath Damodaran | NYU Stern (valuation professor) | neutral-explainer | 2026-10-22 | The IPO will be priced against what investors pay for peers such as OpenAI, not valued on its cash flows. |
| Matt Levine | Bloomberg Opinion (Money Stuff) | neutral-explainer | 2026-10-26 | A frontier-AI prospectus forces the company to choose what good vision of AI to promise and what bad vision to warn about. |
| Jay Ritter | University of Florida, Warrington College of Business ('Mr. IPO') | mixed | 2026-06-05 | Strong businesses can still be poor investments if the price is too high. |
| Matt Kennedy | Renaissance Capital (senior strategist) | neutral-explainer | 2026-10-26 | Anthropic is the swing deal for the whole IPO market. |
| Dan Ives | Wedbush Securities (tech analyst) | bull | 2026-09-29 | He calls Anthropic central to a decade-long build-out of a 'new economy'. |
| Gil Luria | D.A. Davidson (head of technology research) | mixed | 2026-10-19 | He says Anthropic peaked in enterprise earlier in 2026, then slowed as OpenAI caught up and customers moved to cheaper open-weight models. |
| Michael Burry | Investor (Scion; posts on X / 'Cassandra Unchained') | bear | 2026-09-29 | Burry, who holds puts on AI-linked stocks, argues the labs will destroy trillions of dollars of capital. |
| Kyle Guske II (New Constructs) | New Constructs (senior investment analyst; independent research) | bear | 2026-10-06 | A reverse-DCF that deducts $518B of commitments finds $2T needs ~56% revenue CAGR through 2035 at a 10% margin. |
| Harrison Rolfes | PitchBook (senior research analyst, AI/LLM providers) | mixed | 2026-09-02 | He estimates gross margin at about 44%, well short of the ~70% at Microsoft or ServiceNow, and thinks Anthropic needs about 70% to carry commitments that run to 2030-32. |
| Ann Lipton | University of Colorado Law School (corporate/securities law) | bear | 2026-10-18 | Without significant changes, public shareholders in Anthropic get almost no governance rights. |
| Mark D. Levine | New York City Comptroller (trustee/adviser to NYC pension funds, >$325B) | bear | 2026-10-14 | Because Anthropic itself warns of catastrophic or existential AI risk and has called for slowing capabilities, he argues it should pause the IPO. |
| Anders Bylund | The Motley Fool (contributor) | mixed | 2026-10-26 | Public investors get economic exposure but no real say, because the founder LLC has 50.1% of votes and the LTBT elects the board majority. |
| Lise Buyer | Class V Group (IPO adviser) | neutral-explainer | 2026-09-14 | She doesn't expect AI-risk fears to change the IPO's timing but thinks they could change valuation. |
| Lukas Muehlbauer | IPOX (research associate) | neutral-explainer | 2026-10-26 | The listing becomes the public benchmark for valuing frontier labs, but a win for Anthropic does not lift all AI companies equally. |
| Will Rhind | GraniteShares (founder & CEO) | neutral-explainer | 2026-10-26 | A listed Anthropic gives private AI valuations a daily public mark, and success could pull other large AI companies to market. |
| Simeon Hyman | ProShares (global investment strategist) | mixed | 2026-10-26 | Safety is a financial risk as well as an ethical one. |
| Kathleen Hanley | Lehigh University (finance professor) | neutral-explainer | 2026-06-05 | Retail buyers shouldn't count on a quick first-day pop in these mega-IPOs. |
| Chris Hughes | Bloomberg Opinion (deals columnist) | mixed | 2026-10-23 | The AI sell-off reflects oil, rates and geopolitics as well as the overhang of the Anthropic listing. |
| Dave Lee | Bloomberg Opinion (US technology columnist) | neutral-explainer | 2026-10-26 | He reads the S-1's dire warnings about the company and humanity as a deliberate 'anti-sell'. |
| Reuters Breakingviews (columnists) | Reuters Breakingviews | neutral-explainer | 2026-09-23 | The listing would be a public-market audit of what has so far been mostly private enthusiasm for AI. |
| Tomasz Tunguz | Theory Ventures (GP); tomtunguz.com | mixed | 2026-10-26 | Bull case: 11.9x growth on a derived ~40% gross margin, the first operating profit (~$974M in Q2), positive cash flow and almost no drawn debt. |
| Azeem Azhar | Exponential View (founder) | mixed | 2026-09-29 | Behind the $8B 2025 operating loss and $42B net loss (inflated by an accounting charge), he sees a company investing for growth that shows 'green shoots'. |
| Zvi Mowshowitz | Don't Worry About the Vase (Substack); AI-safety-community commentator | mixed | 2026-10-01 | He defends founder control plus the LTBT as appropriate and value-enhancing, while understanding investors who won't buy under it. |
| Dylan Patel | SemiAnalysis (founder/chief analyst) | bull | 2026-10-07 | He says Anthropic's inference economics already cover compute costs, and it could reach roughly $1T of revenue around 2028-29, which would support a $10T valuation. |
| Campbell Hutcheson (Epoch AI guest post) | Epoch AI, Gradient Updates newsletter (guest author) | neutral-explainer | 2026-08-13 | Anthropic raised ~$50B of debt-like financing while revenue was under $9B annualized, because lenders lent against contracted payment streams and suppliers (Broadcom, Google) took on part of the risk. |
| Tae Kim | Key Context (Substack publisher; tech/markets writer) | bull | 2026-10-26 | He reads the blank October-ARR placeholder as a sign the number will be good. |
| Gary Marcus | NYU professor emeritus; Marcus on AI (Substack) | bear | 2026-09-30 | He says growth has stalled and profits rest on 'adjusted' figures. |
| Ed Zitron | EZPR (CEO); Where's Your Ed At newsletter; Better Offline podcast | bear | 2026-09-29 | Using 2025 figures ($12.6B spent, $7.33B of it on compute, for $4.6B of revenue and an $8B operating loss), he calls Anthropic a structurally unprofitable 'dog'. |
| J. Bradford DeLong | UC Berkeley (economist); Grasping Reality (Substack) | bear | 2026-08-16 | He expects the model layer to commoditize like the browser did, leaving thin profits for model sellers. |
| Ross Hendricks | Equity analyst (Porter & Co. per Webull; 'Ross Report' per The Week) | bear | 2026-09-28 | He calls the existential-risk framing a regulatory-capture play against open-source rivals and doubts Anthropic can finance ~$500B of commitments. |
| Martin Peers | The Information (columnist) | neutral-explainer | 2026-09-09 | The IPO roadshow collides with Anthropic researchers publicly putting AI-catastrophe odds above 10%, and with internal reports that raised model-derailment risk from 'very low' to 'low'. |
| Tim O'Reilly, Ilan Strauss, Isobel Moure | Asimov's Addendum (AI Disclosures Project) | neutral-explainer | 2025-12-09 | They wanted the S-1 to disclose circular cloud deals with investor-suppliers, cap-table detail, training-data litigation and operating and safety metrics, and argued existing SEC rules already require much of it. |
| Benedict Evans | Independent analyst (ben-evans.com) | mixed | 2026-06 | Per the recap, OpenAI and Anthropic, each valued near $850-900B privately, were together worth more than every venture-backed company that IPO'd in the 1995-2000 dot-com boom. |

## Finance & markets

### Aswath Damodaran (NYU Stern (valuation professor))

- **Date:** 2026-10-22 (Pre-S-1 blog post written after Anthropic's pre-IPO investor meeting; says he will attempt an intrinsic valuation once the full prospectus is filed.)
- **Outlet:** Musings on Markets (Substack), *From Eyeballs to ARR: Buzzy Pricing Metrics and the AI Trade!*
- **URL:** https://aswathdamodaran.substack.com/p/from-eyeballs-to-arr-buzzy-pricing (secondary: https://advisoranalyst.com/2026/10/26/when-the-price-is-the-story-damodarans-unsentimental-guide-to-the-anthropic-ipo.html/)
- **Stance:** neutral-explainer (Withholds a verdict; skeptical of ARR as a metric and of the pricing process, but calls the bull story plausible.)
- **Topics:** valuation, revenue quality, compute commitments, losses/accounting
- **Quote** [`verbatim_primary`]: "To make a case for Anthropic at a $1.5 or $2 trillion pricing, you will have to make defensible arguments for sky-high revenue growth in the early years, a surge in operating margins to 30% or higher" (Opening clause seen on Substack; continuation as reproduced by AdvisorAnalyst (2026-10-26).)
  - also [`verbatim_primary`]: "the perils with annualized revenue rates (ARR) is that they are not standardized and can be easily gamed"
  - also [`verbatim_primary`]: "Anthropic continues to report gross revenues and the cloud provider payments as expenses"
- **Argument:** The IPO will be priced against what investors pay for peers such as OpenAI, not valued on its cash flows. Getting to $1.5-2T needs very fast early growth, operating margins of 30%+ and a risk profile that falls to average. He flags ARR as unstandardized and gameable, notes Anthropic books revenue gross rather than net, and treats the compute commitments as financial risk.
- **Notes:** His follow-up intrinsic valuation of the public S-1 was not yet found on 2026-10-26. Watch his Substack.

### Matt Levine (Bloomberg Opinion (Money Stuff))

- **Date:** 2026-10-26 (Same-day newsletter on the S-1.)
- **Outlet:** Bloomberg Opinion / Money Stuff, *Anthropic Raises Concerns*
- **URL:** https://www.bloomberg.com/opinion/newsletters/2026-10-26/anthropic-raises-concerns
- **Access:** paywalled/blocked; see quote label
- **Stance:** neutral-explainer
- **Topics:** safety disclosures, governance/LTBT, IPO mechanics
- **Quote:** none captured [`paraphrase`] (Paywalled. Paraphrased from search snippets; full text not seen.)
- **Argument:** A frontier-AI prospectus forces the company to choose what good vision of AI to promise and what bad vision to warn about. Next to SpaceX's huge market-size claim and OpenAI's AGI pitch, he calls Anthropic's framing relatively restrained. The same issue also covers share classes.
- **Other (2026-06-03):** *Opting Out of the AI Boom* https://news.bloomberglaw.com/mergers-and-acquisitions/matt-levines-money-stuff-opting-out-of-the-ai-boom. "In the next few months, SpaceX, Anthropic and OpenAI will all probably go public at massive valuations." [`verbatim_primary`]. They will be fast-tracked into major indexes, so passive funds will have to hold big allocations in 2027. He asks why no index fund lets investors opt out of AI.
- **Other (2026-10-08):** *Pre-IPO Perpetual Futures Swap ETF (Money Stuff)*. [`paraphrase`] On ways to get Anthropic exposure before the IPO: he calls Hyperliquid perpetual futures arguably good, and expensive or fake SPVs bad. Per search snippet only; URL not captured.
- **Notes:** Do not confuse him with NYC Comptroller Mark Levine (separate entry). Zvi (2026-08-27) summarized an earlier Levine take as: founders get most control, the LTBT some, and outside shareholders none.

### Jay Ritter (University of Florida, Warrington College of Business ('Mr. IPO'))

- **Date:** 2026-06-05 (Comment on the SpaceX/OpenAI/Anthropic IPO wave after Anthropic's confidential filing.)
- **Outlet:** Marketplace (APM)
- **URL:** https://www.marketplace.org/story/2026/06/05/should-you-buy-spacex-open-ai-or-anthropic-stock-at-ipo
- **Stance:** mixed (Cautious on returns at IPO prices. His data on dual-class tech IPOs is a point for the bulls.)
- **Topics:** valuation, lock-ups/IPO mechanics, governance/LTBT
- **Quote** [`verbatim_secondary`]: "These are great companies. A great company doesn't automatically mean it's a great investment."
- **Argument:** Strong businesses can still be poor investments if the price is too high. With Ari Pandes he argues the SpaceX template (tiny gross spread, few hedge-fund allocations) threatens Wall Street's IPO economics if Anthropic copies it. His data show dual-class tech IPOs since 1980 beat comparable stocks by about 19 points over three years.
- **Other (2026-10-19):** *Will the Anthropic and OpenAI IPOs follow SpaceX in upending the underwriting market? (with J. Ari Pandes)* https://www.theglobeandmail.com/business/commentary/article-will-the-anthropic-and-openai-ipos-follow-spacex-in-upending-the/. "the profitability of the IPO business for the major underwriters will be under attack." [`verbatim_secondary`]. If issuers cut hedge-fund allocations and spreads, underwriters lose their soft-dollar payoff.
- **Other (2026-10-26):** *Fortune: Anthropic's dual-class share structure borrows ideas from Zuckerberg, Musk and the NYT* https://fortune.com/2026/10/26/anthropic-ipo-dual-class-share-structure-zuckerberg-musk-new-york-times/. [`paraphrase`] Ritter's data: dual-class tech IPOs beat comparables by ~19pp over three years, while single-class ones trailed by ~2.4pp. 41% of 2025 IPOs had multiple share classes, against ~10% historically.
- **Notes:** Ritter's 'You're just asking too much... It's a question of price' (Fortune, 2026-10-21) refers to other recent IPO pullbacks, not to Anthropic. Do not attribute it to Anthropic.

### Matt Kennedy (Renaissance Capital (senior strategist))

- **Date:** 2026-10-26 (Reaction to the public S-1 (Reuters).)
- **Outlet:** Reuters (via Investing.com factbox; Reuters story via InvestmentNews / Idaho Business Review)
- **URL:** https://www.investing.com/news/stock-market-news/factboxanthropic-moves-closer-to-blockbuster-listing-with-us-ipo-filing-4972888 (secondary: https://idahobusinessreview.com/2026/10/26/anthropic-ipo-filing-rapid-growth-high-costs/)
- **Stance:** neutral-explainer
- **Topics:** lock-ups/IPO mechanics, bubble/macro, valuation
- **Quote** [`verbatim_secondary`]: "A successful IPO from Anthropic could crack open or slam shut the IPO market, even well into 2027"
  - also [`verbatim_secondary`]: "Anthropic is entering an IPO market that is far more challenging than the summer."
  - also [`verbatim_secondary`]: "Investors were not questioning valuations the same way a few months ago,"
  - also [`verbatim_secondary`]: "There's no question, a successful Anthropic IPO would be a huge win for the rest of the market," (2026-10-21, https://fortune.com/2026/10/21/is-anthropic-ipo-markets-last-hope-2026/)
- **Argument:** Anthropic is the swing deal for the whole IPO market. The window is tougher than in summer and investors now push back on valuations, but a good outcome could carry 2027 issuance.
- **Other (2026-10-26):** *Renaissance Capital IPO Center: Anthropic files for an estimated $75 billion IPO* https://www.renaissancecapital.com/IPO-Center/News/122417/ai-model-developer-anthropic-pbc-files-for-an-estimated-75-billion-ipo. "That would put its deal size on par with the largest IPO of all time" [`verbatim_primary`]. Estimates a ~$75B raise, a roadshow as soon as the week of Nov 9, pricing the week of Nov 16, 22 bookrunners and LTM revenue of $19.7B.
- **Other (2026-10-26):** *Avery Marquez (Renaissance Capital, director of investment strategies)*. "I do think there will be a bit of hype and frenzy around the name, given that it will be the first major generative AI pure play to come to market." [`verbatim_snippet`]. Expects strong demand as the first major gen-AI pure play. Seen only in a search snippet attributed to Reuters; verify.

### Dan Ives (Wedbush Securities (tech analyst))

- **Date:** 2026-09-29 (Reaction to the Reuters-reported draft prospectus (leak).)
- **Outlet:** Yahoo Finance (Sozzi Unleashed)
- **URL:** https://finance.yahoo.com/technology/article/tech-bull-dan-ives-flags-shocker-risk-in-anthropics-ipo-leak-172922273.html
- **Stance:** bull
- **Topics:** safety disclosures, competition/OpenAI, bubble/macro
- **Quote** [`verbatim_secondary`]: "I think Anthropic is the heart and lungs of the AI revolution,"
  - also [`verbatim_secondary`]: "I continue to view this as kind of a shocker risk relative to what I believe [will happen],"
  - also [`verbatim_secondary`]: "I do think there's some alarmism that's going on here as well."
- **Argument:** He calls Anthropic central to a decade-long build-out of a 'new economy'. He reads the existential-risk disclosures as a jarring 'shocker' risk with some alarmism, not as a reason to avoid the stock.
- **Other (2026-06-03):** *Benzinga/Yahoo: Anthropic Files S-1 Opening The IPO Floodgates* https://finance.yahoo.com/markets/stocks/articles/anthropic-files-1-opening-ipo-023107799.html. "This represents an opening of the floodgates for the IPO market, which has been relatively dormant for a few years" [`verbatim_secondary`]. The confidential filing reopens the mega-IPO market.
- **Notes:** No Ives comment specific to the public S-1 found as of compile time.

### Gil Luria (D.A. Davidson (head of technology research))

- **Date:** 2026-10-19 (Pre-S-1 interview with CNBC, reported by Business Insider/AOL.)
- **Outlet:** CNBC interview via Business Insider (syndicated on AOL)
- **URL:** https://www.aol.com/articles/why-veteran-tech-analyst-says-190013000.html
- **Stance:** mixed (Leans bear on Anthropic stock but bullish on the clouds and chipmakers that serve it.)
- **Topics:** competition/OpenAI, revenue quality, valuation, governance/LTBT
- **Quote** [`verbatim_secondary`]: "Anthropic will end up being a very speculative investment. They may do well, they may not."
  - also [`verbatim_secondary`]: "What happened since then is OpenAI caught up"
  - also [`verbatim_secondary`]: "They're being Machiavellian here." (2026-09-14, https://finance.yahoo.com/markets/article/anthropic-openai-ceos-driven-by-machiavellian-motives-tech-analyst-says-170322466.html)
- **Argument:** He says Anthropic peaked in enterprise earlier in 2026, then slowed as OpenAI caught up and customers moved to cheaper open-weight models. He prefers the hyperscalers and chipmakers that get paid either way, and calls the labs' safety-slowdown rhetoric a bid to consolidate power.
- **Other (2026-10-26):** *CNBC: Anthropic IPO filing: What investors like and key risks* https://www.cnbc.com/2026/10/26/anthropic-ipo-filing-investor-reaction.html. [`paraphrase`] Per search snippet (CNBC blocked): he called net losses 'very small' even after stock comp, cited $112.4B cash plus $19.3B in securities as a positive, and called the PBC language 'unusual'. Verify before quoting.

### Michael Burry (Investor (Scion; posts on X / 'Cassandra Unchained'))

- **Date:** 2026-09-29 (X post the day after Reuters reported the draft prospectus.)
- **Outlet:** X (reported by Stocktwits, Yellow, Benzinga)
- **URL:** https://stocktwits.com/news-articles/markets/equity/michael-burry-says-markets-should-tank-hard-to-stop-open-ai-anthropic-ip-os-for-benefit-of-humanity/cZMnuTLRBWp
- **Stance:** bear
- **Topics:** bubble/macro, valuation, compute commitments
- **Quote** [`verbatim_secondary`]: "For the benefit of humanity, the markets should tank hard and prevent the OpenAI and Anthropic IPOs."
  - also [`verbatim_secondary`]: "destroy TRILLIONS of dollars of capital"
- **Argument:** Burry, who holds puts on AI-linked stocks, argues the labs will destroy trillions of dollars of capital. He says a market sell-off that blocks their IPOs would be the lesser harm.
- **Other (2026-10-06):** *Stocktwits: Anthropic Valuation At $965B Could Swallow Domino's, Clorox, And 76 Other S&P 500 Firms, Burry Says* https://stocktwits.com/news-articles/markets/equity/anthropic-valuation-at-965-b-could-swallow-domino-s-clorox-and-76-other-s-and-p-500-firms-burry-says/cZDtgCARBl0. [`paraphrase`] As a 'fun game', he counted ~78 profitable S&P 500 companies Anthropic's private valuation could buy. Sources give 76 or 78 and Oct 6 or 8.

### Kyle Guske II (New Constructs) (New Constructs (senior investment analyst; independent research))

- **Date:** 2026-10-06 (Research note on the leaked financials, reported Oct 8 (24/7 Wall St.) and Oct 16 (TNW).)
- **Outlet:** New Constructs report via The Next Web / 24/7 Wall St.
- **URL:** https://thenextweb.com/news/anthropic-ipo-valuation-new-constructs-144bn (secondary: https://247wallst.com/investing/2026/10/08/unprecedented-test-of-investor-gullibility-analyst-says-anthropic-could-be-overvalued-by-as-much-as-93-at-a-2-trillion-ipo-valuation/)
- **Stance:** bear
- **Topics:** valuation, compute commitments
- **Quote** [`verbatim_secondary`]: "In short, we don't think Anthropic has a viable business."
  - also [`verbatim_secondary`]: "an unprecedented test of investor gullibility"
- **Argument:** A reverse-DCF that deducts $518B of commitments finds $2T needs ~56% revenue CAGR through 2035 at a 10% margin. A mature-company case (20% margin, 20% growth) gives about $144B, 93% below $2T. The note calls it 'the most ridiculous IPO of 2026' and mainly exit liquidity for insiders.

### Harrison Rolfes (PitchBook (senior research analyst, AI/LLM providers))

- **Date:** 2026-09-02 (Pre-leak gross-margin analysis. A follow-up note (~Oct 2) on the leaked financials is paraphrased below.)
- **Outlet:** Stocktwits (quoting PitchBook)
- **URL:** https://stocktwits.com/news-articles/markets/equity/anthropic-spacex-ipo-crown-ai-growth-microsoft-margins-analyst/cZsAKJTRJuX
- **Stance:** mixed (Sees a very large, fast-growing business but finds $2T hard to justify on disclosed data.)
- **Topics:** valuation, compute commitments, revenue quality
- **Quote** [`verbatim_secondary`]: "you need to bump that gross margin up to like 70%"
  - also [`verbatim_secondary`]: "That number seems realistic, but it is not enough to compete with SaaS companies."
- **Argument:** He estimates gross margin at about 44%, well short of the ~70% at Microsoft or ServiceNow, and thinks Anthropic needs about 70% to carry commitments that run to 2030-32.
- **Other (2026-10-02):** *PitchBook (syndicated by Morningstar): Anthropic's Leaked Financials Reflect Fast Growth, but Not a $2 Trillion Valuation* https://www.morningstar.com/stocks/anthropics-leaked-financials-reflect-fast-growth-not-2-trillion-valuation. [`paraphrase`] Per search snippets (page blocked): $2T is ~31x the July run-rate and ~435x 2025 revenue. Worth well over $1T but not $2T until gross margin, the commitment payment schedule and a path to FCF are disclosed. Notes $34B of the $42B 2025 loss was a non-cash remeasurement.
- **Other (2026-06):** *PitchBook: Anthropic's gross margin is the most important number in tech* https://pitchbook.com/news/articles/anthropics-gross-margin-ipo. [`paraphrase`] Gross margin is the key IPO number (page blocked).

### Anders Bylund (The Motley Fool (contributor))

- **Date:** 2026-10-26 (Same-day S-1 explainer.)
- **Outlet:** The Motley Fool
- **URL:** https://www.fool.com/investing/2026/10/26/anthropics-ipo-keeps-founders-in-control/
- **Stance:** mixed
- **Topics:** governance/LTBT
- **Quote** [`verbatim_secondary`]: "At Anthropic, Wall Street gets to pick up the tab for the compute bills, but it will never get a seat at the table."
- **Argument:** Public investors get economic exposure but no real say, because the founder LLC has 50.1% of votes and the LTBT elects the board majority. Buyers should be comfortable with that before investing.

### Lise Buyer (Class V Group (IPO adviser))

- **Date:** 2026-09-14 (After Amodei's 'pace the frontier' essay and AI-risk headlines, before the leak.)
- **Outlet:** CNBC
- **URL:** https://www.cnbc.com/2026/09/14/anthropic-walks-tightrope-to-nasdaq-pushing-slowdown-and-pursuing-ipo.html
- **Stance:** neutral-explainer
- **Topics:** safety disclosures, valuation, lock-ups/IPO mechanics
- **Quote** [`verbatim_snippet`]: "The bet here is on the long term — now with tempering thoughts about control of the technology" (CNBC blocked the fetcher; text seen only in a search snippet. Verify.)
- **Argument:** She doesn't expect AI-risk fears to change the IPO's timing but thinks they could change valuation. She called the October public-benefit-fund announcement required pre-IPO housekeeping that is also 'beneficial from an image perspective' (CNBC, 2026-10-18, snippet).
- **Other (2026-10-18):** *CNBC: Anthropic commits 5% of shares to new public benefit fund* https://www.cnbc.com/2026/10/18/anthropic-ai-public-benefit-fund.html. [`paraphrase`] Fund timing was needed for IPO prep and good optics (snippet).

### Lukas Muehlbauer (IPOX (research associate))

- **Date:** 2026-10-26 (Reaction to public S-1 (Reuters).)
- **Outlet:** Reuters (via Idaho Business Review / InvestmentNews)
- **URL:** https://idahobusinessreview.com/2026/10/26/anthropic-ipo-filing-rapid-growth-high-costs/
- **Stance:** neutral-explainer
- **Topics:** valuation, competition/OpenAI
- **Quote** [`verbatim_secondary`]: "Its success would not necessarily benefit every AI business equally,"
  - also [`verbatim_secondary`]: "Anthropic's IPO will certainly establish a benchmark for valuing leading AI labs,"
- **Argument:** The listing becomes the public benchmark for valuing frontier labs, but a win for Anthropic does not lift all AI companies equally.

### Will Rhind (GraniteShares (founder & CEO))

- **Date:** 2026-10-26 (Reaction to public S-1.)
- **Outlet:** InvestmentNews
- **URL:** https://www.investmentnews.com/equities/anthropic-ipo-filing-pairs-explosive-growth-with-an-80b-loss/268746
- **Stance:** neutral-explainer
- **Topics:** valuation, lock-ups/IPO mechanics
- **Quote** [`verbatim_secondary`]: "every other private AI company will be measured against a daily public price."
- **Argument:** A listed Anthropic gives private AI valuations a daily public mark, and success could pull other large AI companies to market.

### Simeon Hyman (ProShares (global investment strategist))

- **Date:** 2026-10-26 (Reaction to public S-1.)
- **Outlet:** InvestmentNews
- **URL:** https://www.investmentnews.com/equities/anthropic-ipo-filing-pairs-explosive-growth-with-an-80b-loss/268746
- **Stance:** mixed
- **Topics:** safety disclosures
- **Quote** [`verbatim_secondary`]: "[S]afety incidents could adversely affect company performance."
- **Argument:** Safety is a financial risk as well as an ethical one. Incidents could bring regulation, compliance costs and product delays.

### Kathleen Hanley (Lehigh University (finance professor))

- **Date:** 2026-06-05 (On buying mega-IPOs generally (SpaceX/OpenAI/Anthropic).)
- **Outlet:** Marketplace
- **URL:** https://www.marketplace.org/story/2026/06/05/should-you-buy-spacex-open-ai-or-anthropic-stock-at-ipo
- **Stance:** neutral-explainer
- **Topics:** lock-ups/IPO mechanics
- **Quote** [`verbatim_secondary`]: "For the most part, one should not expect short-run profits right after trading"
- **Argument:** Retail buyers shouldn't count on a quick first-day pop in these mega-IPOs.

### Chris Hughes (Bloomberg Opinion (deals columnist))

- **Date:** 2026-10-23 (Pre-S-1 column during an AI-stock sell-off.)
- **Outlet:** Bloomberg Opinion, *Anthropic, Please Get on With Your IPO to Soothe the AI Trade*
- **URL:** https://www.bloomberg.com/opinion/articles/2026-10-23/anthropic-please-get-on-with-your-ipo-to-soothe-the-ai-trade
- **Access:** paywalled/blocked; see quote label
- **Stance:** mixed
- **Topics:** bubble/macro, revenue quality
- **Quote:** none captured [`paraphrase`] (Paywalled; paraphrased from search snippet.)
- **Argument:** The AI sell-off reflects oil, rates and geopolitics as well as the overhang of the Anthropic listing. Reports of disappointing revenue growth hurt confidence, and getting the deal done would help clear the air.

### Reuters Breakingviews (columnists) (Reuters Breakingviews)

- **Date:** 2026-09-23 (Pre-leak 'Considered View' column. An earlier column ran 2026-06-02.)
- **Outlet:** Reuters Breakingviews, *Anthropic's IPO is a crucial AI gut-check*
- **URL:** https://www.breakingviews.com/columns/considered-view/anthropics-ipo-is-crucial-ai-gut-check-2026-09-23/
- **Access:** paywalled/blocked; see quote label
- **Stance:** neutral-explainer
- **Topics:** bubble/macro, valuation
- **Quote:** none captured [`paraphrase`] (Paywalled (401). Per search snippets/Reuters summary.)
- **Argument:** The listing would be a public-market audit of what has so far been mostly private enthusiasm for AI. The $2T ambition could slip again to after the November US elections.
- **Other (2026-06-02):** *Anthropic IPO could train a large M&A model* https://www.breakingviews.com/columns/breaking-view/anthropic-ipo-could-train-large-ma-model-2026-06-02/. [`paraphrase`] Listed stock would give Anthropic an acquisition currency (inferred from headline; text not seen).
- **Notes:** Forbes (2026-10-26, page blocked) reportedly cited Breakingviews/Ramp data showing Anthropic token consumption up ~90% from early July to late September while spending rose only 19%. Snippet only; verify.

### J. Bradford DeLong (UC Berkeley (economist); Grasping Reality (Substack))

- **Date:** 2026-08-16 (Pre-leak cross-post of Gary Marcus's 'Is Anthropic Making Money?' with his own commentary.)
- **Outlet:** Grasping Reality (Substack)
- **URL:** https://braddelong.substack.com/p/very-partial-crosspost-gary-marcus
- **Stance:** bear
- **Topics:** competition/OpenAI, valuation, revenue quality
- **Quote** [`verbatim_primary`]: "Anthropic should study Netscape and its fate."
  - also [`verbatim_primary`]: "And so should those thinking of investing in its IPO."
  - also [`verbatim_primary`]: "nobody is going to make super-fortunes selling LLM model services to paying customers."
- **Argument:** He expects the model layer to commoditize like the browser did, leaving thin profits for model sellers. IPO buyers should keep Netscape in mind.

### Ross Hendricks (Equity analyst (Porter & Co. per Webull; 'Ross Report' per The Week))

- **Date:** 2026-09-28 (X posts on the Reuters leak.)
- **Outlet:** X (reported by The Week India, Webull, Stocktwits)
- **URL:** https://www.theweek.in/news/biz-tech/2026/09/29/anthropic-ipo-filings-leaked-why-are-investors-skeptical-about-the-ai-giants-upcoming-public-listing.amp.html
- **Stance:** bear
- **Topics:** compute commitments, safety disclosures, competition/OpenAI
- **Quote** [`verbatim_secondary`]: "Anyone still wondering why the company is threatening to end humanity unless the government shuts down their competition?"
  - also [`verbatim_secondary`]: "Just a casual mention of raising half a trillion in a single year, really? Does anyone believe this?"
- **Argument:** He calls the existential-risk framing a regulatory-capture play against open-source rivals and doubts Anthropic can finance ~$500B of commitments.
- **Notes:** Affiliation reported inconsistently across outlets.


## Governance & institutional investors

### Ann Lipton (University of Colorado Law School (corporate/securities law))

- **Date:** 2026-10-18 (Quoted in WSJ (Theo Francis) on the trust structure before the public S-1.)
- **Outlet:** Wall Street Journal (paywalled), quoted by Business Model Analyst (2026-10-19)
- **URL:** https://businessmodelanalyst.com/anthropic-ipo-long-term-benefit-trust-covenants/ (secondary: https://www.wsj.com/tech/ai/anthropic-ipo-private-trust-188f41f7)
- **Access:** paywalled/blocked; see quote label
- **Stance:** bear (Critical on governance (shareholder rights), not a stock call.)
- **Topics:** governance/LTBT
- **Quote** [`verbatim_secondary`]: "public shareholders will have very few governance rights." (Per Business Model Analyst quoting WSJ; WSJ paywalled.)
- **Argument:** Without significant changes, public shareholders in Anthropic get almost no governance rights. Founders hold 50.1% of votes through Class F, and the LTBT elects the board majority.
- **Other (2026-10-19):** *Jens Dammann (University of Texas law professor), per Business Model Analyst* https://businessmodelanalyst.com/anthropic-ipo-long-term-benefit-trust-covenants/. [`paraphrase`] Counts 17 public PBCs by 2024. PBC directors still answer to stockholders who profit if the mission erodes, which is why Anthropic added a trust above the board.

### Mark D. Levine (New York City Comptroller (trustee/adviser to NYC pension funds, >$325B))

- **Date:** 2026-10-14 (Open letter to Dario Amodei citing the draft-S-1 risk disclosures (pre-public S-1).)
- **Outlet:** Office of the NYC Comptroller (letter PDF)
- **URL:** https://comptroller.nyc.gov/wp-content/uploads/documents/Letter-to-Anthropic-from-New-York-City-Comptroller-Mark-Levine.pdf
- **Stance:** bear (Bearish on IPO timing and governance; an institutional-investor voice.)
- **Topics:** safety disclosures, governance/LTBT
- **Quote** [`verbatim_primary`]: "I write to urge Anthropic to pause its planned initial public offering (IPO) until the company fully and transparently addresses the artificial intelligence (AI) safety, governance, and development pace concerns it has raised."
  - also [`verbatim_primary`]: "A gap between control and accountability is especially concerning for investors given the unprecedented risks the company has already acknowledged."
  - also [`verbatim_primary`]: "prudence should not only be shown with respect to the pace of the frontier, it should be also shown with respect to the timing of an IPO."
- **Argument:** Because Anthropic itself warns of catastrophic or existential AI risk and has called for slowing capabilities, he argues it should pause the IPO. He wants it to set out audits, controls and timelines, and says concentrated founder/trustee control widens the gap between control and accountability.
- **Notes:** Bloomberg Government (Oct 16) reported Anthropic opened talks with his office; no delay was agreed. One source puts NYC funds' Anthropic exposure at ~$7M (single-source).

### Tim O'Reilly, Ilan Strauss, Isobel Moure (Asimov's Addendum (AI Disclosures Project))

- **Date:** 2025-12-09 (Earlier context: wishlist of disclosures for an eventual Anthropic S-1 (written before any filing).)
- **Outlet:** Asimov's Addendum (Substack), *Our Anthropic IPO Christmas Wishlist*
- **URL:** https://asimovaddendum.substack.com/p/our-anthropic-ipo-christmas-wishlist
- **Stance:** neutral-explainer
- **Topics:** circular financing, revenue quality, safety disclosures
- **Quote** [`verbatim_primary`]: "We cannot govern markets we don't understand."
- **Argument:** They wanted the S-1 to disclose circular cloud deals with investor-suppliers, cap-table detail, training-data litigation and operating and safety metrics, and argued existing SEC rules already require much of it. Useful as a checklist to score the actual S-1 against.


## AI / tech analysts

### Dave Lee (Bloomberg Opinion (US technology columnist))

- **Date:** 2026-10-26 (Same-day S-1 column (video segment page seen).)
- **Outlet:** Bloomberg Opinion, *Anthropic Is Bringing the 'Anti-Sell' Strategy to Its IPO*
- **URL:** https://www.bloomberg.com/news/videos/2026-10-26/dave-lee-anthropic-brings-anti-sell-strategy-to-ipo-video
- **Access:** paywalled/blocked; see quote label
- **Stance:** neutral-explainer
- **Topics:** safety disclosures
- **Quote:** none captured [`paraphrase`] (Paywalled; paraphrased from Bloomberg video page description.)
- **Argument:** He reads the S-1's dire warnings about the company and humanity as a deliberate 'anti-sell'. Like a recruiting pitch, it repels poor-fit investors and attracts believers.

### Tomasz Tunguz (Theory Ventures (GP); tomtunguz.com)

- **Date:** 2026-10-26 (Same-day S-1 metrics breakdown.)
- **Outlet:** tomtunguz.com, *Anthropic S-1 Analysis: How 7 Key Metrics Stack Up*
- **URL:** https://tomtunguz.com/anthropics-s1-grew-eleven-fold/
- **Stance:** mixed (Leans bull on growth and economics, but frames commitments as the core risk.)
- **Topics:** valuation, compute commitments, customer concentration, losses/accounting
- **Quote** [`verbatim_primary`]: "Building a business that went from $41M to a $16B half-year in three years is without precedent."
  - also [`verbatim_primary`]: "The leverage is instead in commitments."
  - also [`verbatim_primary`]: "The case against is equally simple : $637B of compute commitments, two thirds non-cancelable, against $4.6B of 2025 revenue, where revenue is consumption-based with no lock-in"
- **Argument:** Bull case: 11.9x growth on a derived ~40% gross margin, the first operating profit (~$974M in Q2), positive cash flow and almost no drawn debt. Bear case: $637B of commitments ($265.6B fixed/minimum at June 30 plus $245B since), two-thirds non-cancelable, against consumption revenue customers can cut.
- **Notes:** An earlier post noted Amazon and Google were nearly a quarter of 2025 revenue with no long-term lock-in. His $637B total differs from other outlets' $417B/$518B/$567B; see data_discrepancies.

### Azeem Azhar (Exponential View (founder))

- **Date:** 2026-09-29 (Analysis of the Reuters-reported draft S-1 (leak).)
- **Outlet:** Exponential View (Substack; partly paywalled), *The first existential IPO*
- **URL:** https://www.exponentialview.co/p/the-first-existential-ipo
- **Access:** paywalled/blocked; see quote label
- **Stance:** mixed (Cautiously bullish on the business trajectory; notes the scale of non-cancellable obligations.)
- **Topics:** losses/accounting, compute commitments, safety disclosures
- **Quote** [`verbatim_primary`]: "It is a business whose revenues are growing far faster than its costs."
  - also [`verbatim_primary`]: "c $410bn, cannot be cancelled"
- **Argument:** Behind the $8B 2025 operating loss and $42B net loss (inflated by an accounting charge), he sees a company investing for growth that shows 'green shoots'. Revenue outpaces costs, but about $410B of the $518B commitments cannot be cancelled.

### Dylan Patel (SemiAnalysis (founder/chief analyst))

- **Date:** 2026-10-07 (Big Technology Podcast. Episode date inferred as Wednesday Oct 7 from a TIKR/Yahoo write-up dated Oct 10.)
- **Outlet:** Big Technology Podcast (via Yahoo Finance/TIKR)
- **URL:** https://finance.yahoo.com/technology/ai/articles/investor-predicts-anthropic-could-first-150537121.html
- **Stance:** bull
- **Topics:** valuation, compute commitments, revenue quality
- **Quote** [`verbatim_secondary`]: "Anthropic could even be the first company to be a $10 trillion valuation company in the world."
  - also [`verbatim_secondary`]: "Anthropic is now profitable in terms of compute cost minus revenue"
- **Argument:** He says Anthropic's inference economics already cover compute costs, and it could reach roughly $1T of revenue around 2028-29, which would support a $10T valuation. Elsewhere he has argued OpenAI and Anthropic will control most usable compute by 2028.
- **Notes:** SemiAnalysis's own figures (e.g., ~$50M revenue per MW vs $10-15M cost) are proprietary estimates.

### Campbell Hutcheson (Epoch AI guest post) (Epoch AI, Gradient Updates newsletter (guest author))

- **Date:** 2026-08-13 (Pre-leak case study of how Anthropic finances compute.)
- **Outlet:** Epoch AI - Gradient Updates (Substack), *Will financing bottleneck AI compute? An Anthropic case study*
- **URL:** https://epochai.substack.com/p/will-financing-bottleneck-ai-compute
- **Stance:** neutral-explainer (Leans bullish on financeability; flags that unsupported debt is less tested.)
- **Topics:** compute commitments, circular financing
- **Quote** [`verbatim_primary`]: "Anthropic's buildout therefore suggests that financing is unlikely to be the immediate limit on frontier compute growth."
  - also [`verbatim_primary`]: "Future demand for compute is thereby converted into construction capital and, ultimately, delivered datacenter capacity."
- **Argument:** Anthropic raised ~$50B of debt-like financing while revenue was under $9B annualized, because lenders lent against contracted payment streams and suppliers (Broadcom, Google) took on part of the risk. Vendor support makes compute financeable, which also shows how much of it is supplier-backed.

### Tae Kim (Key Context (Substack publisher; tech/markets writer))

- **Date:** 2026-10-26 (Same-day S-1 read.)
- **Outlet:** Key Context (Substack), *Anthropic: 8 Most Interesting Things in Its S-1 IPO Filing*
- **URL:** https://taekim.substack.com/p/anthropic-8-most-interesting-things
- **Stance:** bull
- **Topics:** revenue quality, compute commitments, competition/OpenAI
- **Quote** [`verbatim_primary`]: "Anthropic would be foolish to include a bad October ARR number when it doesn't have to and it's not foolish."
  - also [`verbatim_primary`]: "I believe it's a good sign that it includes a placeholder for October ARR on page 194 (blank for now)."
- **Argument:** He reads the blank October-ARR placeholder as a sign the number will be good. He highlights 1,900+ $1M customers, revenue growth far ahead of compute spend and positive operating cash flow. He flags TSMC and memory supply as the binding risk.

### Gary Marcus (NYU professor emeritus; Marcus on AI (Substack))

- **Date:** 2026-09-30 (X post after the leak. Earlier Substack and X items below; Oct 26 post is paywalled.)
- **Outlet:** X / Marcus on AI (Substack)
- **URL:** https://x.com/GaryMarcus/status/2105349862355304892
- **Stance:** bear
- **Topics:** revenue quality, valuation, competition/OpenAI, bubble/macro
- **Quote** [`verbatim_x_index`]: "Anthropic ARR is flatlining post tokenmaxxing (as many of us predicted) just as they are about to IPO."
- **Argument:** He says growth has stalled and profits rest on 'adjusted' figures. Frontier models are commoditizing against cheap open-source rivals, so a $2T market cap doesn't add up, and retail investors and pension funds could be left holding the bag.
- **Other (2026-08-24):** *X post* https://x.com/GaryMarcus/status/2092006514005598635. "still more bad news for Anthropic. if they don't scale back expectations for their IPO, it's going to be a trainwreck." [`verbatim_x_index`].
- **Other (2026-08-25):** *Anthropic's $30 trillion fantasy* https://garymarcus.substack.com/p/anthropics-30-trillion-fantasy. "it's not just retail investors who will likely be left holding the bag, but pension funds, too." [`verbatim_primary`]. Cites Thomson Reuters moving work from Claude to Qwen as evidence of weakening demand.
- **Other (2026-10-26):** *AI's make-or-break week?* https://garymarcus.substack.com/p/ais-make-or-break-week. "In some ways, they couldn't have picked a worse week." [`verbatim_primary`]. Rest paywalled.
- **Notes:** Do not use the X post 2096961606332903445 ('The fact that the Anthropic IPO has been delayed...'); it opens with a quotation mark and appears to quote someone else.

### Ed Zitron (EZPR (CEO); Where's Your Ed At newsletter; Better Offline podcast)

- **Date:** 2026-09-29 (X posts after the Reuters leak. No newsletter post on the S-1 found yet.)
- **Outlet:** X
- **URL:** https://x.com/edzitron/status/2104966502365442093
- **Stance:** bear
- **Topics:** losses/accounting, revenue quality, competition/OpenAI
- **Quote** [`verbatim_x_index`]: "Anthropic's leaked IPO prospectus showed that it spent $2.75 to make a dollar in 2025, making it a worse business than OpenAI."
  - also [`verbatim_secondary`]: "Bahahahaha Anthropic is a total dog of a company." (https://www.tradingview.com/news/stocktwits:910e3c7e7094b:0-anthropic-ipo-prospectus-leaked-42b-loss-over-half-a-trillion-in-cloud-commitments-skeptics-lash-out/)
- **Argument:** Using 2025 figures ($12.6B spent, $7.33B of it on compute, for $4.6B of revenue and an $8B operating loss), he calls Anthropic a structurally unprofitable 'dog'. He mocks bulls who say 2025 doesn't count.
- **Notes:** Second X post (2104723741850898575, 2026-09-29 00:03 UTC): 'Spent $12.6bn to make $4.6bn in revenue in 2025, $7.33bn of which was compute costs. Operating loss of $8bn. Losses getting worse.'

### Martin Peers (The Information (columnist))

- **Date:** 2026-09-09 (Pre-leak column after alignment lead Evan Hubinger's >10% doom post.)
- **Outlet:** The Information (paywalled), summarized by Dealroom, *Anthropic's IPO Marketing Meets Extinction Risk*
- **URL:** https://dealroom.co/news/info-qcmon8-anthropics-ipo-marketing-meets-extinction-risk/
- **Access:** paywalled/blocked; see quote label
- **Stance:** neutral-explainer
- **Topics:** safety disclosures
- **Quote:** none captured [`paraphrase`]
- **Argument:** The IPO roadshow collides with Anthropic researchers publicly putting AI-catastrophe odds above 10%, and with internal reports that raised model-derailment risk from 'very low' to 'low'. That leaves the company with an awkward disclosure tension.

### Benedict Evans (Independent analyst (ben-evans.com))

- **Date:** 2026-06 (Earlier context: semiannual 'AI Eats the World' deck (recap dated 2026-06-12), predating the leak and S-1.)
- **Outlet:** ben-evans.com presentation, via Advertiser Intelligence recap
- **URL:** https://advertiserintelligence.substack.com/p/ai-eats-the-world-a-friday-detour (secondary: https://www.ben-evans.com/presentations)
- **Stance:** mixed
- **Topics:** valuation, bubble/macro, competition/OpenAI
- **Quote:** none captured [`paraphrase`]
- **Argument:** Per the recap, OpenAI and Anthropic, each valued near $850-900B privately, were together worth more than every venture-backed company that IPO'd in the 1995-2000 dot-com boom. Either valuations correct, a lab builds a moat nobody has yet invented, or labs capture enough application-layer value to justify the price.
- **Notes:** No Evans comment on the S-1 found. Recap wording, not verified against the deck.


## AI-safety community

### Zvi Mowshowitz (Don't Worry About the Vase (Substack); AI-safety-community commentator)

- **Date:** 2026-10-01 (Weekly roundup (AI #188) after the prospectus leak. Earlier (Aug 27) and later (Oct 15) items below.)
- **Outlet:** Don't Worry About the Vase (Substack), *AI #188: Gemini Dot Argon*
- **URL:** https://thezvi.substack.com/p/ai-188-gemini-dot-argon
- **Stance:** mixed (Pro-governance-structure; calls Q3 revenue disappointing.)
- **Topics:** governance/LTBT, safety disclosures, compute commitments, revenue quality
- **Quote** [`verbatim_primary`]: "this seems entirely appropriate to me, and I also think it makes the company more valuable rather than less valuable." (On cofounders seeking 50.1% voting control alongside the LTBT.)
- **Argument:** He defends founder control plus the LTBT as appropriate and value-enhancing, while understanding investors who won't buy under it. He doubts the LTBT has much real leverage beyond appointing ordinary business people to the board. He called Q3 revenue of $16.8B 'highly disappointing'.
- **Other (2026-08-27):** *AI #183: Pre Post Mortem* https://thezvi.substack.com/p/ai-183-pre-post-mortem. "the LTBT has some influence but I don't expect them to in practice have that much leverage" [`verbatim_primary`]. Super-voting shares are close to necessary 'given their goals and cap table'.
- **Other (2026-10-15):** *AI #190: Scion of the Times* https://thezvi.substack.com/p/ai-190-scion-of-the-times. "Anthropic revenue hit a highly disappointing $16.8 billion in the third quarter" [`verbatim_primary`]. Manifold's expected IPO value fell ~4% on the news, 'which seems fair'.
- **Notes:** A post-S-1 piece ('Anthropic's S-1: The IPO Prospectus') appears to exist as an Askwho Casts AI audio narration dated 2026-10-26, but the narration doesn't name the author and the text wasn't found on thezvi.substack.com. Unconfirmed.


## The 5 strongest bull arguments

1. **Growth with improving unit economics.** Revenue went from ~$41M to $16.3B a half-year in about three years. H1-2026 operating loss narrowed to $693M, Q2 showed an operating profit, operating cash flow turned positive (+$3.9B) and adjusted operating income was profitable. Revenue is growing faster than costs. *Made by:* Tomasz Tunguz, Azeem Azhar, Tae Kim.
2. **The scary net loss is mostly an accounting mark.** $72.4B of the $80.7B H1 net loss, and ~$34B of the $42B 2025 loss, are non-cash fair-value charges on convertible notes, SAFEs and derivatives as the company's value rose. Economically, the operating line and cash flow matter more. *Made by:* Harrison Rolfes (PitchBook), Gil Luria (D.A. Davidson, per CNBC snippet), Azeem Azhar.
3. **Inference already pays; the upside is enormous.** Revenue minus compute cost is already positive. Enterprise adoption is deep (1,900+ customers paying $1M+ a year), and if revenue approaches ~$1T by 2028-29, Anthropic could be the first $10T company. *Made by:* Dylan Patel (SemiAnalysis), Tae Kim.
4. **Compute is financeable and the balance sheet is strong.** Lenders and suppliers (Broadcom, Google) have financed capacity against contracted payments, so financing is not the near-term bottleneck. Anthropic has essentially no drawn debt, a large cash pile and an undrawn $15B revolver. *Made by:* Epoch AI (Campbell Hutcheson), Tomasz Tunguz, Matt Kennedy (Renaissance), Gil Luria (cash pile, per snippet).
5. **Scarcity, index demand and a governance structure that can add value.** It is the first major gen-AI pure play, Ives calls it 'the heart and lungs of the AI revolution', and Nasdaq-100 fast entry forces index buying. Zvi argues founder control plus the LTBT makes the company more valuable, and Ritter's data show dual-class tech IPOs have historically outperformed. *Made by:* Dan Ives (Wedbush), Zvi Mowshowitz, Jay Ritter (data), Matt Levine (index-inclusion logic), Avery Marquez (Renaissance, snippet).

## The 5 strongest bear arguments

1. **The price needs heroic assumptions.** $1.5-2T needs 30%+ operating margins and sky-high growth (Damodaran) and is ~31x the July run-rate (PitchBook). A mature-company DCF gives ~$144B (New Constructs). The private valuation alone could buy ~78 profitable S&P 500 companies (Burry). Good company is not the same as good investment (Ritter). *Made by:* Aswath Damodaran, Harrison Rolfes (PitchBook), New Constructs (Kyle Guske II), Michael Burry, Jay Ritter.
2. **The leverage is hidden in compute commitments.** Hundreds of billions in mostly non-cancelable compute obligations ($518B-$637B depending on definition; ~$410B non-cancelable per the leak) set against consumption revenue with no lock-in. The payments are owed whether customers stay or not. Rolfes thinks ~70% gross margins are needed to carry them, against ~44% now. *Made by:* Tomasz Tunguz (bear case), Azeem Azhar, Harrison Rolfes (PitchBook), Ross Hendricks, Aswath Damodaran (financial risk).
3. **Growth is slowing as models commoditize.** OpenAI caught up and enterprises shifted to open-weight models (Luria). ARR is 'flatlining' (Marcus) and Q3 was 'highly disappointing' (Zvi). Model-selling may go the way of Netscape (DeLong), and reports of weak revenue growth shook the AI trade (Hughes). *Made by:* Gil Luria, Gary Marcus, Zvi Mowshowitz, Brad DeLong, Chris Hughes (Bloomberg Opinion).
4. **Revenue quality, concentration and circularity.** ARR is unstandardized and gameable, and Anthropic books cloud-marketplace revenue gross (Damodaran). Nearly half of 2025 sales ran through Amazon and Google, who are also investors, suppliers and competitors. The top two customers are ~20% of revenue. The 2025 cost base was $2.75 per $1 of revenue (Zitron). *Made by:* Aswath Damodaran, Tomasz Tunguz, Ed Zitron, Reuters/Calcalist analysis, Asimov's Addendum (disclosure ask).
5. **Public shareholders carry the risk without control, amid existential-risk disclosures.** Class F gives seven founders 50.1% of votes and the LTBT elects the board majority, so public holders get 'very few governance rights' (Lipton). The NYC Comptroller wants the IPO paused over a 'gap between control and accountability'. The company's own catastrophic-risk warnings are a 'shocker risk' (Ives), and safety incidents are a financial risk (Hyman). Burry and Hendricks argue the AI-risk rhetoric serves the labs themselves. *Made by:* Ann Lipton, Mark D. Levine (NYC Comptroller), Anders Bylund (Motley Fool), Dan Ives, Simeon Hyman (ProShares), Michael Burry, Ross Hendricks.

## Rules & institutions context (index inclusion, lock-ups, proxy-adviser positions)

- **S-1 own risk factor on indices:** The S-1 warns that 'our multi-class capital structure may make us ineligible for inclusion in indices' (p. 109), which could keep some index funds out. *Source:* Anthropic S-1 (per sibling research file risk_factors_b_notes.md) (https://www.sec.gov/Archives/edgar/data/0002130357/000162828026067168/anthropicpbc-sx1.htm)
- **S&P DJI multi-class policy:** Since 2023-04-17, companies with multiple share classes are eligible for the S&P Composite 1500 (incl. S&P 500) if they meet other criteria. Separately, S&P 500 entry requires positive GAAP earnings, so a large GAAP net loss (H1 2026: -$80.7B) would appear to block near-term S&P 500 inclusion. That is an inference; check against the methodology. *Source:* S&P DJI press release 2023-04-17; S&P US Indices methodology (July 2026) (https://press.spglobal.com/2023-04-17-S-P-Dow-Jones-Indices-Announces-Results-of-S-P-Composite-1500-Index-Consultation-on-Share-Class-Eligibility-Rules)
- **Nasdaq-100 fast entry:** Effective 2026-05-01: a new listing ranking in the top 40 by full market value joins after 15 trading days (with 5 days' notice). SpaceX listed 2026-06-12 and joined 2026-07-07, and its multi-class structure did not block it. Weighting is float-based, so the initial weight would be far below Anthropic's market cap. *Source:* Motley Fool 2026-09-23; Yahoo Finance (Jared Blikre) 2026-10-26 (https://finance.yahoo.com/markets/article/anthropics-ipo-could-set-off-forced-buying-by-index-funds-spacex-shows-how-that-played-out-161356189.html)
- **Lock-ups:** Per S-1 (sibling research): co-founders and >0.5% holders locked until the earlier of ~365 days or 2 trading days after Q3-2027 results; others ~180 days or after Q1-2027 results. It is a staircase, not a cliff, and banks may release early. *Source:* S-1 pp. 317-323 (sibling file s1_governance.md); Yahoo Finance 2026-10-26 (https://www.sec.gov/Archives/edgar/data/0002130357/000162828026067168/anthropicpbc-sx1.htm)
- **Nasdaq 'controlled company':** Because the LTBT elects the board majority, Anthropic is a Nasdaq 'controlled company'. It says it will use the exemption only for a not-fully-independent nominating/governance committee. *Source:* S-1 (sibling research) (https://www.sec.gov/Archives/edgar/data/0002130357/000162828026067168/anthropicpbc-sx1.htm)
- **Council of Institutional Investors (CII):** CII has a long-standing 'one share, one vote' policy and opposes dual-class structures. No Anthropic-specific CII statement was found as of 2026-10-26. *Source:* General policy (Wikipedia summary); no Anthropic statement located (https://en.wikipedia.org/wiki/Council_of_Institutional_Investors)
- **ISS / Glass Lewis / Bebchuk / FTSE Russell:** No Anthropic-specific statements found in this pass. Background, unverified this session: FTSE Russell requires >5% of voting rights in unrestricted (public) hands, and Class A's up-to-49.9% would appear to clear that. Verify. *Source:* Not located

## Data discrepancies to resolve before publishing

- Compute commitments are reported very differently: $518B over 7-10 years, ~80% non-cancellable (Reuters on the draft, Sept 28-29); ~$417B (CNBC/DCD on the public S-1); $265.6B fixed/minimum at June 30 plus $245B executed since, $637B total incl. cancellable (Tunguz, Yahoo); 'up to $567B' (Fortune headline); $587B through 2045 (snippet). The site should show the S-1's own table and definitions.
- Valuation talk: $965B post-money (May 2026 Series H); $2T+ (FT, Aug-Sept); $1.5-1.75T (FT/AA, Oct 26); the S-1 has no price range yet.
- Q3 2026 revenue of $16.8B and ARR of $67B come from press reports of an investor meeting (cited by Damodaran and Zvi), not the S-1. The S-1 leaves an October-ARR placeholder blank (Tae Kim).
- Customer concentration: ~47% of 2025 sales routed through Amazon and Google (Reuters/Calcalist, 2025-draft); top two customers ~20% of H1-2026 revenue; top five ~25% of 9M-2026 revenue; ~48% of H1-2026 revenue via cloud marketplaces (Forbes/Fortune).

## Gaps / follow-ups

- Not found or no Anthropic-specific commentary located: Ben Thompson (Stratechery), Bill Gurley, Byrne Hobart (The Diff), Jim Chanos (only SpaceX 'largest global neocloud' comments, relevant because SpaceX is a major Anthropic compute supplier), Casey Newton (Platformer), Kathleen Smith, Lucian Bebchuk, ISS, Glass Lewis, FT Lex/Alphaville, Barron's.
- Not searched (shared web-search budget exhausted): Ethan Mollick, Packy McCormick, a16z voices, LessWrong/EA Forum posts on the LTBT, Morningstar equity research (one snippet cited a Morningstar analyst calling it the 'fastest scaleup' but the name could not be verified, so it is excluded).
- Paywalled or blocked, paraphrased only: Bloomberg (Levine, Hughes, Lee; also 'Anthropic IPO Prospectus Is Long on Flash, Short on Information', 2026-10-06, and 'Anthropic Has Bigger Safety and IPO Problems Than Claude's Feelings', 2026-10-13, authors not captured), WSJ (Lipton), Breakingviews, The Information, CNBC (Luria same-day, Buyer), PitchBook/Morningstar (Rolfes Oct note).
- Likely next-48h items to check: Damodaran's promised intrinsic valuation; Zitron newsletter; Stratechery; Money Stuff follow-ups; Breakingviews/Lex on the public S-1; Renaissance Capital pre-IPO research.
