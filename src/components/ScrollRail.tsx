import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

/**
 * Scroll-driven navigation rail:
 *  - a top progress bar whose width tracks --scroll-p
 *  - a right-hand dot rail that marks the active section and grows with progress
 * Purely presentational; reads scroll position only.
 */
export function ScrollRail() {
  const [active, setActive] = useState(profile.nav[0]?.href ?? "#top");

  useEffect(() => {
    const ids = profile.nav.map((n) => n.href.replace("#", ""));
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n));
    if (!nodes.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Top progress bar */}
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-brand"
        style={{ transform: "scaleX(var(--scroll-p, 0))" }}
        aria-hidden
      />

      {/* Right dot rail */}
      <nav
        aria-label="Section progress"
        className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-4 xl:flex"
      >
        <span className="hairline h-10 w-px" aria-hidden />
        {profile.nav.map((item) => {
          const isActive = active === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-center gap-3"
              aria-current={isActive ? "true" : undefined}
            >
              <span className="pointer-events-none whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {item.label}
              </span>
              <span
                className={`rounded-full transition-all duration-500 ${
                  isActive
                    ? "size-2.5 bg-accent shadow-glow"
                    : "size-1.5 bg-muted-foreground/40 group-hover:bg-accent/70"
                }`}
              />
            </a>
          );
        })}
        <span className="hairline h-10 w-px" aria-hidden />
      </nav>
    </>
  );
}
