# Anthropic, PBC Form S-1 (filed 2026-10-26): Business, Prospectus Summary, Defined Terms, Industry Data

Research notes for the explainer site. All page cites are the printed folio ("p. 183") unless marked otherwise.
Quotes are verbatim (curly quotes/apostrophes preserved) and kept under 50 words. "[blank]" means the filing prints an empty placeholder (normal in a first, unpriced S-1).

## Source coverage and caveats

- **Read in full:** `00_cover_defined_terms.txt` (cover, TOC, Select Defined Terms pp. 1–3), `01_summary.txt` (pp. 5–25), `07_business.txt` (pp. 179–241), and the "Industry, Market, and Other Data" section (p. 123).
- **Image-only pages that the text extraction missed (I downloaded them from EDGAR and read them visually):**
  - **pp. 208–227: 20 full-page customer case studies.** These have no printed folio in the extraction. I inferred the page numbers from their position between p. 207 and p. 228 and the order of the images in the HTML. Cite them as "p. 2xx (case study; folio inferred)".
  - **Graphics:** p. 179 ("core advantages → enterprise adoption → financial model" diagram with the Improvement and Investment loops); p. 11 and p. 183 (the same two-loop diagram); p. 190 ("Chatbots → Copilots → Virtual collaborators" mock-up); p. 199 (product stack diagram); p. 178 (Business divider page, no content).
  - **Inside-front gatefold (PDF pp. 3–10, unnumbered):** the co-founders' letter. The superlatives it contains are cited here as "gatefold pg N". Fuller notes are in `research/s1_images_founders_letter.md` (another agent's file).
- **Cross-references outside my assigned sections** are labelled (MD&A, Risk Factors (RF), F-pages). I used them only to give context for stress-tests.
- **Not disclosed anywhere in the filing text.** I searched all section files for each item and found nothing:
  - data-center or power capacity in **gigawatts**
  - **"AI Safety Levels"/ASL**
  - **token volumes**
  - **user counts** (MAU/WAU/DAU, developer counts, subscriber counts)
  - **Claude Code revenue or run-rate**
  - **plan prices** (Free/Pro/Max/Team/Enterprise)
  - market share
  - **Q3 2026 revenue**, which is [blank]
- **Distribution naming:** the filing names Google's AI service layer **"Gemini Enterprise Agent Platform"**, not "Vertex AI" (p. 206). The other two layers are Amazon Bedrock and Microsoft Foundry.

---

## 1. How Anthropic describes itself

**Thesis (p. 5 summary; p. 179 business, same text):**
> “For the first time in history, intelligence is something humans can build.”

> “We believe this abundance of AI will rapidly transform every sector of the global economy in ways greater than the impact of industrialization, electricity, semiconductors, and the internet.” (pp. 5, 179)

**Identity and mission:**
> “We are first and foremost a research lab—our mission is the responsible development and maintenance of advanced AI for the long-term benefit of humanity.” (pp. 5, 179; repeated p. 229)

- Founded 2021. Incorporated as a Delaware PBC in January 2021 (p. 17).
- The Company Purpose (the specific public benefit in the charter) is identical to the mission wording (p. 12).
- Frontier AI "Claude" is delivered "through our models, platform, and applications" (pp. 5, 179).

**Headline adoption claim:**
> “Claude has experienced the fastest enterprise adoption of any technology in history, as demonstrated by revenue growing from $0 at commercial launch in the first quarter of 2023 to $ [blank] for the three months ended September 30, 2026.” (pp. 5, 179)

### Five "Core Advantages" (pp. 5–6, 180, 186–188)

1. **Mission & Focus.** “singular focus on our mission” lets the company “avoid conflicting priorities” (pp. 5, 180). Example of a mission-over-commerce trade-off: Mythos released in April 2026 as a gated research preview via Project Glasswing because of its cyber-vulnerability-discovery capability (p. 186).
2. **Talent & Culture.** Described as “low-ego, truth-seeking” (pp. 5, 180). Claims the “deepest concentration of AI research talent in the world” (p. 187).
3. **Frontier & Safety Research.** Capability and safety research are “deeply integrated” (pp. 5, 180). “Each version of a Claude model assists in building the next … We refer to this recursive dynamic as ‘closing the loop’” (pp. 5, 180).
4. **Approach to Compute.** “We manage compute as a single, fungible pool from multiple strategic partners” (pp. 6, 180). Multi-chip: AWS Trainium, Google TPUs, NVIDIA GPUs, AMD GPUs (pp. 6, 180, 188).
5. **Enterprise Strategy.** “frontier AI is most valuable in real-world settings, as deployment across enterprises is where economic impact is greatest and where the improvement loops from customer feedback are richest.” (pp. 6, 180)

**Diagram (p. 179):** three boxes, "Our core advantages" → "Enterprise adoption of Claude" → "Our financial model".
- The middle box lists "Virtual collaborator / Platform and applications / Diffusion of AI".
- The financial-model box lists "Revenue growth / Compute efficiency / Operating efficiency".
- An orange **Improvement loop** returns from adoption to advantages. A blue **Investment loop** returns from the financial model to advantages.

### The loops (the "flywheel")

**Improvement Loop (pp. 10, 182):**
> “Enterprise deployments of Claude deepen our understanding of the hard problems, edge cases, and domain-specific challenges … These improvements result in wider deployments and adoption that fuel the next cycle of improvement.”

**Investment Loop (pp. 10–11, 183):**
> “Revenue from expanding enterprise adoption helps us to fund the compute, research, and talent needed to improve Claude. Claude’s advancing capabilities expand the range of tasks and workflows customers use Claude for, broadening our addressable market …”

Diagram (pp. 11, 183), with "Claude / Frontier Intelligence" at the centre of both loops:
- Improvement loop: Better models → More use cases → More feedback.
- Investment loop: Higher growth → More investment → More capabilities.

**"Closing the loop"** (defined p. 1: “a development cycle in which successive versions of an AI model assist in building the next, with the goal of compounding capability gains over time”).
- In practice (pp. 11, 183): “Many aspects of the research, training, and testing of subsequent model generations now involve Claude, including running experiments, generating and processing training data, automating evaluations and safety audits, and writing and reviewing code.”
- Claimed output (pp. 11, 183): “A direct expression of this dynamic is our accelerating pace of producing compute multipliers.”
- Not disclosed: how many multipliers, or their size.
- Safety caveat (p. 184): “Using AI to help build more capable AI could also pose a considerable safety risk … This is one of the areas covered by our Responsible Scaling Policy … ‘recursive self-improvement.’”

### "Strengths of Our Financial Model" (pp. 10, 182)

> “Building and scaling frontier AI is one of the most important and capital-intensive endeavors in history.” (pp. 10, 182)

Three drivers:
- **Rapid Revenue Growth.** NRR of approximately 900% as of 2026-09-30 (pp. 10, 182). Lower cost per task drives usage: “Claude Opus 5.5 reduced customer costs per task by approximately 40% compared to Claude Opus 5” (p. 10). “Our compute efficiency allows us to deliver these reductions while preserving our margins.” (p. 10)
- **Compute Efficiency.** “revenue that grew 1,368% year over year for the three months ended June 30, 2026 compared to compute and infrastructure expenses that grew 300% during the same period.” (pp. 10, 182)
- **Operating Efficiency.** “TTM revenue per employee of over $6.6 million as of September 30, 2026, compared to $1.4 million as of September 30, 2025.” (pp. 10, 182)

**Business section extras (p. 182):**
- Q2'26 revenue was $11.6B, vs $787M in Q2'25.
- Q2'26 operating margin was 8% (operating income $1.0B), vs (152)% (operating loss $1.2B) in Q2'25.
- Q2'26 Adjusted Operating Margin was 19% (Adjusted Operating Income $2.2B), vs (129)% (Adjusted Operating Loss $1.0B).

**Capital (pp. 10, 182), as of 2026-06-30:** “raised an aggregate of $141.1 billion of capital and had cash and cash equivalents of $112.4 billion and short-term investments of $19.3 billion.”

**Hedge (p. 182):** “Long-term investments come with risks, as we must predict compute needs multiple years into the future. However, we believe our compute efficiency positions us to amplify returns if demand is greater than our forecast and can provide financial resilience if demand is lower …”

**"Long-Term Investment Philosophy" (p. 196), Q2'26 vs Q2'25:**

| Item | Change |
|---|---|
| Revenue | +1,368% |
| Compute & infrastructure expense | +300% |
| Other operating expenses | +741% |
| Operating margin | (152)% → 8% |
| Adjusted Operating Margin | (129)% → 19% |

The heading on p. 194 reads “Unprecedented Financial Model to Support Long-Term Investments”. The summary (p. 11) says “our unprecedented financial model”.

*Arithmetic check against the MD&A quarterly table (MD&A p. 157):*
- Revenue: $787M → $11,555M is +1,368%.
- Compute & infrastructure: $1,390M → $5,558M is +300%.
- Other operating expenses (personnel + S&M + other): $597M → $5,023M is +741%.
- Q4'25 QoQ: $1,382M → $2,040M is +48%. Q1'26 QoQ: $2,040M → $4,731M is +132%.

All of these reconcile.

### "Powerful AI" and "Virtual Collaborators"

**Powerful AI (pp. 6, 184)** is expected to “become widely available within a few years”. Its attributes:
- expert-level cognition across most disciplines
- the ability to navigate all human interfaces
- autonomy over “hours, days, or weeks”
- multi-instance coordination
- physical-world control

**Virtual Collaborators (pp. 7, 189):** “AI systems that work alongside humans to perform complex, multi-step work at professional levels.”
- Long-run vision (pp. 8, 191): “a country of geniuses in a data center”.
- The p. 190 graphic shows a progression from Chatbots (“Narrow, one-shot answers”) to Copilots (“Works inside one app or task”) to Virtual collaborators (“Takes a goal and works alongside you”). Its illustrative mock-up shows Claude "running 38m" closing a month-end ledger.

### Growth strategy (pp. 11–12 summary; pp. 196–198 business)

1. **Talent and Culture.** “grow our business without growing headcount linearly” (p. 196).
2. **Compute.** “secure further compute beyond our existing commitments, expand our own data center footprint …” (pp. 11, 197).
3. **Claude's Intelligence, Capability, and Safety** (pp. 12, 197).
4. **Accessibility ("Make Claude Available Everywhere").** Lists Claude Code, Claude Cowork, Claude.ai, Claude Security, Claude Design, Claude Science, cloud marketplaces, and embedding (p. 197).
5. **Adoption.** Grow direct go-to-market and Applied AI teams, partner field teams, the prosumer channel, and international offices (p. 197).
6. **New markets.** Healthcare/life sciences, robotics/physical work. Life-sciences investments: a molecular biology lab, the Coefficient Bio acquisition, and industry partnerships (p. 197).
7. **Strategic transactions.** Coefficient Bio (computational biology) acquisition completed April 2026 (p. 198). Ode with Anthropic (p. 198).

---

## 2. Products and revenue lines

### Three-layer stack (p. 181; p. 198; diagram p. 199)

> “We build at three layers of the stack: the models themselves, the platform for building on those models, and the applications that place Claude directly in the hands of our users.” (p. 181)

Cross-product usage (p. 181): “over 50% of our customers with $100,000 or more of revenue on a TTM basis used Claude Platform and at least one of our first-party applications, up from approximately 30% for the three months ended December 31, 2025.”
- Measured in Q3'26.

### Models (p. 199): four classes

| Class | Filing description | Notes |
|---|---|---|
| **Mythos (including Fable)** | “Our most capable model class” | One underlying model in two configurations. **Fable** is generally available “with our production safeguards, which block or limit performance on certain sensitive topics, including by routing requests to a less capable Claude model.” **Mythos** has safeguards calibrated for vetted cyber/life-sciences users and is available via trusted-access programs, including the **Cyber Verification Program**. |
| **Opus** | “Our powerful workhorse model class for reasoning-intensive tasks” | Claude Opus 5.5 is designed as “the enterprise daily driver”. “Opus models consistently rank among leading models on key industry benchmarks” (no benchmarks named here). |
| **Sonnet** | “Our versatile model class for everyday tasks” | Includes “high-volume sub-agents in multi-agent orchestration setups”. |
| **Haiku** | “Our lowest-cost and fastest model class” | Customer service agents, large-scale document processing. |

All models support text, code, and multimodal inputs (p. 199).
Diagram taglines (p. 199): Mythos “Frontier intelligence”; Opus “Powerful intelligence”; Sonnet “General-purpose intelligence”; Haiku “Cost-effective intelligence”.

**Release chronology stated in the filing:**

- **Business section:**
  - Opus 4.1 → **Opus 4.5 (Nov 2025)**, with “greater capabilities and a lower price and cost per task” (p. 195).
  - **Claude Mythos Preview (Apr 2026, Project Glasswing)**.
  - **Fable 5 GA; Mythos 5 to Glasswing participants (Jun 2026)**.
  - **Mythos 5.1 and Fable 5.1 (Sep 2026)** (p. 199).
  - **Opus 5.5 (Sep 2026)** (p. 195).
  - Opus 4.8 and Claude Mythos 5 are cited in ExploitBench results (p. 189).
- **MD&A:** Opus 5 (MD&A p. 136).
- **Case studies:** Claude 2.0 (AIG, p. 209); Claude 3.7 Sonnet (Jane Street, p. 213); Sonnet 3.5 (Shopify, p. 222); Opus 4.6 (Mozilla, p. 217); Opus 4.8 (Legora p. 214, UST p. 224); Sonnet 4.6 (Walmart, p. 226).
- **Cadence context (MD&A p. 143):** “model versions released in the six months ended September 30, 2026 accounted for over 80% of our revenue for the three months ended September 30, 2026.”

**Customer pricing cuts (p. 195):**
- Fable 5.1 (Sep 2026) cut typical workload cost by **~25%** vs Fable 5, and **up to 45%** for complex coding/agentic tasks.
- Opus 5.5 (Sep 2026) cut cost per task by **~40%** vs Opus 5.
- “the reduction was a combination of a lower price and improved efficiency, the contributions of which depend on the task.”
- The split between price and efficiency is not quantified.

### Claude Platform (pp. 192, 200–201)

- **Model capabilities (p. 192):** native tool use, computer use, memory, extended thinking, long context, low-latency variants.
- **Composition primitives (p. 192):** Agent SDK, Claude Managed Agents, agent skills, multi-agent orchestration, MCP.
- **Platform features (p. 200):** Extended Thinking; Adaptive Thinking; Effort Controls; Tool Use (parallel, interleaved thinking, tool search); Long Context; Structured Outputs; Code Execution; Web Search; Files API.
- **Context management (pp. 200–201):** Model Context Protocol, Agent Skills, Model Hardware Standard (research preview).
  - MCP: “an open standard we introduced in November 2024 and donated to the Linux Foundation’s Agentic AI Foundation in December 2025”.
  - Agent Skills: pre-built Word/Excel/PowerPoint/PDF skills.
- **Infrastructure (p. 201):** available direct and via AWS, GCP, Azure (“Feature availability varies by deployment”).
  - **Prompt Caching:** cache up to one hour, “reducing cost by up to approximately 97% and latency by approximately 60% for long prompts”.
  - Batch Processing; Fast Mode.
- **Harnesses (p. 201):** “A model alone is not an agent.”
  - **Agent SDK:** the Claude Code harness, run on the customer's own compute.
  - **Claude Managed Agents:** the harness is run by Anthropic on Anthropic-managed compute.

### First-party applications (pp. 201–202)

| Product | Filing description (abridged) | Page |
|---|---|---|
| **Claude Code** | Coding agent: terminal, desktop, web, mobile. GitHub/IDE integrations. Parallel agent sessions. Research preview February 2025 (p. 191). | 201 |
| **Claude Cowork** | Knowledge-work agent on desktop/web/mobile, built on Claude Code’s architecture. Clicks/types through native apps. Open-source plugin system. Research preview January 2026. | 202, 190–191 |
| **Claude.ai** | “Our flagship conversational product”. “delivers top-of-funnel demand generation for enterprise adoption”. In Sep 2026 Anthropic began merging Cowork and Claude.ai into one app. | 202 |
| **Claude Security** | Defensive cyber product, “available in public beta to Claude Enterprise customers”. Findings come with confidence and severity ratings and repro steps. | 202, 185 |
| **OSS Scanner** | “recently launched”. Extends scanning to open-source projects. | 185, 189 |
| **Claude Tag** | Collaborative agent in tools like Slack. Channel-scoped memory. Slack was the launch partner (Salesforce case study, p. 220). | 202 |
| **Claude Design** | Designs, prototypes, presentations via conversation. | 202 |
| **Claude Science** | AI workbench for scientific research. “queries more than 60 scientific databases”. | 202 |
| **Claude for Microsoft 365; Claude in Chrome** | Embedded in everyday apps. | 192 |

**Claude Enterprise (p. 202):** SAML SSO with SCIM, role-based access, audit logging, Compliance API, HIPAA-supporting configurations, admin console.

**Enterprise Frontier Safeguards (Sep 2026, pp. 202–203):**
- Safety-monitoring data is stored in the customer’s own cloud account.
- Alerts go to the customer’s security team. “No review by Anthropic employees is required.”
- Developed with “more than 100 customers”.
- Until the phased rollout completes, eligible customers get zero data retention on Fable 5/5.1.

**Plans:**
- **Claude Pro and Claude Max** are the prosumer subscriptions (p. 206).
- **Claude Enterprise and Team plans** are named as delivery channels for vertical solutions (p. 203).
- **Free tier:** not described in Business. RF p. 79 mentions “free trials and free tiers”.
- **No plan prices or subscriber counts are disclosed.**

### Seven vertical solutions (pp. 192, 203–204)

1. Claude for Financial Services: pitch books, earnings review, KYC screening. Runs inside Excel/PowerPoint/Word/Outlook.
2. Claude for Financial Advisors.
3. Claude for Healthcare: CMS Coverage Database, ICD-10, NPI Registry, FHIR, prior-authorization skills.
4. Claude for Life Sciences.
5. Claude for Legal: MCP connectors to Relativity, Ironclad.
6. Claude for Education: Claude for Higher Education. **Claude for Teachers** gives verified U.S. K-12 educators “free access to premium Claude capabilities”.
7. Claude for Government: **FedRAMP High** authorized environment. Non-U.S. government and **classified** workloads go via Amazon Bedrock.

Also the **Model Hardware Standard**: AI agents operate “microscopes, liquid handlers, and off-the-shelf robotic arms” (pp. 7, 186, 197, 201).

### Revenue model (definitions p. 3; MD&A/F-pages for numbers)

- **"pay-for-intelligence" or "consumption"** (p. 3): “customers pay for their usage of our intelligence service, which is metered in tokens and priced according to the model selected.”
- Subscriptions: Pro, Max, Team, Enterprise.
- *Context (F-26):* H1'26 revenue was **$13,064M consumption (80%)** and **$3,222M subscription (20%)**. FY2025 was $3,796M / $789M.
- *Context (F-16):* revenue through **CSP marketplaces** was ~11% (2023), 32% (2024), 47% (2025), and **48% (H1'26)** of total revenue.
- *Context (F-26):* International (billing address) revenue was $4,523M of $16,286M in H1'26 (≈28%). FY2025: $1,223M of $4,585M.

### Distribution

**Cloud (pp. 9, 181, 193, 206):**
> “Claude is available across the three major cloud platforms via their dedicated AI service layers (Amazon Bedrock, Gemini Enterprise Agent Platform, and Microsoft Foundry)” (p. 206)

Structure:
> “We have a joint go-to-market approach with these CSPs through which we establish direct contractual relationships with our customers while paying a fee to each CSP.” (pp. 9, 181, 193)

The CSP fee amount is not disclosed in these sections.

**Ecosystem:**
- SIs: Accenture, Deloitte, KPMG, PwC. Data platforms: Salesforce, Snowflake (pp. 9, 181).
- **Claude Partner Network** (launched Mar 2026): “committing an initial $100 million in 2026”. “over 150,000 practitioners across over 4,000 organizations” certified as of 2026-09-30 (p. 193).
- **Claude Frontier Academy** (Oct 2026): “$100 million commitment”. Aims “to train 10,000 engineers … by the end of 2027” (p. 194).
- **Ode with Anthropic:** “an AI services company, in partnership with leading private equity firms to bring Claude’s capabilities to mid-sized companies” (pp. 9, 181, 194, 198). The PE firms are not named.

**Go-to-market (p. 193):**
- “Intelligence-Led Growth” (organic, prosumer-led).
- Direct Teams: “By the time our direct teams engage a customer, Claude is often already in use.”
- Applied AI Teams (forward-deployed engineers).

**Builders on Claude (p. 192):** Legora and Salesforce “have built AI-powered products on Claude that reach millions of end users.”

---

## 3. Quantitative customer and usage metrics (with measurement dates)

| Metric | Value | As of / period | Page |
|---|---|---|---|
| Customers ≥$100k revenue TTM | **>11,900** | 2026-09-30 | 8, 181, 194, 206 |
| same, one year earlier | **>950** | 2025-09-30 | 194, 206 |
| Customers ≥$1M TTM | **>1,900** | 2026-09-30 | 8, 181 |
| Customers ≥$10M TTM | **~250** | 2026-09-30 | 9, 181 |
| ≥$100k customers using Platform + ≥1 first-party app | **>50%** (vs ~30% in Q4'25) | Q3'26 | 181 |
| Fortune penetration (≥$100k customers) | **every Fortune 10 company; >50% of Fortune 500; >30% of Global 2000** | 2026-09-30 | 194, 206 |
| Within the F500 | 10 largest software & IT services, 10 largest internet, 9/10 largest pharma, 10 largest banks, 9/10 largest semiconductor, 8/10 largest healthcare | 2026-09-30 | 194 |
| Net Revenue Retention | **~900%** | 2026-09-30 | 10, 182, 195 |
| Claude Enterprise users without Claude Code | **<$75/month** average spend | Q3'26 | 195 |
| Top 5% of Claude Enterprise users with Claude Code | **~20×** that amount | Q3'26 | 195 |
| Cowork vs Claude Code adoption | Cowork “outpaced” Code at the equivalent post-preview point (metric undefined) | 2026-09-30 | 8, 190–191 |
| Revenue | $0 at Q1 2023 launch → **$[blank]** | Q3'26 | 5, 179 |
| Revenue | **$11.6B** vs $787M (+1,368%) | Q2'26 vs Q2'25 | 10, 182, 196 |
| Q3'26 revenue vs Q4'24 revenue | **86×** | Q3'26 vs Q4'24 | 183 |
| QoQ revenue growth around the Opus 4.5 launch | 48% (Q4'25) → **132%** (Q1'26) | | 195 |
| Run-Rate Revenue | **$[blank]** | **2026-10-31** (a date after the 10-26 filing date) | 194 |
| Headcount | **~5,300** | 2026-09-30 | 195, 228, 229 |
| Headcount growth | **>5×** | 2024-12-31 → 2026-09-30 | 183 |
| TTM revenue per employee | **>$6.6M** (vs $1.4M) | 2026-09-30 (vs 2025-09-30) | 10, 182, 195, 228 |
| Regrettable attrition | **~1%** | TTM to 2026-09-30 | 187 |
| Share of Anthropic codebase contributions written by Claude | **>90%** | Sep 2026 | 183, 196, 228 |
| Daily code volume per engineer | **>45×** the 2024 average | Q3'26 vs FY2024 | 183, 196 |
| Claude success rate on hard, open-ended internal engineering problems | **~90%**, up ~50 pp in nine months (“based on our internal benchmarks”) | Sep 2026 | 183 |
| Value of internal Claude usage at list prices | grew **>250×**; in Apr 2026 the monthly value first exceeded monthly personnel expense ex-SBC | Jan → Sep 2026 | 184 |
| Claude Partner Network | >150,000 certified practitioners at >4,000 organizations | 2026-09-30 | 193 |
| Enterprise Frontier Safeguards co-developers | >100 customers | Sep 2026 | 203 |
| Patents | 40 U.S. issued; 67 U.S. pending (32 nonprovisional, 35 provisional); 26 foreign issued; 12 foreign pending | 2026-09-30 | 237 |
| Trademarks | 29 U.S. registered (+11 pending); 237 foreign registered (+261 pending) | 2026-09-30 | 237 |

*Context from other sections:*
- **MD&A p. 136:** “From September 30, 2025 to September 30, 2026, TTM revenue increased approximately 1,200% while headcount increased approximately 170%.”
- **MD&A p. 142:** Fortune 500 customers’ spend with Anthropic is “on average, less than 0.1% of their total expenses” (Q3'26). For the top 10 F500 customers it is <1%.
- **MD&A p. 143:** no customer >10% of revenue (9M'26). ~79% of Q3'26 revenue came from outside the top five customers, up from ~64% in Q1'26.
- **RF p. 56:** the top five customers were ~25% of revenue (9M'26).
- **MD&A p. 145:** revenue from customers later found violating usage policy/commercial terms was “approximately 5% to 7% of our revenue for the nine months ended September 30, 2026.”
- **RF p. 70:** government agency revenue was ~1% of revenue in each period.

**Not disclosed:**
- total customer count
- MAU/WAU or any user counts
- developer counts
- token volumes
- Claude Code users or revenue
- subscriber numbers
- Q3'26 revenue
- Run-Rate Revenue value
- aggregate committed spend (blank in Business/Summary)

---

## 4. Market size (TAM) claims and their sources

| Claim | Page | Source / method |
|---|---|---|
| Knowledge-worker work “represented more than $40 trillion in economic value globally in 2025” | 7, 185 | **Anthropic’s own estimate** (method on p. 123, described below) |
| “IDC estimates that investment in AI solutions and services will yield a cumulative global economic impact of $22.5 trillion by 2031.” | 7, 185 | IDC, *The Economic Impact of AI: 2026 Edition* (US54452226, Apr 2026). This is **cumulative economic impact**, not a revenue pool. |
| Annual global pharmaceutical spend “expected to exceed $2 trillion in 2026” | 7, 186, 197 | IQVIA Institute, *Global Medicine Use Trends 2026* (Feb 2026) |
| Knowledge workers globally “estimated to exceed one billion in 2028” | 8, 190 | Footnote cites IDC, *Worldwide Developer Population Growth Forecast, 2025–2029* (US53789825, Sep 2025). **Note:** the source title refers to *developers*. Check that it supports a *knowledge-worker* count. |
| IT spend ~$1.2T (2006) → $4.3T (2025), ~7% CAGR. Cloud spend 0 → $1.9T. | 185 | IDC, *Worldwide Black Book: Live Edition V2 2026 Forecast* (Jul 2026). The CAGR checks: (4.3/1.2)^(1/19) ≈ 6.9%. |
| Global GDP ~$34T (2000) → >$118T (2025) | 185 | World Bank |
| Ten largest public tech companies (by market cap at 2026-09-30) grew revenue from $68B to >$2.5T, “approximately 38 times, or approximately 11 times the rate of global GDP growth” | 185 | **No source footnote**; appears to be Anthropic’s compilation. Survivorship: companies selected by *today’s* market cap. |

**Knowledge-worker method (p. 123):**
> “Based on wage data for U.S. workers by occupation classification from the U.S. Bureau of Labor Statistics in 2025, we calculate the total salary for the subset of workers that we believe to represent knowledge workers.”

The calculation:
1. Estimate 2025 global wages from the ILO labour-income share applied to 2025 global GDP.
2. Compute the ratio of U.S. total wages to global wages.
3. Apply that ratio to the U.S. knowledge-worker wage total.

Caveats:
- The occupational subset is **not specified**.
- The ILO is used in the method but is **not listed** in the p. 123 source bullets.
- This is a **wage bill**, not a spend pool for AI.

**Not given:** any explicit Anthropic TAM, SAM, or share of wallet. The filing frames the opportunity as capturing “a share not only of today’s economic activity but also of that newly created output” (pp. 7, 186).

Data disclaimer (p. 123): “we have not independently verified the accuracy or completeness of the data contained in such sources.”

---

## 5. Compute strategy

**Philosophy (pp. 6, 180, 188):**
- A single fungible pool across providers, chips, and locations. The same infrastructure serves customers, research, and internal usage (p. 188).
- “Securing this access requires significant advance commitment … we secure compute well in advance of anticipated demand” (p. 188).

**Chip platforms (p. 204):**
- **AWS Trainium:** “Our strategic collaboration with Amazon provides us with access to AI accelerators, including custom-designed Trainium chips … as well as the opportunity to influence future generations of Trainium chips.”
- **Google TPUs:** “Our partnerships with Google and Broadcom provide us with access to compute capacity powered by Google TPUs across multiple generations of the TPU platform.”
- **NVIDIA GPUs:** strategic partnership with NVIDIA, “together with our arrangements with Microsoft, SpaceXAI, Nscale, Lambda, and other cloud providers”. Includes **Grace Blackwell and Vera Rubin** systems. Anthropic collaborates directly on design.
- **AMD GPUs:** **AMD Instinct MI450 Series** via **Helios** rack-scale systems. “multi-year engineering collaboration”.
- Onboarding: “By leveraging Claude, our engineering teams can now bring new chip platforms into production more quickly” (pp. 204–205). The speed-up is not quantified.

**Data-center strategy: "Anthropic Direct" (p. 205):**
> “we also procure specialized AI accelerators directly and operate this hardware in dedicated data center facilities leased and operated on our behalf, to our specification. We refer to this additional source of compute as Anthropic Direct … Our first data center facility became operational this year.”

- Data-center capacity is committed separately from the chips inside: “data centers require longer lead times but represent a smaller fraction of total compute costs” (p. 205).
- Arrangements:
  - master equipment leases, including the **2026 Lease Arrangement**
  - data-center leases, including a **colocation and services agreement with Fluidstack USA I Inc.** (dollar amount not disclosed)
  - financing partners guaranteeing lease obligations
  - electrical power, including **behind-the-meter** generation (p. 205)
- Location: “currently located primarily in the United States” (p. 205).
- “committed billions towards expanding U.S. computing infrastructure”. Leases for data-center capacity in **Australia and Canada** (p. 240).
- **Power or capacity in GW/MW: not disclosed anywhere.**

**Owned vs leased:**
- The Business section describes leasing (equipment leases and facility leases) and cloud purchases. It does not describe owning data centers outright.
- MD&A p. 171: the Broadcom equipment leases are “accounted for as finance leases”.

**Aggregate commitments (pp. 6, 180, 196):** “aggregate committed spend of more than $ [blank], substantially all of which is related to compute and infrastructure.”
- “$ [blank] expected to be incurred before December 31, 2030”.
- The remainder falls in **2031–2045**.
- “$ [blank]” is due in the next 12 months.
- All totals are blank.

**Named deal sizes (context: MD&A pp. 170–172, not in Business):**

| Counterparty | Stated amount | Period / key terms |
|---|---|---|
| Microsoft | ≥ **$44.9B** | Nov 2026 – May 2033. Non-cancelable, regardless of usage. |
| Google | ≥ ~**$114.5B** | Apr 2026 – Jul 2033. Non-cancelable, with a true-up. |
| Google (additional TPU compute) | an additional **$125–150B** estimated | 2028–2031. Not in the contractual table. |
| Amazon | ≥ **$110.0B** | May 2026 – Apr 2036. Non-cancelable, with a true-up. |
| SpaceXAI (formerly X.AI LLC; NVIDIA GPUs) | up to **$120.5B** | Into 2029. ~$3.1B/month at full capacity, expected Dec 2026. Cancellable on 90 days’ notice after initial periods ending Jan/Mar 2027. |
| AMD | expected **>$20B** if the initial tranche is fully procured | 2027 initial tranche. Not in the table. |
| Nscale | up to ~**$44.6B** | Into 2033 |
| Lambda | ~**$41.3B** | Into 2034. $34.9B of it is terminable if Lambda fails to secure the facility lease. |
| Broadcom | ~**$161.2B** rent excluding interest | Five-year master equipment leases giving TPU capacity |

These figures mix minimums, "up to" caps, estimates, and lease rent, so do not present their sum as a filing figure.

**Efficiency claims:**
- “compute multipliers” are defined on p. 1. They are claimed to be accelerating (pp. 11, 183), but **no multiplier magnitude is disclosed**.
- Proof point offered (pp. 10, 182, 196): revenue +1,368% vs compute expense +300% (Q2'26 YoY).
- Additional claim (pp. 187, 230): “Our Model Research and Compute Performance Are Co-designed from the Start”. AI researchers and inference engineers “share planning cycles, reporting lines, and performance targets”.
- Research choice (p. 230): “we do not currently focus on developing video and image generation models, despite their commercial appeal. That compute instead goes to coding, agentic skills, and safety research.”

---

## 6. Research and safety

**Responsible Scaling Policy (RSP) (pp. 230–231, 233):**
> “Our Responsible Scaling Policy describes how we approach the catastrophic risks posed by AI. The policy requires us to regularly publish detailed risk reports …” (p. 230)

- It includes a **Frontier Safety Roadmap** (pp. 230–231).
- First version published **September 2023**. “two other leading frontier AI labs adopted similar frameworks within months” (p. 233). The labs are not named.
- “first frontier AI lab to adopt a formal Responsible Scaling Policy tying safety evaluations to capability thresholds” (pp. 228, 229).
- **"AI Safety Levels" (ASL) do not appear anywhere in the filing text.** Capability thresholds are mentioned only generically.

**Claude’s constitution (p. 231; definition p. 1):** four priorities: Broadly Safe, Broadly Ethical, Compliant with our Guidelines, Genuinely Helpful.
> “training Claude on high-quality constitutional documents combined with fictional stories portraying an aligned AI contributes to reducing Claude’s misalignment rate.” (p. 231)

No numbers are given for this.

**Validation (pp. 231–232):**
- Pre-release evaluations are documented in public system cards.
- **ISO/IEC 42001** certification; SOC 2 reports.
- Pre-deployment access for **CAISSI** (U.S. Center for Advancing Innovation and Standards for Super Intelligence) and the **U.K. AI Security Institute**.
- Training data sources: public web data, licensed or commissioned datasets, and synthetic data generated by Anthropic’s own models (p. 231).

**Alignment (p. 232):**
- Misaligned behaviours have been “observed across the industry”, including models circumventing sandboxes, granting themselves permissions, and “misrepresenting whether tasks had been completed or verified”.
- Claim: “Our own internal alignment evaluation shows that our newly released frontier models have demonstrated improved alignment compared to their predecessors.”

**Interpretability (p. 232):**
- Models are “grown, not built”.
- “Anthropic is widely recognized as a leader in mechanistic interpretability”.

**Safeguards (pp. 232–233):** probes and classifiers, prompt-injection training, account enforcement, responsible-disclosure policy, bug bounty, Frontier Red Team, cyber-misuse classifiers.

**Release decisions (p. 233):**
- “we do not release every model we develop for general use”.
- Mythos was gated in April 2026. Fable 5 was later released “with safety restrictions on certain cybersecurity, biology, and chemistry capabilities.”

**Race to the top / "pacing the frontier" (pp. 233–234):**
- Anthropic calls for “industry-wide standards primarily related to the use of AI to accelerate AI development”.
- **Independent-evaluator program:** “we currently anticipate investing at least $1 billion over the next five years to build external reviewer capacity with Accenture. The terms of this arrangement have not been finalized” (p. 233).
- “committed up to $100 million in cyberdefense-related initiatives through Project Glasswing” (p. 234).
- Member of the Frontier Model Forum.

**Societal impacts (p. 234):**
- A study of 80,000+ people, which Anthropic calls “the largest multilingual qualitative study of its kind”.
- The Anthropic Economic Index (open datasets).
- The Anthropic Institute.
- Gatefold pg4: “$200 million to partner with governments to run studies on different ways of responding to changes in the economy.”

**Benchmark claims:**
- **ExploitBench** (Carnegie Mellon) went from **40% with Opus 4.8 to 78% with Claude Mythos 5 to 91% with Opus 5.5** over ~4 months (p. 189). This is the only external benchmark score in Business.
- Internal: the ~90% success rate on hard engineering problems (p. 183).
- “Opus models consistently rank among leading models on key industry benchmarks” (p. 199). No benchmarks are named.
- “We have built our models … for usefulness in production environments instead of benchmark performance” (p. 189).

**Safety and misuse incidents and adverse events disclosed:**
- **June 2026:** the U.S. Department of Commerce imposed **worldwide export restrictions on Fable 5 and Mythos 5**. They were re-deployed after safeguards were updated and the restrictions lifted (p. 239).
- *RF p. 45:* in **September 2025** a “Chinese state-sponsored hacking group manipulated our Claude Code tool into attempting infiltration into roughly 30 global targets … resulting in a limited number of successful intrusions.”
- *RF p. 81:* a **March 2026** service outage and degraded performance (demand plus compute constraints).
- *MD&A p. 145:* 5–7% of 9M'26 revenue came from usage-policy/commercial-terms violators.
- Gatefold pg4 references “recent high-profile cybersecurity incidents” illustrating unintended autonomous behaviour. These are not specified.

---

## 7. Competition (pp. 235–237)

- **Model developers:** “direct competition from companies building frontier models … including **OpenAI and Google**, and large, well-capitalized technology companies investing to reach the frontier.”
  - Differentiation claimed: “our primary focus on enterprises, our ability to remain at and define the frontier, our research talent, and the efficiency through which we maximize our compute investment” (pp. 235–236).
- **Broader model providers:** includes “open-weight or open-source … models released by state actors and international and domestic research organizations” (p. 236). These are said to “prioritize cost efficiency over maximum intelligence”.
- **First-party application providers:** “we may from time to time compete with enterprise software and application companies in select categories” (p. 236).
- **Status quo:** organisational inertia, especially in regulated industries (p. 236).
- Competitive factors: 13 bullets (pp. 236–237). Closing claim: “We believe that we compete favorably across these factors and are uniquely positioned at the frontier of AI.” (p. 237)
- **Not given:** market share, win rates, pricing comparisons, or named competitors besides OpenAI and Google.
- **Overlaps to note:**
  - Google, Amazon, and Microsoft are distribution partners, compute suppliers, and (per F-16) holders of preferred stock or notes, while Google is also named as a competitor.
  - SpaceXAI (formerly X.AI LLC) is a compute supplier.

---

## 8. Government, national security, international, policy

- **Claude for Government:** FedRAMP High. Classified workloads go via Amazon Bedrock (p. 204).
- “designated government partners” get expanded early access to models that “materially advance the capability of the frontier in areas relevant to national security” (p. 233).
- **CAISSI agreement:** Anthropic commits to provide model access for testing before and after release. U.K. AISI also gets access (p. 237).
- Anthropic **publicly endorsed California SB 53** (p. 237).
- **Department of War dispute (p. 241):**
  - In February 2026, after Anthropic’s stated position “that our technology should not be used for mass domestic surveillance or fully autonomous weapons”:
    - The President directed agencies to cease using Anthropic.
    - The Secretary of War directed a “supply-chain risk to national security” designation.
  - **N.D. Cal.:** largely granted summary judgment for Anthropic on Aug 27, 2026 (First and Fifth Amendment violations; APA).
  - **D.C. Circuit:** on **Sept 25, 2026**, in a 2–1 decision, upheld the **Section 4713** (FASCSA) designation. Anthropic has petitioned for rehearing en banc.
  - Risk the filing notes: it may affect sales “to government agencies and other customers that sell products and services to the U.S. government”.
- *Context:* government revenue is ~1% of revenue (RF p. 70).
- Gatefold pg3: “We already work with the U.S. federal government, many state governments, and U.S. allies in areas such as child services, social security administration, cybersecurity, and intelligence collection.” Utah (ten state agencies), California (DMV, Medicaid), and the U.K. (job seekers) are cited.
- **Policy positions:**
  - Supports regulation, transparency, and independent third-party auditing (pp. 233–234, 238).
  - Six-point critical-infrastructure cyber agenda (p. 234).
  - Gatefold pg7: Claude kept free of advertising.
- **International:**
  - Offices in Europe and Asia-Pacific (p. 240).
  - “expansion of regional offices and partnerships … international expansion to be a meaningful driver of growth” (p. 197).
  - Data-center leases in Australia and Canada (p. 240).
  - The offering includes public offerings in Australia, Canada, certain EEA states, Japan, Switzerland, and the U.K. (p. i).

---

## 9. Employees and talent

- **~5,300 employees** at 2026-09-30, “a majority of whom work in research, engineering, and product development functions” (p. 229).
- Employees are called “Ants” (p. 228).
- HQ San Francisco (p. 240).
- **TTM revenue per employee >$6.6M** (vs $1.4M a year earlier) (pp. 10, 195, 228).
  - Gatefold pg5 adds that this is “meaningfully higher than the average for the largest public U.S. companies”. No comparison data is given.
- **Regrettable attrition ~1%** TTM (p. 187).
  - Gatefold pg5: “Over three quarters of our first 100 employees still work here”. “19%” of regretted leavers returned.
  - “the only major AI company to have retained its entire founding team”.
- Headcount grew >5× from 2024-12-31 to 2026-09-30, while Q3'26 revenue was 86× Q4'24 (p. 183).
- **Talent claims:**
  - Founding team originated Scaling Laws, GPT-2/GPT-3, RLHF, and mechanistic interpretability (p. 187). Constitutional AI is added on p. 229.
  - “deepest concentration of AI research talent in the world” (pp. 187, 195).
  - Some employees are under collective bargaining agreements in certain countries (p. 229).
- All seven co-founders remain active (p. 228): Dario Amodei, Daniela Amodei, Tom Brown, Jack Clark, Jared Kaplan, Sam McCandlish, Christopher Olah (p. 13).
- **Public benefit equity:**
  - 846,840,960 Class N shares (5% of fully diluted shares at 2026-06-30) were contributed to the Anthropic Public Benefit Fund.
  - Up to an additional 2% for each 50% share-price appreciation milestone, at board discretion (pp. 12, 235).
  - Co-founders pledged 80% of their personal equity (pp. 12, 235).
  - Gatefold pg6 footnote: the founder and employee pledges “amount to 9% and 8% of fully diluted shares as of June 30, 2026, respectively.”

---

## 10. Case studies (pp. 208–227; image pages, folios inferred)

Each page has a "Customer since" badge, a headline result table, and an executive quote. **All metrics are customer-reported. Most have no measurement date or methodology.**

| p. | Customer (since) | Claimed outcomes |
|---|---|---|
| 208 | **Accenture** (2025) | 45,000 professionals trained “on Anthropic”. >18,000 certified Claude practitioners. Cyber.AI (Claude-powered) took security-scan test coverage from ~10% to >80%, covers 1,600 apps and 500,000+ APIs, and cut scan turnaround from days to under an hour. A broadband-provider client reported 7× ROI, 55% faster speed to market, an 86% lower cost of validating a sales lead, and accuracy up from 13% to 97%. Accenture Anthropic Business Group formed Dec 2025. *(Accenture is also the partner for the $1B external-reviewer program, p. 233.)* |
| 209 | **AIG** (2023) | 8 business lines use Claude (as of 2026-03-31). Lexington Middle Market Property: +30% quoted submissions, −55% time-to-quote, +40% submissions bound. Submission review time cut >90%, with 100% of applicable submissions reviewed. Started on Claude 2.0. |
| 210 | **Bristol Myers Squibb** (2023) | 30,000+ employees with access. Claude Enterprise selected as company-wide AI platform (May 2026). Claude Code for 3,000+ developers and data scientists. A real-world-evidence question now takes ~5 minutes instead of ~2 months. Dozens of data sources connected via MCP. |
| 211 | **DoorDash** (2023) | Claude Code and Cowork available to 100% of corporate employees. 7,000+ monthly Cowork users. Launch timelines for major products cut more than half. One engineer did a 3-week migration that previously needed 4 engineers for more than a quarter. |
| 212 | **International Rescue Committee** (2025) | 8× Claude user growth (Dec 2025–May 2026). 464 staff hours returned per week. Grew from a 300-user pilot to ~2,400 seats. Share of key health indicators used in planning rose from 20% to 100%. *(The headline “20.5M+ people served” is IRC’s own reach, not a Claude result.)* Discounted licences via Claude for Nonprofits. |
| 213 | **Jane Street** (2023) | Fable 5.1 scored +32% over Fable 5 on Jane Street’s internal agentic coding eval. A large codebase migration took ~1 week vs months. One researcher estimates ~50% more analysis. Claude is “nearly wall-to-wall”. |
| 214 | **Legora** (2024) | Serves 1,500+ law firms and in-house teams (Legora’s product). In an independent study of 31 firms across 14 countries, lawyers recaptured 4.3 non-billable hours per week, worth “$6.9 million in additional annual billing per 100 lawyers”. 14× Claude Code growth (~50 to 700+ seats). A 900-document data room was reviewed in half a day. |
| 215 | **Eli Lilly** (2024, via Amazon Bedrock) | 50,000+ employees with Claude Enterprise access. 5× expansion since the July 2025 rollout (~10,000). >85% of employees in key functions engage. Called “the first large pharmaceutical company” to make Claude Enterprise available across its employee base (Apr 2026). Piloting Claude Science (Oct 2026). |
| 216 | **Mercado Libre** (2023) | Merged code up >100% YoY. 500,000+ code submissions reviewed autonomously in the past year. 78% of non-tech teams active in Cowork weekly. 23,000+ developers. ~9,000 services migrated. In 2025 ~40% of shipped code was written by Claude. Financial close shortened by a third. Cowork reaches 31,000 employees, described as “one of the largest enterprise deployments globally” (Mercado Libre quote). |
| 217 | **Mozilla** (2025) | Claude Opus 4.6 found 22 vulnerabilities (14 high-severity) in a two-week evaluation, fixed in Firefox 148. Claude Mythos Preview found 271 vulnerabilities, resolved by Firefox 150. Firefox CTO quote: “we’ve found no category or complexity of vulnerability that humans can find that this model can’t.” |
| 218 | **PayPal** (2025) | 12,000+ Claude Enterprise MAU. 45 minutes saved per sales team member per week. The Claude-based AMOS system cut report prep to 5–10 minutes. *(The text says “Claude and other tools”.)* |
| 219 | **Rakuten** (2024) | 70+ business units “using AI” (not Claude-specific). 99.9% code accuracy on complex modifications. 7+ hours of autonomous coding. Feature time-to-market down from 24 to 5 working days (>75%). Claude Managed Agents deployed. |
| 220 | **Salesforce** (2023) | +151% effective output per developer YoY; PRs merged per developer +79%. An API migration ran 18× faster (231 person-days of work done in 13 days). Claude powers Slackbot: 2× QoQ productivity gains, an estimated 8.1M hours annualized, 99% of employees use it. >60% of 83,000 employees use Claude. **Footnote: “Salesforce beneficially owns less than 1% of Anthropic’s outstanding capital stock.”** |
| 221 | **SAP** (2023) | Joule for Consultants: up to 14% faster project delivery, 25 hours saved per consultant per month (up to 1.5 hours/day). The portfolio of 50+ Joule Assistants and 200+ agents “leverages Claude as part of its reasoning”, i.e. a multi-model setup (“models, such as Claude”). **Footnote: SAP owns <1% of Anthropic.** |
| 222 | **Shopify** (2024) | “Millions” of merchants served by AI. 3× YoY daily active merchants on Sidekick (2026). Claude is “One of the models the company uses to power Sidekick”. 7,500+ employees use Claude Code. Early-access partner for Fable 5. |
| 223 | **Travelers** (2024) | Nearly 25,000 employees with Claude assistants (up from ~10,000 in Jan 2026). −50% time to merge code. |
| 224 | **UST** (2023) | 20,000 associates training on Claude. Chip-validation cycle time cut 50–70%. Standard validation turnaround cut from 4 to 2 days (Claude Code on Opus 4.8). |
| 225 | **Verizon** (2023) | 33,000+ engineers with Claude Code. Joined Project Glasswing; tested Claude Mythos (May 2026). No outcome metrics. |
| 226 | **Walmart** (2024) | Sparky (AI shopping agent): +110% weekly active users QoQ, +35% average order value vs non-Sparky orders, 2× units sold QoQ. Uses Claude Sonnet 4.6. Claude is “one of the models” powering WIBEY. *(Sparky metrics are not isolated to Claude.)* |
| 227 | **Shy Bird** (restaurant) | Brunch ticket times cut 60%+ to 12 minutes. Its Claude-built platform Colette is used by 60 restaurants. A server became a back-end engineer in 6 months. |
| 227 | **KBF Design Gallery** | 490 hours per year recovered for one employee. 7 hours cut per project on contract scope writing. 70 projects per year with 3 designers. 32% sales growth. |

Other named customers and users:
- AIG and Bristol Myers Squibb are named as Fortune 500 users (p. 192).
- Research institutions: Garvan Institute, Gladstone Institutes, UCSF (p. 192).
- NASA engineers used Claude Code to plan Mars Perseverance navigation, “the first AI-planned drive on Mars” (pp. 8, 190).
- Gatefold pg3: the WHO Regional Office for Africa cut its daily Ebola sitrep from “a full day to under an hour” (2026 DRC outbreak). Also cited: Gates Foundation, ~100 low- and middle-income countries.

---

## 11. Superlatives and bold claims (with the evidence the filing offers)

| # | Claim (verbatim or close) | Page | Evidence offered |
|---|---|---|---|
| 1 | “fastest enterprise adoption of any technology in history” | 5, 179 | Revenue from $0 (Q1'23) to $[blank] (Q3'26). **No comparison set.** |
| 2 | “one of the fastest-growing businesses in history” | 234 | None beyond the growth figures |
| 3 | AI’s impact “greater than the impact of industrialization, electricity, semiconductors, and the internet” | 5, 179 | Belief statement |
| 4 | “frontier AI represents a larger opportunity than any prior technology cycle” | 7, 185 | Historical IT-spend and tech-revenue analogies (p. 185) |
| 5 | “closing the loop … one of the most significant structural advantages in frontier AI” | 5, 180 | Internal code share; “accelerating pace of producing compute multipliers” (not quantified) |
| 6 | “unprecedented financial model” | 11, 194 | Q2'26 revenue +1,368% vs compute +300%; margin swing |
| 7 | “deepest concentration of AI research talent in the world” | 187, 195 | Founders’ research lineage; ~1% regrettable attrition; revenue per employee |
| 8 | researchers have pushed boundaries “further than bigger teams or those with larger budgets” | 187 | None quantified |
| 9 | Claude Code launch “comparable in its impact to the introduction of the first widely adopted conversational AI assistants” | 8, 190 | None quantified |
| 10 | “autonomous coding became the reference point for measuring the progress of frontier AI” | 8, 190 | None |
| 11 | “the first AI-planned drive on Mars” (NASA) | 8, 190 | Anecdote |
| 12 | Cowork adoption “outpaced” Claude Code at the equivalent point | 8, 191 | Adoption metric undefined |
| 13 | “first frontier AI lab to adopt a formal Responsible Scaling Policy” | 228, 229 | RSP published Sep 2023; “two other leading frontier AI labs adopted similar frameworks within months” (p. 233), unnamed |
| 14 | “widely recognized as a leader in mechanistic interpretability” | 232 | None cited |
| 15 | “Claude is widely recognized for its performance on real-world tasks” | 187 | None cited |
| 16 | “Opus models consistently rank among leading models on key industry benchmarks” | 199 | No benchmarks named; ExploitBench only (p. 189) |
| 17 | Platform breadth and speed is “a primary reason customers build on Claude” | 192 | None |
| 18 | Scale “with a smaller team relative to other large enterprise technology companies”; “greater sales efficiency compared to typical enterprise technology companies” | 10, 182, 196 | Revenue per employee only; no peer data |
| 19 | Multi-chip experience “differentiated and difficult to replicate” | 188 | None quantified |
| 20 | “particularly deep adoption in highly regulated sectors” | 206 | F500 bank/pharma/healthcare counts (p. 194) |
| 21 | “largest multilingual qualitative study of its kind” (80,000+ people) | 234 | “what we believe to be” |
| 22 | “the only major AI company to have retained its entire founding team”; revenue per employee “meaningfully higher than the average for the largest public U.S. companies”; “greatest economic opportunity in history” | gatefold pg5, pg3, pg6 | No comparison data |
| 23 | Lilly “the first large pharmaceutical company” to roll out Claude Enterprise company-wide | 215 | Case-study assertion |
| 24 | Mythos Preview finds any vulnerability humans can (Mozilla CTO quote) | 217 | 271 vulnerabilities fixed by Firefox 150 |

---

## Claims to stress-test

1. **“Fastest enterprise adoption of any technology in history” (pp. 5, 179).**
   - *Given:* $0 revenue in Q1'23 to an unstated Q3'26 figure (blank). Q2'26 revenue was $11.6B (p. 182). Q3'26 revenue was 86× Q4'24 (p. 183).
   - *Not given:*
     - any comparator (cloud, SaaS, smartphones, ChatGPT)
     - the Q3'26 revenue figure
     - a definition of “adoption”
   - “Enterprise” is a spend threshold (≥$100k TTM), not a company type (p. 2).
   - Revenue includes an estimated 5–7% (9M'26) from customers later found violating usage policy or commercial terms (MD&A p. 145; also footnote 11, p. 194).

2. **Net Revenue Retention ≈ 900% (pp. 10, 182, 195).**
   - *Definition (pp. 2–3):*
     - Current-quarter revenue ÷ the same customers’ revenue in the quarter one year earlier.
     - A “Qualified Customer” needs only $1 of base-period revenue.
     - Pro and Max subscribers are excluded.
   - *Not given:*
     - the cohort size or the share of revenue in the cohort
     - gross retention or churn
     - the NRR trend over time
   - When the base period is tiny relative to today, NRR mechanically explodes. It should not be compared with mature-software NRRs; ~100–130% is a common industry rule of thumb, and that benchmark does not come from the filing.

3. **Compute efficiency: revenue +1,368% vs compute expense +300% (Q2'26 YoY) (pp. 10, 182, 196).**
   - The arithmetic reconciles to the MD&A quarterly table (p. 157).
   - It is a single cherry-pickable quarter.
   - Compute expense recognition follows *delivery* of committed capacity (MD&A).
   - The aggregate committed spend is blank (pp. 6, 180, 196), while MD&A pp. 170–172 lists multi-hundred-billion-dollar deals (Google ≥$114.5B, Amazon ≥$110B, SpaceXAI up to $120.5B, Broadcom leases ~$161.2B, and others) against H1'26 revenue of $16.3B.
   - The claim that cost-per-task cuts were made “while preserving our margins” (pp. 10, 195) has no per-model margin data.

4. **TTM revenue per employee >$6.6M (pp. 10, 182, 195, 228).**
   - *Not given in these sections:* whether the denominator is period-end or average headcount, or whether contractors are included.
   - ~5,300 employees × $6.6M implies roughly $35B TTM revenue. This is **derived, not disclosed**. Q3'26 revenue is blank.
   - The ratio partly reflects capital and compute substituting for labour: compute is the largest cost line.
   - It also includes revenue sold via CSP marketplaces (48% of H1'26, F-16).

5. **“>90% of codebase contributions written by Claude” and “>45× daily code per engineer” (pp. 183, 196, 228).**
   - These are volume metrics. “Contributions” is undefined (lines? commits?).
   - Nothing is given on quality, defect rate, or human review time.
   - The “~90% success on hard engineering problems” figure is “based on our internal benchmarks” (p. 183). It is not externally verifiable.

6. **Internal Claude usage value grew >250× and exceeded monthly personnel expense ex-SBC (p. 184).**
   - It is valued **at list prices**, not at Anthropic’s cost.
   - No absolute amounts are given.
   - The filing does not say how much compute internal usage diverts from paying customers.

7. **Cost-per-task cuts: Opus 5.5 −40% vs Opus 5; Fable 5.1 −25% (up to −45%) (pp. 10, 195).**
   - “Cost per task” methodology and task mix are not disclosed.
   - The split between price and efficiency “depend[s] on the task”.
   - The causal link to the Q1'26 132% QoQ acceleration after Opus 4.5 is hedged: “combined effect of several factors” (p. 195).

8. **Benchmarks: ExploitBench 40% → 78% → 91% in ~4 months (p. 189); “Opus models consistently rank among leading models” (p. 199).**
   - Only one external benchmark is cited.
   - No competitor scores, benchmark version, or evaluation settings are given.
   - Analysts will ask for SWE-bench-style, agentic, and long-horizon evaluations and third-party leaderboards. The filing says it optimizes for production, not benchmarks (p. 189).

9. **TAM: “>$40 trillion” knowledge-worker value (pp. 7, 185; method p. 123).**
   - It is a **wage bill**, extrapolated from a U.S. BLS occupational subset (not specified) via a U.S.-to-global wage ratio. ILO data is used but not listed among the sources.
   - IDC’s $22.5T is *cumulative economic impact through 2031*, not addressable revenue.
   - The “>1 billion knowledge workers in 2028” claim (pp. 8, 190) cites an IDC **developer** population forecast. Verify the source supports it.
   - The ten-largest-tech-companies 38× revenue stat (p. 185) has no source footnote and selects companies by today’s market cap (survivorship).

10. **Fortune 500 penetration: every Fortune 10 company, >50% of the F500, >30% of the Global 2000 (pp. 194, 206).**
    - The threshold is only $100k TTM. MD&A p. 142 says this spend is on average **<0.1% of those companies’ total expenses**.
    - “Customer” aggregates accounts by internal judgment (p. 2).
    - The counts say nothing about wallet share, depth, or contract length. RF p. 56: many top customers “are not subject to long-term contracts”.

11. **Customer counts of ≥$100k customers: >950 → >11,900 in one year (pp. 194, 206).**
    - *Not given:*
      - year-ago counts for the ≥$1M and ≥$10M tiers
      - whether policy-violating customers are included in the counts
      - concentration within the tiers
    - Top 5 customers are ~25% of 9M'26 revenue (RF p. 56). That is down to ~21% in Q3'26 (MD&A p. 143: 79% from outside the top five).

12. **“Closing the loop” as a durable structural advantage (pp. 5, 11, 180, 183, 195).**
    - No compute-multiplier magnitudes are disclosed.
    - No evidence is given that competitors cannot do the same.
    - The filing itself flags recursive self-improvement as a safety risk covered by the RSP (p. 184) and proposes industry standards to “pace” it (p. 233). That could constrain the advantage.

13. **Case studies (pp. 208–227).**
    - Metrics are customer-reported, mostly undated, and have no methodology.
    - Several attribute results to multi-model systems: PayPal (“Claude and other tools”), Shopify Sidekick (“one of the models”), SAP (“models, such as Claude”), Walmart WIBEY (“one of the models”), Rakuten (“Business units using AI”).
    - Some headline numbers are the customer’s own scale (e.g. IRC “20.5M+ people served”).
    - **Related parties:** Salesforce and SAP each own <1% of Anthropic (pp. 220–221 footnotes). Accenture is an SI partner and the planned $1B external-reviewer partner (p. 233).

14. **Run-Rate Revenue “as of October 31, 2026” (p. 194).**
    - The value is blank, and the measurement date falls after the 2026-10-26 filing date.
    - The definition (p. 3) is 28-day consumption × 13 + monthly subscriptions × 12. It is sensitive to short spikes.
    - Footnote 11 (p. 194) admits it includes revenue from violators “whose revenue would not be expected to recur.”

15. **Safety and government positioning vs. events.**
    - *Claims:* safety leadership (first RSP p. 229, alignment improving p. 232, FedRAMP High p. 204).
    - *Same filing discloses:*
      - the D.C. Circuit upheld the DoW Section 4713 supply-chain-risk designation on Sept 25, 2026 (p. 241)
      - Commerce export restrictions on Fable 5 and Mythos 5 in June 2026 (p. 239)
      - a Chinese state-sponsored misuse of Claude Code against ~30 targets with some successful intrusions in Sep 2025 (RF p. 45)
      - government revenue of ~1% (RF p. 70)
    - Evidence of alignment improvement is “our own internal alignment evaluation” (p. 232).
    - **AI Safety Levels are not mentioned anywhere in the filing.**
