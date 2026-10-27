/* Chart framework + the individual figures. Every chart:
   - draws at the container's width and redraws on resize,
   - takes colors from CSS custom properties (so light/dark switch without a redraw),
   - has a hover/focus tooltip and a table-view twin. */
const Charts = (() => {
  const { el, bn, pct, mult } = U;
  const registry = [];

  function mount(container, draw) {
    if (!container) return;
    let w = 0;
    const run = () => {
      const nw = Math.round(container.clientWidth);
      if (!nw || nw === w) return;
      w = nw;
      draw(container, w);
    };
    const ro = new ResizeObserver(() => run());
    ro.observe(container);
    registry.push({ container, draw, redraw: () => { w = 0; run(); } });
    run();
  }

  function svgFor(container, width, height) {
    d3.select(container).selectAll("svg").remove();
    return d3.select(container).append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", width).attr("height", height)
      .attr("role", "img");
  }

  // rounded-top bar path (4px data-end, square at baseline)
  function barPath(x, y, w, h, r = 4) {
    if (h <= 0 || w <= 0) return "";
    r = Math.min(r, w / 2, h);
    return `M${x},${y + h}V${y + r}Q${x},${y} ${x + r},${y}H${x + w - r}Q${x + w},${y} ${x + w},${y + r}V${y + h}Z`;
  }
  // rounded-right bar for horizontal bars
  function hbarPath(x, y, w, h, r = 4) {
    if (h <= 0 || w <= 0) return "";
    r = Math.min(r, h / 2, w);
    return `M${x},${y}H${x + w - r}Q${x + w},${y} ${x + w},${y + r}V${y + h - r}Q${x + w},${y + h} ${x + w - r},${y + h}H${x}Z`;
  }

  function tableView(container, columns, rows) {
    const wrap = el("div", { class: "table-view", hidden: true });
    const t = el("table", { class: "data" });
    const thead = el("thead", {}, el("tr", {}, columns.map((c) => el("th", { scope: "col", text: c }))));
    const tbody = el("tbody", {}, rows.map((r) => el("tr", {}, r.map((c, i) => (i === 0 ? el("th", { scope: "row", text: c }) : el("td", { text: c }))))));
    t.append(thead, tbody);
    wrap.append(t);
    container.append(wrap);
    return wrap;
  }

  function redrawAll() { registry.forEach((r) => r.redraw()); }

  return { mount, svgFor, barPath, hbarPath, tableView, redrawAll };
})();
