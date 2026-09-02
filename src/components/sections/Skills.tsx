import { profile, type SkillGroup } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

function SkillPanel({ group, delay }: { group: SkillGroup; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div data-parallax className="glass glass-hover hover-glow parallax-soft h-full rounded-2xl p-6 [--par:18px]">
        <h3 className="mb-6 font-mono text-xs font-bold uppercase tracking-widest text-accent">
          {group.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {group.items.map((item) => (
            <span
              key={item}
              className="cursor-default rounded-lg border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:bg-primary/20 hover:text-accent"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-28">
      <SectionHeading title="Skills" aside="Core stack · Toolkit" />
      <div className="grid gap-6 md:grid-cols-2">
        {profile.skills.map((group, i) => (
          <SkillPanel key={group.title} group={group} delay={i * 110} />
        ))}
      </div>
    </section>
  );
}
