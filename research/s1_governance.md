# Anthropic, PBC Form S-1 (filed 2026-10-26): governance, ownership, insiders, lock-ups, underwriting

**Sources and conventions**
- Page cites are the printed prospectus page numbers ("p. 245"). Financial-statement pages are written "F-41". Part II pages are written "II-3".
- Exhibits are cited by exhibit number and section, e.g. "Ex. 99.1 §4.3". The exhibit numbers come from the Exhibit Index (II-6 to II-7). The raw file `exhibitNNN-sx1.htm` corresponds to Exhibit N.NN.
- This is a preliminary S-1. Most share counts, percentages, prices and dollar totals for the offering are blank (`$____`). This file marks them **[BLANK]** and does not estimate them. Where I derived a number arithmetically from disclosed figures, it is labelled **[DERIVED]** and the method is shown.
- Exhibit-to-number mapping: 3.3 = post-IPO charter; 3.5 = post-IPO bylaws; 4.2 = IRA; 4.3 = Amazon 2026 NPA; 4.4 = Broadcom NPA; 4.5 = Google 2026 NPA; 4.6 = Broadcom RRA; 4.7 = Google RRA; 10.11 = Broadcom Master Equipment Lease; 10.12 and 10.13 = DAF irrevocable proxies; 10.14 = Stockholders' Agreement; **99.1 = Form of A&R LTBT Trust Agreement**; **99.2 = Form of Founder LLC Agreement (Anthropic Founders, LLC)**. Exhibit 16.1 (Grant Thornton letter) and 1.1 (Underwriting Agreement, "to be filed by amendment") are not in the raw folder.

---

## 1. The five common-stock classes (plus Class N)

The post-IPO charter authorizes 460,000,000,002 shares in total: 300B Class A, 100B Class N, 1 Class T, 1 Class F, 30B Class E and 30B preferred (p. 292). The S-1 calls this "a novel capital and corporate governance structure that has no direct public company precedent" (p. 107).

| | **Class A** | **Class N** | **Class T** | **Class F** | **Class E** |
|---|---|---|---|---|---|
| Holder | IPO buyers, founders, employees, voting-preferred investors (after conversion) | "primarily strategic business partners" (p. 293). Amazon and Google, plus the Anthropic Public Benefit Fund (wholly owned subsidiary) | LTBT (sole holder) | Founder LLC (Anthropic Founders, LLC), whose members are the 7 co-founders | Employees, excluding co-founders. **0 shares at IPO** (p. 18) |
| Votes | 1 per share on general matters | 0 (only where the DGCL requires) | Elects the Class T directors (a board majority). Also votes on redemption of Class E and on certain amendments to Class F rights | **"an aggregate number of votes that equals 50.1% of the total voting power"** (p. 247) | 1 per share, on limited matters only |
| Economics: dividends and liquidation | Pro rata | Pro rata (same as A) | None. Par value ($0.00001) on liquidation | None. Par value on liquidation | None. Par value on liquidation |
| Conversion | None | Converts 1:1 into A on a registered or open-market sale, or on transfer to a non-N holder that will own ≤9.99% of any class (p. 293) | None | None | None |
| Transfer | Free (subject to lock-up) | Free, converting to A on transfer | Only with "Trust Amendment Threshold" approval. There is "no separate restriction on the identity of a permissible transferee" (p. 294) | Only by a board-approved reorganization of the Founder LLC with no change in members (p. 293) | Not transferable |
| Redemption | No | No | For no consideration, at the Trust Amendment Threshold (pp. 294–295) | For no consideration on (i) a Supermajority of the founders' request, (ii) Founder LLC dissolution, or (iii) the end of the Class F Transition Period (p. 295) | For no consideration (see §4) |

Sources: pp. 292–296; summary table at p. 15. The Class F vote formula is in Ex. 3.3, Art. V: **Applicable Class F Vote = (0.501 × A) ÷ (0.499 × B)**, where A is all other general-voting votes and B is the number of Class F shares (= 1). The S-1's own example: issuing 1,000,000 new Class A shares gives Class F "approximately 1,004,008 additional votes" (p. 117).

Other capital-structure facts:
- A 10-for-1 forward split of Class A and Class N took effect on Sept 17, 2026. Class T had a 1-for-1,000 reverse split on the same day (p. 21; F-14).
- Preferred stock converts at roughly 10 common shares per preferred share (F-47). Voting series (A, C-1, D-1, D-2, E-1, F-1, G-1, H-1) become **Class A**. Non-voting series (B, C-2, D-3, E-2 to E-5, F-2 to F-4, G-2 to G-4, H-2 to H-4) become **Class N** (p. 19).
- Preferred stock is authorized post-IPO, but the board can issue it only with 80% board approval and, before the Class F Sunset, the Founder LLC's consent. Voting preferred would dilute Class A while "the voting power of our Class F common stock would remain fixed" (p. 298).

---

## 2. "Who controls what" after the IPO

### Board (7 authorized seats, p. 256)
- **4 Class T seats, elected by the LTBT:** Reed Hastings, Vas Narasimhan, Christopher Liddell (the **Specified Class T Director**) and **one vacancy** (p. 256).
- **3 seats elected by Class A and Class F voting together:** Dario Amodei, Daniela Amodei and Yasmin Razavi (p. 256). Because Class F has 50.1% of the votes, the Founder LLC decides these seats.
- "Collectively, the LTBT and the Founder LLC will have the ability to elect all members of our board of directors" (p. 250). This is backed by a Stockholders' Agreement under which the LTBT and the Founder LLC vote to implement the board-composition provisions (p. 285; Ex. 10.14 §2).
- The board size can be changed only by **80% of the Whole Board** (6 of 7 under the stated rounding rule [DERIVED]), and the number of seats "must be an odd number" until either sunset (p. 302; Ex. 10.14 §2.1).

### Stockholder votes
The Founder LLC "will be able to elect and remove the directors who are not Class T directors and determine the outcome of all matters submitted to a vote of our stockholders generally (including the approval of any merger, sale of our company…) for the foreseeable future" (pp. 250–251). Class A holders "generally will not be able to affect the outcome of any matter… regardless of how they vote", except where the founders deadlock (p. 302).

### Voting power and economic ownership table

| Holder | Voting power, general matters (post-IPO) | Board | Economic ownership |
|---|---|---|---|
| **Founder LLC** (7 co-founders, 1 vote each) | **50.1%**, fixed (p. 289) | Picks all 3 non-T seats | **None** (Class F has no economics) |
| Co-founders' personal Class A | Part of the 49.9% Class A pool. The S-1 leaves the % **[BLANK]** (p. 109, p. 289) | — | 231.8M to 244.2M shares each, **1,685,535,170 in total** (beneficial ownership, p. 289). **[DERIVED] ≈ 9.95%** of fully diluted shares, using the fully diluted count implied by "846,840,960 shares… representing 5% of our fully diluted shares as of June 30, 2026" (p. 12): 846,840,960 / 0.05 = 16.94B. The dates differ (Sept 30 holdings vs June 30 share count), so this is approximate |
| **LTBT** | None on general matters (excluded from the voting % in the table, p. 289 †) | Elects 4 of 7 seats (majority) | **None** |
| **Amazon** (AWS) | **0** (holds non-voting Class N, plus convertible notes) | None | "greater than five percent of our outstanding capital stock". The share count is **[BLANK]** (p. 116). Note conversion is capped at **12%** of capitalization unless Amazon waives the cap (p. 164) |
| **Google** | **0** (Class N) | None | ">5%" (same risk factor) with the share count **[BLANK]** (p. 116). The 2026 NPA cap is **14.99%** post-money, unless waived (p. 168) |
| Anthropic Public Benefit Fund (wholly owned subsidiary) | 0 (Class N) | — | **846,840,960 Class N shares = 5% of fully diluted** (June 30, 2026). These are "legally outstanding" but not outstanding for accounting purposes (pp. 12, 19) |
| Other investors (former voting preferred), employees, public | Share the remaining Class A part of the 49.9% | — | **[BLANK]** |
| Employees via Class E | Limited matters only. 0 shares at IPO | Swing vote on the Specified Class T Director (when the NGC objects) and on LTBT amendments | None |

**[DERIVED] identifiable Amazon and Google preferred stakes (a floor, not a disclosed figure).** The S-1 leaves both share counts blank. The notes to the financial statements do tie specific series to each company:
- **Google:** E-3 (12.66M), E-4 (15.34M), E-5 (24.24M), G-4 (3.32M) and G-2 (38.6M) preferred shares (F-31, F-39 to F-40), plus $10.0B in "Series H" (F-40) at $589.0095 per share, about 17.0M preferred shares. At roughly 10:1, that is about 1.1B Class N shares, or about 6.6% of 16.94B fully diluted shares.
- **Amazon:** E-2 (95.28M), F-2 (20.74M), G-3 (20.56M) and G-2 (19.3M) (F-31, F-41 to F-42), plus $5.0B of Series H (about 8.5M). That is about 1.64B Class N, or about 9.7%, plus rollover notes convertible into up to 1,840,444,962 Class N shares before the cap (p. 164).
- Any holdings from before Sept 2023 or acquired in secondaries are not itemized in the sections reviewed. Use these figures with caution.

**Note on the principal-stockholder table.** The ">5% Stockholders" section lists **only the LTBT (Class T) and the Founder LLC (Class F)** (p. 289). Amazon and Google do not appear because the table covers ">5% of… any class of our voting securities" (p. 288), and they hold non-voting Class N.

---

## 3. Long-Term Benefit Trust (LTBT)

**What it is.** A Delaware common-law "noncharitable purpose trust" governed by the Amended and Restated Trust Agreement (p. 244; Ex. 99.1 §1.1). It was created in 2023 (p. 13); the original agreement is dated June 29, 2023 (Ex. 99.1 recital). Its stated purpose is to ensure the company "is managed in a manner that responsibly balances the pecuniary interests of the Company's stockholders, the best interests of those materially affected by the Company's conduct, and the responsible development and maintenance of advanced AI for the long-term benefit of humanity. The Trust shall have no other purposes and no beneficiaries" (Ex. 99.1 §1.3). It is **consolidated as a VIE on Anthropic's balance sheet** (p. 246).

**Powers**
- Elects and removes the Class T directors, who are a board majority (p. 244).
- The LTBT and its Trustees have no "decision-making authority in the day-to-day management or strategy setting of the company" (p. 244).
- **Notice rights (Ex. 10.14 §3.6; p. 285).** Anthropic may not take certain actions without at least 5 days' written notice to the Trust; otherwise the action is "null and void". The actions are: a liquidation event, a sale of ≥50% of voting power or economic interest, bankruptcy, or a **"transfer [of] control of an AI model exceeding capabilities thresholds to be established by the Board, and re-established by the Board on a quarterly basis."** The Trust is "deemed to have waived" notice if it does not object within 5 days of becoming aware. This is a notice right only, not a veto.
- The Trust's approval is needed to amend key Founder LLC provisions (member exit, succession, dissolution) (Ex. 10.14 §3.7).

**Limits**
- **The Specified Class T Director (currently Liddell).** The LTBT's power to nominate, remove without cause, or re-designate this director "is subject to the concurrence of our NGC" (p. 244).
  - If the NGC does not concur within 15 days, the matter goes to a vote of Class E holders (majority of votes cast, with a quorum of a majority of outstanding Class E), unless the LTBT withdraws.
  - Removal for cause needs neither, but the LTBT and the Founder LLC owe each other 30 days' notice (p. 244).
  - The NGC is "one Class T director and two directors who are not Class T directors" (Daniela Amodei as chair, Hastings, Razavi) (pp. 244, 260).
- **30-day NGC notice.** The NGC must get 30 days' notice of any LTBT or Founder LLC director nomination or removal and of any Trustee appointment or removal. The NGC can waive it. The S-1 says these procedures "do not give our board of directors the substantive ability to limit the LTBT's freedom to elect directors of its choosing", apart from the Specified Director rule (p. 260).
- **Trust voting rules.** Voting Trustees act by majority, but cannot act at all if fewer than 3 have been in office for more than 90 days. "Specified Matters" need **80% of Voting Trustees** (Ex. 99.1 §2.1(e)–(f)).
- **No Anthropic securities.** The Trust may own no Anthropic securities other than Class T (Ex. 99.1 §2.1(d)). "The policies of the LTBT prohibit a Trustee from directly purchasing or holding any of our securities" (p. 247).

**Trustees** (5 authorized, 1 vacant; p. 245)

| Trustee | Since | Background (p. 245–246) |
|---|---|---|
| Dr. Neil "Buddy" Shah (Chair) | June 2023 | CEO of the Clinton Health Access Initiative (since June 2022); former Managing Director of GiveWell; co-founder and CEO of IDinsight. Also "an initial manager of the Anthropic Public Benefit Fund" |
| Richard Fontaine | April 2025 | CEO of CNAS (since Feb 2019); former foreign policy advisor to Sen. McCain; former NSC staff. **In Aug 2026 Anthropic donated $450,000 to CNAS** (p. 247) |
| Dr. Ben S. Bernanke | June 2026 | Fed Chair 2006–2014; Brookings Distinguished Fellow; former PIMCO advisor; 2022 Nobel laureate |
| Dr. Christopher Stubbs | Oct 2026 | Harvard physics and astronomy professor; Senior Advisor for AI to Harvard FAS (2024–26); member of JASON |

The form Trust Agreement's signature page lists Bernanke, Fontaine and Shah as Voting Trustees, and The Bryn Mawr Trust Company of Delaware as Administrative Trustee, which has ministerial powers only (Ex. 99.1 §2.9 and signature pages). Stubbs is not on the form signature page.

**Selection and removal**
- Trustees appoint new Trustees by majority of those in office.
- Removal requires either (a) a majority of the total authorized Trustees, or (b) the unanimous approval of the other Trustees plus the NGC's approval. 30 days' NGC notice is required.
- Terms are annual, with no term limit.
- "In practice to date, the Trustees and company executives have collaborated closely on sourcing, interviewing, and selecting Trustees" (p. 245).
- If no Trustee is in office, 80% of the Whole Board appoints one (Ex. 99.1 §2.4(d)).
- The Court of Chancery can remove a Trustee for disqualifying conduct on an "Enforcer's" petition (p. 245; Ex. 99.1 §2.7(b)).

**Independence and conflicts.** Trustees are "financially disinterested" (p. 13). Any Trustee conflict, such as equity in, debt of, or service to Anthropic, a material competitor or a material counterparty, must be disclosed and approved by both the NGC and the non-conflicted Trustees (Ex. 99.1 §2.5).

**Compensation and funding**
- The Trust Agreement limits pay to "a reasonable cash amount fixed annually by the Trustees". Pay "will not vary with or be conditioned upon the profits or any action or inaction of our company" (pp. 246–247).
- **Each Trustee receives $400,000 a year**, plus $25,000 for the Chair (pp. 246–247).
- Anthropic's payments to the LTBT: **$2,716,750 (2023), $0 (2024), $906,089 (2025), $8,425,213 (9M 2026)** (p. 246).
- Trustee liability is limited to "willful misconduct… proved by clear and convincing evidence" (Ex. 99.1 §5.2). Anthropic guarantees the Trust's indemnity obligations (Ex. 99.1 §5.4(i)).

**Who can enforce the Trust ("Enforcers", Ex. 99.1 §5.1)**
- A Voting Trustee, the company, the Class F holder, or
- holders of **≥10% of the voting power of "Non-Trust Voting Shares"** (which excludes Class F) held continuously for one year.

### How the LTBT and Class T can be amended, redeemed or eliminated (the "Trust Amendment Threshold", p. 245)
1. **With the Trustees in favor:** 80% of the authorized board **and** 80% of the Trustees in office.
2. **Without the Trustees, while Class F is outstanding:**
   - **Until the 3rd anniversary of the IPO:** Class F acting by **unanimous** Continuing Founders, **plus** a majority of Class E votes cast (40% quorum), **plus** a majority of Class A votes cast (quorum of a majority of outstanding Class A).
   - **At any time:** Class F acting by **66⅔%** of Continuing Founders, **plus 75%** of Class E votes cast (quorum of a majority of outstanding Class E), **plus** a majority of Class A votes cast (same quorum).
3. **Without the Trustees, after Class F is gone:** **85% of outstanding Class A shares**.

Related points:
- Class T can also be redeemed "for no consideration" at the same thresholds (p. 245). "The Class T Sunset Time does not occur automatically upon the lapse of time or the occurrence of specific events" (p. 252).
- **Stockholder failsafe (Ex. 10.14 §3.5(a)).** If "persons representing at least the Trust Amendment Threshold" approve a **"Voting Request"**, the Trust and the Founder LLC "shall take all Necessary Action" to comply. This can include amending the Trust Agreement or the Class T terms. However, a Voting Request "may not designate specific individuals that must be elected as Class T Directors."
- Before the Class F Sunset, Trustees may not amend the Trust Agreement unless the Trust Amendment Threshold approves (Ex. 10.14 §3.8).
- The Delaware Court of Chancery can modify the trust if its purpose becomes unlawful or impractical (Ex. 99.1 §4.5).
- If the Class T share were transferred to a party not tied to the LTBT, directors would still be bound by PBC duties (p. 108).

---

## 4. Class F (Founder LLC) and Class E mechanics

**Issuance.** A single Class F share is issued "immediately prior to the completion of this offering" to the Founder LLC, whose initial members are the 7 co-founders: Dario Amodei, Daniela Amodei, Tom Brown, Jack Clark, Jared Kaplan, Sam McCandlish and Christopher Olah (p. 247). Benjamin Mann, "often referred to as a co-founder", is **not** a member (p. 248, fn. 13).

**How the founders decide how Class F votes** (p. 306; Ex. 99.2)

| Matter | Threshold among Continuing Founders | If the threshold is not met |
|---|---|---|
| General matters | Majority | Class F votes **proportionately with Class A votes cast** (quorum of a majority of outstanding Class A) |
| Amendments adverse to Class F | "Supermajority" (N−1; unanimity if fewer than 3) | Votes **against** |
| LTBT or Class T amendments | Trust Amendment Supermajority (66⅔%, or unanimity during the 3-year path) | Votes **against** |

Other points:
- Under the Stockholders' Agreement, the Founder LLC also votes **for** LTBT amendments approved by 80% of the board and 80% of the Trustees (p. 306, fn. 5).
- Founders vote their personal Class A shares freely (p. 248).
- Amending Class F rights requires the "Class F Amendment Threshold": a board majority, **plus** the Class F holder, **plus** (before the Class T Sunset) the Class T holder (Ex. 3.3 Art. V §5.1(h), §5.4(d)).
- Before the Class F Sunset, the Founder LLC can call special meetings and fill vacancies in non-T seats (pp. 302–303).

**What a founder's removal looks like** (pp. 247–248, 251–252; Ex. 99.2 §22). A Continuing Founder is removed on the earliest of:
1. Resignation.
2. Death or incapacity. Physical or mental incapacity must last ≥12 months, determined by a jointly selected physician. Wrongful detention ≥12 months is determined by a Supermajority of the other founders.
3. For an original founder, holding less than **2% of the Class A shares (including options and RSUs) that founder held at IPO completion**, measured on any record date.
4. Removal for "cause" by a Supermajority of the others. Cause includes "a business competing with the Corporation" beyond passive ownership of ≤5%, which the others decide "in their sole discretion" (Ex. 99.2 §34(d)).
5. For a successor member admitted before the transition period, the **10th anniversary** of the IPO.
6. An approved leave of absence. The leave must be for a "Qualifying Leave Role": a senior government, nonprofit or similar position (Ex. 99.2 §34(jj)). The founder can return (Ex. 99.2 §22(n)).

**Successors** (Ex. 99.2 §22(o))
- Each original founder may name a **confidential "Successor Designee List" of up to 10 people** in priority order. It needs approval by a Supermajority of the other founders and is notified to the NGC, which may ask the founders to reconsider (advisory only).
- The first 8 names must meet eligibility rules: US citizen, permanent resident or work-authorized; ≥3 years at Anthropic (technical staff, compliance/policy, or the Anthropic Institute) or in a senior role at a qualifying nonprofit.
- Successors are admitted only on a founder's **death or incapacity**, and only until the 10th anniversary of the IPO (pp. 247, 252).

**Sunset (end of Class F)** (pp. 247, 251–252, 295)
- **Trigger:** "fewer than three Continuing Founders" for **90 consecutive days**. Members admitted during the transition are "Non-Qualifying" and do not count.
- That trigger starts a **450-day Class F Transition Period**. At its end, **all Class F and all Class E are redeemed for no consideration**.
- During the transition period, successors may be added to keep 3 members serving, but this "will not cure… or extend" the transition.
- Class F also ends earlier by Supermajority-requested redemption or Founder LLC dissolution.
- Once triggered, the sunset is "not subject to extension, delay or waiver" (p. 252).
- **There is no fixed time-based sunset for original founders.** Successor members are capped at 10 years.

**What happens after the sunsets**
- After the **Class F Sunset**, the board becomes **classified**: three classes with staggered 3-year terms (p. 256). Class A elects the non-T seats. Charter amendments need 66⅔% of Class A (p. 304).
- After the **Class T Sunset**, if Class F survives, Class A and Class F together elect all directors, so the founders control the whole board (p. 253).
- **DGCL §203** applies only after both sunsets (p. 301).

**Philanthropy pledge** (p. 118)
- Each co-founder "pledged to dedicate 80% of their personal equity… to philanthropic causes". These are "voluntary, revocable" and "not legally binding".
- The pledges "do not apply to our Class F common stock". As founders donate, "their personal economic interests in us will decrease while their voting control through the Founder LLC will remain unchanged", as long as each keeps the minimum ownership threshold.

**Class E** (pp. 249–250, 295; Ex. 3.3)
- **Issuance:** 1 share per 6 months of employment, **plus 1 share per Class A share an employee has pledged to donate** through the donation-matching program. Co-founders get none. The issuance timing "will be determined after the closing". Class E documentation is due by March 31, 2027 (Ex. 10.14 §4.1).
- **Redemption:** after leaving other than for cause, half of the employee's Class E shares are redeemed each year. All are redeemed on death, incapacity, termination for cause, or "commencement of service with a direct competitor". All Class E are redeemed when Class F ceases to exist, or by 80% of the board plus Class F plus Class T.

---

## 5. PBC status

- **Public benefit purpose:** "the responsible development and maintenance of advanced AI for the long-term benefit of humanity" (p. 12; Ex. 3.3 Art. III).
- The board must balance stockholders' pecuniary interests, the interests of "those materially affected by our conduct", and the purpose (p. 243). Directors "are not merely permitted, but obligated, to consider our Company Purpose" (p. 111).
- In a conflict, directors "must only make informed and disinterested decisions that serve a rational purpose" (p. 111).
- Examples of the trade-offs the S-1 discusses (p. 110):
  - usage-policy bans on fully autonomous weapons and mass surveillance;
  - releasing "Mythos" only as a gated preview through "Project Glasswing";
  - not building image or video generation models.
- **Performance measurement:** no "objective third-party standard". The board sets qualitative standards. A biennial §366(b) statement is required (p. 243). There are "five mission pillars" (p. 243).
- **Who can sue:** under DGCL §367, only holders of the lesser of **2% of outstanding shares or $2,000,000 market value** can sue to enforce the balancing duty (p. 111).
- **Exculpation:** "in the absence of a conflict of interest, no failure to satisfy the balancing obligations… shall… constitute an act or omission not in good faith, or a breach of the duty of loyalty" (p. 287).
- **Takeover defense:** the PBC duties "could make it easier for our board of directors to reject a hostile bid" (p. 111).

---

## 6. Controlled-company exemption

- Anthropic is a Nasdaq "controlled company" **because the LTBT can elect a board majority** (p. 251, p. 257).
- It uses the exemption **only for the NGC**, which will not be fully independent (p. 251, p. 260).
- The board currently has a majority of independent directors, and the audit and compensation committees are fully independent (p. 258).
- Audit committee phase-in: Liddell, Hastings and one vacancy, with 3 members required within 1 year (p. 258).

---

## 7. Board, committees and executive officers (pp. 254–260)

| Name | Age | Role | Elected by (post-IPO) | Independent? | Committees |
|---|---|---|---|---|---|
| Dario Amodei | 43 | CEO, co-founder, director | A + F | No | — |
| Daniela Amodei | 39 | President, co-founder, **Chairperson** | A + F | No | NGC (chair) |
| Krishna Rao | 43 | CFO (since Apr 2024; previously Fanatics Commerce CFO, Cedar CFO, Airbnb, Blackstone) | — | — | — |
| Reed Hastings | 65 | Director since May 2025; **Lead Independent Director**; Netflix co-founder | T | Yes | Audit, NGC |
| Christopher Liddell | 68 | Director since Feb 2026; former CFO of Microsoft and GM; former White House Deputy Chief of Staff | T (**Specified**) | Yes | Audit (chair), Safety & Risk |
| Vas Narasimhan | 50 | Director since Apr 2026; CEO of Novartis | T | Yes | Compensation (chair), Safety & Risk (chair) |
| Yasmin Razavi | 37 | Director since Mar 2023; General Partner at Spark Capital | A + F | Yes | NGC, Compensation |
| (vacancy) | | | T | | Audit (vacancy) |

Additional board facts:
- Dario and Daniela Amodei are siblings (p. 255).
- Chief Accounting Officer Effendi Ng signs the S-1 (II-9) but is not listed as an executive officer.
- **Current election routes, before the IPO** (p. 256):
  - Dario Amodei: elected by Voting Common.
  - Liddell: designee of the Voting Common holders.
  - Razavi: elected by the Senior Voting Preferred.
  - Daniela Amodei, Hastings and Narasimhan: **LTBT designees**.
- Jay Kreps was paid $200,000 in 2025 and resigned in May 2026 (p. 261).

### Compensation highlights (pp. 264–275)

**Philosophy:** pay that "targets the 90th percentile of the AI development market". "Each co-founder is paid equal compensation" (p. 264).

**2025 Summary Compensation Table (p. 270)**

| NEO | Salary | Stock awards | Option awards | All other | **Total** |
|---|---|---|---|---|---|
| Dario Amodei | $654,167 | $9,264,932 | $4,028,558 | $4,010,641 | **$17,958,298** |
| Daniela Amodei | $654,167 | $9,264,932 | $4,028,558 | $2,461,341 | **$16,408,998** |
| Krishna Rao | $706,250 | — | — | $14,000 | **$720,250** |

- **Dario Amodei's "all other" includes:** personal security $2,745,874; personal private air travel $97,055; **$1,153,087 tender-offer spread** (repurchase price above fair market value in the June 2025 tender); $14,000 401(k); $625 valuation report (p. 271).
- **Daniela Amodei's "all other" includes:** security $1,293,629; the same $1,153,087 tender spread (p. 271).
- **2025 grants:** 992,500 options at $2.38 plus 1,717,000 RSUs each to Dario and Daniela Amodei. The RSUs vest only on IPO effectiveness plus service (p. 267).
- **2026 salaries:** Dario and Daniela Amodei raised to $915,000 (Jan 16), then **$1,380,000** (Jul 1). Rao raised to **$1,250,000** (Feb 1) (p. 271).
- **2026 grants:**
  - Feb 20: 1,431,490 options at $17.66 plus 2,374,010 RSUs each to Dario and Daniela Amodei; 1,122,840 options plus 1,862,140 RSUs to Rao.
  - Jul 15: 537,430 "Co-Founder RSUs" each to Dario and Daniela Amodei.
  - All RSUs are performance-vested on IPO effectiveness (pp. 271–272).
- **Severance (Oct 2026 agreements):** 24 months' salary for Dario and Daniela Amodei, 12 months for Rao; 12 months of COBRA; 12 months of vesting acceleration (p. 272). Previously only Rao had severance.
- **Rao's equity:** new-hire grant of **14,000,000 options at $1.30**. His double-trigger change-of-control acceleration was valued at **$134.0M** as of 12/31/25 (pp. 268, 275).
- **HSR filing fees:** "In October 2026, we paid… on behalf of Dr. Amodei and Ms. Amodei" **$2.5 million each** (p. 272).
- **Security for Rao:** started in 2026 (p. 272).
- **Option exercises and vesting in 2025:** Dario and Daniela Amodei each had 5,058,340 shares vest ($12.0M) (p. 273).
- **Non-employee director policy:** $100,000 cash retainer; $325,000 annual RSU; $400,000 initial RSU; $1M cap ($2M in the first year) (pp. 261–262, 277).
- **2026 Plan:** an evergreen increase of the lesser of 5% of economic shares or a board-set number, each year 2027–2036. The "change in control" definition excludes the board-turnover prong until **both** sunsets (pp. 275, 278).
- **ESPP:** 1% evergreen, 15% discount (pp. 280–281).
- **2021 Plan reserve:** 3,864,826,090 shares (p. 279).
- **Clawback:** a Rule 10D-1 clawback policy applies. Hedging and pledging are prohibited, with limited exceptions (pp. 269–270).

---

## 8. Principal and selling stockholders (as of Sept 30, 2026; pp. 288–291)

All percentage columns and "Shares Being Offered" are **[BLANK]**. Beneficial ownership counts are:

| Holder | Beneficial ownership | Breakdown (footnotes) |
|---|---|---|
| Dario Amodei | 240,637,980 Class A | 237,813,080 held of record or in trusts + 2,185,400 options + 639,500 RSUs. **Plus 4,621,120 shares under DAF voting proxies**, total 245,259,100 |
| Daniela Amodei | 241,408,940 | 238,319,540 record + 2,185,400 options + 639,500 RSUs + 130,550 options and 133,950 RSUs held by her spouse |
| Krishna Rao | 9,497,900 | 153,960 record + 7,843,940 options + 1,500,000 options held in trust |
| Reed Hastings | 9,410 | RSUs |
| Christopher Liddell | 9,410 | RSUs |
| Vas Narasimhan | 176,050 | 169,770 held by Bodhi LLC + 6,280 RSUs |
| Yasmin Razavi | — | Excludes Spark Capital holdings; she disclaims beneficial ownership |
| All directors and officers (7) | 496,360,810 | — |
| **LTBT** | 1 Class T (100%) | — |
| **Founder LLC** | 1 Class F (100%); **50.1%** of voting power after the IPO | — |
| *Other Selling Stockholders:* Tom Brown | 244,173,040 | Chief Compute Officer |
| Jack Clark | 242,271,840 | Leads the Anthropic Institute; initial Public Benefit Fund manager |
| Jared Kaplan | 242,351,170 | Chief Science Officer |
| Sam McCandlish | 231,809,780 | Chief Architect |
| Christopher Olah | 242,882,420 | Leads interpretability |

Notes:
- **No other >5% holder is listed.** Amazon and Google are absent because they hold non-voting Class N (see §2).
- The **selling stockholder share amounts are [BLANK]**. The five non-executive co-founders are listed under "Other Selling Stockholders". Whether Dario or Daniela Amodei sell cannot be determined from the blank column.
- The voting % footnote says each Class A holder's voting power is "reduced to 49.9% of the percentage shown" because of Class F (p. 289).

---

## 9. Related-person transactions (pp. 246–247, 282–287), plus partner flows from outside that section

### 9a. Items in the "Certain Relationships and Related Person Transactions" section

**Spark Capital** (Razavi is a managing member of the General Partner):

| Round | Spark purchase |
|---|---|
| Series C-1 (2023) | $74,999,991 |
| Series D-1 (2024) | $74,999,968 |
| Series E-1 (2025) | $99,999,930 |
| Series F-1 (2025) | $61,999,947 |
| Series G-1 (2026) | $24,999,925 |
| Series H-1 (May–Jun 2026) | **$439,999,521** |

Sources: pp. 282–284.

**Round sizes for context**

| Round | Dates | Price per share | Total |
|---|---|---|---|
| H-1 | May–Jun 2026 | $589.0095 | $45.73B |
| G-1 | Jan–Feb 2026 | $259.1364 | $23.45B |
| F-1 | Aug–Sep 2025 | $140.9676 | $13.0B |
| E-1 | Jan–Mar 2025 | $56.0865 | $3.57B |
| D | Jan–May 2024 | $30.0045 | $1.2B |
| C | Mar–Jun 2023 | $11.2261 | $445M |

Sources: pp. 282–284.

**Other individual items**
- **Bodhi LLC** (owned by Narasimhan and his wife): **$9,999,614** of Series H-1 (p. 282).
- **Tender offers**
  - **April 2026:** $25.9136 per share; 179,883,540 shares; **$4,661,437,298**. Sellers included Dario Amodei, Daniela Amodei, Rao and Holden Karnofsky.
  - **June 2025:** $5.61 per share; 27,942,000 shares; $156,716,898. Sellers included Dario and Daniela Amodei.
  - Sources: p. 284. Individual amounts sold are not disclosed.
- **Irrevocable proxies** with Daffy Charitable Fund (Oct 6, 2025) and Dechomai Asset Trust (Dec 20, 2024). Dario Amodei votes DAF-held shares "in his sole and absolute discretion". Shares donated by him or his family are excluded. The board can designate another proxyholder (pp. 284–285; Ex. 10.12 and 10.13).
- **Holden Karnofsky** (Daniela Amodei's spouse), employed since Jan 2025: **$430,213** cash compensation in 2025; 2026 amount **[BLANK]**; 179,500 options and 761,700 RSUs (p. 285).
- **Stockholders' Agreement** with the LTBT and the Founder LLC: voting arrangements, notice rights, expense reimbursement and indemnification for both (p. 285).
- **Founder LLC legal fees:** reimbursed by the company; amount **[BLANK]** (p. 286).
- **LTBT funding:** $2,716,750, $0, $906,089 and $8,425,213 (2023, 2024, 2025, 9M 2026) (p. 286).
- **CNAS:** $450,000 charitable donation (Fontaine is CEO) (p. 247).
- **Terminating at the IPO:** the right of first refusal and co-sale agreement and the voting agreement, both dated May 28, 2026 (p. 284).

**Key observation.** The section uses the definition "holders of more than 5% of any class of our outstanding voting securities" (p. 282). **Amazon, Google, Broadcom, Microsoft and AMD do not appear anywhere in pp. 282–287.** Their commercial and financing terms are disclosed in MD&A and the financial statement notes instead.

### 9b. Strategic partners who are investors, lenders, suppliers and customers (MD&A pp. 163–172; F-15 to F-16, F-31, F-39 to F-42, F-62 to F-63)

**Amazon (Amazon Web Services, Inc.)**

*Money Amazon has put in*
- **2023 NPA:** $1.2B of notes (Sept 2023) and a $3.4B-principal tranche for $2.8B of cash (Mar 2024) (F-40).
- **2024 NPA:** $1.3B (Nov 2024), $1.3B (May 2025) and $1.4B (Nov 2025) of notes (F-40).
- **2026:** **$5.0B** of Series G-2 (19.3M shares, Apr 2026) and **$5.0B** of Series H (May 2026) (F-31, F-42, F-63).
- **[DERIVED] cash in, as disclosed: about $8.0B in notes plus $10.0B in equity = about $18.0B.**

*Outstanding notes*
- $6,203M of non-interest-bearing rollover notes ($2,186M at $2.0928 per share; $4,017M at $5.0478 per share), convertible into up to 1,840,444,962 Class N shares (p. 164).
- At the IPO, the notes convert at the lower of the fixed price and the IPO price, **subject to a 12% ownership cap** that Amazon can waive. Any excess rolls into new notes that convert quarterly at the lowest of the fixed price, the IPO price and the 10-day VWAP (p. 164).
- **The notes can be settled "at Amazon's election, by set-off against amounts Amazon owes the Company under certain commercial agreements"** (F-41; p. 166).

*Future funding*
- **The Amazon 2026 NPA has $15.0B remaining** of an original $20.0B. It "will become available to us in $5.0 billion increments following the achievement of the relevant compute capacity milestones pursuant to certain commercial agreements". Each draw is settled in Class N at the 30-day VWAP.
- The draw period ends 30 months after the IPO, or earlier if the commercial agreements terminate (pp. 165–166).
- Ex. 4.3: the facility increases "$5,000,000,000 increments per [***] of Delivered Capacity", meaning capacity that Amazon ("Purchaser") delivers.

*What Anthropic buys from Amazon*
- **A commitment to spend at least $110.0B with Amazon from May 2026 to April 2036**, "regardless of actual usage", with a true-up for any shortfall (p. 171).

*Amazon's other roles*
- A distribution partner: Claude is offered on Amazon Bedrock.
- A customer: "These CSPs are also our customers" (p. 73).
- A competitor (p. 73).

**Google (Google LLC)**

*Money Google has put in*
- **2023 NPA:** $2.0B ($500M Sept 2023, $750M Sept 2024, $750M Sept 2025) (F-39).
- **2024 NPA:** about $1.3B (Aug 2024) (F-40).
- **2026:** **$10.0B** of Series G-2 (38.6M shares, Mar 2026) and **$10.0B** of Series H (May 2026) (F-31, F-40, F-62 to F-63).
- **[DERIVED] cash in, as disclosed: about $3.3B in notes plus $20.0B in equity = about $23.3B.** The NPA's "Aggregate Purchase Price" is $30B, "calculated as the difference between $40,000,000,000 and the amount of the Investor's investment in the Company's Series G Financing" (Ex. 4.5 §1.2).

*Future funding*
- **The Google 2026 NPA has $20.0B remaining** through Dec 31, 2030 (p. 165).
- Draws are "driven by the achievement of certain conditions under certain third-party compute agreements and specified TTM revenue targets, which we have historically surpassed" (pp. 167–168).
- Ex. 4.5: Draw Period 1 is sized per unit of TPU "Delivered Capacity" from approved vendors. Draw Period 2 depends on revenue attainment.
- Post-IPO, draws are settled in a mutually agreed note or in Class N at the 30-day VWAP. The ownership cap is **14.99%** (p. 168).

*IPO private-placement option*
- **An option to buy up to $10.0B of Class N "in a private placement concurrent with this offering at the public offering price"**. Exercising it reduces the NPA capacity (p. 168).
- Ex. 4.5 §2.1(e)(ii): the "IPO Acceleration Option" is conditioned on a "ROFO Waiver".

*What Anthropic buys from Google*
- **A commitment to spend at least about $114.5B from April 2026 to July 2033**, "regardless of actual usage", with a true-up (p. 170).
- **An additional $125.0B to $150.0B (estimate)** of TPU compute "from TPU providers, including Google" for 2028–2031. This is not included in the commitments table (p. 170).

*Google's other roles*
- A customer: "The Company also has a commercial agreement with Google for the provision of intelligence service" (F-39).
- A distribution partner (Gemini Enterprise Agent Platform) and a competitor (pp. 73, 204).

**Broadcom (supplier, lessor and potential lender)**
- **Five-year master equipment leases** for TPU-based capacity, with rent of **about $161.2B excluding interest**. The leases are non-cancelable; Anthropic placed cash in a restricted account for Broadcom (pp. 171–172; Ex. 10.11).
- **The Infrastructure Partner 2026 NPA is $42.0B**, "solely to finance quarterly rent obligations" under the 2026 Lease Arrangement:
  - 9% PIK interest, rising to 13% if revenue conditions are missed;
  - convertible into Class N at **90% (or 85%) of the 30-day VWAP**;
  - **150% cash** payable on a change of control;
  - assignable to a "designated financial partner" (pp. 166–167).
- No notes have been issued (p. 301).
- Broadcom assigned part of one lease to a third party in Q2 2026 (p. 172).
- A separate Aug 2025 NPA of up to $10.0B to finance lease rent ends at the IPO; its counterparty is not named in the note (F-42).

**AMD**
- Anthropic expects to spend **more than $20.0B** on AMD Helios / MI450 systems. There is no fixed dollar commitment (p. 171).
- **AMD will buy up to $5.0B of Class N stock** in increments as GPU delivery milestones are met, at the 30-day VWAP. The first milestone is expected in 2027 (p. 163).

**Microsoft**
- A commitment to spend **at least $44.9B** from Nov 2026 to May 2033 (p. 170).
- The risk factors say Microsoft, like Amazon and Google, "through their respective affiliates, have made significant equity investments in our company" (p. 73). **The amount is not itemized** in the sections reviewed.

**Other compute counterparties** (p. 171). These are not investors per the S-1:

| Counterparty | Commitment | Notes |
|---|---|---|
| SpaceXAI (formerly X.AI LLC) | Up to $120.5B | About $3.1B a month at full capacity; cancelable on 90 days' notice after early 2027 |
| Nscale | Up to about $44.6B | NVIDIA GPUs |
| Lambda | About $41.3B | NVIDIA GPUs |

**Revenue concentration (F-15 to F-16)**
- CSP-marketplace sales were **11%, 32% and 47%** of revenue in 2023, 2024 and 2025, and **48%** in 1H26. They were **58%** of net accounts receivable at June 30, 2026.
- "Certain of the CSPs also hold the Company's non-voting redeemable convertible preferred stock and convertible notes."
- Unnamed 10%+ customers: Customer C was 43% of 2023 revenue and 11% of 1H26.

**Other equity facts (II-3 to II-4)**
- Series G-2 non-voting shares were sold to 5 investors; Series H-2 non-voting to 11 investors ($19.5B).
- **In Oct 2025 Anthropic repurchased 4,453,900 Series B shares "from the U.S. government, to which such shares had been forfeited by former holders in legal proceedings"** at $140.9676 each and resold them to 9 investors (about $627M). The former holders are not named.

---

## 10. Lock-ups and shares eligible for future sale (pp. 307–308, 317–323)

**Company lock-up.** The company is locked up until the earlier of 6:00 AM ET on the second full trading day after the **Q1 2027 earnings release**, or the close of the **180th day**. There are carve-outs for NPA notes and conversions, the Class F and Class E issuance, the **concurrent private placement**, and M&A or strategic issuances (pp. 317–318).

**Market standoff.** Substantially all holders are bound for 180 days. The company agreed not to waive this without the representatives' consent (p. 317).

**Investor and insider lock-up groups** (all percentages are of each holder's lock-up securities; share counts and percentage of fully diluted held by each group are **[BLANK]**)

**(1) Non-founder directors and officers, and certain current and former employees and consultants** (p. 321). They are locked until Q1 earnings or 180 days, with early releases:
- **10%** from the first trading day after pricing.
- **+35%** at the second full trading day after the **FY2026 earnings release**.
- The rest at Q1 2027 earnings or 180 days.

**(2) "Certain of our stockholders" on the 180-day track** (pp. 321–322). Base: holdings 7 days before the prospectus date.

| Release date | Release | Cumulative [DERIVED] |
|---|---|---|
| Day 27 | 6% | 6% |
| Day 48 | 6% | 12% |
| Day 62 | 7% | 19% |
| Day 76 | 7% | 26% |
| FY26 earnings release + 2 trading days | 12.5% | 38.5% |
| FY26 earnings release + 13 days | 9.5% | 48% |
| FY26 earnings release + 27 days | 9.5% | 57.5% |
| FY26 earnings release + 41 days | 9.5% | 67% |
| FY26 earnings release + 55 days | 9.5% | 76.5% |
| FY26 earnings release + 69 days | 9.5% | 86% |
| Q1 2027 earnings or day 180 (earlier of) | Remainder | 100% (remainder ≈14%) |

Reading of the text: "on or after… each of the dates that are 27 and 48 days… up to 6%… may be Transferred", then "an additional 7%" on days 62 and 76. I read this as 6% on **each** date. That matches the separate rows for each date in the p. 307 table.

**(3) Certain holders with >0.5% of fully diluted shares, on the 365-day track** (p. 322). The early tranches are exactly 0.3× group (2)'s.

| Release date | Release | Cumulative [DERIVED] |
|---|---|---|
| Day 27 | 1.8% | 1.8% |
| Day 48 | 1.8% | 3.6% |
| Day 62 | 2.1% | 5.7% |
| Day 76 | 2.1% | 7.8% |
| FY26 earnings release + 2 trading days | 3.75% | 11.55% |
| FY26 earnings release + 13, 27, 41, 55, 69 days | 2.85% each | 25.8% |
| Q1 2027 earnings or day 180 (earlier of) | 4.2% | 30% |
| Q1 2027 earnings release + 34, 48, 62, 76 days | 5.6% each | 52.4% |
| Q2 2027 earnings release + 2 trading days | 7.0% | 59.4% |
| Q2 2027 earnings release + 27, 41, 55, 69, 83 days | 6.3% each | 90.9% |
| Q3 2027 earnings or day 365 (earlier of) | Remainder | 100% (remainder ≈9.1%) |

**(4) The seven co-founders** (p. 323). Locked until Q3 2027 earnings or day 365, but **29% unlocks at Q1 2027 earnings or day 180**. Shares sold in the IPO are excluded.

**What the "27, 48, 62 and 76 days" reports refer to.** These dates are **confirmed**. They apply to groups (2) and (3) only, not to founders or to non-founder officers and directors.
- The triggers are **calendar days after the prospectus date**.
- Later releases are keyed to earnings releases. Releases tied to an earnings release start at 6:00 AM ET on the second full trading day after it ("flash" or partial numbers do not count).
- **No stock-price thresholds** appear in the lock-up terms.

**Exceptions and releases**
- Exceptions (pp. 319–321) include:
  - gifts, family and estate transfers;
  - for founders, transfers to "any philanthropic organization" and "bona fide estate planning";
  - bona fide pledges to lenders, including founders' estate-planning vehicles;
  - sell-to-cover for taxes;
  - 10b5-1 plans with no sales during the lock-up;
  - board-approved change-of-control tender offers.
- Founders may announce permitted transactions with 3 business days' notice (p. 319).
- The representatives "in their joint discretion, may release" shares. Some releases "will trigger a pro rata release" for certain other holders (p. 323).

**Shares eligible table.** The table on pp. 307–308 lists every release date, and every share count in it is **[BLANK]**.
- Rule 144 affiliate volume limit: 1% of outstanding shares or the 4-week average weekly volume (p. 310).
- Rule 701 shares can be sold after 90 days (p. 310).
- An S-8 will be filed promptly after the IPO (p. 310).

**Class N post-IPO sources** (p. 309):
- preferred conversion;
- note conversion at the IPO up to the cap;
- quarterly conversion of the remaining notes;
- future NPA draws;
- donation matching;
- the concurrent private placement.

### Registration rights (pp. 299–301)

**IRA**
- Demand rights from 6 months after the IPO, by 60% of registrable shares. Minimum $200M. 2 demands.
- S-3 demands with a $2M minimum, up to 2 per 12 months.
- Piggyback rights: underwriter cutbacks cannot go below 20% of the offering, and **co-founder shares are cut first**.
- Expires at the 2nd anniversary of the IPO.

**Google RRA (May 2026)**
- One resale demand in the first year after the IPO.
- Once S-3 eligible, resale registration within 60 days of each quarterly NPA closing.
- Expires Feb 7, 2033, or 12 months after the final closing.

**Broadcom RRA (June 2026)**
- Shelf registration within 60 days of S-3 eligibility.
- One demand per $5.0B of notes, $500M minimum.
- Up to 3 underwritten offerings or block trades every 12 months.
- Most-favored-nation treatment and pro-rata lock-up waiver rights.
- Co-founder shares are cut first.
- No registrable shares exist yet.

---

## 11. Underwriting (pp. 316–325; cover page)

**Syndicate**
- **Representatives:** Goldman Sachs & Co. LLC and Morgan Stanley & Co. LLC. **22 underwriters** in total: J.P. Morgan, Citigroup, Barclays, Wells Fargo, BofA, Deutsche Bank, RBC, UBS, BMO, BNP Paribas, Crédit Agricole, Jefferies, Mizuho, MUFG, SG Americas, TD, BTIG, Cantor, Capital One and Macquarie (p. 316).
- Bernstein Institutional Services is a selling agent for SG (p. 324).

**Economics**
- **Underwriting discount, share counts, dealer concession and offering expenses: all [BLANK]** (pp. 316–317, 324; cover).
- **Option to buy additional shares:** 30 days, from the company only, number [BLANK] (p. 316).
- Discretionary-account sales are expected to be at most 5% (p. 316).
- **Stabilization:** Morgan Stanley acts as stabilization agent. Covered and naked shorts are allowed (pp. 323–324).

**Allocation**
- **No directed share program is disclosed** (searched the full filing text).
- Standard language: the representatives "may agree to allocate… to underwriters for sale to their online brokerage account holders" (p. 323).
- **International public offerings in Australia, Canada, certain EEA states, Japan, Switzerland and the UK** (p. i; p. 325). These include:
  - a separate **Australian Prospectus** lodged with ASIC;
  - a **"European retail offering"** under a separate European prospectus, which the Swiss section says is approved by BaFin;
  - a Swiss public offering under that prospectus.
- If a foreign offering is terminated, its shares are reallocated, and "the total size of this offering is not expected to change" (pp. 325–327, 332).

**Conflicts.** Underwriter affiliates are agents and lenders under the **$15B A&R Credit Facility**; Morgan Stanley's affiliate is administrative agent (p. 324; p. 162). Some underwriters are customers (p. 324).

**Listing.** Nasdaq Global Select Market, ticker **"ANT"** (p. 306).

**Counsel**
- Company: Wilson Sonsini.
- Underwriters: Freshfields.
- Executive compensation: Orrick.
- **LTBT:** John Morley ("principal legal counsel") and Cleary Gottlieb.
- **Co-founders:** Cravath (p. 334).

---

## 12. Proceeds, dividends, capitalization, dilution (pp. 124–131)

**Use of proceeds**
- Amount **[BLANK]**. "General corporate purposes, including… investments in compute and infrastructure, as well as hiring and retention". Possible acquisitions, with "no agreements or commitments for any material acquisitions".
- A portion pays **RSU Settlement tax withholding**, amount [BLANK].
- Anthropic receives nothing from selling stockholders (p. 124).

**Dividends.** None paid and none expected. The A&R Credit Agreement limits them (p. 125).

**Capitalization**
- All figures **[BLANK]** except authorized shares (actual: 10,906,111,730 Class A; 7,128,888,270 Class N; 1,040,440,652 preferred) (p. 127).
- Pro forma adjustments (pp. 126, 19–20):
  - Preferred Stock Conversion: voting series to A, non-voting series to N.
  - Convertible Notes Conversion: Amazon notes to Class N, up to the cap.
  - Class F Stock Issuance.
  - The Initial Public Benefit Issuance: legally outstanding, but not outstanding for accounting.
  - RSU Settlement: net settlement, with withholding funded from proceeds and cash.
  - The new charter.

**Dilution**
- All **[BLANK]**.
- Net tangible book value per share is computed over Class A plus Class N. Class T, F and E are excluded because they have "no economic rights" (p. 129).

**Excluded from the share counts:** options, unvested RSUs, shares issued after Sept 30 for acquisitions of private companies, and plan reserves (p. 128).

**Public Benefit Issuances**
- 846,840,960 Class N shares were already contributed (5% of fully diluted shares).
- The board may issue **up to 2% more each time the stock rises 50% above the prior milestone**, starting from the IPO price. A milestone counts only if the close is above the threshold on **90 of 120 trading days** and the 10-day average is also above it (pp. 12, 143–144).
- Initial fund managers: **Dario Amodei, Daniela Amodei, Jack Clark and Buddy Shah (the LTBT Chair)** (p. 144).

---

## 13. Change in independent accountant (pp. 334–335)

- On **Oct 30, 2025**, Anthropic engaged **Ernst & Young** to audit FY2025 and dismissed **Grant Thornton**, as ratified by the board.
- Grant Thornton's FY2023 and FY2024 reports had no adverse or qualified opinions.
- There were **no "disagreements" and no "reportable events"**.
- EY was not consulted beforehand.
- **No reason for the change is stated.**
- Grant Thornton's letter is dated Oct 26, 2026 (Ex. 16.1, not in the raw folder).
- Grant Thornton audited FY2023–24; EY audited FY2025.

---

## 14. Anti-takeover and exclusive forum (pp. 301–304)

**Anti-takeover provisions**
- Multi-class control by the LTBT and the Founder LLC.
- Board size can be changed only by 80% of the board.
- Before the Class F Sunset, the Founder LLC fills non-T vacancies; after it, only the board does.
- Special meetings can be called by the board, the Chair, the CEO or the President, and before the Class F Sunset by the Founder LLC.
- Written consent is limited to director actions, class protective matters, and board-approved single-class matters. Class E can never act by written consent.
- Advance notice is required, except for Class T and Class F nominations.
- No cumulative voting.
- A **classified board after the Class F Sunset**.
- 66⅔% of Class A is needed to amend the charter after the Class F Sunset.
- Blank-check preferred requires 80% of the board plus Founder LLC consent.
- The **DGCL §203 opt-out lasts until both sunsets** have occurred.

**Exclusive forum**
- Delaware Chancery for derivative, fiduciary, DGCL, charter, bylaw and internal-affairs claims.
- **Federal district courts** for Securities Act claims.
- **The District of Delaware** for derivative Exchange Act claims (p. 304).
- The Trust Agreement has its own Delaware Chancery forum clause (Ex. 99.1 §6.1).

**How this compares with Meta and Alphabet-style dual-class structures.** These differences come from my reading of the S-1 mechanics. The S-1 itself only says the structure "has no direct public company precedent" (p. 107).
1. Founder control is a **fixed 50.1% held by a single share**, not 10 votes per share on high-vote stock. It therefore cannot be diluted, and it does **not shrink as founders sell or donate** (p. 117).
2. Board control is **split**: a trust with no economic interest elects the majority, while the founders control stockholder votes.
3. The sunset is **headcount-based** (fewer than 3 founders), not time-based or ownership-percentage-based.
4. Employees get a dedicated, non-economic voting class (Class E).
5. Hyperscaler investors hold non-voting stock (Class N) that converts on sale.

---

## What a Matt Levine would find interesting

1. **One share, 50.1% of the vote, forever adjustable** (pp. 117, 247; Ex. 3.3 Art. V). Class F is a single share. Its votes are recalculated on every record date as 0.501/0.499 times everyone else's votes, so it always holds a bare majority. Issue a billion new shares and Class F automatically gets about 1.004 billion more votes. It has no dividends and no liquidation value beyond par. It is control with no economics attached.

2. **A charity-like trust with no money in the company picks the board, and the company pays for it** (pp. 244, 246). The LTBT holds one share with no economic rights. It elects 4 of 7 directors. Its Trustees are barred from owning Anthropic stock and are paid a flat $400,000 a year. Anthropic funds it ($8.4M in the first nine months of 2026) and consolidates it as a variable interest entity. That makes Anthropic a Nasdaq "controlled company" because of an entity that sits on its own balance sheet (p. 251).

3. **Two controllers, each holding a leash on the other.**
   - The founders cannot change Class F's rights without the trust's consent (Ex. 3.3 §5.4(d)).
   - The trust cannot freely choose one of its four directors (the "Specified Class T Director") without the concurrence of a nominating committee chaired by co-founder Daniela Amodei (pp. 244, 260).
   - The trust also cannot amend its own agreement without the founders while Class F exists (Ex. 10.14 §3.8).

4. **The off-switch for the trust needs founders, employees and the public, but not the trustees** (p. 245). The LTBT can be amended or dissolved, and its share redeemed for nothing, in two ways. One is with the trustees' agreement plus 80% of the board. The other skips the trustees entirely: the founders (unanimously for the first three years, two-thirds after that), plus an employee-class vote, plus a Class A majority. The Stockholders' Agreement adds a "Voting Request" mechanism: those same holders can simply instruct the trust how to vote. They just cannot name the specific directors it must elect (Ex. 10.14 §3.5). Once the founders' class is gone, the bar becomes 85% of all outstanding Class A shares, which in practice is close to impossible.

5. **Employee votes scale with how much stock they promised to give away** (p. 249).
   - Class E shares carry no economic value. An employee gets 1 share per six months of tenure, plus 1 share for every Class A share pledged to charity.
   - The shares are redeemed for nothing when the employee joins a competitor, and half are redeemed each year after the employee leaves.
   - This class is the tiebreaker on the trust's contested director and part of the vote on whether to kill the trust.
   - None are outstanding at the IPO, and the documentation is not due until March 31, 2027 (Ex. 10.14 §4.1).

6. **Secret succession lists and a 450-day death clock** (pp. 247, 251–252; Ex. 99.2 §22(o)).
   - Each founder can file a confidential, ranked list of up to 10 successors, approved by the other founders.
   - Successors step in only on a founder's death or incapacity, and only for the first 10 years after the IPO.
   - When the number of qualifying founders falls below 3 for 90 days, a 450-day countdown starts. At the end, founder control and the employee voting class are both cancelled for nothing.
   - Founders can take an approved leave for a senior government or nonprofit job and come back (Ex. 99.2 §34(jj)).

7. **The 2% rule** (pp. 118, 248). A founder stays in the control group as long as they keep 2% of the Class A shares they held at the IPO. Each founder has pledged, non-bindingly, to give away 80% of their equity. The S-1 says plainly that as they donate, "their personal economic interests in us will decrease while their voting control through the Founder LLC will remain unchanged." Seven people with roughly 10% of the economics ([DERIVED]) control the stockholder vote, and they could get down to about 0.2% and still control it.

8. **Vendor financing, done in stock** (pp. 163–172; F-41; Ex. 4.3, 4.5).
   - **Amazon:** Amazon invested about $18B. It has $15B more available in $5B steps, each unlocked when Amazon delivers a block of compute capacity. Anthropic has committed at least $110B of spending with Amazon. Amazon can repay itself on its notes by netting them against money it owes Anthropic (Amazon collects Anthropic's marketplace sales, which were 47–48% of revenue across all clouds).
   - **Google:** Google invested about $23B. Its future draws are sized to TPU capacity delivered. Anthropic has committed about $114.5B to Google, plus an estimated $125–150B more of TPU compute.
   - **Broadcom:** Broadcom leases Anthropic about $161B of TPU hardware and offers a $42B facility whose only purpose is to lend Anthropic the rent. That loan pays 9% in kind and converts into Anthropic stock at a 10% discount.
   - **AMD:** AMD sells Anthropic more than $20B of GPUs and commits to buy up to $5B of Anthropic stock as the GPUs are deployed.

9. **The related-party section misses the biggest counterparties** (pp. 116, 282, 288). Amazon and Google each own more than 5% of the economics. They are also suppliers, lenders, customers and distributors. But they hold *non-voting* Class N stock, and the related-person and principal-stockholder rules key off *voting* securities. So neither appears in the "Certain Relationships and Related Person Transactions" section or in the 5% holder table. Their deals live in MD&A instead.

10. **A reverse performance fee for humanity** (pp. 12, 143–144). Anthropic already gave 5% of its fully diluted shares to a wholly owned "Anthropic Public Benefit Fund". The board can add up to 2% more every time the stock rises 50% (sustained for 90 of 120 days). So the better shareholders do, the more they are diluted in favor of the public benefit. The fund's initial managers are the CEO, the President, a co-founder, and the LTBT's chair.

11. **A lock-up staircase instead of a cliff** (pp. 321–323).
    - Investors on the 180-day track unlock in small doses: 6%, 6%, 7% and 7% at days 27, 48, 62 and 76, then six more steps after the FY26 earnings release.
    - Large (>0.5%) holders get 0.3× those doses, then roughly 20 more releases over a year, keyed to earnings releases. No step is larger than 7%.
    - Founders get 29% at around six months and the rest at around one year.
    - It is engineered so the stock never faces a single unlock day.

12. **Two small but telling items: a kill-switch notice right, and the CEO voting other people's charity** (p. 285; Ex. 10.14 §3.6; pp. 284–285).
    - Anthropic must give the trust 5 days' notice before "transfer[ring] control of an AI model exceeding capabilities thresholds" that the board resets each quarter. Without that notice, the transfer is void. Separately, the CEO holds irrevocable proxies to vote shares that other people donated to donor-advised funds (4.6M shares).
    - Also, the S-1 discloses repurchasing Series B shares "forfeited" to the U.S. government "by former holders in legal proceedings" and reselling them for about $627M (II-3).
