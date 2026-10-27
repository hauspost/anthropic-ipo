#!/usr/bin/env python3
"""Build the site's data files from the research extracts in research/.

research/  raw, page-cited extracts of the S-1 and of outside commentary
data/      the trimmed JSON the page actually ships (merged into the HTML by build.py)
"""
import json
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
RES = ROOT / "research"
DATA = ROOT / "data"


def load(name):
    return json.loads((RES / name).read_text())


def risks():
    keep = ["id", "group", "heading", "page", "category", "plain_english", "novelty", "quote", "numbers", "named_entities"]
    rows = load("risk_factors_a.json") + load("risk_factors_b.json")
    return [{k: r.get(k) for k in keep} for r in rows]


def experts():
    d = load("expert_commentary.json")
    skip = {"buyer", "ipox_muehlbauer", "rhind", "hendricks"}
    order = {"high": 0, "medium": 1, "low": 2}
    out = []
    for e in sorted(d["experts"], key=lambda e: (order.get(e.get("prominence"), 3), e.get("name"))):
        if e["id"] in skip:
            continue
        stance = e.get("stance")
        out.append({
            "id": e["id"],
            "name": e["name"],
            "affiliation": e.get("affiliation", ""),
            "field": "finance" if e.get("category") in ("finance", "governance") else "ai",
            "stance": "bull" if stance == "bull" else "bear" if stance == "bear" else "mixed",
            "quote": e.get("quote", ""),
            "quote_type": e.get("quote_type", "paraphrase"),
            "summary": e.get("summary", ""),
            "outlet": e.get("outlet", ""),
            "date": e.get("date", ""),
            "url": e.get("url", ""),
        })
    trim = lambda args: [{"title": a["title"], "argument": a["argument"], "attributed_to": a["attributed_to"]} for a in args]
    return {"experts": out, "bull_args": trim(d["bull_args"]), "bear_args": trim(d["bear_args"])}


# Terms used with <span class="term" data-term="..."> in the page, plus a curated
# set from the S-1's own defined terms (plain-English versions by our research pass).
CUSTOM_TERMS = [
    ("s1", "S-1", "The registration form a company files with the SEC before selling shares to the public for the first time. It contains the prospectus: the business description, risks, audited financials and ownership."),
    ("redherring", "Preliminary prospectus (\"red herring\")", "The first public version of the prospectus, before the price is set. It is nicknamed a red herring after the red warning legend once printed on its cover. The price and share counts are left blank."),
    ("compute", "Compute and infrastructure", "Anthropic's single biggest cost line: renting and leasing the chips, servers, power and data centers used both to train new models and to answer customers' requests."),
    ("convertible", "Convertible note", "A loan that turns into shares instead of being repaid in cash, usually at a price agreed in advance. Amazon lent Anthropic billions this way between 2023 and 2025."),
    ("fairvalue", "Change in fair value", "When an IOU that converts into shares becomes worth more because the company's valuation rose, accounting rules make the company record the increase as a loss. No cash changes hands."),
    ("circular", "Circular financing", "A critic's term for deals where a supplier invests in or lends to a customer, and the customer spends the money back with the supplier. It can make both sides' growth look bigger than outside demand alone would."),
    ("vendor", "Vendor financing", "A supplier lending money or extending credit so a customer can buy its products. It is common and legitimate, but it concentrates risk if the customer stumbles."),
    ("ltbt", "Long-Term Benefit Trust", "An independent trust, holding a single Class T share with no economic value, that elects four of Anthropic's seven directors. Its trustees may not own Anthropic stock."),
    ("takeorpay", "Take-or-pay", "A contract where the buyer pays for a minimum amount whether or not it uses it. Several of Anthropic's compute deals work this way, with cash \"true-ups\" for any shortfall."),
    ("lockup", "Lock-up", "A promise by existing shareholders not to sell for a period after the IPO, so the market isn't flooded with stock. Anthropic's releases come in many small steps instead of one date."),
    ("gaap", "GAAP vs. adjusted", "GAAP is the official US accounting rulebook, and audited figures follow it. \"Adjusted\" or non-GAAP figures are the company's own versions that leave out items such as stock-based pay."),
    ("sbc", "Stock-based compensation", "Paying employees in shares or options instead of cash. It doesn't use cash, but it dilutes shareholders, so many analysts treat it as a real cost."),
    ("dilution", "Dilution", "When a company issues new shares, each existing share owns a smaller slice of the company."),
    ("marketcap", "Market value (market cap)", "Share price times the number of shares: what the stock market says the whole company is worth."),
    ("pe", "Price-to-earnings (P/E)", "Share price divided by profit per share. A P/E of 30 means investors pay $30 for every $1 of annual profit."),
    ("ps", "Price-to-sales", "Market value divided by annual revenue. It's used for companies that don't yet make steady profits."),
    ("runrate", "Run-rate revenue", "A recent short period of revenue scaled up to a year, for example one month times twelve. It flatters fast-growing companies and is not an audited number."),
    ("ttm", "TTM (trailing twelve months)", "The total for the most recent twelve months, whatever the fiscal calendar."),
    ("nrr", "Net revenue retention", "How much this year's revenue from last year's customers compares with what they paid a year ago. Anthropic's definition counts any customer that paid at least $1, which inflates the figure against a tiny base."),
    ("csp", "Cloud marketplaces (CSPs)", "Amazon, Google and Microsoft resell Claude through their own cloud platforms. They collect the money, keep a fee, and pass the rest to Anthropic. These sales were 48% of revenue in the first half of 2026."),
    ("grossnet", "Gross vs. net revenue", "Booking the full price a customer pays (gross) versus only the part the company keeps after a reseller's cut (net). Anthropic books cloud-marketplace sales gross and counts the cloud's fee as an expense."),
    ("pbc", "Public benefit corporation", "A company legally required to balance shareholders' financial interests against a stated public purpose. Anthropic's purpose is \"the responsible development and maintenance of advanced AI for the long-term benefit of humanity.\""),
    ("controlled", "Controlled company", "A Nasdaq status for companies where one person or group controls board elections. It lets the company skip some independence rules for board committees."),
    ("dualclass", "Multi-class shares", "Different classes of stock with different voting rights, so insiders can control votes while selling economic ownership to the public. Alphabet and Meta use simpler versions."),
    ("npa", "Note purchase agreement (NPA)", "A pre-agreed facility under which a partner will lend or invest more money later, usually when conditions are met. Anthropic has undrawn facilities with Google, Amazon and Broadcom."),
    ("pik", "Paid-in-kind (PIK) interest", "Interest paid by adding to the loan balance instead of in cash. Broadcom's $42B facility accrues 9% this way."),
    ("vwap", "VWAP", "Volume-weighted average price: the average price a stock traded at over a period, weighted by how many shares changed hands. Several partner deals convert into stock at the 30-day VWAP."),
    ("financelease", "Finance lease", "A lease that works economically like buying with a loan. The asset and the debt both sit on the balance sheet. Anthropic's Broadcom chip leases are treated this way."),
    ("rpo", "Remaining performance obligations", "Revenue customers have contractually committed to that hasn't been delivered yet. Anthropic's was $10.8B at June 30, 2026, small next to its revenue because most usage is pay-as-you-go."),
    ("tender", "Tender offer", "An offer to buy shares from existing holders, often employees, at a set price before a company is public."),
    ("index", "Index fast entry", "New Nasdaq rules let a very large new listing join the Nasdaq-100 within weeks instead of waiting a season, which forces index funds to buy."),
]

PICK = {
    "agentic AI", "AI accelerators", "API", "closing the loop", "compute multipliers", "frontier AI", "inference",
    "model weights", "open-weight", "pay-for-intelligence / consumption", "pre-training", "post-training",
    "tokens / tokenizer", "Constitutional AI", "mechanistic interpretability", "Mythos / Fable", "Project Glasswing",
    "Claude Code", "Claude Cowork", "Model Context Protocol (MCP)", "Anthropic Direct", "TPU / Trainium / GPU",
    "Responsible Scaling Policy (RSP)", "alignment / misalignment", "recursive self-improvement", "race to the top",
    "supply-chain risk designation (10 U.S.C. § 3252 / FASCSA Section 4713)", "Bartz settlement",
    "Class F common stock / Founder LLC", "Class A / Class N / Class E common stock",
    "Anthropic Public Benefit Fund / Initial Public Benefit Issuance / Public Benefit Issuances", "Donation Matching Plan",
    "SAFE", "redeemable convertible preferred stock / Preferred Stock Conversion", "RSUs / RSU Settlement",
    "zero data retention", "Run-Rate Revenue",
}


def glossary():
    out = [{"key": k, "term": t, "plain": p} for k, t, p in CUSTOM_TERMS]
    for g in load("s1_glossary.json"):
        if g["term"] in PICK:
            out.append({"key": "s1-" + g["term"].split(" ")[0].lower(), "term": g["term"], "plain": g["plain_english"]})
    return out


def main():
    DATA.mkdir(exist_ok=True)
    for name, fn in [("risks", risks), ("experts", experts), ("glossary", glossary)]:
        obj = fn()
        (DATA / f"{name}.json").write_text(json.dumps(obj, ensure_ascii=False, indent=1))
        print(name, len(obj) if isinstance(obj, list) else {k: len(v) for k, v in obj.items()})


if __name__ == "__main__":
    main()
