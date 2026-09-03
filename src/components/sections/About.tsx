import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TiltCard } from "@/components/TiltCard";

export function About() {
  const dataFlow = [
    {
      number: "01",
      title: "Collect",
      tools: "APIs · Files · Business Data",
    },
    {
      number: "02",
      title: "Transform",
      tools: "Python · SQL · ETL",
    },
    {
      number: "03",
      title: "Store",
      tools: "PostgreSQL · Databases · Cloud",
    },
    {
      number: "04",
      title: "Analyze",
      tools: "Power BI · Excel · Insights",
    },
  ];

  return (
    <section id="about" className="py-28">
      <SectionHeading title="About" aside="Background · Drive · Personality" />

      <div className="grid items-center gap-16 md:grid-cols-2">
        {/* LEFT — About content */}
        <Reveal className="space-y-6">
          <h3 className="font-display text-3xl font-bold tracking-tight text-foreground">
            {profile.about.heading}
          </h3>

          {profile.about.paragraphs.map((p) => (
            <p
              key={p.slice(0, 24)}
              className="leading-relaxed text-muted-foreground"
            >
              {p}
            </p>
          ))}

          <blockquote className="border-l-2 border-accent pl-4 text-sm italic leading-relaxed text-muted-foreground">
            {profile.about.personality}
          </blockquote>

          {/* Facts */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {profile.about.facts.map((fact, i) => (
              <Reveal key={fact.label} delay={i * 120}>
                <div
                  data-parallax
                  className="glass glass-hover parallax-soft group rounded-2xl p-4 [--par:16px]"
                >
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

        {/* RIGHT — Data lifecycle visual */}
        <Reveal delay={200}>
          <TiltCard max={6}>
  <div className="group relative min-h-[600px] overflow-hidden rounded-3xl bg-linear-to-br from-glow-indigo to-glow-plum p-7 shadow-card">
              
              {/* Background grid */}
              <div className="dot-grid absolute inset-0 scale-110 opacity-30 mix-blend-overlay transition-transform duration-700 group-hover:scale-100" />

              {/* Ambient glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

              {/* Header */}
              <div className="relative z-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/60">
                  How I work with data
                </p>

                <h3 className="mt-2 font-display text-2xl font-bold text-primary-foreground">
                  The Data Lifecycle
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-6 text-foreground/65">
                  From raw data to structured information, analysis, and
                  decision-ready insights.
                </p>
              </div>

              {/* Data flow */}
              <div className="relative z-10 mt-8 space-y-3 pb-20">
                {dataFlow.map((step, index) => (
                  <div key={step.number} className="relative">
                    <div className="flex items-center gap-4 rounded-2xl border border-foreground/10 bg-background/10 p-4 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-background/20">
                      
                      {/* Number */}
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-foreground/10 bg-background/10 font-mono text-xs font-bold text-accent">
                        {step.number}
                      </div>

                      {/* Text */}
                      <div className="min-w-0">
                        <p className="font-display text-base font-semibold text-primary-foreground">
                          {step.title}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-foreground/55">
                          {step.tools}
                        </p>
                      </div>
                    </div>

                    {/* Connecting line */}
                    {index < dataFlow.length - 1 && (
                      <div className="ml-9 h-3 w-px bg-foreground/15" />
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom message */}
              <div className="absolute bottom-5 left-7 right-7 border-t border-foreground/10 pt-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50">
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