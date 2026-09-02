import { useEffect } from "react";

/**
 * Publishes scroll state to CSS custom properties on <html> so styling stays
 * in the design system:
 *   --scroll-p     0..1  page progress
 *   --scroll-v    -1..1  signed, smoothed scroll velocity
 *   --scroll-vabs  0..1  absolute smoothed velocity
 *
 * Runs on a single rAF loop and only writes when values actually change.
 */
export function useScrollMotion() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    let last = window.scrollY;
    let velocity = 0;
    let progress = 0;
    let frame = 0;
    let tick_count = 0;
    let targets: HTMLElement[] = [];

    const collect = () => {
      targets = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    };
    collect();

    const tick = () => {
      const y = window.scrollY;
      const max = Math.max(1, root.scrollHeight - window.innerHeight);
      const target = Math.min(1, Math.max(0, y / max));
      const raw = Math.min(1, Math.max(-1, (y - last) / 60));

      last = y;
      velocity += (raw - velocity) * 0.12;
      progress += (target - progress) * 0.14;

      root.style.setProperty("--scroll-p", progress.toFixed(4));
      root.style.setProperty("--scroll-v", velocity.toFixed(4));
      root.style.setProperty("--scroll-vabs", Math.abs(velocity).toFixed(4));

      // Element-local parallax: -1 (below viewport) .. 1 (above viewport)
      if (tick_count % 60 === 0) collect();
      tick_count += 1;
      const vh = window.innerHeight;
      for (const el of targets) {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -vh || rect.top > vh * 2) continue;
        const center = rect.top + rect.height / 2;
        const ep = Math.min(1, Math.max(-1, (center - vh / 2) / (vh / 2 + rect.height / 2)));
        el.style.setProperty("--ep", ep.toFixed(4));
        el.style.setProperty("--epabs", Math.abs(ep).toFixed(4));
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      root.style.removeProperty("--scroll-p");
      root.style.removeProperty("--scroll-v");
      root.style.removeProperty("--scroll-vabs");
    };
  }, []);
}
