# Context datasets for the Anthropic IPO explainer

Compiled 2026-10-26. Machine-readable twin: `context_data.json` (same folder). Every row carries value, unit, date, status, source and URL.

**Status labels:** reported_actual (filed/company-reported historical), company_disclosed (company blog/IR, unaudited), press_reported (sources/leaks), estimate (third-party), projection, guidance, computed (derived here - formula in notes), market_data (aggregator, dated close).

**Global caveats**

- Run-rate/annualized revenue is NOT GAAP revenue; OpenAI and Anthropic compute it differently (FT, Oct 2026).
- IPO-price valuations marked 'basic computed' = shares outstanding after offering x offer price from the 424B4; press figures are often fully diluted and higher.
- Capex definitions differ: cash PP&E vs incl. finance leases; fiscal vs calendar years.
- Market multiples ('market_data') are from StockAnalysis.com at 26 Oct 2026 close - re-pull before publishing.
- Web search budget was exhausted mid-session; items marked NOT VERIFIED need a follow-up check.

## 1. Largest IPOs

Sorted by amount raised (nominal). Inflation-adjusted figures are from Wikipedia's IPO table (base year not stated). SK hynix is an ADR listing of an already-listed company, so flag it if it appears in a 'largest IPO' ranking.

| Company | Year | Exchange | Raised (USD bn) | Raised range | Infl.-adj. (USD bn) | Valuation at IPO price (USD bn) | First-day mkt cap (USD bn) | Status | Source |
|---|---|---|---|---|---|---|---|---|---|
| SpaceX | 2026 | Nasdaq | 85.7 | - | - | 1770 | 2100 | reported_actual | [Reuters via The Standard (HK)](https://www.thestandard.com.hk/finance/article/334718/SpaceX-IPO-raises-US857-billion-as-underwriters-exercise-greenshoe-option) |
| Saudi Aramco | 2019 | Tadawul (Riyadh) | 29.4 | 25.6-29.4 | 37.02 | - | 1880 | reported_actual | [Arab News (12 Jan 2020) via Wikipedia IPO table; CNN (5 Dec 2019) for base](https://en.wikipedia.org/wiki/Initial_public_offering) |
| SK hynix | 2026 | Nasdaq (ADR) | 26.5 | - | - | - | - | reported_actual | [Reuters via Yahoo Finance; Bloomberg](https://finance.yahoo.com/markets/stocks/articles/sk-hynix-us-listing-more-013843971.html) |
| Alibaba | 2014 | NYSE | 25 | 21.8-25 | 34.0 | - | 231 | reported_actual | [Reuters (19 Sep 2014) via Wikipedia; WSJ on greenshoe](https://www.reuters.com/article/us-alibaba-ipo/alibaba-surges-38-percent-on-massive-demand-in-market-debut-idUSKBN0HD2CO20140919) |
| SoftBank Corp. | 2018 | Tokyo Stock Exchange | 23.5 | 21.15-23.5 | 30.13 | - | - | reported_actual | [Fortune (11 Dec 2018) via Wikipedia IPO table](https://en.wikipedia.org/wiki/Initial_public_offering) |
| Agricultural Bank of China | 2010 | Shanghai + Hong Kong | 22.1 | 19.21-22.1 | 32.63 | - | - | reported_actual | [WSJ (13 Aug 2010) via Wikipedia](https://www.wsj.com/articles/SB10001424052748703960004575427192644180132) |
| ICBC | 2006 | Shanghai + Hong Kong | 21.9 | - | 34.98 | - | 156.3 | reported_actual | [Wikipedia (citing Bloomberg)](https://en.wikipedia.org/wiki/Industrial_and_Commercial_Bank_of_China) |
| AIA Group | 2010 | Hong Kong | 20.5 | - | 30.27 | - | - | reported_actual | [Wikipedia AIA Group (HK$159.08bn) / Bloomberg via Wikipedia IPO table](https://en.wikipedia.org/wiki/AIA_Group) |
| Visa | 2008 | NYSE | 19.1 | 17.9-19.7 | 29.46 | - | - | reported_actual | [Wikipedia Visa Inc. (citing Fortune/CNN); WSJ figure via Wikipedia IPO table](https://en.wikipedia.org/wiki/Visa_Inc.) |
| General Motors | 2010 | NYSE + Toronto | 18.15 | 18.15-23.1 | 26.8 | - | - | reported_actual | [WSJ via Wikipedia IPO table; Bloomberg (26 Nov 2010) for total incl. over-allotment + preferred](https://en.wikipedia.org/wiki/Initial_public_offering) |
| Facebook | 2012 | Nasdaq | 16.01 | - | 22.45 | 104 (basic 81.2) | - | reported_actual | [NYT DealBook (17 May 2012); SEC 424B4](https://www.sec.gov/Archives/edgar/data/1326801/000119312512240111/d287954d424b4.htm) |
| Rivian | 2021 | Nasdaq | 11.93 | 11.93-13.5 | - | 67.7 (basic, computed) | 100 | reported_actual | [SEC 424B4](https://www.sec.gov/Archives/edgar/data/1874178/000119312521328239/d157488d424b4.htm) |
| Uber | 2019 | NYSE | 8.1 | - | - | 75.7 (basic, computed) | - | reported_actual | [SEC 424B4](https://www.sec.gov/Archives/edgar/data/1543151/000119312519144716/d647752d424b4.htm) |
| Cerebras | 2026 | Nasdaq | 5.55 | - | - | 39.8 basic / 56.43 fully diluted | - | reported_actual | [SEC 424B4](https://www.sec.gov/Archives/edgar/data/2021728/000162828026035214/cerebras-424b4.htm) |
| Arm | 2023 | Nasdaq | 4.87 | - | - | 54.5 (basic 52.3) | - | reported_actual | [SEC 424B4; Axios via Wikipedia](https://www.sec.gov/Archives/edgar/data/1973239/000119312523235320/d550931d424b4.htm) |
| Snowflake | 2020 | NYSE | 3.36 | - | - | 33.2 (basic, computed) | - | reported_actual | [SEC 424B4](https://www.sec.gov/Archives/edgar/data/1640147/000162828020013667/snowflake424b4.htm) |
| CoreWeave | 2025 | Nasdaq | 1.5 | - | - | 18.6 (basic, computed) | - | reported_actual | [SEC 424B4](https://www.sec.gov/Archives/edgar/data/1769628/000119312525067651/d899798d424b4.htm) |
| Klarna | 2025 | NYSE | 1.37 | - | - | 15.1 (basic, computed) | - | computed | [SEC 424B4](https://www.sec.gov/Archives/edgar/data/2003292/000200329225000052/klarnagroupplc424b4.htm) |
| Figma | 2025 | NYSE | 1.22 | - | - | 16.1 (basic, computed) | 56.3 | reported_actual | [SEC 424B4](https://www.sec.gov/Archives/edgar/data/1579878/000162828025037014/figma424b4.htm) |
| Anthropic | 2026 | Nasdaq (proposed) | - | - | - | - | - | press_reported | [Anthropic newsroom (S-1 filed; terms not set); press talk](https://www.anthropic.com/news/s1-sec) |
| OpenAI | - | n/a | - | - | - | - | - | press_reported | [Wikipedia OpenAI (citing The Times 9 Jun 2026; Fortune 12 Sep 2026)](https://fortune.com/2026/09/12/sam-altman-openai-ipo-delay-ill-advised-moment-safety-concerns/) |

*Row notes:*

- **SpaceX:** Base deal 555,555,555 Class A shares x $135 = ~$75.0bn (computed); greenshoe 83,333,333 shares. Largest IPO ever.
- **Saudi Aramco:** Base raise $25.6bn (CNN https://www.cnn.com/2019/12/05/investing/saudi-aramco-ipo-price/index.html); $29.4bn after greenshoe. Wikipedia inflation-adjusted: $37.02bn (base year not stated).
- **SK hynix:** ADRs priced $149 (10 ADRs = 1 share); Nasdaq ticker SKHY, trading from 10 Jul 2026. Bloomberg: biggest US debut by a foreign company. NOT a true IPO (primary listing in Seoul) - flag if ranking.
- **Alibaba:** Priced $68. Base deal ~$21.8bn per press summaries (not verified in primary doc this session). Wikipedia inflation-adjusted $34.0bn. Market value $231bn at first-day close (Reuters).
- **SoftBank Corp.:** Priced JPY 1,500/share (TechCrunch https://techcrunch.com/2018/11/29/softbank-sets-indicative-share-price-of-1500-yen-for-next-months-ipo/). Wikipedia SoftBank Group page gives ~$21.15bn; range recorded. Inflation-adjusted $30.13bn.
- **Agricultural Bank of China:** Base $19.21bn on 6 Jul 2010 (WSJ Deals blog https://blogs.wsj.com/deals/2010/07/06/agbanks-ipo-emerging-markets-continue-to-dominate-developed-world/). Inflation-adjusted $32.63bn.
- **ICBC:** $16bn Hong Kong + $5.9bn Shanghai. First-day market cap ~US$156.3bn (Bloomberg, HK shares basis). Inflation-adjusted $34.98bn.
- **AIA Group:** Inflation-adjusted $30.27bn.
- **Visa:** 406m shares at $44 = $17.9bn base; $19.1bn with over-allotment (446.6m shares). WSJ table lists $19.7bn. Range recorded. Inflation-adjusted (Wikipedia) $29.46bn.
- **General Motors:** Common-stock figure $18.15bn; Bloomberg: total offering $23.1bn incl. over-allotment options and preferred. Inflation-adjusted $26.80bn.
- **Facebook:** 421,233,615 Class A shares at $38. Valuation at IPO price $104bn as widely reported (fully diluted; Wikipedia/NYT); basic shares outstanding 2,138,085,037 x $38 = $81.2bn (computed from 424B4). First-day close $38.23. Inflation-adjusted $22.45bn.
- **Rivian:** 153m shares at $78. Wikipedia cites ~$13.5bn incl. over-allotment. Basic shares after offering 868,277,142 x $78 = $67.7bn (computed). First-day close $100.73, market value just under $100bn (CNBC via Wikipedia).
- **Uber:** 180m shares at $45. Basic shares after offering + private placement 1,682,521,965 x $45 = $75.7bn (computed; press fully-diluted figure not verified this session).
- **Cerebras:** 30m Class A at $185. Basic Class A+B after offering 215,110,345 x $185 = $39.8bn (computed); Reuters fully diluted $56.43bn (via https://letsdatascience.com/news/cerebras-raises-555b-in-largest-us-ipo-46ee0c1c).
- **Arm:** 95.5m ADS at $51 (all secondary, sold by SoftBank). $54.5bn valuation (Axios https://www.axios.com/2023/09/13/arm-ipo-pricing-nvidia-chips); basic 1,026,054,856 shares x $51 = $52.3bn (computed).
- **Snowflake:** 28m shares at $120. Basic Class A+B after offering 276,694,828 x $120 = $33.2bn (computed).
- **CoreWeave:** 37.5m shares at $40 (cut from planned $2.7bn per Bloomberg). Basic Class A+B 464,099,446 x $40 = $18.6bn (computed).
- **Klarna:** 34,311,274 shares x $40 (5m primary, rest secondary). Ordinary shares outstanding 377,255,045 x $40 = $15.1bn (computed; excludes non-economic Class B).
- **Figma:** Priced $33. Basic Class A+B 487,460,903 x $33 = $16.1bn (computed). First-day close market value $56.3bn (Yahoo Finance via Wikipedia https://finance.yahoo.com/news/figma-indicated-112-above-ipo-152947660.html).
- **Anthropic:** Nasdaq Global Select, ticker ANT. Shares/price range not yet determined in S-1. Press talk: raise up to ~$100bn at ~$2T valuation (single secondary summary, unverified); Polymarket/press also mention ~$1.5T range. Treat as talk, not fact.
- **OpenAI:** Confidential draft S-1 disclosed 8 Jun 2026; Altman said in Sep 2026 no IPO in 2026 (2027 earliest).

**Largest market capitalisations at or around IPO day**

| Item | Value | Unit | Date | Status | Source | Notes |
|---|---|---|---|---|---|---|
| SpaceX - market cap at first-day close | 2,100 | USD bn | 2026-06-12 | reported_actual | [CNBC / WSJ via Wikipedia](https://www.cnbc.com/2026/06/12/spacex-stock-jumps-2-trillion.html) | Closed ~$161 (+19%). Valuation at $135 IPO price: $1.77T (Fortune). |
| Saudi Aramco - market cap at first-day close | 1,880 | USD bn | 2019-12-11 | reported_actual | [The Guardian via Wikipedia](https://www.theguardian.com/business/2019/dec/11/saudi-aramco-shares-soar-as-it-becomes-world-largest-listed-company) | Shares +10% to SAR 35.2; passed $2T on day 2. |
| Alibaba - market value at first-day close | 231 | USD bn | 2014-09-19 | reported_actual | [Reuters via Wikipedia](https://www.reuters.com/article/us-alibaba-ipo/alibaba-surges-38-percent-on-massive-demand-in-market-debut-idUSKBN0HD2CO20140919) |  |
| ICBC - market cap end of first day (HK basis) | 156.3 | USD bn | 2006-10-27 | reported_actual | [Bloomberg via Wikipedia](https://en.wikipedia.org/wiki/Industrial_and_Commercial_Bank_of_China) | Date is first HK/Shanghai trading day (Oct 2006); exact day not re-verified. |
| Facebook - valuation at IPO price | 104 | USD bn | 2012-05-17 | reported_actual | [Wikipedia / NYT](https://en.wikipedia.org/wiki/Initial_public_offering_of_Facebook) | Fully diluted; basic computed $81.2bn. |
| Rivian - market value at first-day close | 100 | USD bn (approx, 'just under') | 2021-11-10 | reported_actual | [CNBC via Wikipedia](https://www.cnbc.com/2021/11/11/rivian-founder-rj-scaringe-is-worth-2point2-billion-after-companys-ipo.html) |  |
| Figma - market value at first-day close | 56.3 | USD bn | 2025-07-31 | reported_actual | [Yahoo Finance via Wikipedia](https://finance.yahoo.com/news/figma-indicated-112-above-ipo-152947660.html) |  |
| Arm - valuation at IPO price | 54.5 | USD bn | 2023-09-13 | reported_actual | [Axios via Wikipedia](https://www.axios.com/2023/09/13/arm-ipo-pricing-nvidia-chips) |  |

## 2. Revenue multiples (price-to-sales / EV-to-sales)

Multiples marked 'at IPO' are computed at the offer price, using trailing revenue from the prospectus. Multiples marked 'now' are StockAnalysis.com TTM figures at the 26 Oct 2026 close. The AI-lab rows divide a valuation by annualized run-rate, which flatters the multiple compared with trailing GAAP revenue.

| Item | Value | Unit | Date | Status | Source | Notes |
|---|---|---|---|---|---|---|
| Snowflake at IPO - price/TTM sales (basic, IPO price) | 82.5 | x | 2020-09-15 | computed | [SEC 424B4](https://www.sec.gov/Archives/edgar/data/1640147/000162828020013667/snowflake424b4.htm) | Basic mcap $33.2bn / TTM revenue to 31 Jul 2020 $402.7m (FY20 $264.7m - 6M FY20 $104.0m + 6M FY21 $242.0m). At first-day trading prices the multiple was far higher (first-day close not verified this session). |
| Meta/Facebook at IPO - price/TTM sales | 25.8 (range 20.1-25.8) | x | 2012-05-17 | computed | [SEC 424B4 + reported $104bn valuation](https://www.sec.gov/Archives/edgar/data/1326801/000119312512240111/d287954d424b4.htm) | $104bn / TTM revenue to 31 Mar 2012 $4.038bn (2011 $3,711m - Q1'11 $731m + Q1'12 $1,058m). On basic shares ($81.2bn): 20.1x. |
| Arm at IPO - price/TTM sales | 20.5 (range 19.7-20.5) | x | 2023-09-13 | computed | [SEC 424B4 + Axios $54.5bn](https://www.sec.gov/Archives/edgar/data/1973239/000119312523235320/d550931d424b4.htm) | $54.5bn / TTM revenue to 30 Jun 2023 $2.662bn (FY23 $2,679m - Q1FY23 $692m + Q1FY24 $675m). Basic: 19.7x. |
| CoreWeave at IPO - price/sales (2024 revenue) | 9.7 | x | 2025-03-27 | computed | [SEC 424B4](https://www.sec.gov/Archives/edgar/data/1769628/000119312525067651/d899798d424b4.htm) | Basic mcap $18.6bn / 2024 revenue $1.915bn (2024 revenue grew 737%). Excludes ~$billions of debt (EV/sales higher). |
| Palantir - P/S (TTM) | 77.62 | x | 2026-10-26 | market_data | [StockAnalysis.com (third-party market data aggregator)](https://stockanalysis.com/stocks/pltr/statistics/) | Mcap $477.8bn; EV/sales 76.13x; fwd P/S 46.89x; TTM revenue $6.16bn. |
| SpaceX - P/S (TTM) | 62.26 | x | 2026-10-26 | market_data | [StockAnalysis.com (third-party market data aggregator)](https://stockanalysis.com/stocks/spcx/statistics/) | Mcap $2.00T; EV/sales 60.68x; TTM revenue $32.04bn; price $146.90 vs $135 IPO. |
| Cerebras - P/S (TTM) | 37.82 | x | 2026-10-26 | market_data | [StockAnalysis.com (third-party market data aggregator)](https://stockanalysis.com/stocks/cbrs/statistics/) | Mcap $25.7bn; EV/sales 28.37x; price $108.37 vs $185 IPO. |
| Snowflake (now) - P/S (TTM) | 21.67 | x | 2026-10-26 | market_data | [StockAnalysis.com (third-party market data aggregator)](https://stockanalysis.com/stocks/snow/statistics/) | Mcap $118.1bn; EV/sales 21.38x. |
| NVIDIA - P/S (TTM) | 17.26 | x | 2026-10-26 | market_data | [StockAnalysis.com (third-party market data aggregator)](https://stockanalysis.com/stocks/nvda/statistics/) | Mcap $5.22T; EV/sales 17.18x; fwd P/S 9.71x; TTM revenue $302.97bn. |
| Microsoft - P/S (TTM) | 11.92 | x | 2026-10-26 | market_data | [StockAnalysis.com (third-party market data aggregator)](https://stockanalysis.com/stocks/msft/statistics/) | Mcap $3.96T; EV/sales 12.07x; fwd 10.10x. |
| Alphabet - P/S (TTM) | 8.69 | x | 2026-10-26 | market_data | [StockAnalysis.com (third-party market data aggregator)](https://stockanalysis.com/stocks/googl/statistics/) | Mcap $3.87T; EV/sales 8.42x; fwd 6.97x. |
| Meta (now) - P/S (TTM) | 6.67 | x | 2026-10-26 | market_data | [StockAnalysis.com (third-party market data aggregator)](https://stockanalysis.com/stocks/meta/statistics/) | Mcap $1.61T; EV/sales 6.81x. |
| Oracle - P/S (TTM) | 5.32 | x | 2026-10-26 | market_data | [StockAnalysis.com (third-party market data aggregator)](https://stockanalysis.com/stocks/orcl/statistics/) | Mcap $382.2bn; EV/sales 7.16x (total debt $169.1bn). |
| Salesforce - P/S (TTM) | 4.6 | x | 2026-10-26 | market_data | [StockAnalysis.com (third-party market data aggregator)](https://stockanalysis.com/stocks/crm/statistics/) | Mcap $203.8bn; EV/sales 5.30x. |
| CoreWeave (now) - P/S (TTM) | 4.12 | x | 2026-10-26 | market_data | [StockAnalysis.com (third-party market data aggregator)](https://stockanalysis.com/stocks/crwv/statistics/) | Mcap $30.4bn but EV $76.5bn -> EV/sales 10.18x (total debt $51.6bn); price $55.19 vs $40 IPO. |
| OpenAI - last priced valuation / annualized revenue | 17 (range 17-25) | x | 2026-09/10 | computed | [$852bn (Mar 2026 round; Aug 2026 $7bn secondary) / ~$50bn net annualized revenue end-Sep 2026 (FT via Yahoo Finance)](https://finance.yahoo.com/technology/article/openais-annualized-revenue-20-billion-lower-than-prior-investor-estimates-174058048.html) | At $1.25T pre-money talks (Oct 2026): 25x. On 2025 recognized revenue (~$13.1bn): ~65x trailing. Run-rate is not GAAP revenue. |
| Anthropic - Series H valuation / run-rate | 20.5 | x | 2026-05-28 | computed | [Anthropic Series H post ($965bn post-money; run-rate >$47bn)](https://www.anthropic.com/news/series-h) | $965bn / $47bn. |
| Anthropic - ~$2T IPO talk / run-rate | 30.8 (range 29.8-61) | x | 2026-10 | computed | [Press talk $2T / $65bn end-July run-rate (Reuters via Investing.com)](https://www.investing.com/news/stock-market-news/anthropic-revenue-run-rate-tops-65-billion-source-says-4864031) | Illustrative only. $2T / Q3-2026 revenue annualized ($16.8bn x 4 = $67.2bn) = 29.8x; $2T / H1-2026 revenue annualized ($32.6bn) = 61x. |

## 3. OpenAI comparison
| Item | Value | Unit | Date | Status | Source | Notes |
|---|---|---|---|---|---|---|
| OpenAI revenue 2024 | 3.7 | USD bn | FY2024 | press_reported | [Wikipedia OpenAI (citing PYMNTS/Reuters/The Information)](https://en.wikipedia.org/wiki/OpenAI) |  |
| OpenAI revenue 2025 (recognized) | 13.1 (range 13-13.1) | USD bn | FY2025 | press_reported | [CNBC (20 Feb 2026) via Wikipedia infobox](https://www.cnbc.com/2026/02/20/openai-resets-spend-expectations-targets-around-600-billion-by-2030.html) | WSJ docs (via Fortune, Nov 2025) projected ~$13bn 2025 sales vs ~$22bn spending. Not audited/public. |
| OpenAI net loss 2025 (projected/estimated) | -9 | USD bn | FY2025 | projection | [WSJ via Fortune (12 Nov 2025)](https://fortune.com/2025/11/12/openai-cash-burn-rate-annual-losses-2028-profitable-2030-financial-documents/) | Fortune/WSJ: ~$22bn spending vs ~$13bn sales; ~$1.69 spent per $1 revenue. The Information (Jul 2025): $8bn projected operating loss. |
| OpenAI projected 2028 operating loss | -74 | USD bn | FY2028 (projection made 2025) | projection | [WSJ via Fortune (12 Nov 2025)](https://fortune.com/2025/11/12/openai-cash-burn-rate-annual-losses-2028-profitable-2030-financial-documents/) | ~3/4 of 2028 revenue; profits expected ~2030. |
| OpenAI cumulative cash burn through 2029 (projection) | 115 | USD bn | 2025-09-05 | projection | [The Information via Reuters/Yahoo](https://finance.yahoo.com/news/openai-expects-business-burn-115-022035561.html) | Annual burn $17bn (2026), $35bn (2027), $45bn (2028); cash-flow positive 2029/2030. Pre-dates late-2025 compute deals. |
| OpenAI annualized revenue run-rate (Jul 2025) | 12 | USD bn | 2025-07-30 | press_reported | [The Information via Reuters](https://www.reuters.com/business/openai-hits-12-billion-annualized-revenue-information-reports-2025-07-31/) |  |
| OpenAI annualized revenue run-rate (end-2025) | 20 | USD bn (>) | 2025-12/2026-01-19 | company_disclosed | [Altman X post via TechCrunch (6 Nov 2025, as expectation); CFO Sarah Friar via Reuters (19 Jan 2026)](https://techcrunch.com/2025/11/06/sam-altman-says-openai-has-20b-arr-and-about-1-4-trillion-in-data-center-commitments/) | Reuters: https://www.reuters.com/business/openai-cfo-says-annualized-revenue-crosses-20-billion-2025-2026-01-19/ |
| OpenAI annualized revenue run-rate (end-Sep 2026, net) | 50 (range 50-68) | USD bn (~) | 2026-09-30 (reported 2026-10-08) | press_reported | [Financial Times via Yahoo Finance; confirmed by CNBC](https://finance.yahoo.com/technology/article/openais-annualized-revenue-20-billion-lower-than-prior-investor-estimates-174058048.html) | A widely reported ~$68bn figure included partners' gross revenue; investors had extrapolated ~$70bn. FT: below Anthropic's ~$65bn. 77% Q3 run-rate growth; 107% enterprise. |
| OpenAI year-end 2026 annualized revenue target | 70 | USD bn | 2026-10 | projection | [Bloomberg via Yahoo Finance](https://finance.yahoo.com/technology/ai/articles/openai-projects-70-billion-annualized-113114847.html) | Exit run-rate target, not calendar revenue. |
| OpenAI revenue target 2030 | 200 | USD bn (~) | 2025 | projection | [WSJ via Fortune; Altman ('hundreds of billions by 2030')](https://fortune.com/2025/11/12/openai-cash-burn-rate-annual-losses-2028-profitable-2030-financial-documents/) |  |
| OpenAI compute commitments (headline) | 1,400 | USD bn over ~8 years | 2025-11-06 | company_disclosed | [Sam Altman X post via TechCrunch](https://techcrunch.com/2025/11/06/sam-altman-says-openai-has-20b-arr-and-about-1-4-trillion-in-data-center-commitments/) | 'commitments of about $1.4 trillion over the next 8 years'. Feb 2026: OpenAI told investors compute spending target ~$600bn by 2030 (CNBC headline, 20 Feb 2026) - treat as reset of spend plan; article text not accessible this session. |
| OpenAI-Oracle compute contract | 300 | USD bn over 5 years | 2025-09 | press_reported | [Wikipedia OpenAI (citing WSJ/press)](https://en.wikipedia.org/wiki/OpenAI) |  |
| OpenAI incremental Azure commitment | 250 | USD bn | 2025-10-28 | company_disclosed | [Microsoft Official Blog](https://blogs.microsoft.com/blog/2025/10/28/the-next-chapter-of-the-microsoft-openai-partnership/) |  |
| OpenAI valuation - Oct 2024 round | 157 | USD bn post-money | 2024-10 | reported_actual | [Wikipedia OpenAI](https://en.wikipedia.org/wiki/OpenAI) | $6.6bn raise. |
| OpenAI valuation - Mar 2025 round | 300 | USD bn post-money | 2025-03-31 | reported_actual | [TechCrunch via Wikipedia](https://techcrunch.com/2025/03/31/openai-raises-40b-at-300b-post-money-valuation/) | $40bn raise. |
| OpenAI valuation - Oct 2025 secondary | 500 | USD bn | 2025-10 | reported_actual | [Wikipedia OpenAI (FT); Dealroom](https://en.wikipedia.org/wiki/OpenAI) | Employee sale size reported as up to $10bn (Wikipedia) vs $6.6bn (Dealroom/CNBC) - range. |
| OpenAI valuation - Mar 2026 round ($122bn) | 852 | USD bn post-money | 2026-03-24 | company_disclosed | [OpenAI ('OpenAI raises $122 billion...') via Wikipedia](https://openai.com/index/accelerating-the-next-phase-ai/) | Earlier tranche Feb 2026: $110bn at $730bn per Wikipedia. |
| OpenAI valuation - Aug 2026 $7bn employee secondary | 852 | USD bn | 2026-08-10 | reported_actual | [CNBC/Bloomberg via Dealroom](https://dealroom.co/news/144253-openai-closes-7b-share-sale-at-852b-valuation-ahead-of-ipo/) | Flat to March round. CNBC: https://www.cnbc.com/2026/08/10/openai-wraps-7-billion-share-sale-ahead-of-potential-ipo-.html |
| OpenAI valuation - Oct 2026 talks (~$30bn raise) | 1,250 (range 1,250-1,400) | USD bn pre-money | 2026-10-22 | press_reported | [CNBC (22 Oct 2026) via Implicator.ai; Reuters (19 Oct 2026)](https://www.implicator.ai/openai-30-billion-round-1-25-trillion/) | Earlier pitch ~$1.4T pre-money (Reuters, 19 Oct). Not closed. Leads reportedly UAE investors + Coatue. |
| OpenAI recapitalization: OpenAI Foundation stake in OpenAI Group PBC | 26 | % equity | 2025-10-28 | company_disclosed | [Reuters / NYT / CNBC via Wikipedia; Microsoft blog](https://www.reuters.com/business/microsoft-openai-reach-new-deal-allow-openai-restructure-2025-10-28/) | Foundation (nonprofit) appoints all PBC directors. Microsoft ~27% (~$135bn, as-converted diluted); remaining 47% employees/investors. Wikipedia infobox later shows Microsoft 23.3% / Foundation 22.5% after dilution (date unclear). Implied Foundation stake value ~ $130bn (computed from MSFT 27% = $135bn). |
| OpenAI IPO: confidential draft S-1 disclosed | - | event | 2026-06-08 | company_disclosed | [The Times / Decrypt; OpenAI statement](https://decrypt.co/370468/openai-confidential-ipo-filing-keeps-timing-open) | 'it may be a while because there are things we want to do that are likely easier as a private company'. Altman (Sep 2026): no 2026 IPO (Fortune). |

## 4. Hyperscaler AI capex and NVIDIA data-center revenue

Quick view (USD bn). For the 2024 and 2025 columns, Microsoft is calendar-year cash capex and Meta includes finance-lease principal (cash-only figures are in the notes). Oracle runs on fiscal years ending in May.

| Company | 2024 | 2025 | 2026 guidance (latest) | Guidance date |
|---|---|---|---|---|
| Microsoft | 55.6 (CY, cash) | 83.1 (CY, cash) | ~175 CY incl. fin. leases (was ~190 pre-reclass) | 2026-07-29 |
| Alphabet | 52.5 | 91.4 | 195-205 | 2026-07-22 |
| Amazon | 83.0 | 131.8 | ~220 (cash capex) | 2026-07-30 |
| Meta | 39.2 | 72.2 | 135-145 | 2026-10-21 |
| **Big-4 total** | **~228 (all cash PP&E; Meta cash-only 37.3)** | **~376 (all cash PP&E; Meta cash-only 69.7)** | **~725-745** | computed |
| Oracle (FY Jun-May) | FY24 6.9 / FY25 21.2 | FY26 55.7 | FY27 90-95 (call; secondary) | 2026-09-10 |
| NVIDIA data-center revenue (FY ends Jan) | FY24 47.5 / FY25 115.2 | FY26 193.7 | Q2 FY27 89.0 (quarter) | 2026-08-26 |

**Detail rows**

| Item | Value | Unit | Date | Status | Source | Notes |
|---|---|---|---|---|---|---|
| Microsoft capex CY2024 (cash, excl. finance leases) | 55.55 | USD bn | CY2024 | computed | [SEC XBRL quarterly values (10-Q/10-K), summed to calendar year](https://data.sec.gov/api/xbrl/companyconcept/CIK0000789019/us-gaap/PaymentsToAcquirePropertyPlantAndEquipment.json) | Microsoft's own 'capex incl. finance leases' is higher (finance-lease ROU additions FY24 $11.6bn, FY25 $20.5bn, FY26 $24.6bn per 10-K). |
| Microsoft capex CY2025 (cash, excl. finance leases) | 83.09 | USD bn | CY2025 | computed | [SEC XBRL quarterly values](https://data.sec.gov/api/xbrl/companyconcept/CIK0000789019/us-gaap/PaymentsToAcquirePropertyPlantAndEquipment.json) |  |
| Microsoft capex FY2026 (Jul25-Jun26, cash) | 115.95 | USD bn | FY2026 (to 2026-06-30) | reported_actual | [Microsoft 10-K FY2026](https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm) | FY2025 $64.55bn; FY2024 $44.48bn (10-K). Q4 FY26 capex incl. finance leases ~$41bn (IR). |
| Microsoft capex CY2026 expectation (incl. finance leases) | 175 (range 175-190) | USD bn (~) | 2026-07-29 | guidance | [Microsoft FY26 Q4 earnings call (Amy Hood)](https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q4) | Was ~$190bn in April 2026 (incl. ~$25bn from higher component pricing; https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q3). Cut to ~$175bn only because more datacenter leases become operating leases after useful-life change (15->25 yrs for datacenter buildings). Spending plan 'unchanged'. |
| Microsoft datacenter leases signed but not yet commenced | 329.1 | USD bn | 2026-06-30 | reported_actual | [Microsoft 10-K FY2026 (Note 13)](https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm) | vs $92.7bn at 2025-06-30 (FY2025 10-K). Off-balance-sheet until commencement. |
| Alphabet capex 2024 | 52.53 | USD bn | FY2024 | reported_actual | [Alphabet Q4 2025 earnings release (8-K Ex.99.1)](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000012/googexhibit991q42025.htm) | Purchases of property and equipment. |
| Alphabet capex 2025 | 91.45 | USD bn | FY2025 | reported_actual | [Alphabet Q4 2025 earnings release](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000012/googexhibit991q42025.htm) |  |
| Alphabet capex 2026 guidance | 200 (range 195-205) | USD bn (midpoint) | 2026-07-22 | guidance | [Alphabet Q2 2026 call (CNBC)](https://www.cnbc.com/2026/07/22/google-earnings-q2-goog-live-updates.html) | Raised to $195-205bn from $180-190bn (Q1; 8-K https://www.sec.gov/Archives/edgar/data/0001652044/000119312526257724/d83560dex991.htm) and $175-185bn (Feb 2026). H1 2026 actual $80.6bn; Q2 $44.9bn (8-K). |
| Amazon capex 2024 | 83 | USD bn | FY2024 | reported_actual | [Amazon Q4 2025 earnings release](https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-Fourth-Quarter-Results/) | Purchases of property and equipment (gross) $82,999m. |
| Amazon capex 2025 | 131.82 | USD bn | FY2025 | reported_actual | [Amazon Q4 2025 earnings release](https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-Fourth-Quarter-Results/) | $131,819m gross purchases of P&E. |
| Amazon capex 2026 guidance (cash capex) | 220 (range 200-220) | USD bn (~) | 2026-07-30 | guidance | [CNBC (Amazon Q2 2026 call, Andy Jassy)](https://www.cnbc.com/2026/07/30/amazon-amzn-q2-earnings-report-2026.html) | Raised from ~$200bn (Feb 2026) mainly on memory prices. |
| Meta capex 2024 (incl. finance-lease principal) | 39.23 | USD bn | FY2024 | reported_actual | [Meta Q4 2025 release cash-flow statement (computed sum $37,256m + $1,969m)](https://www.sec.gov/Archives/edgar/data/1326801/000162828026003832/meta-12312025xexhibit991.htm) | Cash PP&E only: $37.26bn. |
| Meta capex 2025 (incl. finance-lease principal) | 72.22 | USD bn | FY2025 | reported_actual | [Meta Q4 2025 earnings release](https://www.sec.gov/Archives/edgar/data/1326801/000162828026003832/meta-12312025xexhibit991.htm) | Cash PP&E only: $69.69bn (XBRL). |
| Meta capex 2026 guidance (incl. finance-lease principal) | 140 (range 135-145) | USD bn (midpoint) | 2026-10-21 | guidance | [Meta Q3 2026 results](https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-Third-Quarter-2026-Results/default.aspx) | Narrowed to $135-145bn (from $130-145bn in Jul; initial $115-135bn in Jan 2026). Q3 2026 capex $34.91bn. |
| Oracle capex FY2024 (Jun23-May24) | 6.87 | USD bn | FY2024 | reported_actual | [SEC XBRL companyconcept API (PaymentsToAcquirePropertyPlantAndEquipment, 10-K)](https://data.sec.gov/api/xbrl/companyconcept/CIK0001341439/us-gaap/PaymentsToAcquirePropertyPlantAndEquipment.json) |  |
| Oracle capex FY2025 (Jun24-May25) | 21.21 | USD bn | FY2025 | reported_actual | [SEC XBRL companyconcept API (PaymentsToAcquirePropertyPlantAndEquipment, 10-K)](https://data.sec.gov/api/xbrl/companyconcept/CIK0001341439/us-gaap/PaymentsToAcquirePropertyPlantAndEquipment.json) |  |
| Oracle capex FY2026 (Jun25-May26) | 55.66 | USD bn | FY2026 | reported_actual | [Oracle Q1 FY27 release (8-K Ex.99.1) / 10-K](https://www.sec.gov/Archives/edgar/data/1341439/000119312526387905/orcl-ex99_1.htm) | Q1 FY27 capex $28.5bn; FY26 free cash flow -$23.7bn; RPO $664bn (31 Aug 2026). |
| Oracle capex FY2027 guidance (Jun26-May27) | 92.5 (range 90-95) | USD bn (midpoint) | 2026-09-10 | guidance | [Oracle Q1 FY27 call, per Alpha Spread transcript summary (secondary)](https://www.alphaspread.com/security/nyse/orcl/investor-relations/earnings-call/q1-2027) | $90-95bn reaffirmed; net cash capex up to ~$70bn after customer prepayments. Not in press release - verify against transcript. |
| Big-4 capex total CY2024 (MSFT+GOOGL+AMZN+META, cash PP&E) | 228.3 | USD bn | CY2024 | computed | Sum of rows above (Meta cash-only $37.26bn) | Company-defined totals incl. finance leases are higher. |
| Big-4 capex total CY2025 (cash PP&E) | 376.1 | USD bn | CY2025 | computed | Sum of rows above (Meta cash-only $69.69bn) |  |
| Big-4 capex 2026 guidance total | 735 (range 725-745) | USD bn (midpoint) | 2026-10-26 | computed | Sum of latest guidance: MSFT ~175 + GOOGL 195-205 + AMZN ~220 + META 135-145 | Mixed definitions (MSFT/META incl. finance leases; AMZN cash capex). With MSFT's pre-reclass ~$190bn: $740-760bn. Adding Oracle FY27 $90-95bn: ~$815-855bn. |
| NVIDIA data center revenue FY2024 (to Jan 2024) | 47.52 | USD bn | FY2024 | reported_actual | [NVIDIA 10-K FY2026](https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm) |  |
| NVIDIA data center revenue FY2025 (to Jan 2025) | 115.19 | USD bn | FY2025 | reported_actual | [NVIDIA 10-K FY2026](https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm) | Compute $102.2bn + networking $13.0bn. |
| NVIDIA data center revenue FY2026 (to 25 Jan 2026) | 193.74 | USD bn | FY2026 | reported_actual | [NVIDIA 10-K FY2026](https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm) | Compute $162.4bn + networking $31.4bn; total revenue $215.9bn. |
| NVIDIA data center revenue Q2 FY2027 (to 26 Jul 2026) | 89 | USD bn (quarter) | 2026-08-26 | reported_actual | [NVIDIA press release](https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Second-Quarter-Fiscal-2027/) | +117% y/y; total revenue $96.2bn; Q3 FY27 revenue outlook $108bn +/-2%. |

## 5. Anthropic growth curve

**Run-rate revenue milestones (for growth-curve chart)**

| Item | Value | Unit | Date | Status | Source | Notes |
|---|---|---|---|---|---|---|
| Run-rate ~$1bn (start of 2025) | 1 | USD bn annualized | 2025-01 (Dec 2024) | company_disclosed | [Anthropic Series F post (2 Sep 2025); Reuters (30 May 2025: 'nearly $1bn in Dec 2024')](https://www.anthropic.com/news/anthropic-raises-series-f-at-usd183b-post-money-valuation) |  |
| Run-rate ~$2bn | 2 | USD bn annualized | 2025-03-31 | press_reported | [Reuters exclusive (30 May 2025), two sources](https://www.thestar.com.my/tech/tech-news/2025/05/31/exclusive-anthropic-hits-3-billion-in-annualized-revenue-on-business-demand-for-ai) | 'crossed $2 billion around the end of March' |
| Run-rate ~$3bn | 3 | USD bn annualized | 2025-05-30 | press_reported | [Reuters exclusive (30 May 2025)](https://www.thestar.com.my/tech/tech-news/2025/05/31/exclusive-anthropic-hits-3-billion-in-annualized-revenue-on-business-demand-for-ai) |  |
| Run-rate ~$4bn | 4 | USD bn annualized | 2025-07-01 | press_reported | [The Information via PYMNTS](https://www.pymnts.com/?p=2791045) |  |
| Run-rate >$5bn | 5 | USD bn annualized | 2025-08 | company_disclosed | [Anthropic Series F post (2 Sep 2025)](https://www.anthropic.com/news/anthropic-raises-series-f-at-usd183b-post-money-valuation) | Claude Code >$500m run-rate; 300k+ business customers; $13bn at $183bn post. |
| Run-rate approaching $7bn | 7 | USD bn annualized | 2025-10-16 | company_disclosed | [Anthropic statement to Reuters (16 Oct 2025)](https://finance.yahoo.com/news/exclusive-anthropic-aims-nearly-triple-170234463.html) | Reuters: internal target $9bn by end-2025; 2026 base $20bn, best $26bn. |
| Run-rate ~$9bn (end of 2025) | 9 | USD bn annualized | 2025-12-31 | company_disclosed | [Anthropic (6 Apr 2026 and 20 Apr 2026 posts)](https://www.anthropic.com/news/anthropic-amazon-compute) | 'up from approximately $9 billion at the end of 2025' |
| Run-rate $14bn | 14 | USD bn annualized | 2026-02-12 | company_disclosed | [Anthropic Series G post](https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation) | $30bn at $380bn post; Claude Code run-rate >$2.5bn; 500+ customers >$1m/yr. |
| Run-rate >$19bn | 19 | USD bn annualized | 2026-03-03 | press_reported | [Bloomberg ('Anthropic Nears $20 Billion Revenue Run Rate')](https://www.bloomberg.com/news/articles/2026-03-03/anthropic-nears-20-billion-revenue-run-rate-amid-pentagon-feud) |  |
| Run-rate >$30bn | 30 | USD bn annualized | 2026-04-06 | company_disclosed | [Anthropic Google/Broadcom compute post](https://www.anthropic.com/news/google-broadcom-partnership-compute) | Customers >$1m/yr exceeded 1,000. Repeated 20 Apr 2026 (Amazon post). |
| Run-rate >$47bn | 47 | USD bn annualized | 2026-05 (post dated 2026-05-28) | company_disclosed | [Anthropic Series H post](https://www.anthropic.com/news/series-h) | 'crossed $47 billion earlier this month'; $65bn at $965bn post-money. |
| Run-rate >$65bn | 65 | USD bn annualized | 2026-07-31 (reported 2026-08-17) | press_reported | [Reuters (via Investing.com); Bloomberg first; CNBC](https://www.investing.com/news/stock-market-news/anthropic-revenue-run-rate-tops-65-billion-source-says-4864031) | Investor update. Third-party estimate (Funda via Axios, 28 Jul 2026): ~$71bn - estimate, not company. |
| Run-rate expected >$100bn by end-2026 | 100 | USD bn annualized | 2026-09 (NYT, per secondary summary) | projection | New York Times (Sep 2026) as summarized by secondary sources - NOT verified | Flag: only seen in search summaries this session. |

**Recognized revenue (GAAP, S-1) and quarterly figures**

| Item | Value | Unit | Date | Status | Source | Notes |
|---|---|---|---|---|---|---|
| Anthropic revenue FY2025 (recognized) | 4.6 | USD bn | FY2025 | reported_actual | [Anthropic S-1 via Yahoo Finance (26 Oct 2026)](https://finance.yahoo.com/technology/article/anthropic-publicly-files-ipo-prospectus-noting-strong-revenue-growth-and-massive-spending-131807138.html) | Conflict: CNBC (Aug 2026) and Wikipedia cite ~$10bn for 2025 - likely a different (gross/run-rate-based) measure; S-1 governs. Net loss 2025: $42bn (S-1 via Yahoo). |
| Anthropic revenue H1 2026 (recognized) | 16.3 | USD bn | H1 2026 | reported_actual | [Anthropic S-1 via Yahoo Finance](https://finance.yahoo.com/technology/article/anthropic-publicly-files-ipo-prospectus-noting-strong-revenue-growth-and-massive-spending-131807138.html) | Net loss H1 2026 $80.7bn, mostly accounting charges. |
| Anthropic revenue Q1 2026 (derived) | 4.8 | USD bn | Q1 2026 | computed | H1 $16.3bn - Q2 $11.5bn |  |
| Anthropic revenue Q2 2026 | 11.5 | USD bn | Q2 2026 | press_reported | [Reuters/CNBC (Aug 2026, 'preliminary'); Yahoo Finance (14 Oct 2026)](https://finance.yahoo.com/technology/article/anthropic-q3-revenue-climbs-to-168-billion-report-221619202.html) | ~14x y/y per Reuters summary. Investor materials (Futurum) cited Q2 projection $10.9bn with first operating profit $559m. |
| Anthropic revenue Q3 2026 | 16.8 | USD bn | Q3 2026 (disclosed to investors 2026-10-14) | press_reported | [FT via Yahoo Finance](https://finance.yahoo.com/technology/article/anthropic-q3-revenue-climbs-to-168-billion-report-221619202.html) | ~46% q/q (computed). 'Profitable on an adjusted basis' (FT). Not in S-1 (no Q3 statements). |

**Anthropic's own projections as reported in the press**

| Item | Value | Unit | Date | Status | Source | Notes |
|---|---|---|---|---|---|---|
| Feb 2025 projection: 2025 revenue (base) | 2.2 | USD bn | 2025-02-12 | projection | [The Information via Reuters/Yahoo](https://finance.yahoo.com/news/anthropic-projects-soaring-growth-34-002016708.html) | Burn $3bn in 2025 (vs $5.6bn 2024); stop burning cash in 2027. |
| Feb 2025 projection: 2027 revenue (base / high) | 12 (range 12-34.5) | USD bn | 2025-02-12 | projection | [The Information via Reuters/Yahoo](https://finance.yahoo.com/news/anthropic-projects-soaring-growth-34-002016708.html) |  |
| Oct 2025 target: 2026 exit run-rate (base / best) | 20 (range 20-26) | USD bn annualized | 2025-10-16 | projection | [Reuters exclusive](https://finance.yahoo.com/news/exclusive-anthropic-aims-nearly-triple-170234463.html) |  |
| Nov 2025 projection: 2028 revenue (up to) | 70 | USD bn | 2025-11-04 | projection | [The Information via TechCrunch](https://techcrunch.com/2025/11/04/anthropic-expects-b2b-demand-to-boost-revenue-to-70b-in-2028-report/) | Cash flow $17bn in 2028; cash-flow positive as soon as 2027; gross margin -94% (2024) -> ~50% (2025) -> 77% (2028). |
| Nov 2025 (WSJ docs): breakeven year | 2,028 | year | 2025-11-12 | projection | [WSJ via Fortune](https://fortune.com/2025/11/12/openai-cash-burn-rate-annual-losses-2028-profitable-2030-financial-documents/) | Burn ~1/3 of revenue in 2026, 9% in 2027, breakeven 2028 (vs OpenAI ~2030). |
| Jan 2026 projection: 2026 revenue (up to) | 18 | USD bn | 2026-01-29 | projection | [The Information via GuruFocus/Yahoo](https://finance.yahoo.com/news/anthropic-quietly-raises-ceiling-121501064.html) | Raised ~20%; cash-flow positive pushed to 2028; 2026 training ~$12bn + inference ~$7bn. Original: https://www.theinformation.com/articles/anthropic-hikes-2026-revenue-forecast-20-delays-will-go-cash-flow-positive |
| Jan 2026 projection: 2027 revenue (optimistic) | 55 | USD bn | 2026-01-29 | projection | [The Information via GuruFocus/Yahoo](https://finance.yahoo.com/news/anthropic-quietly-raises-ceiling-121501064.html) | 2029 up to $148bn (optimistic). |
| Aug 2026 projection: 2028 revenue | 195 (range 190-200) | USD bn (midpoint) | 2026-08-17 | projection | [Reuters (via Investing.com)](https://www.investing.com/news/stock-market-news/anthropic-revenue-run-rate-tops-65-billion-source-says-4864031) | 'roughly $190 billion to $200 billion' |
| Actual vs. old forecast check: 2026 H1 recognized revenue vs Jan-2026 full-year forecast | 16.3 | USD bn | 2026-10-26 | computed | S-1 H1 2026 $16.3bn vs The Information's $18bn full-year 2026 forecast | H1 alone ~91% of the Jan-2026 full-year forecast - useful for 'forecasts kept being beaten' annotation. |

## 6. Enterprise LLM market share and token-volume data

Menlo Ventures is an investor in Anthropic. Its methodology changed between reports: the 2024 and late-2025 reports measure spend, and the mid-2025 report measures usage share of production workloads. Sample sizes and survey windows are in the rows.

| Item | Value | Unit | Date | Status | Source | Notes |
|---|---|---|---|---|---|---|
| OpenAI enterprise LLM share 2023 | 50 | % | 2023 | estimate | [Menlo Ventures survey (2024 & 2025 reports)](https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/) | Survey-based; Menlo is an Anthropic investor. |
| Anthropic enterprise LLM share 2023 | 12 | % | 2023 | estimate | [Menlo Ventures](https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/) |  |
| Google enterprise LLM share 2023 | 7 | % | 2023 | estimate | [Menlo Ventures (Dec 2025 report)](https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/) |  |
| OpenAI enterprise LLM share 2024 | 34 | % | 2024 (survey Sep 24-Oct 8, 2024; n=600) | estimate | [Menlo Ventures 2024 State of GenAI (20 Nov 2024)](https://menlovc.com/2024-the-state-of-generative-ai-in-the-enterprise/) |  |
| Anthropic enterprise LLM share 2024 | 24 | % | 2024 | estimate | [Menlo Ventures 2024](https://menlovc.com/2024-the-state-of-generative-ai-in-the-enterprise/) |  |
| Anthropic share of enterprise LLM usage (production workloads) mid-2025 | 32 | % | 2025-07 (survey Jun 30-Jul 10; n=150) | estimate | [Menlo Ventures mid-year update (31 Jul 2025)](https://menlovc.com/perspective/2025-mid-year-llm-market-update/) | Usage share, not spend. |
| OpenAI share mid-2025 | 25 | % | 2025-07 | estimate | [Menlo Ventures mid-year update](https://menlovc.com/perspective/2025-mid-year-llm-market-update/) |  |
| Google share mid-2025 | 20 | % | 2025-07 | estimate | [Menlo Ventures mid-year update](https://menlovc.com/perspective/2025-mid-year-llm-market-update/) |  |
| Meta (Llama) share mid-2025 | 9 | % | 2025-07 | estimate | [Menlo Ventures mid-year update](https://menlovc.com/perspective/2025-mid-year-llm-market-update/) |  |
| Anthropic share of enterprise LLM API spend, late 2025 | 40 | % | 2025-11 (survey Nov 7-25; n=495) | estimate | [Menlo Ventures 2025 State of GenAI (9 Dec 2025)](https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/) | Spend share. |
| OpenAI share of enterprise LLM API spend, late 2025 | 27 | % | 2025-11 | estimate | [Menlo Ventures (9 Dec 2025)](https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/) |  |
| Google share of enterprise LLM API spend, late 2025 | 21 | % | 2025-11 | estimate | [Menlo Ventures (9 Dec 2025)](https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/) | Meta/Cohere/Mistral/others 12% combined. |
| Anthropic share of enterprise coding, mid-2025 | 42 | % | 2025-07 | estimate | [Menlo Ventures mid-year update](https://menlovc.com/perspective/2025-mid-year-llm-market-update/) | OpenAI 21%. |
| Anthropic share of enterprise coding, late 2025 | 54 | % | 2025-11 | estimate | [Menlo Ventures (9 Dec 2025)](https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/) | OpenAI 21%. |
| Total enterprise genAI spend 2025 | 37 | USD bn | 2025 | estimate | [Menlo Ventures (9 Dec 2025)](https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/) | Up 3.2x from 2024. The 2024 base is $11.5bn in the 2025 report but $13.8bn in the 2024 report (Nov 2024, which also gave 2023 = $2.3bn); definitions changed - use one report's series consistently. |
| No 2026 Menlo market-share update found | - | n/a | 2026-10-26 | estimate | Search of menlovc.com / press | Latest Menlo share data located = Dec 2025. |
| OpenRouter study: tokens analysed | 100 | trillion tokens | Nov 2024-Nov 2025 | estimate | [Aubakirova et al., 'State of AI: An Empirical 100 Trillion Token Study with OpenRouter' (a16z/OpenRouter), arXiv 2601.10088](https://arxiv.org/html/2601.10088v1) | OpenRouter skews to developers/open-weight models; not representative of enterprise direct-API spend. |
| OpenRouter: Anthropic share of programming traffic | 60 | % (>) | most of 2025; fell below 60% week of 17 Nov 2025 | estimate | [arXiv 2601.10088](https://arxiv.org/html/2601.10088v1) | Google ~15%, OpenAI ~8% of programming in recent weeks (paper ambiguous whether spend or requests). |
| OpenRouter: programming share of all tokens | 50 | % (>) | late 2025 | estimate | [arXiv 2601.10088](https://arxiv.org/html/2601.10088v1) | Up from ~11% in early 2025. |
| OpenRouter: open-weight share of usage | 33 | % (~1/3) | late 2025 | estimate | [arXiv 2601.10088](https://arxiv.org/html/2601.10088v1) | Chinese OSS averaged ~13% of weekly tokens over the year. |
| OpenRouter: DeepSeek token share | 20 | % (nearly) | 2026-06 (early June) | estimate | [OpenRouter blog (30 Jun 2026)](https://openrouter.ai/blog/insights/deepseek-v4-adoption/) | >450 trillion tokens processed 1 Jan-14 Jun 2026. Google and OpenAI lost share H1 2026. |

## 7. Historical cautionary and analogous cases
| Item | Value | Unit | Date | Status | Source | Notes |
|---|---|---|---|---|---|---|
| Lucent: customer-financing commitments | 6.7 (range 6.7-8.1) | USD bn | 2000-09-30 | reported_actual | [Lucent 10-K FY2000 (SEC)](https://www.sec.gov/Archives/edgar/data/1006240/000095012300011855/y43690e10-k405.txt) | $1.3bn drawn; plus guarantees of customer debt up to $1.4bn ($770m outstanding) -> ~$8.1bn total exposure (computed). ~20% of FY2000 revenue $33.8bn. FY2001 provision for uncollectibles & customer financings $2.25bn vs $0.5bn in FY2000 (10-K FY2001 https://www.sec.gov/Archives/edgar/data/1006240/000095011701501896/a31752.txt). |
| Lucent: market cap peak vs early 2003 | 258 | USD bn (peak) | 1999 peak -> early 2003 | reported_actual | [Wikipedia Lucent Technologies](https://en.wikipedia.org/wiki/Lucent_Technologies) | ~$15.6bn by early 2003 (incl. spun-off Avaya/Agere value); shares ~$84 -> ~$2.13. |
| Nortel: unfunded customer-financing commitments | 4.1 | USD bn (up to) | 2000-12-31 | reported_actual | [Nortel Networks 10-K405 FY2000 (SEC)](https://www.sec.gov/Archives/edgar/data/1119664/000095014401003502/t26081ke10-k405.txt) | FY2000 revenue $30.2bn. Market cap fell from C$398bn (Sep 2000) to <C$5bn (Aug 2002); bankruptcy Jan 2009 (Wikipedia). |
| Global Crossing: valuation at peak, then bankruptcy | 47 | USD bn | 1999 -> 2002-01-28 | reported_actual | [Wikipedia Global Crossing (NYT, Washington Post)](https://www.washingtonpost.com/archive/business/2002/01/29/global-crossing-files-for-bankruptcy/fffcad1b-f522-479a-a9d4-659e74165b05/) | Never had a profitable year; one of the largest bankruptcies in history (Jan 2002). Telecoms invested >$500bn, mostly debt-financed, in the 5 years after the 1996 Act (Wikipedia 'Telecoms crash', The Economist). |
| Netscape IPO: first-day market value | 2.9 | USD bn | 1995-08-09 | reported_actual | [Wikipedia Netscape](https://en.wikipedia.org/wiki/Netscape) | Offer raised last-minute to $28 (from $14); closed $58.25 on day 1. 16 months after founding. |
| Webvan IPO: valuation | 4.8 | USD bn (>) | 1999-11 | reported_actual | [Wikipedia Webvan (NYT 6 Nov 1999)](https://www.nytimes.com/1999/11/06/business/webvan-stock-price-closes-65-above-initial-offering.html) | Raised $375m; cumulative revenue at IPO $395k, losses >$50m; shut down/bankrupt June-July 2001 after losing >$800m. |
| Nasdaq Composite: peak-to-trough decline | -78 | % | 2000-03-10 -> 2002-10 | reported_actual | [Wikipedia Dot-com bubble](https://en.wikipedia.org/wiki/Dot-com_bubble) | Peak 5,048.62; ~$5T of market value lost by 2002. |
| Facebook IPO: valuation and first-year drawdown | 104 | USD bn at $38 | 2012-05-18 | reported_actual | [Wikipedia 'IPO of Facebook' (NYT, Forbes)](https://en.wikipedia.org/wiki/Initial_public_offering_of_Facebook) | Closed $38.23 day 1; bottomed below $18 in Sep 2012 (~-53%); did not regain $38 until Aug 2013 (~15 months). Retail losses ~$630m (Bloomberg est.). |
| SpaceX 2026 IPO: post-IPO drawdown | -50 | % from peak (approx.) | 2026-06 -> late Jul 2026 | press_reported | [Fortune (29 Jul 2026) via Wikipedia](https://fortune.com/2026/07/29/elon-musk-money-matters-x-money-former-trillionaire/) | Peak ~$211 week after IPO; $146.90 close on 26 Oct 2026 (StockAnalysis) vs $135 offer. |
| Modern analog: Microsoft->OpenAI / Amazon,Google->Anthropic circular deals | - | n/a | 2019-2026 | press_reported | [Wikipedia 'AI build-out financing' (Bloomberg graphic 22 Jan 2026; WSJ)](https://en.wikipedia.org/wiki/AI_build-out_financing) | WSJ (16 Aug 2026): ~ $3T of off-balance-sheet purchase/lease commitments at nine AI spenders (https://wsj.com/tech/ai/why-big-techs-ai-spending-is-3-trillion-higher-than-it-seems-e1067bb2). Broadcom disclosed up to $29bn backstop exposure on a $35bn chip-lease package for Anthropic (Jun 2026); AMD up to $5bn equity in Anthropic tied to 2 GW of MI450 GPUs (Jul 2026). |

## 8. Compute economics
| Item | Value | Unit | Date | Status | Source | Notes |
|---|---|---|---|---|---|---|
| Epoch AI model: capital cost per GW of AI data center | 37.9 | USD bn per GW (2025 USD) | 2026-10-26 (dataset update) | estimate | [Epoch AI 'AI data centers' dataset (CC-BY)](https://epoch.ai/data/ai-data-centers) | Computed from Epoch's per-site figures (cost-per-watt model): Colossus 2 946 MW -> $35.84bn; Anthropic-Amazon New Carlisle 1,037 MW -> $39.28bn => ~$37.9bn/GW. Epoch: servers ~60% of 1-GW TCO. |
| Stargate headline: $500bn for 10 GW | 50 | USD bn per GW | 2025-01-21 (reiterated 2025-09-23) | computed | [OpenAI/Oracle/SoftBank announcement; Reuters (24 Sep 2025) via Wikipedia Stargate LLC](https://www.reuters.com/business/media-telecom/openai-oracle-softbank-plan-five-new-ai-data-centers-500-billion-stargate-2025-09-23/) | $500bn / 10 GW. |
| Stargate Sep 2025 update: ~7 GW for >$400bn | 57 | USD bn per GW (~) | 2025-09-23 | computed | [Reuters via Wikipedia Stargate LLC](https://www.reuters.com/business/media-telecom/openai-oracle-softbank-plan-five-new-ai-data-centers-500-billion-stargate-2025-09-23/) | >$400bn / ~7 GW. |
| Jensen Huang per-GW cost ($50-60bn, NVIDIA content ~$35bn) | - | USD bn per GW | 2025-08 (NVIDIA Q2 FY26 call) | press_reported | NOT VERIFIED this session (search budget exhausted) | Widely cited; verify against NVIDIA Q2 FY2026 call transcript before use. |
| Alphabet server/network useful life | 6 | years | FY2025 10-K | reported_actual | [Alphabet 10-K 2025](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm) | 'servers and network equipment generally over a period of six years' |
| Microsoft computer equipment useful life | 6 (range 2-6) | years (2-6 range) | FY2025 10-K | reported_actual | [Microsoft 10-K FY2025](https://www.sec.gov/Archives/edgar/data/789019/000095017025100235/msft-20250630.htm) | Datacenter buildings extended 15->25 yrs from FY2027 (FY26 Q4 call). |
| Meta servers & network assets useful life | 5.5 | years | effective 2025-01-01 | reported_actual | [Meta 10-K 2025](https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm) | Increased to 5.5 yrs in Jan 2025. |
| Amazon: subset of servers shortened 6->5 years | 5 | years | effective 2025-01-01 | reported_actual | [Amazon 10-K 2025](https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm) | Reason: 'increased pace of technology development, particularly in ... AI and ML'. The contrarian move among hyperscalers. |
| CoreWeave technology equipment useful life | 6 | years | since 2023-01-01 (from 5) | reported_actual | [CoreWeave 10-K 2025](https://www.sec.gov/Archives/edgar/data/1769628/000176962826000104/crwv-20251231.htm) |  |
| Critics' view: GPU economic life shorter (~2-4 yrs) | - | years | 2025-2026 | press_reported | [Michael Burry (Nov 2025 Substack) and others, via Wikipedia 'AI build-out financing'/'Michael Burry'](https://en.wikipedia.org/wiki/AI_build-out_financing) | Specific quantified claims (e.g., depreciation understated by ~$176bn 2026-28) NOT verified this session. |
| Token price decline: a16z 'LLMflation' | 10 | x cheaper per year (equal capability) | 2024-11-12 | estimate | [a16z, Guido Appenzeller](https://a16z.com/llmflation-llm-inference-cost/) | GPT-3-level (MMLU 42): $60/M tokens (Nov 2021) -> $0.06 (Llama 3.2 3B, 2024) = 1,000x in 3 yrs; GPT-4-level (MMLU 83) ~62x since Mar 2023. |
| Token price decline: Epoch AI | 40 (range 9-900) | x per year (GPT-4-level on GPQA Diamond) | 2025-03-12 | estimate | [Epoch AI Data Insight](https://epoch.ai/data-insights/llm-inference-price-trends) | Range 9x-900x/yr across thresholds; e.g. GPT-4-0314 $37.50/M tokens (Mar 2023) vs Gemini 2.0 Flash $0.18 at higher MMLU (Feb 2025). |

## Open items / not verified (search budget exhausted mid-session)

- Jensen Huang's per-GW cost quote ($50-60bn/GW, ~$35bn NVIDIA content): verify against the NVIDIA Q2 FY2026 call transcript (Aug 2025).
- Michael Burry's quantified depreciation critique (~$176bn understated 2026-28): verify the original Substack or X post.
- Aramco valuation at IPO price (~$1.7T is widely cited) and the press 'fully diluted' IPO valuations for Uber, Rivian and Snowflake: this file uses basic share counts computed from the 424B4.
- OpenAI-AWS $38bn deal (Nov 2025) and Anthropic's ~$518bn compute commitments: the S-1 aggregate is blank or ambiguous per sibling notes. Yahoo/S-1 reporting gives $430bn locked-in and up to $637bn including cancellable deals. Reconcile with s1_financials.md.
- NYT (Sep 2026) report that the run-rate was expected to top $100bn by end-2026: seen only in secondary summaries.
- OpenAI 2025 revenue: $13.1bn comes from the CNBC headline/Wikipedia infobox, and the article text was not accessible. A $13.07bn 'audited' figure is attributed to Fortune by a secondary site and was not verified.

