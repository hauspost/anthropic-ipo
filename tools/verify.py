#!/usr/bin/env python3
"""Check that every passage we quote from the filing appears on the printed page we cite.

Page references on the site point to Amendment No. 1 (S-1/A, filed 2026-11-02), so text comes from
research/s1a/s1a_pages.json (the amendment converted page by page) and research/s1a/pagemap.json
(0-based index -> printed page).

Sources checked: the .filing slips in src/page.html, the debate cases, the amendment safety box and the
ledger link snippets in data/content.json, the risk-factor quotes in data/risks.json, the deal snippets in
data/compute.json, and every data-snip snippet on a page chip in src/page.html. Headline numbers are also
checked against data/fin.json. The founders' letter is image-only in the filing, so it is checked by hand.
"""
import html
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
pages = json.loads((ROOT / "research/s1a/s1a_pages.json").read_text())
pmap = json.loads((ROOT / "research/s1a/pagemap.json").read_text())


def norm(s):
    s = html.unescape(s)
    s = re.sub(r"\u2014\s+", "\u2014", s)  # line breaks after em dashes in the converted text
    s = re.sub(r"(\w)-\s+(\w)", r"\1-\2", s)  # hyphenated words split across lines
    s = re.sub(r"table of contents", " ", s, flags=re.I)
    s = s.replace("’", "'").replace("‘", "'").replace("“", '"').replace("”", '"')
    s = s.replace("—", "-").replace("–", "-").replace("…", "...")
    return re.sub(r"\s+", " ", s).strip().lower()


# drop the printed page number at the foot of each page so quotes that run over a page break still match
pages = [re.sub(r"\s(?:F-)?\d{1,3}\s*$", " ", p) for p in pages]

by_page = {}
for i, p in enumerate(pages):
    pg = pmap.get(str(i))
    if pg:
        by_page.setdefault(pg, "")
        by_page[pg] += " " + norm(p)
        nxt = pmap.get(str(i + 1))
        # quotes may run over a page break; allow the following page's text
        if i + 1 < len(pages):
            by_page[pg + "+"] = by_page[pg] + " " + norm(pages[i + 1])


def check(label, page, quote):
    q = norm(quote).strip('"').strip()
    parts = [x.strip(" .") for x in re.split(r"\.\.\.|…|\[\.\.\.\]", q) if len(x.strip(" .")) > 12]
    hay = by_page.get(page + "+") or by_page.get(page, "")
    missing = [x for x in parts if x not in hay]
    if missing:
        where = [k for k, v in by_page.items() if not k.endswith("+") and missing[0][:60] in v]
        return f"FAIL {label}: p.{page}: '{missing[0][:80]}…' found on {where[:3] or 'no page'}"
    return None


fails, n = [], 0
page_html = (ROOT / "src/page.html").read_text()
for m in re.finditer(r'<div class="filing" data-pg="([^"]+)">(.*?)</div>', page_html, re.S):
    raw = m.group(2)
    pg, body = m.group(1), re.sub(r"<span class=\"blank\"[^>]*></span>", " ", raw)
    text = re.sub(r"<[^>]+>", " ", re.sub(r"</?(?:mark|strong|em|b|i)>", "", body))
    if not re.fullmatch(r"(F-)?\d+", pg):
        continue
    n += 1
    r = check("page.html slip", pg, text.replace(" .", "."))
    if r and 'class="blank"' not in raw:
        fails.append(r)
    elif r:
        # slips with blanks: check the text on either side of each blank
        for chunk in re.split(r"<span class=\"blank\"[^>]*></span>", m.group(2)):
            chunk = re.sub(r"<[^>]+>", " ", chunk)
            r2 = check("page.html slip (blank-split)", pg, chunk.strip(" ,.;"))
            if r2:
                fails.append(r2)

content = json.loads((ROOT / "data/content.json").read_text())
for c in content["court"]:
    f = c.get("filing")
    if f and re.fullmatch(r"(F-)?\d+", f["page"]):
        n += 1
        r = check("debate " + c["id"], f["page"], f["quote"])
        if r:
            fails.append(r)

for r in json.loads((ROOT / "data/risks.json").read_text()):
    if r.get("quote"):
        n += 1
        res = check("risk " + r["id"], str(r["page"]), r["quote"])
        if res:
            # risk quotes can sit later in a multi-page risk factor; accept any page within +4
            ok = False
            try:
                start = int(r["page"])
                for k in range(start, start + 5):
                    if not check("risk", str(k), r["quote"]):
                        ok = True
                        break
            except ValueError:
                pass
            if not ok:
                fails.append(res)

for sb in content.get("safety_box", []):
    n += 1
    r = check("safety box", sb["page"], sb["quote"])
    if r:
        fails.append(r)

# short snippets: ledger links, page-chip data-snip attributes, compute deal snippets
snips = [("ledger " + k["label"], k["page"], k["snip"]) for k in content["ledger"] if k.get("snip")]
snips += [("chip", m.group(1), html.unescape(m.group(2))) for m in re.finditer(r'(?<!data-doc="s1" )data-pg="([^"]+)" data-snip="([^"]+)"', page_html)]
compute = json.loads((ROOT / "data/compute.json").read_text())
snips += [("deal " + d["id"], d["page"], d["snippet"]) for d in compute["deals"]]
for grp in ("sep30", "after_sep30"):
    snips += [("compute " + d["label"], d["page"], d["snippet"]) for d in compute[grp]]
for label, page, snip in snips:
    n += 1
    hay = by_page.get(page + "+") or by_page.get(page, "")
    if norm(snip) not in hay:
        where = [k for k, v in by_page.items() if not k.endswith("+") and norm(snip) in v]
        fails.append(f"FAIL {label}: p.{page}: snippet '{snip[:60]}' found on {where[:4] or 'no page'}")

# chips that cite the original S-1 (data-doc="s1") are checked against the original filing's text
s1_pages = json.loads((ROOT / "research/s1/s1_pages.json").read_text())
s1_map = json.loads((ROOT / "research/s1/pagemap.json").read_text())
s1_by_page = {}
for i, ptxt in enumerate(s1_pages):
    if s1_map.get(str(i)):
        s1_by_page[s1_map[str(i)]] = s1_by_page.get(s1_map[str(i)], "") + " " + norm(ptxt)
for m in re.finditer(r'data-doc="s1" data-pg="([^"]+)"(?: data-snip="([^"]+)")?', page_html):
    n += 1
    if m.group(1) not in s1_by_page:
        fails.append(f"FAIL original-S-1 chip: no page {m.group(1)}")
    elif m.group(2) and norm(html.unescape(m.group(2))) not in s1_by_page[m.group(1)]:
        fails.append(f"FAIL original-S-1 chip: p.{m.group(1)}: snippet '{m.group(2)[:60]}' not found")

# headline numbers: the quarterly table and nine-month statement in fin.json against the filing text
fin = json.loads((ROOT / "data/fin.json").read_text())
q = fin["quarterly"]
qtext = by_page.get(q["page"], "")
for key, label in (("revenue", "revenue"), ("compute", "compute and infrastructure"), ("operating", "operating income (loss)"), ("net", "net loss")):
    n += 1
    v = q["rows"][key][-1]
    tok = f"({abs(v):,})" if v < 0 else f"{v:,}"
    if tok not in qtext:
        fails.append(f"FAIL fin.json quarterly {key}: {tok} not on p.{q['page']}")
a = fin["annual"]
atext = by_page.get(a["page"], "")
for key in ("revenue", "operating", "fair_value", "net"):
    n += 1
    v = a["rows"][key][-1]
    tok = f"({abs(v):,})" if v < 0 else f"{v:,}"
    if tok not in atext:
        fails.append(f"FAIL fin.json annual {key}: {tok} not on p.{a['page']}")

print(f"checked {n} quotations, snippets and numbers; {len(fails)} problems")
for f in fails:
    print(" ", f)
sys.exit(1 if fails else 0)
