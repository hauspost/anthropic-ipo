/* Page wiring: renders every section from window.S1 (data/*.json). */
(() => {
  const { $, $$, el, bn, pct, mult } = U;
  const D = window.S1 || {};
  const C = D.content || {};
  const F = D.fin || {};
  const B = (m) => m / 1000; // millions → billions

  /* ---------------- page chips & share buttons ---------------- */
  function wireChips(root = document) {
    $$(".pg[data-pg]", root).forEach((a) => {
      a.textContent = "p." + a.dataset.pg;
      a.href = U.edgarLink(a.dataset.snip);
      a.target = "_blank"; a.rel = "noopener";
      a.title = "Open page " + a.dataset.pg + " of the S-1 on SEC.gov";
    });
    $$(".filing[data-pg]", root).forEach((f) => {
      if (f.querySelector(".cite")) return;
      const first = (f.textContent || "").trim().split(/\s+/).slice(0, 7).join(" ");
      f.append(el("div", { class: "cite" },
        el("span", {}, "Anthropic S-1, ", /^(F-)?\d+$/.test(f.dataset.pg) ? "p. " + f.dataset.pg : f.dataset.pg),
        el("a", { href: U.edgarLink(first), target: "_blank", rel: "noopener" }, "Read in filing ↗")));
    });
  }

  function wireShares(root = document) {
    $$(".figure-actions[data-share]", root).forEach((box) => {
      if (box.childElementCount) return;
      const id = box.dataset.share, text = box.dataset.text || document.title;
      const fig = document.getElementById(id);
      const tableBtn = el("button", { type: "button", class: "btn-ghost", "aria-pressed": "false" }, "Table");
      tableBtn.addEventListener("click", () => {
        const tv = fig && fig.querySelector(".table-view");
        if (!tv) return;
        tv.hidden = !tv.hidden;
        tableBtn.setAttribute("aria-pressed", String(!tv.hidden));
      });
      const link = el("button", { type: "button", class: "btn-ghost", title: "Copy a link to this chart" }, "Copy link");
      link.addEventListener("click", () => U.copyText(U.pageUrl(id)));
      const x = el("a", { class: "btn-ghost", href: U.shareX(text, id), target: "_blank", rel: "noopener", title: "Share on X" }, "Post on X");
      box.append(tableBtn, link, x);
    });
  }

  /* ---------------- hero ledger & findings ---------------- */
  function renderLedger() {
    const box = $("#ledger");
    if (!box || !C.ledger) return;
    C.ledger.forEach((k) => {
      const v = el("div", { class: "ledger-value" });
      if (k.neg) v.append(el("span", { class: "neg", text: k.value })); else v.textContent = k.value;
      box.append(el("div", { class: "ledger-item", role: "listitem" },
        el("span", { class: "ledger-label", text: k.label }), v,
        el("span", { class: "ledger-note" }, k.note, " ", el("a", { class: "pg", "data-pg": k.page, "data-snip": k.snip || "" }))));
    });
  }

  function renderFindings() {
    const ul = $("#findings");
    if (!ul || !C.findings) return;
    C.findings.forEach((f) => {
      ul.append(el("li", {}, el("strong", {}, f.lead), " ", f.text, " ", el("a", { href: "#" + f.to }, f.cta + " →")));
    });
  }

  /* ---------------- quiz ---------------- */
  function initQuiz() {
    const q = $("#quiz");
    if (!q) return;
    const res = $("#quiz-result");
    $$("button", q).forEach((b) => b.addEventListener("click", () => {
      const right = b.dataset.v === "11.6";
      $$("button", q).forEach((o) => { o.dataset.state = o.dataset.v === "11.6" ? "right" : (o === b ? "wrong" : ""); o.disabled = true; });
      res.textContent = (right ? "Right. " : "Not quite. ") + "It was $11.6 billion, up from $787 million a year earlier. In the same quarter of 2025, it had spent $1.39 on compute for every dollar of revenue.";
    }));
  }

  /* =============================================================
     CHARTS
     ============================================================= */
  const fmtB = (v) => (Math.abs(v) >= 100 ? "$" + d3.format(",.0f")(v) + "B" : "$" + d3.format(",.1f")(v) + "B");
  const fmtBs = (v) => (v < 0 ? "−" : "") + fmtB(Math.abs(v));

  function axisStyle(g) { g.attr("class", "axis"); g.select(".domain").remove(); }

  /* --- quarterly revenue --- */
  function chartRevenue() {
    const node = $("#chart-revenue");
    if (!node || !F.quarterly) return;
    const q = F.quarterly;
    const data = q.periods.map((p, i) => ({ p, v: B(q.rows.revenue[i]), est: false }));
    data.push({ p: "Q3 26", v: C.q3_estimate || 16.9, est: true });
    Charts.mount(node, (container, W) => {
      const H = Math.round(Math.min(380, Math.max(260, W * 0.42)));
      const m = { t: 28, r: 8, b: 30, l: 44 };
      const svg = Charts.svgFor(container, W, H);
      svg.attr("aria-label", "Column chart of quarterly revenue from Q1 2025 to Q3 2026");
      const x = d3.scaleBand().domain(data.map((d) => d.p)).range([m.l, W - m.r]).padding(0.28);
      const y = d3.scaleLinear().domain([0, 18]).range([H - m.b, m.t]);
      svg.append("g").attr("class", "grid").attr("transform", `translate(${m.l},0)`).call(d3.axisLeft(y).ticks(6).tickSize(-(W - m.l - m.r)).tickFormat(""));
      svg.append("g").call(d3.axisLeft(y).ticks(6).tickFormat((d) => "$" + d + "B").tickSize(0).tickPadding(8)).attr("transform", `translate(${m.l},0)`).call(axisStyle);
      svg.append("g").attr("transform", `translate(0,${H - m.b})`).call(d3.axisBottom(x).tickSize(0).tickPadding(10).tickFormat((d) => d.replace(" ", " '"))).call(axisStyle);
      svg.append("line").attr("x1", m.l).attr("x2", W - m.r).attr("y1", y(0)).attr("y2", y(0)).style("stroke", "var(--axis)");
      const bw = Math.min(56, x.bandwidth());
      const tip = U.chartTip(container);
      const g = svg.append("g");
      data.forEach((d, i) => {
        const bx = x(d.p) + (x.bandwidth() - bw) / 2;
        const path = g.append("path").attr("d", Charts.barPath(bx, y(d.v), bw, y(0) - y(d.v)))
          .style("fill", d.est ? "var(--wash-1)" : "var(--s1)")
          .style("stroke", d.est ? "var(--s1)" : "none").style("stroke-width", d.est ? 1.5 : 0)
          .style("stroke-dasharray", d.est ? "4 3" : null)
          .attr("tabindex", 0).attr("role", "img").attr("aria-label", `${d.p}: ${fmtB(d.v)}${d.est ? " (estimate)" : ""}`);
        const show = () => tip.show(bx + bw, y(d.v), d.p.replace(" ", " 20"), [{ label: d.est ? "Estimate (ours)" : "Revenue", value: fmtB(d.v), color: "var(--s1)" }]);
        path.on("pointerenter focus", show).on("pointerleave blur", () => tip.hide());
        if (i === 0 || i >= data.length - 3) {
          svg.append("text").attr("x", bx + bw / 2).attr("y", y(d.v) - 8).attr("text-anchor", "middle")
            .attr("class", i === data.length - 2 ? "lbl-strong" : "lbl-muted").text(d.est ? "≈" + fmtB(d.v) : fmtB(d.v));
        }
      });
      const last = data[data.length - 1];
      const lx = x(last.p) + x.bandwidth() / 2;
      if (W > 520) {
        svg.append("text").attr("x", lx).attr("y", y(last.v) - 24).attr("text-anchor", "middle").attr("class", "annot").text("blank in S-1");
      }
    });
    Charts.tableView($("#fig-revenue"), ["Quarter", "Revenue ($B)", "Note"], data.map((d) => [d.p, d.v.toFixed(2), d.est ? "Our estimate: 86 × Q4 2024 revenue of $197M (pp. 63, 183)" : "S-1 p. 157"]));
  }

  /* --- customers --- */
  function chartCustomers() {
    const node = $("#chart-customers");
    if (!node || !F.customers_100k) return;
    const data = F.customers_100k;
    Charts.mount(node, (container, W) => {
      const H = Math.round(Math.min(320, Math.max(220, W * 0.32)));
      const m = { t: 26, r: 8, b: 30, l: 52 };
      const svg = Charts.svgFor(container, W, H);
      svg.attr("aria-label", "Column chart of customers paying at least $100,000 a year");
      const x = d3.scaleBand().domain(data.map((d) => d.label)).range([m.l, W - m.r]).padding(0.3);
      const y = d3.scaleLinear().domain([0, 12500]).range([H - m.b, m.t]);
      svg.append("g").attr("class", "grid").attr("transform", `translate(${m.l},0)`).call(d3.axisLeft(y).ticks(5).tickSize(-(W - m.l - m.r)).tickFormat(""));
      svg.append("g").attr("transform", `translate(${m.l},0)`).call(d3.axisLeft(y).ticks(5).tickFormat(d3.format("~s")).tickSize(0).tickPadding(8)).call(axisStyle);
      svg.append("g").attr("transform", `translate(0,${H - m.b})`).call(d3.axisBottom(x).tickSize(0).tickPadding(10).tickFormat((d, i) => (W < 520 && i % 2 ? "" : d))).call(axisStyle);
      const bw = Math.min(44, x.bandwidth());
      const tip = U.chartTip(container);
      data.forEach((d, i) => {
        const bx = x(d.label) + (x.bandwidth() - bw) / 2;
        const p = svg.append("path").attr("d", Charts.barPath(bx, y(d.value), bw, y(0) - y(d.value))).style("fill", "var(--s3)").attr("tabindex", 0)
          .attr("aria-label", `${d.label}: ${d.approx ? "about " : "more than "}${d3.format(",")(d.value)}`);
        p.on("pointerenter focus", () => tip.show(bx + bw, y(d.value), d.label, [{ label: d.approx ? "About" : "More than", value: d3.format(",")(d.value), color: "var(--s3)" }])).on("pointerleave blur", () => tip.hide());
        if (i === 0 || i === data.length - 1 || i === data.length - 2) {
          svg.append("text").attr("x", bx + bw / 2).attr("y", y(d.value) - 8).attr("text-anchor", "middle").attr("class", i === data.length - 1 ? "lbl-strong" : "lbl-muted").text((d.approx ? "~" : ">") + d3.format(",")(d.value));
        }
      });
      svg.append("line").attr("x1", m.l).attr("x2", W - m.r).attr("y1", y(0)).attr("y2", y(0)).style("stroke", "var(--axis)");
    });
    Charts.tableView($("#fig-customers"), ["Date", "Customers ≥$100K TTM"], data.map((d) => [d.label, (d.approx ? "~" : ">") + d3.format(",")(d.value)]));
  }

  /* --- revenue vs compute + ratio (two aligned panels) --- */
  function chartEfficiency() {
    const node = $("#chart-efficiency");
    if (!node || !F.quarterly) return;
    const q = F.quarterly;
    const data = q.periods.map((p, i) => ({ p, rev: B(q.rows.revenue[i]), cmp: B(q.rows.compute[i]), ratio: q.rows.revenue[i] / q.rows.compute[i] }));
    Charts.mount(node, (container, W) => {
      const H1 = Math.round(Math.min(300, Math.max(210, W * 0.3)));
      const H2 = 150;
      const m = { t: 22, r: 12, b: 26, l: 48 };
      const H = H1 + H2 + 24;
      const svg = Charts.svgFor(container, W, H);
      svg.attr("aria-label", "Revenue and compute spending per quarter, and the ratio of revenue to compute");
      const x0 = d3.scaleBand().domain(data.map((d) => d.p)).range([m.l, W - m.r]).padding(0.22);
      const x1 = d3.scaleBand().domain(["rev", "cmp"]).range([0, x0.bandwidth()]).padding(0.08);
      const y = d3.scaleLinear().domain([0, 12]).range([H1 - m.b, m.t]);
      const tip = U.chartTip(container);
      svg.append("g").attr("class", "grid").attr("transform", `translate(${m.l},0)`).call(d3.axisLeft(y).ticks(4).tickSize(-(W - m.l - m.r)).tickFormat(""));
      svg.append("g").attr("transform", `translate(${m.l},0)`).call(d3.axisLeft(y).ticks(4).tickFormat((d) => "$" + d + "B").tickSize(0).tickPadding(8)).call(axisStyle);
      svg.append("g").attr("transform", `translate(0,${H1 - m.b})`).call(d3.axisBottom(x0).tickSize(0).tickPadding(8).tickFormat((d) => d.replace(" ", " '"))).call(axisStyle);
      data.forEach((d) => {
        ["rev", "cmp"].forEach((k) => {
          const bw = Math.min(24, x1.bandwidth());
          const bx = x0(d.p) + x1(k) + (x1.bandwidth() - bw) / 2;
          const v = d[k];
          svg.append("path").attr("d", Charts.barPath(bx, y(v), bw, y(0) - y(v))).style("fill", k === "rev" ? "var(--s1)" : "var(--s2)");
        });
        const hit = svg.append("rect").attr("x", x0(d.p)).attr("y", m.t).attr("width", x0.bandwidth()).attr("height", H1 - m.b - m.t).style("fill", "transparent").attr("tabindex", 0)
          .attr("aria-label", `${d.p}: revenue ${fmtB(d.rev)}, compute ${fmtB(d.cmp)}, ratio ${d.ratio.toFixed(2)}`);
        hit.on("pointerenter focus", () => tip.show(x0(d.p) + x0.bandwidth(), y(Math.max(d.rev, d.cmp)), d.p.replace(" ", " 20"), [
          { label: "Revenue", value: fmtB(d.rev), color: "var(--s1)" },
          { label: "Compute & infra", value: fmtB(d.cmp), color: "var(--s2)" },
          { label: "Revenue per $1", value: "$" + d.ratio.toFixed(2) },
        ])).on("pointerleave blur", () => tip.hide());
      });
      const lastD = data[data.length - 1];
      svg.append("text").attr("x", x0(lastD.p) + x1("rev") + x1.bandwidth() / 2).attr("y", y(lastD.rev) - 7).attr("text-anchor", "middle").attr("class", "lbl-strong").text(fmtB(lastD.rev));
      svg.append("text").attr("x", x0(lastD.p) + x1("cmp") + x1.bandwidth() / 2).attr("y", y(lastD.cmp) - 7).attr("text-anchor", "middle").attr("class", "lbl-muted").text(fmtB(lastD.cmp));
      // ratio panel
      const top2 = H1 + 24;
      const y2 = d3.scaleLinear().domain([0, 2.4]).range([top2 + H2 - m.b, top2 + 16]);
      svg.append("text").attr("x", m.l).attr("y", top2 + 4).attr("class", "lbl-muted").text("Revenue per $1 of compute");
      svg.append("g").attr("class", "grid").attr("transform", `translate(${m.l},0)`).call(d3.axisLeft(y2).tickValues([0, 1, 2]).tickSize(-(W - m.l - m.r)).tickFormat(""));
      svg.append("g").attr("transform", `translate(${m.l},0)`).call(d3.axisLeft(y2).tickValues([0, 1, 2]).tickFormat((d) => "$" + d.toFixed(2)).tickSize(0).tickPadding(8)).call(axisStyle);
      svg.append("line").attr("x1", m.l).attr("x2", W - m.r).attr("y1", y2(1)).attr("y2", y2(1)).style("stroke", "var(--herring)").style("stroke-width", 1);
      svg.append("text").attr("x", W - m.r).attr("y", y2(1) - 5).attr("text-anchor", "end").attr("class", "annot").text("revenue = compute");
      const cx = (d) => x0(d.p) + x0.bandwidth() / 2;
      svg.append("path").datum(data).attr("d", d3.line().x(cx).y((d) => y2(d.ratio))).style("fill", "none").style("stroke", "var(--ink)").style("stroke-width", 2).style("stroke-linejoin", "round");
      data.forEach((d, i) => {
        svg.append("circle").attr("cx", cx(d)).attr("cy", y2(d.ratio)).attr("r", 4.5).style("fill", "var(--ink)").style("stroke", "var(--bg)").style("stroke-width", 2);
        if (i === 0 || i === data.length - 1 || i === 4) svg.append("text").attr("x", cx(d)).attr("y", y2(d.ratio) - 10).attr("text-anchor", "middle").attr("class", i === data.length - 1 ? "lbl-strong" : "lbl-muted").text("$" + d.ratio.toFixed(2));
      });
    });
    Charts.tableView($("#fig-efficiency"), ["Quarter", "Revenue ($B)", "Compute & infrastructure ($B)", "Revenue per $1 of compute"], data.map((d) => [d.p, d.rev.toFixed(2), d.cmp.toFixed(2), d.ratio.toFixed(2)]));
  }

  /* --- operating margin --- */
  function chartMargin() {
    const node = $("#chart-margin");
    if (!node || !F.quarterly) return;
    const q = F.quarterly;
    const series = {
      gaap: q.periods.map((p, i) => ({ p, v: q.rows.operating[i] / q.rows.revenue[i] })),
      adj: q.periods.map((p, i) => ({ p, v: q.rows.adj_operating[i] / q.rows.revenue[i] })),
    };
    let basis = "gaap";
    const draw = (container, W) => {
      const data = series[basis];
      const H = Math.round(Math.min(300, Math.max(220, W * 0.3)));
      const m = { t: 34, r: 8, b: 26, l: 52 };
      const svg = Charts.svgFor(container, W, H);
      svg.attr("aria-label", `Operating margin by quarter, ${basis === "gaap" ? "GAAP" : "adjusted"}`);
      const x = d3.scaleBand().domain(data.map((d) => d.p)).range([m.l, W - m.r]).padding(0.32);
      const y = d3.scaleLinear().domain([-2.6, 0.35]).range([H - m.b, m.t]);
      svg.append("g").attr("class", "grid").attr("transform", `translate(${m.l},0)`).call(d3.axisLeft(y).tickValues([-2.5, -2, -1.5, -1, -0.5, 0]).tickSize(-(W - m.l - m.r)).tickFormat(""));
      svg.append("g").attr("transform", `translate(${m.l},0)`).call(d3.axisLeft(y).tickValues([-2, -1, 0]).tickFormat((d) => d3.format(".0%")(d)).tickSize(0).tickPadding(8)).call(axisStyle);
      svg.append("g").attr("transform", `translate(0,${m.t - 4})`).call(d3.axisTop(x).tickSize(0).tickPadding(4).tickFormat((d) => d.replace(" ", " '"))).call(axisStyle);
      svg.append("line").attr("x1", m.l).attr("x2", W - m.r).attr("y1", y(0)).attr("y2", y(0)).style("stroke", "var(--ink-3)");
      const bw = Math.min(40, x.bandwidth());
      const tip = U.chartTip(container);
      data.forEach((d) => {
        const bx = x(d.p) + (x.bandwidth() - bw) / 2;
        const top = d.v >= 0 ? y(d.v) : y(0);
        const h = Math.abs(y(d.v) - y(0));
        const r = Math.min(4, h);
        const path = d.v >= 0 ? Charts.barPath(bx, top, bw, h, r)
          : `M${bx},${top}H${bx + bw}V${top + h - r}Q${bx + bw},${top + h} ${bx + bw - r},${top + h}H${bx + r}Q${bx},${top + h} ${bx},${top + h - r}Z`;
        svg.append("path").attr("d", path).style("fill", d.v >= 0 ? "var(--good)" : "var(--bad)").style("opacity", d.v >= 0 ? 1 : 0.85)
          .attr("tabindex", 0).attr("aria-label", `${d.p}: ${pct(d.v)}`)
          .on("pointerenter focus", () => tip.show(bx + bw, d.v >= 0 ? y(d.v) : y(0) + 10, d.p.replace(" ", " 20"), [{ label: basis === "gaap" ? "Operating margin" : "Adjusted op. margin", value: pct(d.v) }]))
          .on("pointerleave blur", () => tip.hide());
        svg.append("text").attr("x", bx + bw / 2).attr("y", d.v >= 0 ? y(d.v) - 6 : y(d.v) + 14).attr("text-anchor", "middle").attr("class", d.v >= 0 ? "lbl-strong" : "lbl-muted").text(pct(d.v));
      });
    };
    Charts.mount(node, draw);
    $$("#fig-margin .seg button").forEach((b) => b.addEventListener("click", () => {
      basis = b.dataset.basis;
      $$("#fig-margin .seg button").forEach((o) => o.setAttribute("aria-pressed", String(o === b)));
      draw(node, node.clientWidth);
    }));
    Charts.tableView($("#fig-margin"), ["Quarter", "Operating margin (GAAP)", "Adjusted operating margin"], q.periods.map((p, i) => [p, pct(series.gaap[i].v), pct(series.adj[i].v)]));
  }

  /* --- waterfall --- */
  function chartWaterfall() {
    const node = $("#chart-waterfall");
    if (!node || !F.annual) return;
    const a = F.annual;
    let col = 4;
    const steps = (c) => {
      const r = a.rows;
      const s = [
        { k: "Revenue", v: r.revenue[c], type: "up" },
        { k: "Compute & infrastructure", v: -r.compute[c], type: "down" },
        { k: "Personnel", v: -r.personnel[c], type: "down" },
        { k: "Sales, marketing & partner fees", v: -r.sales[c], type: "down" },
        { k: "Other operating costs", v: -r.other_opex[c], type: "down" },
      ];
      if (r.bartz[c]) s.push({ k: "Bartz copyright settlement", v: -r.bartz[c], type: "down" });
      s.push({ k: "Operating result", v: r.operating[c], type: "sub" });
      s.push({ k: "Interest income", v: r.interest[c], type: "up" });
      s.push({ k: "Fair-value change on notes", v: r.fair_value[c], type: "fv" });
      s.push({ k: "Other (financing facilities)", v: r.other_income[c], type: "down" });
      s.push({ k: "Income tax", v: -r.tax[c], type: "down" });
      s.push({ k: "Net loss", v: r.net[c], type: "total" });
      let run = 0;
      return s.map((d) => {
        let x0, x1;
        if (d.type === "sub" || d.type === "total") { x0 = 0; x1 = d.v; run = d.v; }
        else { x0 = run; x1 = run + d.v; run = x1; }
        return { ...d, x0: B(x0), x1: B(x1), vb: B(d.v) };
      });
    };
    const draw = (container, W) => {
      const data = steps(col);
      const rowH = 30;
      const labelW = W < 560 ? 0 : 210;
      const m = { t: 10, r: 64, b: 28, l: labelW + 8 };
      const H = data.length * rowH + (W < 560 ? data.length * 16 : 0) + m.t + m.b;
      const svg = Charts.svgFor(container, W, H);
      svg.attr("aria-label", "Waterfall from revenue to net loss");
      const lo = d3.min(data, (d) => Math.min(d.x0, d.x1)), hi = d3.max(data, (d) => Math.max(d.x0, d.x1));
      const x = d3.scaleLinear().domain([Math.min(lo * 1.02, -1), Math.max(hi * 1.05, 1)]).range([m.l, W - m.r]);
      svg.append("g").attr("class", "grid").attr("transform", `translate(0,${m.t})`).call(d3.axisTop(x).ticks(W < 560 ? 4 : 8).tickSize(-(H - m.t - m.b)).tickFormat(""));
      svg.append("g").attr("transform", `translate(0,${H - m.b})`).call(d3.axisBottom(x).ticks(W < 560 ? 4 : 8).tickFormat((d) => (d < 0 ? "−$" : "$") + Math.abs(d) + "B").tickSize(0).tickPadding(8)).call(axisStyle);
      svg.append("line").attr("x1", x(0)).attr("x2", x(0)).attr("y1", m.t).attr("y2", H - m.b).style("stroke", "var(--ink-3)");
      const tip = U.chartTip(container);
      const per = rowH + (W < 560 ? 16 : 0);
      data.forEach((d, i) => {
        const yy = m.t + i * per + (W < 560 ? 16 : 0);
        const lx = Math.min(x(d.x0), x(d.x1)), w = Math.max(1.5, Math.abs(x(d.x1) - x(d.x0)));
        const color = d.type === "up" ? "var(--s1)" : d.type === "fv" ? "var(--herring)" : d.type === "sub" || d.type === "total" ? "var(--ink)" : "var(--s2)";
        svg.append("rect").attr("x", lx).attr("y", yy + 5).attr("width", w).attr("height", rowH - 10).attr("rx", 3).style("fill", color)
          .attr("tabindex", 0).attr("aria-label", `${d.k}: ${fmtBs(d.vb)}`)
          .on("pointerenter focus", () => tip.show(lx + w, yy, d.k, [{ label: a.periods[col], value: fmtBs(d.vb) }]))
          .on("pointerleave blur", () => tip.hide());
        if (labelW) svg.append("text").attr("x", m.l - 10).attr("y", yy + rowH / 2 + 4).attr("text-anchor", "end").attr("class", d.type === "total" || d.type === "sub" || d.type === "fv" ? "lbl-strong" : "").text(d.k);
        else svg.append("text").attr("x", m.l).attr("y", yy - 2).attr("class", d.type === "total" || d.type === "fv" ? "lbl-strong" : "lbl-muted").text(d.k);
        const endX = Math.max(x(d.x0), x(d.x1));
        const startX = Math.min(x(d.x0), x(d.x1));
        const labelRight = endX + 6 + 52 < W;
        svg.append("text").attr("x", labelRight ? endX + 6 : startX - 6).attr("y", yy + rowH / 2 + 4).attr("text-anchor", labelRight ? "start" : "end")
          .attr("class", d.type === "fv" ? "annot" : d.type === "total" ? "lbl-strong" : "lbl-muted").text(fmtBs(d.vb));
        if (i < data.length - 1 && d.type !== "total") {
          const nx = x(d.x1);
          svg.append("line").attr("x1", nx).attr("x2", nx).attr("y1", yy + rowH - 5).attr("y2", yy + per + 5 + (W < 560 ? 0 : 0)).style("stroke", "var(--rule-2)").style("stroke-width", 1);
        }
      });
    };
    Charts.mount(node, draw);
    $$("#fig-waterfall .seg button").forEach((b) => b.addEventListener("click", () => {
      col = +b.dataset.period;
      $$("#fig-waterfall .seg button").forEach((o) => o.setAttribute("aria-pressed", String(o === b)));
      draw(node, node.clientWidth);
    }));
    const h1 = steps(4);
    const rows = steps(2).map((d) => { const o = h1.find((s) => s.k === d.k); return [d.k, fmtBs(d.vb), o ? fmtBs(o.vb) : "—"]; });
    Charts.tableView($("#fig-waterfall"), ["Line", "FY 2025", "H1 2026"], rows);
  }

  /* --- commitment ladder --- */
  function chartLadder() {
    const node = $("#chart-ladder");
    const cd = D.compute;
    if (!node || !cd) return;
    const segs = [
      { k: "Purchase commitments at June 30", v: 265.6, c: "var(--s2)", pg: "F-58" },
      { k: "Leases signed, not started (June 30)", v: 321.4, c: "var(--s2)", pg: "F-35" },
      { k: "Running leases", v: 2.1, c: "var(--s2)", pg: "F-35" },
      { k: "New long-term deals after June 30", v: 245, c: "var(--s4)", pg: "F-65" },
      { k: "Short-term minimums after June 30", v: 21, c: "var(--s4)", pg: "F-65" },
      { k: "Estimated: extra TPUs 2028–31 (midpoint)", v: 137.5, c: "var(--rule-2)", pg: "170", est: true },
      { k: "Estimated: AMD systems", v: 20, c: "var(--rule-2)", pg: "171", est: true },
    ];
    const total = d3.sum(segs, (d) => d.v);
    const rows = [
      { label: "Committed to compute", segs },
      { label: "Cash and short-term investments (June 30)", segs: [{ k: "Cash and short-term investments", v: 131.7, c: "var(--s1)", pg: "161" }] },
      { label: "Revenue, last four quarters to June 30", segs: [{ k: "Revenue Q3 2025 – Q2 2026", v: 19.7, c: "var(--s1)", pg: "157" }] },
    ];
    Charts.mount(node, (container, W) => {
      const narrow = W < 560;
      const m = { t: 8, r: 70, b: 28, l: 8 };
      const rowH = narrow ? 64 : 58;
      const H = rows.length * rowH + m.t + m.b + 30;
      const svg = Charts.svgFor(container, W, H);
      svg.attr("aria-label", "Stacked bar of compute commitments compared with cash and revenue");
      const x = d3.scaleLinear().domain([0, 1050]).range([m.l, W - m.r]);
      svg.append("g").attr("class", "grid").attr("transform", `translate(0,${m.t})`).call(d3.axisTop(x).ticks(narrow ? 4 : 7).tickSize(-(rows.length * rowH)).tickFormat(""));
      svg.append("g").attr("transform", `translate(0,${m.t + rows.length * rowH})`).call(d3.axisBottom(x).ticks(narrow ? 4 : 7).tickFormat((d) => "$" + d + "B").tickSize(0).tickPadding(8)).call(axisStyle);
      const tip = U.chartTip(container);
      rows.forEach((r, ri) => {
        const yy = m.t + ri * rowH;
        svg.append("text").attr("x", m.l).attr("y", yy + 14).attr("class", ri === 0 ? "lbl-strong" : "").text(r.label);
        let run = 0;
        r.segs.forEach((s) => {
          const x0 = x(run), w = Math.max(1, x(run + s.v) - x(run) - (r.segs.length > 1 ? 2 : 0));
          const bar = svg.append("rect").attr("x", x0).attr("y", yy + 22).attr("width", w).attr("height", rowH - 34).attr("rx", 3).style("fill", s.c)
            .attr("tabindex", 0).attr("aria-label", `${s.k}: $${s.v}B, S-1 p. ${s.pg}`);
          if (s.est) bar.style("fill", "var(--rule-2)").style("opacity", 0.8);
          bar.on("pointerenter focus", () => tip.show(x0 + w, yy + 20, s.k, [{ label: "S-1 p. " + s.pg, value: "$" + s.v + "B" }])).on("pointerleave blur", () => tip.hide());
          run += s.v;
        });
        const lbl = ri === 0 ? `≈$${Math.round(total)}B` : `$${r.segs[0].v}B`;
        svg.append("text").attr("x", x(run) + 6).attr("y", yy + 22 + (rowH - 34) / 2 + 4).attr("class", "lbl-strong").text(lbl);
      });
      const signed = 855.1;
      const ys = m.t + 22;
      svg.append("line").attr("x1", x(signed)).attr("x2", x(signed)).attr("y1", ys - 6).attr("y2", ys + rowH - 28).style("stroke", "var(--ink)").style("stroke-width", 1.5);
      svg.append("text").attr("x", x(signed) - 4).attr("y", ys - 9).attr("text-anchor", "end").attr("class", "annot").text(narrow ? "signed ≈$855B" : "signed minimums ≈ $855B │ estimates →");
    });
    Charts.tableView($("#fig-ladder"), ["Component", "$ billions", "S-1 page"], segs.map((s) => [s.k, s.v.toFixed(1), s.pg]).concat([["Total including estimates", total.toFixed(1), ""], ["Cash and short-term investments, June 30", "131.7", "161"], ["Revenue, four quarters to June 30", "19.7", "157"]]));
  }

  /* --- named deals --- */
  function chartDeals() {
    const node = $("#chart-deals");
    const cd = D.compute;
    if (!node || !cd) return;
    const data = cd.deals.slice().sort((a, b) => b.amount - a.amount);
    const color = (d) => (d.amount_type === "fixed" ? "var(--s2)" : d.amount_type === "up_to" ? "var(--s4)" : "var(--rule-2)");
    Charts.mount(node, (container, W) => {
      const narrow = W < 560;
      const labelW = narrow ? 0 : 200;
      const rowH = narrow ? 46 : 34;
      const m = { t: 6, r: 74, b: 26, l: labelW + 8 };
      const H = data.length * rowH + m.t + m.b;
      const svg = Charts.svgFor(container, W, H);
      svg.attr("aria-label", "Bar chart of named compute deals");
      const x = d3.scaleLinear().domain([0, 170]).range([m.l, W - m.r]);
      svg.append("g").attr("class", "grid").attr("transform", `translate(0,${m.t})`).call(d3.axisTop(x).ticks(narrow ? 3 : 6).tickSize(-(H - m.t - m.b)).tickFormat(""));
      svg.append("g").attr("transform", `translate(0,${H - m.b})`).call(d3.axisBottom(x).ticks(narrow ? 3 : 6).tickFormat((d) => "$" + d + "B").tickSize(0).tickPadding(8)).call(axisStyle);
      const tip = U.chartTip(container);
      data.forEach((d, i) => {
        const yy = m.t + i * rowH;
        const by = narrow ? yy + 18 : yy + 6;
        const bh = narrow ? rowH - 24 : rowH - 12;
        if (labelW) svg.append("text").attr("x", m.l - 10).attr("y", yy + rowH / 2 + 4).attr("text-anchor", "end").text(d.partner);
        else svg.append("text").attr("x", m.l).attr("y", yy + 13).attr("class", "lbl-muted").text(d.partner);
        const w = x(d.amount_low || d.amount) - x(0);
        const bar = svg.append("path").attr("d", Charts.hbarPath(x(0), by, w, bh)).style("fill", color(d)).attr("tabindex", 0)
          .attr("aria-label", `${d.partner}: ${d.amount_low ? "$" + d.amount_low + "–" + d.amount_high + "B" : "$" + d.amount + "B"} (${d.basis})`);
        if (d.amount_high) {
          svg.append("rect").attr("x", x(d.amount_low) + 2).attr("y", by).attr("width", x(d.amount_high) - x(d.amount_low) - 2).attr("height", bh).attr("rx", 3).style("fill", "none").style("stroke", "var(--rule-2)").style("stroke-dasharray", "3 3");
        }
        const label = d.amount_high ? `$${d.amount_low}–${d.amount_high}B` : (d.amount_type === "up_to" ? "up to " : "") + "$" + d.amount + "B";
        svg.append("text").attr("x", x(d.amount_high || d.amount) + 6).attr("y", by + bh / 2 + 4).attr("class", "lbl-strong").text(label);
        bar.on("pointerenter focus", () => {
          tip.show(x(d.amount_high || d.amount), by, d.partner, [{ label: d.basis, value: label }, { label: d.what, value: "" }, { label: d.cancel, value: "" }, { label: `${d.start}–${d.end}`, value: "p. " + d.page }]);
        }).on("pointerleave blur", () => tip.hide());
      });
    });
    Charts.tableView($("#fig-deals"), ["Partner", "Amount ($B)", "Type", "Term", "Cancellation", "Page"], data.map((d) => [d.partner, d.amount_high ? `${d.amount_low}–${d.amount_high}` : String(d.amount), d.basis, `${d.start}–${d.end}`, d.cancel, d.page]));
  }

  /* --- drafts --- */
  function chartDrafts() {
    const node = $("#chart-drafts");
    const cd = D.compute;
    if (!node || !cd) return;
    const data = cd.drafts_post_june30;
    Charts.mount(node, (container, W) => {
      const H = 220, m = { t: 26, r: 8, b: 40, l: 48 };
      const svg = Charts.svgFor(container, W, H);
      svg.attr("aria-label", "Column chart of commitments signed after June 30 by draft");
      const x = d3.scaleBand().domain(data.map((d) => d.date)).range([m.l, Math.min(W - m.r, m.l + 520)]).padding(0.35);
      const y = d3.scaleLinear().domain([0, 260]).range([H - m.b, m.t]);
      svg.append("g").attr("class", "grid").attr("transform", `translate(${m.l},0)`).call(d3.axisLeft(y).ticks(4).tickSize(-(x.range()[1] - m.l)).tickFormat(""));
      svg.append("g").attr("transform", `translate(${m.l},0)`).call(d3.axisLeft(y).ticks(4).tickFormat((d) => "$" + d + "B").tickSize(0).tickPadding(8)).call(axisStyle);
      const fmtDate = d3.timeFormat("%b %-d");
      svg.append("g").attr("transform", `translate(0,${H - m.b})`).call(d3.axisBottom(x).tickSize(0).tickPadding(8).tickFormat((d) => fmtDate(new Date(d + "T12:00:00")))).call(axisStyle);
      data.forEach((d, i) => {
        svg.append("text").attr("x", x(d.date) + x.bandwidth() / 2).attr("y", H - 8).attr("text-anchor", "middle").attr("class", "lbl-muted").text(d.draft);
        const bw = Math.min(48, x.bandwidth()), bx = x(d.date) + (x.bandwidth() - bw) / 2;
        svg.append("path").attr("d", Charts.barPath(bx, y(d.value), bw, y(0) - y(d.value))).style("fill", i === data.length - 1 ? "var(--s2)" : "var(--wash-2)").style("stroke", "var(--s2)").style("stroke-width", i === data.length - 1 ? 0 : 1);
        svg.append("text").attr("x", bx + bw / 2).attr("y", y(d.value) - 7).attr("text-anchor", "middle").attr("class", i === data.length - 1 ? "lbl-strong" : "lbl-muted").text("$" + d.value + "B");
      });
    });
    Charts.tableView($("#fig-drafts"), ["Version", "Date", "Commitments signed after June 30 ($B)"], data.map((d) => [d.draft, d.date, String(d.value)]));
  }

  /* --- can they pay? simulator --- */
  const SIM_YEARS = d3.range(2026, 2037);
  const SHOW_FROM = 2027;
  function schedule(includeOptional) {
    const deals = [
      { k: "Broadcom", amt: 161.2, s: [2026, 7], e: [2031, 12] },
      { k: "Google", amt: 114.5, s: [2026, 4], e: [2033, 7] },
      { k: "Amazon", amt: 110.0, s: [2026, 5], e: [2036, 4] },
      { k: "Microsoft", amt: 44.9, s: [2026, 11], e: [2033, 5] },
      { k: "Nscale", amt: 44.6, s: [2027, 1], e: [2033, 12] },
      { k: "Lambda", amt: 41.3, s: [2027, 1], e: [2034, 12] },
      { k: "Other signed (unnamed)", amt: 218.1, s: [2027, 1], e: [2040, 12] },
    ];
    const opt = [
      { k: "Extra TPUs (estimate)", amt: 137.5, s: [2028, 1], e: [2031, 12] },
      { k: "AMD (estimate)", amt: 20.0, s: [2027, 1], e: [2031, 12] },
    ];
    const byYear = new Map(SIM_YEARS.map((y) => [y, 0]));
    const add = (d) => {
      const months = (d.e[0] - d.s[0]) * 12 + (d.e[1] - d.s[1]) + 1;
      const per = d.amt / months;
      for (let i = 0; i < months; i++) {
        const yr = d.s[0] + Math.floor((d.s[1] - 1 + i) / 12);
        if (byYear.has(yr)) byYear.set(yr, byYear.get(yr) + per);
      }
    };
    deals.forEach(add);
    // SpaceXAI: ramp Aug–Nov 2026, then ~$3.1B a month from Dec 2026; cancelable after Mar 2027
    const spacex = [];
    for (let mth = 8; mth <= 11; mth++) spacex.push([2026, 1.45]);
    for (let i = 0; i < 37; i++) spacex.push([2026 + Math.floor((11 + i) / 12), 3.1]);
    spacex.forEach(([yr, v], i) => {
      const isCancelable = i >= 8; // after March 2027
      if (!includeOptional && isCancelable) return;
      if (byYear.has(yr)) byYear.set(yr, byYear.get(yr) + v);
    });
    if (includeOptional) opt.forEach(add);
    return SIM_YEARS.map((y) => ({ y, v: byYear.get(y) }));
  }

  function initSim() {
    const node = $("#chart-sim");
    if (!node) return;
    const st = { g1: 1.5, eff: 2.0, inc: true };
    const base2026 = C.rev2026_base || 55;
    const model = () => {
      const sch = schedule(st.inc);
      let rev = base2026, g = st.g1;
      const out = sch.map((d, i) => {
        if (i > 0) { rev = rev * (1 + g); g = Math.max(0.05, g / 2); }
        const afford = rev / st.eff;
        return { y: d.y, contracted: d.v, rev, afford, gap: Math.max(0, d.v - afford) };
      });
      return out;
    };
    const draw = (container, W) => {
      const data = model().filter((d) => d.y >= SHOW_FROM);
      const H = Math.round(Math.min(340, Math.max(240, W * 0.36)));
      const m = { t: 18, r: 12, b: 26, l: 52 };
      const svg = Charts.svgFor(container, W, H);
      svg.attr("aria-label", "Contracted compute by year versus affordable compute");
      const x = d3.scaleBand().domain(data.map((d) => d.y)).range([m.l, W - m.r]).padding(0.25);
      const ymax = Math.max(200, d3.max(data, (d) => Math.max(d.contracted, Math.min(d.afford, 400))) * 1.1);
      const y = d3.scaleLinear().domain([0, ymax]).range([H - m.b, m.t]).clamp(true);
      svg.append("g").attr("class", "grid").attr("transform", `translate(${m.l},0)`).call(d3.axisLeft(y).ticks(5).tickSize(-(W - m.l - m.r)).tickFormat(""));
      svg.append("g").attr("transform", `translate(${m.l},0)`).call(d3.axisLeft(y).ticks(5).tickFormat((d) => "$" + d + "B").tickSize(0).tickPadding(8)).call(axisStyle);
      svg.append("g").attr("transform", `translate(0,${H - m.b})`).call(d3.axisBottom(x).tickSize(0).tickPadding(8).tickFormat((d, i) => (W < 520 && i % 2 ? "" : "'" + String(d).slice(2)))).call(axisStyle);
      const tip = U.chartTip(container);
      const bw = Math.min(30, x.bandwidth());
      data.forEach((d) => {
        const bx = x(d.y) + (x.bandwidth() - bw) / 2;
        svg.append("path").attr("d", Charts.barPath(bx, y(d.contracted), bw, y(0) - y(d.contracted))).style("fill", "var(--s2)");
        if (d.gap > 0.5) {
          const gTop = y(d.contracted), gBot = y(Math.min(d.contracted, d.afford));
          svg.append("rect").attr("x", bx - 3).attr("y", gTop).attr("width", 3).attr("height", Math.max(0, gBot - gTop)).style("fill", "var(--herring)");
        }
        svg.append("rect").attr("x", x(d.y)).attr("y", m.t).attr("width", x.bandwidth()).attr("height", H - m.b - m.t).style("fill", "transparent").attr("tabindex", 0)
          .attr("aria-label", `${d.y}: contracted ${fmtB(d.contracted)}, affordable ${fmtB(d.afford)}`)
          .on("pointerenter focus", () => tip.show(x(d.y) + x.bandwidth(), y(Math.max(d.contracted, Math.min(d.afford, ymax))), String(d.y), [
            { label: "Contracted compute", value: fmtB(d.contracted), color: "var(--s2)" },
            { label: "Revenue (scenario)", value: fmtB(d.rev) },
            { label: "Affordable compute", value: fmtB(d.afford), color: "var(--s1)" },
            { label: "Shortfall", value: d.gap > 0.5 ? fmtB(d.gap) : "none" },
          ])).on("pointerleave blur", () => tip.hide());
      });
      const cx = (d) => x(d.y) + x.bandwidth() / 2;
      svg.append("path").datum(data).attr("d", d3.line().x(cx).y((d) => y(Math.min(d.afford, ymax)))).style("fill", "none").style("stroke", "var(--s1)").style("stroke-width", 2.5);
      data.forEach((d) => svg.append("circle").attr("cx", cx(d)).attr("cy", y(Math.min(d.afford, ymax))).attr("r", 4).style("fill", "var(--s1)").style("stroke", "var(--bg)").style("stroke-width", 2));
      update(data);
    };
    const update = (data) => {
      const by = (yr) => data.find((d) => d.y === yr);
      const gap5 = d3.sum(data.filter((d) => d.y >= 2027 && d.y <= 2031), (d) => d.gap);
      const firstGap = data.find((d) => d.gap > 0.5);
      const firstOk = data.find((d) => d.y >= 2027 && d.gap <= 0.5);
      const ro = $("#sim-readout");
      ro.replaceChildren(
        readout("2027 revenue in this scenario", fmtB(by(2027).rev), `vs. ~$${base2026}B estimated for 2026`),
        readout("Compute as a share of 2027 revenue", pct(by(2027).contracted / by(2027).rev), "Q2 2026 actual: 48%"),
        readout("Total shortfall, 2027–2031", gap5 > 0.5 ? fmtB(gap5) : "None", "Contracted compute above what revenue carries"),
        readout("Cash and short-term investments", "$131.7B", "June 30, 2026, before IPO proceeds"),
      );
      const v = $("#sim-verdict");
      if (gap5 < 0.5) { v.dataset.tone = "good"; v.textContent = "In this scenario revenue carries the whole contracted bill at your efficiency level. The commitments look like a good bet."; }
      else if (gap5 <= 131.7) { v.dataset.tone = ""; v.textContent = `Revenue falls short of the bill by about ${fmtB(gap5)} through 2031${firstOk ? `, and catches up by ${firstOk.y}` : ""}. The June cash pile would cover that, before counting IPO proceeds or partner facilities.`; }
      else { v.dataset.tone = "bad"; v.textContent = `Revenue falls short by about ${fmtB(gap5)} through 2031, more than the $131.7B cash pile. Anthropic would need the IPO money, partner facilities, new capital or to cancel what it can${firstGap ? `, starting in ${firstGap.y}` : ""}.`; }
    };
    const readout = (l, v, n) => el("div", {}, el("div", { class: "r-label", text: l }), el("div", { class: "r-value", text: v }), el("div", { class: "r-note", text: n }));
    Charts.mount(node, draw);
    const g1 = $("#sim-g1"), eff = $("#sim-eff");
    const sync = () => {
      st.g1 = +g1.value / 100; st.eff = +eff.value;
      $("#sim-g1-out").textContent = g1.value + "%";
      $("#sim-eff-out").textContent = st.eff.toFixed(1) + "×";
      draw(node, node.clientWidth);
    };
    g1.addEventListener("input", sync); eff.addEventListener("input", sync);
    $$("#sim-cancel button").forEach((b) => b.addEventListener("click", () => {
      st.inc = b.dataset.inc === "1";
      $$("#sim-cancel button").forEach((o) => o.setAttribute("aria-pressed", String(o === b)));
      draw(node, node.clientWidth);
    }));
    sync();
    const sch = schedule(true);
    Charts.tableView($("#fig-sim"), ["Year", "Contracted compute, our spread ($B)"], sch.filter((d) => d.y >= SHOW_FROM).map((d) => [String(d.y), d.v.toFixed(1)]));
  }

  /* --- money circle (butterfly) --- */
  function chartCircle() {
    const node = $("#chart-circle");
    const partners = C.partners;
    if (!node || !partners) return;
    let active = partners[0].id;
    const detail = $("#partner-detail");
    const showDetail = (p) => {
      detail.replaceChildren(
        el("h4", { text: p.name }),
        el("div", { class: "roles" }, p.roles.map((r) => el("span", { class: "tag", text: r }))),
        el("ul", {}, p.points.map((t) => el("li", { text: t }))),
        el("p", { class: "src" }, "S-1 pages: " + p.pages));
    };
    const draw = (container, W) => {
      const narrow = W < 620;
      const rowH = narrow ? 66 : 40;
      const labelW = narrow ? 0 : 120;
      const m = { t: 30, r: 70, b: 24, l: 70 };
      const H = partners.length * rowH + m.t + m.b;
      const svg = Charts.svgFor(container, W, H);
      svg.attr("aria-label", "Money invested by each partner compared with compute owed to that partner");
      const mid = labelW ? m.l + (W - m.l - m.r) * 0.32 : m.l + (W - m.l - m.r) * 0.3;
      const left0 = narrow ? 8 : m.l, right1 = narrow ? W - 8 : W - m.r;
      const xl = d3.scaleLinear().domain([0, 45]).range([mid - (labelW ? labelW / 2 : 0), left0]);
      const xr = d3.scaleLinear().domain([0, 270]).range([mid + (labelW ? labelW / 2 : 0), right1]);
      svg.append("text").attr("x", xl(0)).attr("y", 14).attr("text-anchor", "end").attr("class", "lbl-muted").text("← invested / lent");
      svg.append("text").attr("x", xr(0)).attr("y", 14).attr("class", "lbl-muted").text("owed for compute →");
      const tip = U.chartTip(container);
      partners.forEach((p, i) => {
        const yy = m.t + i * rowH;
        const by = narrow ? yy + 36 : yy + 8, bh = narrow ? rowH - 44 : rowH - 16;
        const g = svg.append("g").attr("class", "partner-row").attr("tabindex", 0).attr("role", "button").attr("aria-pressed", String(p.id === active))
          .attr("aria-label", `${p.name}: invested ${p.in_label}, owed ${p.out_label}`).style("cursor", "pointer");
        g.append("rect").attr("x", 0).attr("y", yy).attr("width", W).attr("height", rowH).style("fill", p.id === active ? "var(--slip)" : "transparent");
        const lblX = labelW ? mid : m.l;
        g.append("text").attr("x", narrow ? 8 : lblX).attr("y", narrow ? yy + 14 : by + bh / 2 + 4).attr("text-anchor", narrow ? "start" : "middle").attr("class", "lbl-strong").text(p.name);
        if (p.in > 0) g.append("rect").attr("x", xl(p.in)).attr("y", by).attr("width", xl(0) - xl(p.in)).attr("height", bh).attr("rx", 3).style("fill", "var(--s1)");
        if (p.in_facility > 0) g.append("rect").attr("x", xl(p.in + p.in_facility)).attr("y", by).attr("width", xl(p.in) - xl(p.in + p.in_facility) - 2).attr("height", bh).attr("rx", 3).style("fill", "var(--wash-1)").style("stroke", "var(--s1)").style("stroke-width", 1);
        if (narrow) g.append("text").attr("x", 8).attr("y", yy + 29).attr("class", "lbl-muted").style("font-size", "11px").text("In: " + p.in_label + " · Owed: " + p.out_label);
        else g.append("text").attr("x", xl(p.in + (p.in_facility || 0)) - 6).attr("y", by + bh / 2 + 4).attr("text-anchor", "end").attr("class", "lbl-muted").text(p.in_label);
        if (p.out > 0) g.append("path").attr("d", Charts.hbarPath(xr(0), by, xr(p.out) - xr(0), bh)).style("fill", "var(--s2)");
        if (p.out_est > 0) g.append("rect").attr("x", xr(p.out) + 2).attr("y", by).attr("width", xr(p.out + p.out_est) - xr(p.out) - 2).attr("height", bh).attr("rx", 3).style("fill", "none").style("stroke", "var(--s2)").style("stroke-dasharray", "3 3");
        if (!narrow) g.append("text").attr("x", xr(p.out + (p.out_est || 0)) + 6).attr("y", by + bh / 2 + 4).attr("class", "lbl-strong").text(p.out_label);
        const pick = () => { active = p.id; showDetail(p); draw(container, W); };
        g.on("click", pick).on("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(); } })
          .on("pointerenter", () => tip.show(xr(0), yy, p.name, [{ label: "Invested or lent", value: p.in_label, color: "var(--s1)" }, { label: "Owed for compute", value: p.out_label, color: "var(--s2)" }]))
          .on("pointerleave", () => tip.hide());
      });
      svg.append("line").attr("x1", xl(0)).attr("x2", xl(0)).attr("y1", m.t - 4).attr("y2", H - m.b).style("stroke", "var(--axis)");
      svg.append("line").attr("x1", xr(0)).attr("x2", xr(0)).attr("y1", m.t - 4).attr("y2", H - m.b).style("stroke", "var(--axis)");
    };
    Charts.mount(node, draw);
    showDetail(partners[0]);
    Charts.tableView($("#fig-circle"), ["Partner", "Invested or lent", "Still to come (facilities)", "Owed for compute", "Roles"], partners.map((p) => [p.name, p.in_label, p.in_facility ? "$" + p.in_facility + "B" : "—", p.out_label, p.roles.join(", ")]));
  }

  /* --- control: three stacked bars --- */
  function chartControl() {
    const node = $("#chart-control");
    const ctl = C.control;
    if (!node || !ctl) return;
    Charts.mount(node, (container, W) => {
      const narrow = W < 600;
      const rowH = narrow ? 92 : 78;
      const m = { t: 6, r: 8, b: 8, l: 8 };
      const H = ctl.length * rowH + m.t + m.b;
      const svg = Charts.svgFor(container, W, H);
      svg.attr("aria-label", "Stacked bars comparing economic ownership, voting power and board seats");
      const x = d3.scaleLinear().domain([0, 1]).range([m.l, W - m.r]);
      const tip = U.chartTip(container);
      ctl.forEach((row, ri) => {
        const yy = m.t + ri * rowH;
        svg.append("text").attr("x", m.l).attr("y", yy + 14).attr("class", "lbl-strong").text(row.label);
        let run = 0;
        row.parts.forEach((p) => {
          const x0 = x(run), w = Math.max(0, x(run + p.v) - x(run) - 2);
          const r = svg.append("rect").attr("x", x0).attr("y", yy + 22).attr("width", w).attr("height", 28).attr("rx", 3).style("fill", `var(--${p.c})`).attr("tabindex", 0)
            .attr("aria-label", `${row.label}: ${p.k} ${p.label}`);
          r.on("pointerenter focus", () => tip.show(x0 + w / 2, yy + 20, p.k, [{ label: row.label, value: p.label }])).on("pointerleave blur", () => tip.hide());
          const fits = w > p.k.length * 6.2 + 12;
          if (fits) svg.append("text").attr("x", x0 + 6).attr("y", yy + 40).style("fill", p.c === "s4" ? "#0b0b0b" : "#ffffff").style("font-size", "12px").style("font-weight", 650).text(p.k);
          if (w > 30) svg.append("text").attr("x", x0 + 2).attr("y", yy + 66).attr("class", "lbl-muted").text(p.label);
          run += p.v;
        });
      });
    });
    const keyBox = el("div", { class: "legend control-key" });
    [["s7", "Co-founders"], ["s3", "Long-Term Benefit Trust"], ["s2", "Amazon"], ["s4", "Google"], ["s5", "Public benefit fund"], ["s1", "Everyone else (Class A)"]].forEach(([c, k]) => { const i = el("i"); i.style.background = `var(--${c})`; keyBox.append(el("span", {}, i, k)); });
    node.after(keyBox);
    Charts.tableView($("#fig-control"), ["Measure", "Holder", "Share"], ctl.flatMap((row) => row.parts.map((p) => [row.label, p.k, p.label])));
  }

  function initScenarios() {
    const sc = C.scenarios;
    const box = $("#scenarios");
    if (!sc || !box) return;
    const btns = $(".scen-buttons", box), body = $("#scen-body");
    const show = (s) => {
      $$("button", btns).forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.id === s.id)));
      body.replaceChildren(el("p", { class: "scen-result" }, el("strong", { text: s.result })), el("p", { text: s.explain }), el("p", { class: "src" }, "S-1 ", el("a", { class: "pg", "data-pg": s.page })));
      wireChips(body);
    };
    sc.forEach((s, i) => {
      const b = el("button", { type: "button", "data-id": s.id, "aria-pressed": "false" }, s.label);
      b.addEventListener("click", () => show(s));
      btns.append(b);
    });
    show(sc[0]);
  }

  /* --- letter --- */
  function renderLetter() {
    const box = $("#letter-body");
    if (!box || !C.letter) return;
    C.letter.forEach((p) => {
      box.append(el("div", { class: "letter-item has-rail" },
        el("p", { class: "note side" }, el("b", { text: p.tag + ". " }), p.note),
        el("div", { class: "filing", "data-pg": "founders' letter, inside cover, page " + p.pg }, el("p", { text: p.quote }))));
    });
  }

  /* --- valuation lab --- */
  function initValuation() {
    const node = $("#chart-val");
    if (!node) return;
    const comps = (C.revenue_comps || []).slice();
    const ids = ["cap", "year", "margin", "pe", "r", "d"];
    const st = {};
    const FD_SHARES = C.fd_shares || 16.94; // billions, derived
    const BASE = C.run_rate_base || 46.2;
    const calc = () => {
      const V = st.cap / 1000; // $T → in $T
      const n = st.year, r = st.r / 100, d = st.d / 100, mgn = st.margin / 100, pe = st.pe;
      const reqRev = (st.cap * Math.pow(1 + r, n) * Math.pow(1 + d, n)) / (pe * mgn); // $B
      const cagr = Math.pow(reqRev / BASE, 1 / n) - 1;
      return { reqRev, cagr, price: st.cap / FD_SHARES, ps: st.cap / BASE };
    };
    const draw = (container, W) => {
      const res = calc();
      const list = comps.concat([{ name: `Anthropic needs (${2026 + st.year})`, rev: res.reqRev, req: true }, { name: "Anthropic today (Q2 2026 × 4)", rev: BASE, now: true }]).sort((a, b) => b.rev - a.rev);
      const narrow = W < 560;
      const labelW = narrow ? 0 : 220;
      const rowH = narrow ? 42 : 30;
      const m = { t: 6, r: 70, b: 26, l: labelW + 8 };
      const H = list.length * rowH + m.t + m.b;
      const svg = Charts.svgFor(container, W, H);
      svg.attr("aria-label", "Required revenue compared with today's largest companies");
      const x = d3.scaleLinear().domain([0, Math.max(800, res.reqRev * 1.08)]).range([m.l, W - m.r]);
      svg.append("g").attr("class", "grid").attr("transform", `translate(0,${m.t})`).call(d3.axisTop(x).ticks(narrow ? 3 : 6).tickSize(-(H - m.t - m.b)).tickFormat(""));
      svg.append("g").attr("transform", `translate(0,${H - m.b})`).call(d3.axisBottom(x).ticks(narrow ? 3 : 6).tickFormat((v) => "$" + v + "B").tickSize(0).tickPadding(8)).call(axisStyle);
      list.forEach((c, i) => {
        const yy = m.t + i * rowH;
        const by = narrow ? yy + 16 : yy + 5, bh = narrow ? rowH - 20 : rowH - 10;
        if (labelW) svg.append("text").attr("x", m.l - 10).attr("y", by + bh / 2 + 4).attr("text-anchor", "end").attr("class", c.req ? "annot" : c.now ? "lbl-strong" : "").text(c.name);
        else svg.append("text").attr("x", m.l).attr("y", yy + 12).attr("class", c.req ? "annot" : "lbl-muted").text(c.name);
        const w = Math.max(2, x(Math.min(c.rev, x.domain()[1])) - x(0));
        svg.append("path").attr("d", Charts.hbarPath(x(0), by, w, bh)).style("fill", c.req ? "var(--herring)" : c.now ? "var(--s1)" : "var(--rule-2)");
        svg.append("text").attr("x", x(0) + w + 6).attr("y", by + bh / 2 + 4).attr("class", c.req ? "annot" : "lbl-muted").text("$" + d3.format(",.0f")(c.rev) + "B" + (c.fy ? " · " + c.fy : ""));
      });
      const ro = $("#val-readout");
      ro.replaceChildren(
        el("div", {}, el("div", { class: "r-label", text: "Implied price per share" }), el("div", { class: "r-value", text: "$" + res.price.toFixed(0) }), el("div", { class: "r-note", text: "On ~16.9B fully diluted shares (our estimate)" })),
        el("div", {}, el("div", { class: "r-label", text: "Price ÷ today's revenue run-rate" }), el("div", { class: "r-value", text: res.ps.toFixed(0) + "×" }), el("div", { class: "r-note", text: "Q2 2026 revenue × 4 = $46.2B" })),
        el("div", {}, el("div", { class: "r-label", text: `Revenue needed in ${2026 + st.year}` }), el("div", { class: "r-value", text: "$" + d3.format(",.0f")(res.reqRev) + "B" }), el("div", { class: "r-note", text: "To earn your return at those margins and multiples" })),
        el("div", {}, el("div", { class: "r-label", text: "Growth needed per year" }), el("div", { class: "r-value", text: pct(res.cagr) }), el("div", { class: "r-note", text: "From the $46.2B run-rate" })),
      );
      const top = comps.slice().sort((a, b) => b.rev - a.rev)[0];
      const v = $("#val-verdict");
      const bigger = comps.filter((c) => c.rev < res.reqRev).map((c) => c.short || c.name);
      v.textContent = res.reqRev > (top ? top.rev : 1e9)
        ? `At these settings Anthropic would need more revenue in ${2026 + st.year} than any company earns today.`
        : bigger.length
          ? `At these settings Anthropic would need more revenue in ${2026 + st.year} than ${listJoin(bigger)} ${bigger.length > 1 ? "each earn" : "earns"} today, growing ${pct(res.cagr)} a year to get there.`
          : `At these settings Anthropic would need ${fmtB(res.reqRev)} of revenue in ${2026 + st.year}, growing ${pct(res.cagr)} a year to get there.`;
    };
    const sync = () => {
      ids.forEach((k) => { st[k] = +$("#val-" + k).value; });
      $("#val-cap-out").textContent = st.cap >= 1000 ? "$" + (st.cap / 1000).toFixed(st.cap % 1000 ? 2 : 1).replace(/0$/, "") + "T" : "$" + st.cap + "B";
      $("#val-year-out").textContent = st.year + " (" + (2026 + st.year) + ")";
      $("#val-margin-out").textContent = st.margin + "%";
      $("#val-pe-out").textContent = st.pe + "×";
      $("#val-r-out").textContent = st.r + "%";
      $("#val-d-out").textContent = st.d + "%";
      draw(node, node.clientWidth);
    };
    ids.forEach((k) => $("#val-" + k).addEventListener("input", sync));
    ids.forEach((k) => { st[k] = +$("#val-" + k).value; });
    Charts.mount(node, draw);
    sync();
    if (C.val_context) $("#val-context").append(...C.val_context.map((t) => el("p", { html: t })));
    if (C.val_after) $("#val-after").append(...C.val_after.map((t) => el("p", { html: t })));
    wireChips($("#valuation"));
  }

  const listJoin = (a) => (a.length <= 1 ? a.join("") : a.slice(0, -1).join(", ") + " and " + a[a.length - 1]);

  /* --- risk explorer --- */
  function initRisks() {
    const list = $("#rf-list");
    const rank = { unusual: 0, "ai-specific": 1, boilerplate: 2 };
    const R = (D.risks || []).slice().sort((a, b) => (rank[a.novelty] ?? 3) - (rank[b.novelty] ?? 3));
    if (!list || !R.length) return;
    const cats = C.risk_categories || {};
    const st = { q: "", n: "all", c: new Set(), all: false };
    const hl = $("#risk-highlights");
    if (C.risk_highlights && hl) {
      hl.append(el("ul", {}, C.risk_highlights.map((h) => el("li", {}, el("strong", { text: h.lead + " " }), h.text, " ", el("a", { class: "pg", "data-pg": h.page }), " ", el("button", { type: "button", class: "btn-ghost rf-jump", "data-q": h.q }, "Find it")))));
      $$(".rf-jump", hl).forEach((b) => b.addEventListener("click", () => { $("#rf-search").value = b.dataset.q; st.q = b.dataset.q.toLowerCase(); st.all = true; render(); $("#rf-search").scrollIntoView({ behavior: "smooth", block: "center" }); }));
    }
    const counts = d3.rollup(R, (v) => v.length, (d) => d.category);
    const catBox = $("#rf-cats");
    Array.from(counts.entries()).sort((a, b) => b[1] - a[1]).forEach(([k, n]) => {
      const b = el("button", { type: "button", class: "chip", "aria-pressed": "false", "data-c": k }, cats[k] || k, el("span", { class: "n", text: n }));
      b.addEventListener("click", () => { if (st.c.has(k)) st.c.delete(k); else st.c.add(k); b.setAttribute("aria-pressed", String(st.c.has(k))); render(); });
      catBox.append(b);
    });
    $("#rf-search").addEventListener("input", (e) => { st.q = e.target.value.trim().toLowerCase(); render(); });
    $$("#rf-novelty button").forEach((b) => b.addEventListener("click", () => { st.n = b.dataset.n; $$("#rf-novelty button").forEach((o) => o.setAttribute("aria-pressed", String(o === b))); render(); }));
    $("#rf-more").addEventListener("click", () => { st.all = !st.all; render(); });
    const novLabel = { unusual: "Unprecedented", "ai-specific": "AI-specific", boilerplate: "Standard" };
    function render() {
      const items = R.filter((r) => (st.n === "all" || r.novelty === st.n) && (!st.c.size || st.c.has(r.category)) &&
        (!st.q || (r.heading + " " + r.plain_english + " " + r.quote + " " + (r.named_entities || []).join(" ")).toLowerCase().includes(st.q)));
      $("#rf-count").textContent = `${items.length} of ${R.length}`;
      const shown = st.all ? items : items.slice(0, 12);
      list.replaceChildren(...shown.map((r) => {
        const det = el("details", { class: "rf" },
          el("summary", {}, el("span", { class: "rf-h", text: r.heading }),
            el("span", { class: "rf-meta" }, el("span", { class: "tag " + (r.novelty === "unusual" ? "unusual" : r.novelty === "ai-specific" ? "ai" : ""), text: novLabel[r.novelty] || r.novelty }), el("a", { class: "pg", "data-pg": r.page }))),
          el("div", { class: "rf-body" }, el("p", { text: r.plain_english }), r.quote ? el("blockquote", { text: "“" + r.quote + "”" }) : null,
            el("p", { class: "src" }, (cats[r.category] || r.category) + (r.numbers ? " · " + r.numbers : ""))));
        return det;
      }));
      wireChips(list);
      $("#rf-more").hidden = items.length <= 12;
      $("#rf-more").textContent = st.all ? "Show fewer" : `Show all ${items.length}`;
    }
    render();
  }

  /* --- controversy court --- */
  function initCourt() {
    const cases = C.court;
    const idx = $("#court-index"), box = $("#court-case");
    if (!cases || !idx) return;
    const show = (c, focus) => {
      $$("button", idx).forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.id === c.id)));
      const pin = el("span", { class: "meter-pin" }); pin.style.left = (c.lean * 100) + "%";
      const side = (title, color, items) => el("div", { class: "case-col" },
        el("h4", {}, el("span", { class: "dot", style: `background:var(--${color})` }), title),
        el("ul", {}, items.map((it) => el("li", {}, it.text, " ", el("span", { class: "who" }, "— ", it.url ? el("a", { href: it.url, target: "_blank", rel: "noopener" }, it.who) : it.who)))));
      const card = el("article", { class: "case", id: "case-" + c.id },
        el("div", { class: "case-head" }, el("h3", { text: c.title }), el("p", { text: c.framing })),
        el("div", { class: "case-cols" }, side("The case against", "s2", c.critics), side("The case for", "s1", c.defenders)),
        c.filing ? el("div", { class: "case-filing" }, el("div", { class: "filing", "data-pg": c.filing.page }, el("p", { text: c.filing.quote }))) : null,
        el("div", { class: "case-read" }, el("h4", { text: "Our read" }), el("p", { text: c.read }),
          el("div", { class: "meter" }, el("span", { text: c.left || "Overblown" }), el("span", { class: "meter-track", role: "img", "aria-label": `Our assessment: ${Math.round(c.lean * 100)}% toward ${c.right || "serious"}` }, pin), el("span", { text: c.right || "Serious" }))),
        el("div", { class: "figure-foot" }, el("span", { text: "Debate " + (cases.indexOf(c) + 1) + " of " + cases.length }), el("span", { class: "figure-actions", "data-share": "case-" + c.id, "data-text": c.share || c.title })));
      box.replaceChildren(card);
      wireChips(card); wireShares(card);
      if (focus) card.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    cases.forEach((c) => {
      const b = el("button", { type: "button", "data-id": c.id, "aria-pressed": "false", role: "tab" }, c.short);
      b.addEventListener("click", () => show(c));
      idx.append(b);
    });
    const fromHash = cases.find((c) => location.hash === "#case-" + c.id);
    show(fromHash || cases[0], !!fromHash);
  }

  /* --- experts --- */
  function initExperts() {
    const E = D.experts;
    const box = $("#expert-list");
    if (!E || !box) return;
    const st = { s: "all", f: "all" };
    const stanceOf = (e) => (e.stance === "bull" ? "bull" : e.stance === "bear" ? "bear" : "mixed");
    const stanceLabel = { bull: "Bullish", bear: "Bearish", mixed: "Mixed / neutral" };
    const verLabel = { verbatim_primary: "quote, original source", verbatim_secondary: "quote, via report", verbatim_x_index: "post on X", verbatim_snippet: "quote, unverified snippet", paraphrase: "paraphrase" };
    const render = () => {
      const items = E.experts.filter((e) => (st.s === "all" || stanceOf(e) === st.s) && (st.f === "all" || e.field === st.f));
      box.replaceChildren(...items.map((e) => el("article", { class: "expert" },
        el("div", { class: "expert-top" }, el("div", {}, el("div", { class: "expert-name", text: e.name }), el("div", { class: "expert-aff", text: e.affiliation })), el("span", { class: "stance " + stanceOf(e), text: stanceLabel[stanceOf(e)] })),
        e.quote_type === "paraphrase" ? el("p", { class: "sum", text: e.summary }) : el("q", { text: e.quote }),
        e.quote_type === "paraphrase" ? null : el("p", { class: "sum", text: e.summary }),
        el("p", { class: "src" }, el("a", { href: e.url, target: "_blank", rel: "noopener" }, e.outlet), " · ", e.date, " · ", verLabel[e.quote_type] || ""))));
    };
    $$("#ex-stance button").forEach((b) => b.addEventListener("click", () => { st.s = b.dataset.s; $$("#ex-stance button").forEach((o) => o.setAttribute("aria-pressed", String(o === b))); render(); }));
    $$("#ex-field button").forEach((b) => b.addEventListener("click", () => { st.f = b.dataset.f; $$("#ex-field button").forEach((o) => o.setAttribute("aria-pressed", String(o === b))); render(); }));
    render();
    const args = $("#args");
    if (E.bull_args && args) {
      const col = (title, cls, list) => el("div", { class: "args-col" }, el("h3", { class: cls, text: title }), el("ol", {}, list.map((a) => el("li", {}, el("strong", { text: a.title + ". " }), a.argument, " ", el("span", { class: "who", text: "(" + a.attributed_to.join(", ") + ")" })))));
      args.append(col("The five strongest bull arguments", "bull", E.bull_args), col("The five strongest bear arguments", "bear", E.bear_args));
    }
  }

  /* --- rounds (log scale) --- */
  function chartRounds() {
    const node = $("#chart-rounds");
    const R = C.rounds;
    if (!node || !R || !R.length) { const f = $("#fig-rounds"); if (f) f.hidden = true; return; }
    Charts.mount(node, (container, W) => {
      const H = Math.round(Math.min(340, Math.max(240, W * 0.34)));
      const m = { t: 24, r: 24, b: 30, l: 56 };
      const svg = Charts.svgFor(container, W, H);
      svg.attr("aria-label", "Anthropic's private valuation by funding round on a log scale");
      const parse = (s) => new Date(s + "T12:00:00");
      const x = d3.scaleTime().domain([parse("2021-01-01"), parse("2026-12-31")]).range([m.l, W - m.r]);
      const y = d3.scaleLog().domain([0.3, 3000]).range([H - m.b, m.t]);
      svg.append("g").attr("class", "grid").attr("transform", `translate(${m.l},0)`).call(d3.axisLeft(y).tickValues([1, 10, 100, 1000]).tickSize(-(W - m.l - m.r)).tickFormat(""));
      svg.append("g").attr("transform", `translate(${m.l},0)`).call(d3.axisLeft(y).tickValues([1, 10, 100, 1000]).tickFormat((d) => (d >= 1000 ? "$" + d / 1000 + "T" : "$" + d + "B")).tickSize(0).tickPadding(8)).call(axisStyle);
      svg.append("g").attr("transform", `translate(0,${H - m.b})`).call(d3.axisBottom(x).ticks(d3.timeYear.every(1)).tickFormat(d3.timeFormat("%Y")).tickSize(0).tickPadding(8)).call(axisStyle);
      const tip = U.chartTip(container);
      const pts = R.filter((r) => r.post_money && !r.derived);
      const talk = R.filter((r) => r.derived);
      if (talk.length) {
        const tx = x(parse(talk[0].date)), lo = d3.min(talk, (t) => t.post_money), hi = d3.max(talk, (t) => t.post_money);
        svg.append("rect").attr("x", tx - 5).attr("y", y(hi)).attr("width", 10).attr("height", Math.max(4, y(lo) - y(hi))).attr("rx", 5).style("fill", "var(--wash-1)").style("stroke", "var(--s1)").style("stroke-dasharray", "3 2");
        svg.append("text").attr("x", tx - 10).attr("y", y(hi) - 6).attr("text-anchor", "end").attr("class", "annot").text("IPO talk $1.5–2T");
        const last = pts[pts.length - 1];
        svg.append("line").attr("x1", x(parse(last.date))).attr("x2", tx).attr("y1", y(last.post_money)).attr("y2", y(last.post_money)).style("stroke", "var(--s1)").style("stroke-width", 2).style("stroke-dasharray", "3 3");
      }
      svg.append("path").datum(pts).attr("d", d3.line().x((d) => x(parse(d.date))).y((d) => y(d.post_money)).curve(d3.curveStepAfter)).style("fill", "none").style("stroke", "var(--s1)").style("stroke-width", 2);
      pts.forEach((d, i) => {
        const cx = x(parse(d.date)), cy = y(d.post_money);
        svg.append("circle").attr("cx", cx).attr("cy", cy).attr("r", 5).style("fill", d.derived ? "var(--bg)" : "var(--s1)").style("stroke", d.derived ? "var(--s1)" : "var(--bg)").style("stroke-width", 2)
          .attr("tabindex", 0).attr("aria-label", `${d.round}, ${d.date}: $${d.post_money}B`)
          .on("pointerenter focus", () => tip.show(cx, cy, d.round + " · " + d.date, [{ label: d.derived ? "Implied (our estimate)" : "Post-money (reported)", value: d.post_money >= 1000 ? "$" + (d.post_money / 1000).toFixed(2) + "T" : "$" + d.post_money + "B" }, { label: d.source || "", value: "" }]))
          .on("pointerleave blur", () => tip.hide());
        if (i === pts.length - 1 || i === 0 || W > 640) svg.append("text").attr("x", cx - 8).attr("y", cy - 10).attr("text-anchor", "end").attr("class", i === pts.length - 1 ? "lbl-strong" : "lbl-muted").text(d.post_money >= 1000 ? "$" + (d.post_money / 1000).toFixed(1) + "T" : "$" + d.post_money + "B");
      });
    });
    Charts.tableView($("#fig-rounds"), ["Round", "Date", "Post-money ($B)", "Source"], R.map((r) => [r.round, r.date, r.post_money ? String(r.post_money) : "—", r.source || ""]));
  }

  /* --- timeline + drafts notes --- */
  function renderTimeline() {
    const ol = $("#timeline-list");
    if (!ol || !C.timeline) return;
    C.timeline.forEach((t) => ol.append(el("li", { class: t.key ? "key" : "" }, el("div", { class: "when", text: t.when }), el("div", { class: "what", text: t.what }), t.why ? el("div", { class: "why", text: t.why }) : null)));
    if (C.drafts_notes) $("#drafts-notes").append(el("h3", { text: "What changed between the drafts" }), el("ul", {}, C.drafts_notes.map((n) => el("li", { html: n }))));
    wireChips($("#timeline"));
  }

  /* --- draft tracker --- */
  function renderTracker() {
    const box = $("#tracker");
    if (!box || !C.draft_rows) return;
    const t = el("table", { class: "tracker" });
    t.append(el("thead", {}, el("tr", {}, el("th", { scope: "col", text: "Item" }), C.draft_versions.map((v) => el("th", { scope: "col", text: v })))));
    t.append(el("tbody", {}, C.draft_rows.map((r) => el("tr", {}, el("th", { scope: "row", text: r.k }),
      r.v.map((v, i) => el("td", { class: v ? (i === 0 ? "" : "chg") : "same", text: v || "·" }))))));
    box.append(t);
  }

  /* --- lock-up staircase --- */
  function chartLockup() {
    const node = $("#chart-lockup");
    const L = C.lockup;
    if (!node || !L) return;
    Charts.mount(node, (container, W) => {
      const H = Math.round(Math.min(340, Math.max(240, W * 0.34)));
      const m = { t: 16, r: 16, b: 30, l: 44 };
      const svg = Charts.svgFor(container, W, H);
      svg.attr("aria-label", "Cumulative share of locked-up holdings released over the year after the IPO");
      const x = d3.scaleLinear().domain([0, 370]).range([m.l, W - m.r]);
      const y = d3.scaleLinear().domain([0, 1]).range([H - m.b, m.t]);
      svg.append("g").attr("class", "grid").attr("transform", `translate(${m.l},0)`).call(d3.axisLeft(y).ticks(4).tickSize(-(W - m.l - m.r)).tickFormat(""));
      svg.append("g").attr("transform", `translate(${m.l},0)`).call(d3.axisLeft(y).ticks(4).tickFormat(d3.format(".0%")).tickSize(0).tickPadding(8)).call(axisStyle);
      svg.append("g").attr("transform", `translate(0,${H - m.b})`).call(d3.axisBottom(x).tickValues([0, 90, 180, 270, 365]).tickFormat((d) => "day " + d).tickSize(0).tickPadding(8)).call(axisStyle);
      const tip = U.chartTip(container);
      L.groups.forEach((g) => {
        const pts = [[0, 0]].concat(g.steps.map((s) => [s[0], s[1]]));
        if (pts[pts.length - 1][0] < 365) pts.push([365, pts[pts.length - 1][1]]);
        svg.append("path").datum(pts).attr("d", d3.line().x((d) => x(d[0])).y((d) => y(d[1])).curve(d3.curveStepAfter)).style("fill", "none").style("stroke", `var(--${g.c})`).style("stroke-width", 2);
        g.steps.forEach((s) => svg.append("circle").attr("cx", x(s[0])).attr("cy", y(s[1])).attr("r", 3.5).style("fill", `var(--${g.c})`).style("stroke", "var(--bg)").style("stroke-width", 1.5)
          .attr("tabindex", 0).attr("aria-label", `${g.k}: ${d3.format(".1%")(s[1])} released by day ${s[0]}`)
          .on("pointerenter focus", () => tip.show(x(s[0]), y(s[1]), `Day ${s[0]}${s[2] ? " · " + s[2] : ""}`, [{ label: g.k, value: d3.format(".1%")(s[1]), color: `var(--${g.c})` }]))
          .on("pointerleave blur", () => tip.hide()));
      });
      L.marks.forEach((mk) => {
        svg.append("line").attr("x1", x(mk.d)).attr("x2", x(mk.d)).attr("y1", m.t).attr("y2", H - m.b).style("stroke", "var(--rule-2)");
        if (W > 560) svg.append("text").attr("x", x(mk.d) + 4).attr("y", m.t + 10).attr("class", "lbl-muted").style("font-size", "11px").text(mk.k);
      });
    });
    Charts.tableView($("#fig-lockup"), ["Group", "Day", "Cumulative released", "Trigger"], L.groups.flatMap((g) => g.steps.map((s) => [g.k, String(s[0]), d3.format(".1%")(s[1]), s[2] || ""])));
  }

  /* --- glossary --- */
  function renderGlossary() {
    const G = D.glossary;
    const dl = $("#gloss");
    if (!G || !dl) return;
    G.filter((g) => g.show !== false).forEach((g) => dl.append(el("div", {}, el("dt", { text: g.term }), el("dd", { text: g.plain }))));
    U.initGlossary(G);
  }

  function renderSources() {
    const box = $("#sources");
    if (!box || !C.sources) return;
    box.append(el("h3", { text: "Outside sources cited" }), el("ul", {}, C.sources.map((s) => el("li", {}, el("a", { href: s.url, target: "_blank", rel: "noopener" }, s.title), " · ", s.outlet, s.date ? " · " + s.date : ""))));
  }

  /* --- nav: progress, active section, S-1 page counter --- */
  function initNav() {
    const prog = $("#progress"), counter = $("#pagecount");
    const secs = $$("main .section[id]");
    const links = new Map($$(".topnav a").map((a) => [a.getAttribute("href").slice(1), a]));
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      prog.style.width = (p * 100).toFixed(1) + "%";
      let cur = null;
      for (const s of secs) { if (s.getBoundingClientRect().top < 120) cur = s; }
      links.forEach((a, id) => a.setAttribute("aria-current", String(cur && cur.id === id)));
      if (counter) counter.textContent = cur && cur.dataset.pages ? "Reading S-1 " + cur.dataset.pages : "S-1 · 421 pages";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    const sp = $("#share-page");
    if (sp) sp.addEventListener("click", () => U.copyText(U.pageUrl()));
    const sx = $("#share-x");
    if (sx) sx.href = U.shareX("Anthropic's 421-page S-1, annotated: the growth, the $80.7B paper loss, the ~$1T compute bill, and who really controls the company.", "");
  }

  /* ---------------- boot ---------------- */
  function boot() {
    U.initTheme();
    renderLedger();
    renderFindings();
    initQuiz();
    chartRevenue(); chartCustomers(); chartEfficiency(); chartMargin(); chartWaterfall();
    chartLadder(); chartDeals(); chartDrafts(); initSim(); chartCircle();
    chartControl(); initScenarios(); renderLetter(); initValuation();
    initRisks(); initCourt(); initExperts(); chartRounds(); renderTimeline(); renderTracker(); chartLockup();
    renderGlossary(); renderSources();
    wireChips(); wireShares(); initNav();
    if (location.hash) { const t = document.getElementById(location.hash.slice(1)); if (t) setTimeout(() => t.scrollIntoView(), 50); }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
