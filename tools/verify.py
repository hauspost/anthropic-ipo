#!/usr/bin/env python3
"""Check that every passage we quote from the S-1 appears on the printed page we cite.

Sources checked: the .filing slips in src/page.html, the debate cases in data/content.json,
and the risk-factor quotes in data/risks.json. Text comes from research/s1/pages.json
(the S-1 converted page by page) and research/s1/pagemap.json (0-based index -> printed page).
The founders' letter is image-only in the filing, so it is checked by hand, not here.
"""
import html
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
pages = json.loads((ROOT / "research/s1/s1_pages.json").read_text())
pmap = json.loads((ROOT / "research/s1/pagemap.json").read_text())


def norm(s):
    s = html.unescape(s)
    s = re.sub(r"\u2014\s+", "\u2014", s)  # line breaks after em dashes in the converted text
    s = s.replace("’", "'").replace("‘", "'").replace("“", '"').replace("”", '"')
    s = s.replace("—", "-").replace("–", "-").replace("…", "...")
    return re.sub(r"\s+", " ", s).strip().lower()


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
    text = re.sub(r"<[^>]+>", " ", body)
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

print(f"checked {n} quotations; {len(fails)} problems")
for f in fails:
    print(" ", f)
sys.exit(1 if fails else 0)
