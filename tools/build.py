#!/usr/bin/env python3
"""Assemble the site from src/ into two self-contained outputs.

dist/index.html     full HTML document (doctype, head, OG/Twitter meta) for any static host
dist/artifact.html  page fragment for claude.ai Artifacts (the host adds doctype/head/body)

Both inline the CSS, the data and the JS so the page is a single file with no
runtime fetches besides Google Fonts and D3 from cdnjs.
"""
import json
import os
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "src"
DATA = ROOT / "data"
DIST = ROOT / "dist"

SITE_URL = "https://hauspost.github.io/anthropic-ipo/"
TITLE = "Anthropic S-1, Annotated"
DESCRIPTION = (
    "An independent, interactive reading of Anthropic's S-1: the growth, the $80.7B loss, "
    "the ~$800B compute bill, who controls the company, and every fight about it, "
    "with each number traced to its page in the filing."
)

D3 = "https://cdnjs.cloudflare.com/ajax/libs/d3/7.9.0/d3.min.js"
FONTS = (
    "https://fonts.googleapis.com/css2?"
    "family=Archivo:ital,wdth,wght@0,62..125,100..900;1,62..125,100..900"
    "&family=Gelasio:ital,wght@0,400..700;1,400..700"
    "&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
)


def load_data():
    bundle = {}
    for path in sorted(DATA.glob("*.json")):
        bundle[path.stem] = json.loads(path.read_text())
    return "window.S1 = " + json.dumps(bundle, ensure_ascii=False, separators=(",", ":")) + ";"


def site_url_js(url):
    return f"<script>window.SITE_URL = {json.dumps(url)};</script>" if url else ""


def assemble():
    body = (SRC / "page.html").read_text()
    css = (SRC / "styles.css").read_text()
    js = "\n".join((SRC / name).read_text() for name in ["util.js", "charts.js", "app.js"])
    data_js = load_data()

    head_common = f"""<title>{TITLE}</title>
<meta name="claude:viewport-fit-sides" content="cover">
<meta name="description" content="{DESCRIPTION}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="{FONTS}">
<style>
{css}
</style>"""

    scripts = f"""<script src="{D3}"></script>
<script>
{data_js}
</script>
<script>
{js}
</script>"""

    social = f"""<meta property="og:type" content="article">
<meta property="og:title" content="The trillion-dollar prospectus, annotated">
<meta property="og:description" content="{DESCRIPTION}">
<meta property="og:url" content="{SITE_URL}">
<meta property="og:image" content="{SITE_URL}og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="The trillion-dollar prospectus, annotated">
<meta name="twitter:description" content="{DESCRIPTION}">
<meta name="twitter:image" content="{SITE_URL}og.png">"""

    artifact_url = os.environ.get("ARTIFACT_URL", "")  # share links inside the sandboxed artifact frame
    full = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
{head_common}
{social}
</head>
<body>
{body}
{scripts}
</body>
</html>
"""
    fragment = f"""{head_common}
{body}
{site_url_js(artifact_url)}
{scripts}
"""
    DIST.mkdir(exist_ok=True)
    (DIST / "index.html").write_text(full)
    (DIST / "artifact.html").write_text(fragment)
    print(f"dist/index.html {len(full)/1024:.0f} KB; dist/artifact.html {len(fragment)/1024:.0f} KB")


if __name__ == "__main__":
    assemble()
