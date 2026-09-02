import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TiltCard } from "@/components/TiltCard";

export function About() {
  return (
    <section id="about" className="py-28">
      <SectionHeading title="About" aside="Background · Drive · Personality" />

      <div className="grid items-center gap-16 md:grid-cols-2">
        <Reveal className="space-y-6">
          <h3 className="font-display text-3xl font-bold tracking-tight text-foreground">
            {profile.about.heading}
          </h3>
          {profile.about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
          <blockquote className="border-l-2 border-accent pl-4 text-sm italic leading-relaxed text-muted-foreground">
            {profile.about.personality}
          </blockquote>

          <div className="grid grid-cols-3 gap-4 pt-4">
            {profile.about.facts.map((fact, i) => (
              <Reveal key={fact.label} delay={i * 120}>
                <div data-parallax className="glass glass-hover parallax-soft group rounded-2xl p-4 [--par:16px]">
                  <div className="font-display text-2xl font-bold text-foreground transition-colors group-hover:text-accent">
                    {fact.value}
                  </div>
                  <div className="mt-1 font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    {fact.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <TiltCard max={6}>
            <div className="group relative aspect-square overflow-hidden rounded-3xl bg-linear-to-br from-glow-indigo to-glow-plum shadow-card">
              <div className="dot-grid absolute inset-0 scale-110 opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-100" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-32 animate-glow rounded-full border border-foreground/20" />
                <div className="absolute size-48 animate-glow rounded-full border border-foreground/10 [animation-delay:1.2s]" />
                <div className="absolute size-64 animate-glow rounded-full border border-foreground/5 [animation-delay:2.4s]" />
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/70">
                  Signal in the noise
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-primary-foreground">
                  Data → Insight → Decision
                </p>
              </div>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
