# Anthropic, PBC S-1: financial extraction notes

Source: Form S-1 filed 2026-10-26 (CIK 2130357, accession 0001628280-26-067168). All page cites are **printed** page numbers, checked against page footers. Machine-readable companion: `s1_financials.json` (same directory). Every table in it was checked to foot (income statement, balance sheet, cash flow, non-GAAP reconciliations, commitments table).

## 0. Conventions and caveats

- **Units:** USD millions unless stated. "(x)" means negative.
- **Periods with financial statements:** audited FY2023, FY2024 and FY2025. Unaudited six months to Jun 30, 2025 and Jun 30, 2026. Unaudited quarterly data from Q1 2025 to Q2 2026 (p. 157).
- **Q3 2026:** there are **no Q3 2026 financial statements and no "Recent Developments" or flash-results section.** Q3 revenue, Sep-30 liquidity, run-rate revenue, the capitalization table, dilution and the aggregate commitment totals are all **blank in filing**.
- **Expense format:** the income statement presents expenses **by nature** (compute and infrastructure, personnel, and so on). Cost of revenue, gross profit, R&D, S&M and G&A appear only in Note 8 (p. F-39).
- **Derived figures:** anything marked **[derived]** is the extractor's arithmetic, not a printed number.

---

## 1. Headline numbers

| Metric | FY2023 | FY2024 | FY2025 | H1 2025 | H1 2026 | Page |
|---|---|---|---|---|---|---|
| Revenue | 41 | 386 | 4,585 | 1,163 | 16,286 | F-7 |
| Compute & infrastructure | 433 | 2,522 | 7,326 | 2,334 | 8,945 | F-7 |
| Operating loss | (551) | (2,980) | (8,060) | (2,135) | (693) | F-7 |
| Operating margin | (1,344)% | (772)% | (176)% | (184)% | (4)% | 156 |
| Adjusted Operating Income (Loss) | (522) | (2,788) | (4,854) | (1,849) | 1,618 | 156 |
| Adjusted Operating Margin | (1,273)% | (722)% | (106)% | (159)% | 10% | 156 |
| Change in FV of conv. notes, derivatives, SAFEs | (1,045) | (5,434) | (34,308) | (10,942) | (72,388) | F-7 |
| Net loss | (1,531) | (8,309) | (41,965) | (12,969) | (80,748) | F-7 |
| Adjusted Net Income (Loss) | (457) | (2,683) | (4,448) | (1,741) | 2,671 | 156 |
| Operating cash flow | (1,627) | (5,692) | (2,637) | (1,513) | 3,929 | F-12 |
| Capex (purchases of PP&E) | (2) | (15) | (131) | (18) | (482) | F-12 |

**Balance sheet at Jun 30, 2026:**
- Cash and equivalents: $112,389M
- Short-term investments: $19,262M
- Restricted cash: $2,529M
- Convertible notes payable (fair value): $108,566M
- Redeemable convertible preferred: $157,510M (liquidation preference $136,286M)
- Accumulated deficit: $(132,902)M

(All p. F-5/F-6.)

**Quarterly figures (p. 157 and p. 160):**

| | Q1'25 | Q2'25 | Q3'25 | Q4'25 | Q1'26 | Q2'26 |
|---|---|---|---|---|---|---|
| Revenue | 376 | 787 | 1,382 | 2,040 | 4,731 | 11,555 |
| Compute & infra | 944 | 1,390 | 2,047 | 2,945 | 3,387 | 5,558 |
| Personnel | 218 | 320 | 489 | 812 | 1,295 | 1,857 |
| Bartz | — | — | 1,500 | — | — | — |
| Sales, mktg & partnerships | 24 | 96 | 202 | 246 | 1,033 | 2,135 |
| Other op. & admin | 125 | 181 | 233 | 873 | 683 | 1,031 |
| Operating income (loss) | (935) | (1,200) | (3,089) | (2,836) | (1,667) | **974** |
| FV change, notes etc. | (5,701) | (5,241) | (9,165) | (14,201) | (12,791) | (59,597) |
| Other income (exp.), net | — | — | (3) | (5) | (309) | (8,448) |
| Net loss | (6,592) | (6,377) | (12,138) | (16,858) | (14,439) | (66,309) |
| SBC | 105 | 181 | 305 | 574 | 924 | 1,261 |
| Adj. Operating Income (Loss) | (830) | (1,019) | (1,284) | (1,721) | (617) | 2,235 |
| Operating margin | (249)% | (152)% | (224)% | (139)% | (35)% | 8% |
| Adj. Operating Margin | (221)% | (129)% | (93)% | (84)% | (13)% | 19% |
| Adj. Net Income (Loss) | (786) | (955) | (1,168) | (1,539) | (310) | 2,981 |

Other quarter-level figures:
- Q4 2024 revenue was $197M (p. 63).
- Quarter-over-quarter growth was 48% in Q4'25 and 132% in Q1'26 (p. 195), and 144% in Q2'26 **[derived]**.
- Q2'26 revenue grew 1,368% year over year, while compute and infrastructure grew 300% (p. 136).

**Q3 2026 revenue is blank (p. 5, p. 63), but p. 183 gives a multiple:** "our revenue for the three months ended September 30, 2026 was 86 times our revenue for the three months ended December 31, 2024."
- 86 × $197M ≈ **$16.9B [derived]**, or roughly $16.8–17.1B allowing for rounding.
- This is consistent with TTM revenue per employee of over $6.6M × about 5,300 employees, which implies TTM revenue of at least about $35B (p. 136, p. 229). The cross-check is also derived.

---

## 2. Income statement detail and other income/expense

**H1'26 expense drivers (pp. 149–150):**
- **Personnel** up $2.6B. Of this, $1.9B is stock-based compensation and $510M is cash compensation.
- **Sales, marketing and partnerships** up $3.0B. Of this, **$2.7B is fees paid to channel partners** and $273M is marketing.
- **Other operating and administrative** up $1.4B:
  - +$251M data-quality and evaluation vendors
  - +$223M IT and cloud software
  - +$222M payment processing
  - +$205M professional services
  - +$126M donation matching
  - +$68M facilities

**FY2025 drivers (pp. 151–152):**
- Stock-based compensation +$973M and cash compensation +$339M.
- Channel-partner fees +$341M and marketing +$170M.
- Donation matching +$541M.
- Advertising expense was $33M in FY2024 and $147M in FY2025 (p. F-21).

**Interest income** was $1,111M in H1'26 versus $115M in H1'25, "due to higher average cash and cash equivalents balances and new short-term investments" (p. 150).

**Other income (expense), net (p. F-37):**

| | FY23 | FY24 | FY25 | H1'25 | H1'26 |
|---|---|---|---|---|---|
| Recognition and change in fair value of note purchase agreements | — | — | — | — | (9,405) |
| Change in FV of holdback liability | — | — | (3) | — | (39) |
| Change in FV of warrant rights | — | — | — | — | 724 |
| Other | (2) | — | (5) | — | (37) |
| Total | (2) | — | (8) | — | (8,757) |

**Taxes:** the provision was immaterial: $2M, $1M, $20M, $7M and $21M (p. F-7).
- A full valuation allowance of $3,422M was in place at Dec 31, 2025.
- At Dec 31, 2025: federal NOLs $8.2B, state NOLs $4.2B, federal R&D credits $656M, California R&D credits $343M (p. F-55).
- No Section 382 study has been done since 2023 (p. F-56).
- In the FY2025 rate reconciliation, "Mark to market" accounts for 7,192 / (17.1)% (p. F-54). The fair-value losses are non-deductible.

### What the "change in fair value of convertible notes, derivative liabilities, and SAFEs" is

> "Because these instruments are marked to market, increases in our enterprise valuation drive increases in this expense." (p. 146)

**The instruments:**
- **Convertible notes.** Note purchase agreements with Google (2023 and 2024) and Amazon (2023 and 2024):
  - Google 2023: up to $2.0B at 10.0%.
  - Google 2024: about $1.3B at 8.5%.
  - Amazon 2023: up to $4.0B at 8.0%.
  - Amazon 2024: up to $4.0B; the first tranche at 8.5%, later tranches non-interest-bearing (pp. F-39–F-40).
  - The company elected the **fair value option** (ASC 825) for these notes (p. F-43).
  - Accrued interest is included in the fair-value-change line (p. F-43). There is no separate interest-expense line on the income statement.
- **Derivative liabilities.** These are rights to issue future note tranches. They were $1,110M at end-2023 and $150M at end-2024, and were settled in 2025 (p. F-32, F-43).
- **SAFEs.** $122M was issued in 2023 and all were converted by 2024 (p. F-42).

**Remaining holder and size:**
- Everything outstanding at Jun 30, 2026 is held by **Amazon**. Principal is **$6,203M**:
  - $2,186M under the 2023 NPA, convertible at **$2.0928** per Class N share, maturing Mar 2034.
  - $4,017M under the 2024 NPA, convertible at **$5.0478**, maturing in 2035.
  - Conversion would produce **1,840,444,962 Class N shares** (p. 164).
- MD&A says the outstanding notes "consist entirely of non-interest-bearing rollover notes" (p. 164).
- The carrying **fair value is $108,566M** (p. F-5).
- That equals about **$59 per underlying share [derived]**. This roughly matches the Series H price of $589.0095 per preferred share at a 10:1 conversion, about $58.90 per common share (pp. F-46, F-47).
- **Why the "loss" is so large:** the fixed low conversion price means the notes' value tracks the equity value.
- Of the $132.9B accumulated deficit, **$113.2B** relates to these fair-value changes since 2023 (p. 161).

**Conversion history:**
- $10,347M converted to preferred in 2025 (Series E-2/3/4/5 and F-2).
- $5,499M converted in H1'26 (Series G-3 and G-4) (p. F-38).

**What happens at the IPO:**

> "In connection with this offering, the notes will convert, subject to Amazon's ownership cap, which may be waived at Amazon's election, into shares of Class N common stock at the lower of the fixed conversion price per share reflected in the table and the initial price per share of Class A common stock" (p. 164)

- The cap is 12% of capitalization (p. 164).
- Any portion over the cap is reissued as a non-interest-bearing **rollover note**. These convert quarterly at the lowest of the fixed price, the IPO price and the 10-day VWAP (p. 164).
- Any unconverted balance is payable in cash at maturity, or by set-off against amounts Amazon owes under commercial agreements (p. F-41).
- The amount converting at the IPO is **blank in filing** (p. 19). So is the pro forma removal of the fair-value change (p. 23).
- "We will continue to recognize changes in the fair value of our convertible notes until they are converted into equity, repaid, or otherwise settled" (pp. 146–147).

**The other $8.8B: H1'26 note-purchase-agreement loss (pp. F-31, F-32, F-37):**
- In March and April 2026, the Google 2026 NPA and Amazon 2026 NPA each included commitments to sell Series G-2 preferred at **$259.1364 per share**: 38.6M shares to Google and 19.3M to Amazon.
- These commitments were marked to market. Level 3 rollforward: additions +2,348, change in fair value (11,753), settlement into G-2 of 11,810. That leaves a remaining NPA asset of $2,405M.
- The P&L effect was **$(9,405)M**.
- Series G-2 sits on the balance sheet at a $33,558M carrying value against a $21,749M liquidation preference (p. F-46).
- The filing attributes the expense to "the initial fair value recognition and change in fair value of the assets and liabilities recognized under the note purchase agreements" (p. 150).
- **[derived reading]** The carrying value exceeds the liquidation preference by about $11.8B, which equals the "settlement" amount. That indicates the G-2 shares delivered to Google and Amazon at $259.1364 were worth roughly $11.8B more at settlement. Series H was priced at $589.0095 in Q2 2026 (p. F-46). The filing does not state this in words.

---

## 3. How compute cost is accounted for

**What sits in compute and infrastructure** (p. 145):

> "These costs primarily consist of compute fees paid to CSPs under committed and on-demand arrangements, including storage, networking, and connectivity, and related support costs, infrastructure costs associated with serving customer workloads through partner channels, colocation facility costs, equipment leases and committed power costs"

**Timing of the expense:**

> "These expenses are paid and recognized as compute becomes available to us, rather than when committed, and are generally fixed in the near term" (p. 145)

- Compute is procured "12 to 18 months in advance of availability" (p. 134).
- "We expect our use of short-term compute to increase in the near term and to in turn compress our operating margin and Adjusted Operating Margin as a result." (p. 134)
- From 2026 the line also includes operating-lease cost, finance-lease amortization, and depreciation of owned servers and data center assets (p. 145).

**Functional split: Note 8 (p. F-39).**

The company dropped gross profit from the income statement in 2025:

> "the Company changed its presentation of operating expenses from a functional classification under which cost of revenue, gross profit (loss), research and development, sales and marketing, and general and administrative were presented as separate line items, to a classification based on the nature of expenses." (p. F-14)

| Function | FY23 | FY24 | FY25 | H1'25 | H1'26 |
|---|---|---|---|---|---|
| Cost of revenue | 26 | 752 | 2,773 | 1,019 | 2,380 |
| Research & development | 422 | 2,275 | 6,338 | 1,850 | 9,741 |
| Sales & marketing | 76 | 163 | 911 | 239 | 3,808 |
| Bartz | — | — | 1,500 | — | — |
| General & administrative | 68 | 176 | 1,123 | 190 | 1,050 |
| Gross profit **[derived]** | 15 | (366) | 1,812 | 144 | 13,906 |
| Gross margin **[derived]** | 36.6% | (94.8)% | 39.5% | 12.4% | 85.4% |
| COGS ÷ compute expense **[derived, approx.]** | 6% | 30% | 38% | 44% | 27% |

What each functional line contains (Note 8 footnotes, p. F-39):
- **Cost of revenue (inference):** "Substantially all of cost of revenue consists of compute and infrastructure costs associated with customer-serving workloads."
- **R&D (training, research and internal use):** "compute and infrastructure costs associated with model development, research, and internal usage workloads"
- **Sales & marketing:** includes "channel partner costs" and "compute and infrastructure costs associated with providing free access to the Company's intelligence service".
- A separate split of **training versus inference compute in dollars is not disclosed**. The "fungible pool" is allocated by workload (p. 145).

**Owned versus cloud:**
- Owned servers and networking equipment: $618M gross. Construction in progress: $536M. PP&E net: $1,187M at Jun 30, 2026 (p. F-34).
- Finance-lease right-of-use assets: $432M net (p. F-35).
- Depreciation expense: $1M, $3M, $10M, $4M, $35M (p. F-34).
- D&A in the cash flow statement: $3M, $21M, $40M, $14M, $97M (p. F-12).
- Total lease cost was $89M in H1'26 (p. F-34).
- Compute is still overwhelmingly bought as a service. An explicit cloud-versus-owned split is not disclosed.

**Prepaid hosting:**
- Prepaid expenses were $2,073M current plus $2,364M noncurrent at end-2024.
- This fell to $258M plus $222M at Jun 30, 2026 (p. F-36).
- 2025 operating cash flow benefited from "the consumption during 2025 of hosting capacity that had been prepaid in prior periods" (p. 168).

**Chips and suppliers:**
- The company runs on "AWS Trainium, Google TPUs, NVIDIA GPUs, and AMD GPUs" (p. 135).
- Before 2026 it obtained "substantially all of its compute infrastructure from three cloud service providers" (p. F-16).

---

## 4. Revenue disaggregation and recognition

| | FY23 | FY24 | FY25 | H1'25 | H1'26 | Page |
|---|---|---|---|---|---|---|
| Consumption-based | 39 | 288 | 3,796 | 983 | 13,064 | F-26 |
| Subscription-based | 2 | 98 | 789 | 180 | 3,222 | F-26 |
| United States (billing address) | 34 | 263 | 3,362 | 820 | 11,763 | F-26 |
| International | 7 | 123 | 1,223 | 343 | 4,523 | F-26 |
| % of revenue via CSP marketplaces | ~11% | ~32% | ~47% | ~44% | ~48% | F-16, 56 |

- Net receivables from CSP-marketplace sales were 42%, 60% and 58% of net accounts receivable at Dec 2024, Dec 2025 and Jun 2026 (p. F-16).
- **Gross recognition:** "the Company is the principal and recognizes revenue on a gross basis because the Company has a direct contractual relationship with customers, is primarily responsible for providing the intelligence service to customers, and establishes pricing." (p. F-21)
- **CSP fees:** CSP platforms "bill end customers, collect payments on our behalf, and remit such amounts to us, net of applicable platform and other fees." (p. 56)
  - The fee is expensed in **sales, marketing and partnerships**, which "primarily consist of fees paid to channel partners" (p. 146).
  - The fee rate and total channel fees are **not disclosed**.
  - H1'26 channel-partner fees were at least about **$2.7B [derived lower bound]**, from the stated YoY increase (p. 149), against about $7.8B of CSP-marketplace revenue **[derived: 48% × 16,286]**.
- **Not disclosed:**
  - Revenue by product: API/Claude Platform versus Claude Code versus Claude apps/Cowork.
  - Revenue by individual CSP: Amazon Bedrock, Gemini Enterprise Agent Platform, Microsoft Foundry.
  - Product anecdote only (Q3'26): Claude Enterprise users without Claude Code spent under $75 a month, while the top 5% of users with Claude Code spent about 20 times that (p. 195).
- **Recognition policy** (p. F-20):
  - Usage is recognized as tokens are consumed. Subscriptions are recognized ratably.
  - Payment terms are "generally less than 60 days."
  - Deferred revenue: $28M at Dec 2024, $269M at Dec 2025, $1,650M at Jun 2026 (p. F-5).
  - Remaining performance obligations were **$10.8B** at Jun 30, 2026, with about 75% expected within 12 months (p. F-26).
- **Revenue from rule-breaking customers:** "we estimate that revenue from such customers represented approximately 5% to 7% of our revenue for the nine months ended September 30, 2026" (p. 145). The company expects this share to decline after enforcement in August and September 2026.
- **New models:** model versions released in the six months to Sep 30, 2026 produced over 80% of Q3'26 revenue (p. 143).
- **Seasonality:** spend fell about 20% in the two weeks ended Jan 2, 2026 (p. 143).
- **Pricing:** Opus 5.5 cut cost per task by about 40% versus Opus 5. Fable 5.1 cut cost about 25% versus Fable 5 (p. 195). The company says: "Because of our compute efficiency, we have been able to make these improvements while preserving our margins." (p. 195)

---

## 5. Key metrics and definitions

**Customers with at least $100k TTM revenue:**

| Date | Count | Page |
|---|---|---|
| Dec 2023 | ~20 | 142 |
| Dec 2024 | ~200 | 142 |
| Mar 2025 | ~400 | 158 |
| Jun 2025 | >600 | 148 |
| Sep 2025 | >950 | 134 |
| Dec 2025 | ~1,500 | 142 |
| Jun 2026 | >6,000 | 148 |
| Sep 2026 | **>11,900** | 134 |

**Revenue from these customers:**
- $37M (90% of revenue) in FY23, $220M (57%) in FY24, $3.5B (76%) in FY25 (p. 142).
- $870M (75%) in H1'25 and $12.0B (74%) in H1'26 (p. 148).
- The TTM Sep-2026 amount is **blank** (p. 142).
- The rest of revenue comes from "approximately 40 million customers, each with less than $100,000" (p. 142).

**Larger customers:**
- More than 1,900 customers at $1M+ and about 250 at $10M+, as of Sep 30, 2026 (p. 134).
- Earlier counts are not disclosed.
- **Customer definition:** "a distinct organization, identified by aggregating the accounts that we determine belong to the same organization" (p. 2).

**Net Revenue Retention: about 900% at Sep 30, 2026** (p. 135). Definition, pp. 2–3:

> "We calculate Net Revenue Retention by dividing the Qualified Customers' Current Period revenue by their Base Period revenue. A Qualified Customer is a customer with at least $1 of revenue during the Base Period, excluding subscribers to our Claude Pro and Max plans"

- It compares the latest quarter with the same quarter a year earlier (p. 3).
- Historical NRR is not disclosed.

**Run-Rate Revenue:** **blank** "as of October 31, 2026" (p. 194). Definition (p. 3):

> "the sum of (i) our consumption-based fees during the trailing 28-day period ended on the measurement date, multiplied by 13, and (ii) our aggregate monthly subscription fees as of the measurement date, multiplied by 12."

**Other metrics:**
- Over 50% of $100k+ customers used Claude Platform plus at least one first-party application in Q3'26, up from about 30% in Q4'25 (p. 134).
- Over 50% of the Fortune 500 and over 30% of the Global 2000 are $100k+ customers (p. 142).
- These customers include every company in the Fortune 10 (p. 194).
- Sales, marketing and partnerships expense was 19% of revenue in H1'26 (p. 140).
- The company launched 250 model versions, features and applications in the first nine months of 2026 (p. 142).
- These operating metrics "have not been independently verified by third parties" (p. 67).

---

## 6. Non-GAAP measures

- **Adjusted Operating Income (Loss)** is "operating loss excluding (i) stock-based compensation expense, (ii) non-cash charitable contributions, and (iii) the Bartz settlement" (p. 155).
- **Adjusted Net Income (Loss)** additionally excludes the fair-value change on notes and derivatives and on "certain mark-to-market financial instruments" (p. 156).
  - The H1'26 mark-to-market amount of $8,720M = the NPA loss of 9,405 + the holdback loss of 39 − the warrant gain of 724 **[derived, p. F-37]**.
- Full annual and quarterly reconciliations are in the JSON (pp. 156, 160). All items foot.
- **No other non-GAAP measures:** no free cash flow, EBITDA or gross margin.
- **Q3 commentary:** "our operating margin and Adjusted Operating Margin for the nine months ended September 30, 2026 have expanded significantly year over year" (p. 133). No numbers are given.

---

## 7. Cash flow, liquidity, debt

**Cash flow (p. F-12):**
- **H1'26 operating cash flow of $3,929M** = net loss adjusted for non-cash items (+$2,761M) plus working capital (+$1,168M) **[derived]**.
  - Receivables: (4,982)
  - Prepaids: +2,094
  - Payables: +2,679
  - Deferred revenue: +1,380
- Free cash flow (OCF minus capex) **[derived; company does not present it]**: FY23 (1,629), FY24 (5,707), FY25 (2,768), H1'25 (1,531), H1'26 **3,447**.
- **Financing inflows:**
  - Preferred stock: 445, 1,188, 16,548, 3,549 and 110,432.
  - Convertible notes for cash: 1,750, 6,050, 3,450, 1,300 and 0.
  - SAFEs: 122 in 2023.
  - Aggregate capital raised by Jun 30, 2026 was **$141.1B** (p. 10).
  - In 2026: Series G raised $30.2B in Q1. G-2 raised $15.0B and Series H $65.2B at $589.0095 a share in Q2 (p. F-46).

**Cash and investments:**
- Cash and equivalents: $3,141M (Dec 2024), $17,388M (Dec 2025), $112,389M (Jun 2026).
- Short-term investments: $0, $2,889M, $19,262M.
- Cash plus short-term investments at Jun 2026: $131,651M (p. 24).
- At Jun 30, 2026 the money-market funds held $108,603M (p. F-27).
- Restricted cash was $2,529M. This includes a $2.5B escrow deposited in Apr 2026 for a compute lease (p. F-63). The company "may be required to restrict up to an additional $10.0 billion" (p. F-36).
- The Sep 30, 2026 liquidity figures are **blank** (p. 138).

**Debt:**
- **Revolver:** $2.5B (May 2025), raised to $2.75B then $3.25B (p. 162). Nothing was drawn, and $78M of letters of credit were outstanding at Jun 30, 2026.
- **Amended and restated (A&R) facility:** **$15B** from Sep 2026, maturing Sep 4, 2031. Minimum liquidity of $5.0B from Q4 2026. Secured until the company reaches investment grade (pp. 162–163).
- **Other liabilities:**
  - Operating lease liabilities $1,079M (present value) at Jun 2026.
  - Finance lease liabilities $443M (p. F-35).
  - No other borrowings.
- **Going concern:** none. The company states its cash "will be sufficient ... for at least the next 12 months" (p. 162). No going-concern or substantial-doubt language appears anywhere.

**Undrawn note purchase agreements at Jun 30, 2026 (p. 165) totaled $77.0B:**
- **Google 2026 NPA: $20.0B.**
  - Draws run to Dec 2030 and are tied to compute agreements and TTM revenue targets.
  - The amount falls by up to $10.0B if Google buys up to $10.0B of Class N stock in a concurrent private placement at the IPO price.
  - Google's cap is 14.99% (pp. 167–168).
- **Amazon 2026 NPA: $15.0B.**
  - Available in $5.0B increments on compute-capacity milestones, until 30 months after the IPO.
  - Post-IPO draws are settled in Class N stock at the 30-day VWAP (pp. 165–166).
- **Broadcom Infrastructure Partner 2026 NPA: $42.0B.**
  - Notes "solely to finance quarterly rent obligations under the 2026 Lease Arrangement."
  - 9.00% interest, paid in kind (PIK). Rises to 13.00% with conversion at 85% of VWAP if revenue conditions are not met.
  - Otherwise convertible at 90% of the 30-day VWAP. 150% cash payout on a change of control (pp. 166–167).
- **Separately:**
  - An Aug 2025 NPA of up to $10.0B to finance lease rent. The counterparty is not named in Note 9, and the facility ends at the IPO (p. F-42).
  - AMD's commitment to buy up to $5.0B of Class N stock on GPU-deployment milestones, with the first expected in 2027 (p. 163).
  - A **blank** total of "available financing capacity ... and ... equity commitments" (p. 138).

---

## 8. Contractual obligations and compute commitments (critical)

**The MD&A totals are blank.** The following are all **blank in filing**:
- The aggregate commitment ("more than $___"), the amount before 2030, and the amount due in the next 12 months (pp. 6, 137, 196).
- The contractual-obligations table and its "as of" date (p. 169).
- The estimate for non-fixed agreements (p. 170).

Remaining spend is expected "between 2031 and 2045" (p. 137).

**Note 13 purchase commitments at Dec 31, 2025** (non-cancelable, term over one year, mainly CSP hosting; p. F-58):

| 2026 | 2027 | 2028 | 2029 | 2030 | Thereafter | **Total** |
|---|---|---|---|---|---|---|
| 7,059 | 11,128 | 10,832 | 8,304 | 5,428 | 11,808 | **54,559** |

**Aggregates disclosed in the notes:**

| Item | Amount | As of / period | Page |
|---|---|---|---|
| Fixed or minimum guaranteed purchase commitments (1–20 yr terms) | **~$265.6B** | Jun 30, 2026 | F-58 |
| Leases signed but not yet commenced (undiscounted) | $50.2B → **$321.4B** | Dec 2025 → Jun 2026 | F-35 |
| Commenced leases, undiscounted (operating / finance) | $1,601M / $523M | Jun 30, 2026 | F-35 |
| New and amended agreements after Dec 31, 2025 (overlaps the two rows above; do not add) | ~$417B | to Jun 1, 2026 | F-63 |
| New and amended agreements after Jun 30, 2026 | **~$245B** | to Oct 26, 2026 | F-65 |
| Short-term agreements after Jun 30, 2026 (minimum, non-cancelable) | ~$21B | to Oct 26, 2026 | F-65 |
| Agreements with no fixed amount: TPU capacity 2028–31 (estimate) | $125–150B | — | 170, F-63 |
| AMD Helios initial capacity (no fixed amount) | >$20B | 2027+ | 171 |

- **Rough total [derived, indicative only]:** $265.6B + $321.4B + about $2.1B of commenced leases + $245B + $21B ≈ **$855B** of fixed and minimum obligations. A further roughly $145–170B is estimated for non-fixed agreements. This is not a filing total. Overlaps and run-off since Jun 30 are not specified.

**Named arrangements (pp. 170–172):**

| Counterparty | Amount | Term | Cancellability / take-or-pay |
|---|---|---|---|
| Microsoft | ≥ $44.9B | Nov 2026–May 2033 | "regardless of actual usage"; non-cancelable except Microsoft's uncured breach or undelivered tranches |
| Google | ≥ ~$114.5B | Apr 2026–Jul 2033 | "regardless of actual usage"; shortfall paid as a true-up; non-cancelable except Google's uncured breach |
| TPU providers incl. Google | est. $125–150B | delivery 2028–2031 | depends on capacity delivered; not in the table |
| Amazon | ≥ $110.0B | May 2026–Apr 2036 | "regardless of actual usage"; true-up; non-cancelable except Amazon's uncured breach |
| SpaceXAI (SpaceX.AI LLC, formerly X.AI LLC), NVIDIA GPUs | up to $120.5B (~$3.1B a month at full delivery, expected Dec 2026) | into 2029 | non-cancelable until Jan and Mar 2027; then 90 days' notice by either party |
| AMD (Helios / MI450) | >$20B if the full initial capacity is procured | from 2027 | no fixed dollar amount; non-cancelable by Anthropic except AMD's uncured breach |
| Nscale, NVIDIA GPUs | up to ~$44.6B | into 2033 | fees accrue only on delivery and acceptance; Nscale must obtain financing |
| Lambda, NVIDIA GPUs | ~$41.3B (Aug-2026 deal ~$34.9B) | into 2034 | pay on delivery; Aug deal terminable if Lambda does not secure the facility lease |
| Broadcom master equipment leases (TPU) | ~$161.2B of rent excluding interest | five-year leases | finance leases; non-cancelable except default; secured; cross-default; guaranteed by Anthropic, PBC |

- The simple sum of named, quantified amounts is $637B **[derived]**, excluding the TPU and AMD estimates.

> "Our compute commitments are substantial and generally must be satisfied regardless of our revenue or utilization" (p. 141)

**Off-balance-sheet items** (p. 169):
- Hosting services and lease commitments.
- Equity-method funding commitments: $325M, of which $265M is unfunded (p. F-28).
- Guaranty and cost-reimbursement arrangements with data center developers: maximum $0.8B (p. F-59).
- A power-purchase guaranty of up to $500M (p. F-63).
- Consolidated special-purpose entities (VIEs) for compute leases: $296M of assets and $328M of liabilities (p. F-35).
- Partner support: "a portion of our compute and infrastructure build-out has been funded or supported by capital or credit support provided or facilitated by certain of our CSPs and chip partners." (p. 141)

---

## 9. Customer concentration and related parties

**Customers above 10% of revenue (unnamed; p. F-15):**
- Customer A: 12% in FY25.
- Customer B: 12% in FY25 and 18% in H1'25.
- Customer C: 43% in FY23 and 11% in H1'26.
- Customer D: 11% in FY23.

**Customers above 10% of receivables:**
- Customer A: 13% at Dec 2025 and Jun 2026.
- Customer C: 10% at Jun 2026.

**Year-to-date 2026:**
- "No single customer represented more than 10% of our revenue for the nine months ended September 30, 2026" (p. 143).
- The top five customers were about 25% of 9M'26 revenue (p. 56).
- 79% of Q3'26 revenue came from outside the top five, up from 64% in Q1'26 (p. 143).

**Cloud providers are related in many ways but not as related parties:**
- "Amazon, Google, and Microsoft, through their respective affiliates, have made significant equity investments in our company ... These CSPs are also our customers" (p. 73).
- They are also suppliers, distribution channels, lenders/note holders and competitors.
- They do **not** appear in "Certain Relationships and Related Person Transactions" (pp. 282–287).
- Dollar revenue from or payments to Amazon, Google, Microsoft or Broadcom are **not disclosed**.
- Payments to the Long-Term Benefit Trust (LTBT): $2.7M (FY23), $0 (FY24), $0.9M (FY25), $8.4M (9M'26) (p. 286).

**US government:** on Feb 27, 2026 the government ordered agencies to stop using the models, and the company was designated a supply-chain risk (p. F-64). The revenue impact is not quantified.

---

## 10. Stock-based compensation, RSUs and the IPO settlement mechanics

**SBC amounts:**
- SBC by year: 29, 192, 1,165, 286 and 2,185 (p. 156).
- The cash flow statement shows $7M less in FY25 and H1'25. The difference is the share-repurchase premium booked as SBC (p. F-53).

**RSUs:**
- 1,049.6M outstanding at Jun 30, 2026, with a weighted-average grant-date fair value of $25.34 (p. F-52).
- **No expense has been recognized to date**, because the vesting condition tied to an IPO or change of control is not yet "probable."
- Total unrecognized expense is **$26.6B**, of which $2.9B is already service-vested and would be expensed immediately (p. 173).
- About 91M more RSUs ($5.8B of grant-date fair value) were granted after June (p. F-64).
- Executive RSUs modified in Oct 2026 will be remeasured at modification-date fair value (p. F-64).

> "Following the completion of this offering, stock-based compensation expense related to our RSUs will result in increases in our expenses in future periods, in particular the quarter in which this offering is completed" (p. 173)

The IPO-date cumulative catch-up is **blank** (p. 173).

**RSU settlement at the IPO:**
- Shares are net-settled: the company withholds RSU shares to cover employee taxes, and pays the tax in cash, partly from IPO proceeds.
- Blanks: the number of shares withheld (p. 19), the withholding rate (p. 20), and the cash amount "to satisfy our anticipated tax withholding and remittance obligations of $ [blank]" (p. 124).

**Options:**
- 1,797M outstanding at a weighted-average exercise price of $2.89, with aggregate intrinsic value of $98.2B (p. F-51).
- $2.8B of unrecognized cost, to be expensed over 1.2 years (p. F-51).
- Unrecognized cost on restricted stock awards (RSAs) is $325M (p. F-53).
- A Feb 2026 tender offer sold 179.9M Class A shares at $25.9136 (p. F-53).

**Donation matching (non-cash; excluded from adjusted metrics):**
- $541M in FY25, about 4% of operating expenses (p. 144).
- $126M in Q1'26.
- **$2.0B in Q3'26** for August 2026 donations, settled with about 28.0M Class N shares in Oct 2026 (p. F-65).

**Public Benefit Fund:**
- 846,840,960 Class N shares, about 5% of fully diluted shares, contributed to a wholly owned subsidiary.
- The shares are not outstanding for accounting purposes (pp. 19, 143).
- The board may issue up to another 2% for each 50% share-price milestone (p. 143).

**New plans:** a 2026 equity incentive plan with 2,950.0M shares and an employee stock purchase plan (ESPP) with 160.0M shares (p. F-65).

---

## 11. Q3 2026 and other recent developments (no formal section)

- **Revenue:** blank. 86 times Q4'24 (p. 183), about $16.9B **[derived]**.
- **Customers:** more than 11,900 at $100k+; more than 1,900 at $1M+; about 250 at $10M+. NRR about 900% (pp. 134–135).
- **Concentration:** top five about 25% of 9M revenue. No customer above 10%. 79% of Q3 revenue from outside the top five (pp. 56, 143).
- **Policy-violating customers:** 5–7% of 9M revenue (p. 145).
- **Donation matching:** $2.0B charge in Q3 (p. F-65).
- **RSUs:** about 91M granted, worth $5.8B (p. F-64).
- **Credit facility:** $15B A&R facility in Sep 2026 (p. F-64).
- **AMD:** agreement signed in July 2026 (p. 163).
- **New commitments:** about $245B plus about $21B short-term after Jun 30 (p. F-65).
- **Stock split:** 10-for-1 on Sep 17, 2026 (p. F-14).
- **Blank:** the Oct 31, 2026 run-rate revenue (p. 194) and Sep 30 liquidity (p. 138).

---

## 12. Employees

- Headcount was about 940 at Dec 31, 2024 and **about 5,300 at Sep 30, 2026** (pp. 63, 229).
- Headcount grew about 170% over the year to Sep 2026 (p. 136).
- TTM revenue per employee was $1.4M at Sep 30, 2025 and over **$6.6M** at Sep 30, 2026 (p. 136).
- Over 90% of codebase contributions in Sep 2026 were written by Claude (p. 136).

---

## 13. Auditor, accountant change, controls

**Auditors:**
- **Ernst & Young LLP** audited FY2025. Its report says "We have served as the Company's auditor since 2025." The report is dated Jun 1, 2026, with the stock split dated Sep 30, 2026 (p. F-3).
- **Grant Thornton LLP** audited FY2023 and FY2024; it says it served "from 2023 to 2025" (p. F-4).
- The interim statements are unaudited.

**Critical audit matters:** loss contingencies, and the fair value of the convertible notes. The latter was "particularly sensitive to changes in the relative weight applied to the two valuation methods" (p. F-3).

**Change in accountant (p. 334):**

> "On October 30, 2025, we engaged Ernst & Young LLP as our independent registered public accounting firm to audit our consolidated financial statements as of and for the year ended December 31, 2025, and dismissed Grant Thornton LLP"

- There were no disagreements and no reportable events.
- Grant Thornton's letter is Exhibit 16.1, dated Oct 26, 2026.
- **No reason for the change is given.**

**Controls:**
- **No material weakness is disclosed.** A full-text search found none.
- Internal control over financial reporting has not been audited (p. F-2).
- The first management report on internal controls comes with the "second annual report on Form 10-K" (p. 107).
- The company relies on distribution partners' controls for some financial data (p. 107).

---

## 14. Use of proceeds, capitalization, dilution

- **Proceeds:** net proceeds, the price range, the share count, the capitalization table (as of Sep 30, 2026; p. 127) and dilution (p. 129) are all **blank**.
- **Use of proceeds** (p. 124): "general corporate purposes, including working capital, operating expenses, and capital expenditures, including investments in compute and infrastructure, as well as hiring and retention of highly skilled personnel." Part also goes to RSU tax withholding.
- **Listing:** Nasdaq Global Select, ticker **"ANT"** (cover).
- **Preferred conversion at the IPO:** all preferred converts automatically. The as-converted count is 8,558,869K shares at Jun 30, 2026 (p. F-58; this ties to p. F-50).
- **Valuation:** the filing does not state one.

---

## 15. Internal inconsistencies and nuances spotted

1. SBC differs between pages: 1,165 vs 1,158 for FY25, and 286 vs 279 for H1'25 (p. 156 vs p. F-12). The difference is the $7M repurchase premium (p. F-53).
2. The H1'26 fair-value change on the holdback liability is 30 in the Level 3 rollforward (p. F-32) but (39) in other income (p. F-37). This is not explained.
3. **Google and Amazon 2026 NPA sizes differ between sections:**
   - MD&A shows "original" amounts of $20.0B and $15.0B, with interest "N/A" (pp. 165–167).
   - Note 9 shows up to $30.0B at 9.0% and $20.0B at 8.0%, each reduced by the partner's Series H purchase (pp. F-40, F-42).
4. Revolver sizes are $2.75B and $3.25B in MD&A versus $2.8B and $3.3B in Note 9 (rounding).
5. The auditor's critical audit matter cites a $34.5B 2025 loss on the notes, while the income statement shows $34.3B. The line nets off the $150M derivative settlement.

---

## Analyst flags

1. **The operating loss is tiny; the net loss is enormous.**
   - H1'26 operating loss was $693M, against a net loss of $80.7B.
   - The gap is $72.4B of non-cash mark-to-market on Amazon's low-strike convertible notes, plus $9.4B of NPA losses. These track the company's valuation, not operations (pp. F-7, F-37, 161).
2. **The stockholders' deficit is an accounting artifact.**
   - There is a $(127.6)B deficit despite $131.7B of cash and investments.
   - Preferred stock sits outside equity, and the notes are carried at $108.6B fair value against $6.2B of principal (pp. F-5, 164).
3. **Gross margin vanished from the face of the income statement in 2025.**
   - Note 8 implies about 85% in H1'26 versus 12% in H1'25 **[derived]**.
   - The figure depends on how a fungible compute pool is split between serving (cost of revenue) and training (R&D) (pp. F-14, F-39).
4. **CSP fees sit below gross margin.**
   - Revenue is booked gross. About 48% flows through CSP marketplaces.
   - CSP fees are in sales, marketing and partnerships (at least about $2.7B in H1'26 **[derived]**), so gross margin flatters unit economics (pp. F-16, F-21, 149).
5. **The commitments are of a different order of magnitude.**
   - Fixed or minimum purchase commitments of about $265.6B, plus $321.4B of leases not yet commenced at Jun 30, plus about $245B signed since then.
   - Many are explicitly "regardless of actual usage", with true-ups.
   - Compare $16.3B of H1'26 revenue (pp. F-35, F-58, F-65, 170–171).
6. **The headline totals are blank.**
   - The MD&A aggregate commitment figure and the contractual-obligations table are not yet filled in. Expect them in an amendment (pp. 137, 169).
7. **The first profitable quarter may not last.**
   - Q2'26 operating margin was 8% (19% adjusted).
   - Management expects compression as committed compute lands and short-term compute use rises (pp. 133–134, 159).
8. **An IPO-quarter stock-compensation cliff is coming.**
   - $26.6B of unrecognized RSU expense at Jun 30, of which $2.9B is a catch-up recognized immediately, plus $5.8B of new grants. All are excluded from adjusted metrics (pp. 173, F-52, F-64).
9. **The adjusted metrics exclude large items.**
   - Stock compensation ($2.2B in H1'26) and "non-cash charitable" donation matching, including **$2.0B in Q3'26**.
   - Adjusted Net Income also benefits from $1.1B of interest income on the cash pile (pp. 156, F-65).
10. **NRR of about 900% is not a typical SaaS figure.** It excludes Pro and Max subscribers and compares single quarters a year apart. Run-rate revenue annualizes 28 days × 13 (pp. 2–3).
11. **5–7% of 9M'26 revenue came from customers violating usage policy or terms.** The company expects this to decline after enforcement (p. 145).
12. **Q3 revenue is blank but effectively disclosed.** 86 × Q4'24's $197M ≈ $16.9B **[derived]**, implying slower QoQ growth than Q2's 144% (pp. 63, 183).
13. **Strategic partners finance their own sales.**
    - Broadcom's $42B NPA exists solely to fund rent to Broadcom.
    - Google's $20B and Amazon's $15B NPAs are tied to compute and revenue milestones. AMD will buy up to $5B of equity on GPU deployment.
    - Under the 2026 agreements, Google and Amazon bought G-2 preferred at $259 a share. Marking those commitments to market as the valuation rose (Series H at $589) produced the $9.4B loss. **[derived reading]** (pp. 163–168, F-31, F-32, F-37, F-46)
14. **Concentration and conflicted partners.**
    - The top five customers are about 25% of 9M revenue, and Customer C was 11% in H1'26.
    - The cloud providers are investors, suppliers, distributors, customers and competitors. None of their dollar flows are disclosed (pp. 56, 73, F-15).
15. **Operating cash flow turned positive with help from working capital.**
    - H1'26 OCF of $3.9B was helped by payables (+$2.7B), the prepaid-hosting run-off and deferred revenue.
    - Capex is still small ($482M), but the company expects capex and leases to "result in significant net cash used" (pp. F-12, 161).
16. **The auditor changed in Oct 2025** (Grant Thornton to EY), with no disagreements and no stated reason. No material weakness is disclosed, and internal controls are unaudited (pp. 334, F-2, 107).
