/* FluxLines-inspired vanilla JS adaptation for the static VEXAR site.
   The upstream React component uses React hooks; this version preserves the
   flowing-line look and pointer/click interactions without a React runtime. */
(() => {
  const canvas = document.querySelector("[data-flux-lines]");
  if (!canvas) return;
  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return;

  const colors = ["#ffffff", "#ffffff", "#ffffff"];
  const settings = { glow: 2, rimWidth: 0.2, lineWidth: 1, flowDirection: "down" };
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pointer = { x: -1000, y: -1000, active: false };
  const swirls = [];
  let width = 1, height = 1, dpr = 1, raf = 0, last = 0, time = 0;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw();
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.lineCap = "round";
    const spacing = Math.max(12, height / 42);
    const lineCount = Math.ceil(height / spacing) + 3;
    const flow = settings.flowDirection === "up" ? -1 : 1;

    for (let i = -1; i < lineCount; i++) {
      const baseY = i * spacing + ((time * 12 * flow) % spacing);
      ctx.beginPath();
      let started = false;
      for (let x = -12; x <= width + 12; x += 5) {
        const nx = x / Math.max(1, width);
        const ny = baseY / Math.max(1, height);
        let y = baseY
          + Math.sin(nx * 7.2 + time * 0.48 + i * 0.17) * (13 + spacing * 0.45)
          + Math.sin(nx * 15.5 - time * 0.31 + i * 0.11) * 5
          + Math.sin(nx * 3.1 + time * 0.2) * 15;

        if (pointer.active) {
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.max(0, 1 - dist / 190);
          y += Math.sin(Math.atan2(dy, dx) + time) * influence * 36;
          y += Math.cos(dist * 0.025 - time * 2) * influence * 17;
        }
        for (const swirl of swirls) {
          const dx = x - swirl.x;
          const dy = y - swirl.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.max(0, 1 - dist / (swirl.radius));
          y += Math.sin(Math.atan2(dy, dx) + swirl.age * 2.6) * influence * 32 * (1 - swirl.age);
        }
        if (!started) { ctx.moveTo(x, y); started = true; } else ctx.lineTo(x, y);
      }
      const alpha = 0.11 + 0.14 * (0.5 + 0.5 * Math.sin(i * 0.33 + time * 0.55));
      ctx.strokeStyle = colors[i % colors.length];
      ctx.globalAlpha = alpha;
      ctx.lineWidth = settings.lineWidth;
      ctx.shadowColor = "rgba(255,255,255,.7)";
      ctx.shadowBlur = settings.glow * 2;
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
  }

  function frame(now) {
    raf = 0;
    if (document.hidden) return;
    const dt = last ? Math.min((now - last) / 1000, 0.05) : 1 / 60;
    last = now;
    if (!reduceMotion) time += dt;
    swirls.forEach(s => { s.age += dt / 1.8; });
    while (swirls.length && swirls[0].age >= 1) swirls.shift();
    draw();
    if (!reduceMotion || pointer.active || swirls.length) raf = requestAnimationFrame(frame);
  }

  function wake() {
    if (!raf && !document.hidden) raf = requestAnimationFrame(frame);
  }
  canvas.addEventListener("pointermove", e => {
    const r = canvas.getBoundingClientRect();
    pointer.x = e.clientX - r.left;
    pointer.y = e.clientY - r.top;
    pointer.active = true;
    wake();
  }, { passive: true });
  canvas.addEventListener("pointerleave", () => { pointer.active = false; wake(); });
  canvas.addEventListener("pointerdown", e => {
    const r = canvas.getBoundingClientRect();
    swirls.push({ x: e.clientX - r.left, y: e.clientY - r.top, age: 0, radius: Math.max(160, height * 0.35) });
    wake();
  }, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) { cancelAnimationFrame(raf); raf = 0; last = 0; }
    else wake();
  });
  if ("ResizeObserver" in window) new ResizeObserver(resize).observe(canvas);
  else window.addEventListener("resize", resize);
  resize();
  if (!reduceMotion) wake();
})();