import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function SectionHeading({ title, aside }: { title: string; aside?: ReactNode }) {
  return (
    <Reveal className="mb-12">
      <div data-parallax className="parallax-soft flex items-end gap-6 [--par:18px]">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {aside ? (
          <span className="mb-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            {aside}
          </span>
        ) : null}
        <div className="hairline mb-3 flex-1" aria-hidden />
      </div>
    </Reveal>
  );
}
