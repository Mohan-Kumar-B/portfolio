import { GraduationCap } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="py-28">
      <SectionHeading title="Experience" aside="Roles · Impact" />

      <div className="space-y-8">
        {profile.experience.map((job, i) => (
          <Reveal
            key={job.role + job.company}
            delay={i * 120}
            className="relative border-l border-border pb-14 pl-8 last:pb-0 md:pl-10"
          >
            <span
              className={
                i === 0
                  ? "absolute -left-[5px] top-1 size-2.5 rounded-full bg-primary ring-4 ring-primary/20"
                  : "absolute -left-[5px] top-1 size-2.5 rounded-full bg-muted-foreground/50"
              }
              aria-hidden
            />
            <div
              data-parallax
              className="glass glass-hover hover-glow parallax-soft rounded-3xl p-8 [--par:22px] md:p-10"
            >
              <div className="mb-3 flex flex-wrap justify-between gap-3">
                <h3 className="font-display text-2xl font-bold text-foreground md:text-[1.7rem]">
                  {job.role}
                  <span className="ml-3 font-mono text-sm font-medium text-accent">
                    {job.company}
                  </span>
                </h3>
                <span className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {job.period}
                  {job.location ? ` · ${job.location}` : ""}
                </span>
              </div>
              <ul className="mt-6 space-y-4">
                {job.bullets.map((b) => (
                  <li key={b.slice(0, 32)} className="flex gap-4 text-[0.95rem] leading-relaxed text-muted-foreground md:text-base">
                    <span
                      className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent/70"
                      aria-hidden
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* ---------- Education ---------- */}
      <div id="education" className="mt-20 scroll-mt-28">
        <SectionHeading title="Education" aside="Academics · Scores" />

        <div className="grid gap-6 md:grid-cols-3">
          {profile.education.map((item, i) => (
            <Reveal key={item.qualification} delay={i * 120}>
              <div
                data-parallax
                className="glass glass-hover hover-glow parallax-soft group flex h-full flex-col rounded-3xl p-8 [--par:20px]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-accent transition-transform duration-300 group-hover:scale-110">
                    <GraduationCap className="size-5" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {item.period}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-accent">
                  {item.qualification}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.institution}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground/80">
                  {item.detail}
                </p>

                <div className="mt-auto flex items-baseline gap-2 pt-6">
                  <span className="font-display text-3xl font-bold text-gradient">
                    {item.score}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {item.scoreLabel}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
