import { useRef, type PointerEvent } from "react";
import { ArrowDown, ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile, type SocialLink } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";
import { ParticleField } from "@/components/ParticleField";

const ICONS = { mail: Mail, github: Github, linkedin: Linkedin } as const;

function SocialButton({ link, delay }: { link: SocialLink; delay: number }) {
  const Icon = ICONS[link.icon];
  const external = link.icon !== "mail";
  return (
    <a
      href={link.url}
      aria-label={link.label}
      title={link.label}
      style={{ transitionDelay: `${delay}ms` }}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="glass glass-hover group flex size-11 items-center justify-center rounded-xl text-muted-foreground hover:-translate-y-1 hover:text-accent"
    >
      <Icon className="size-4 transition-transform duration-300 group-hover:scale-110" />
    </a>
  );
}

/** Portrait frame that reacts to the pointer: layered parallax + orbiting chips. */
function PortraitStage() {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType === "touch") return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--mx", px.toFixed(3));
    el.style.setProperty("--my", py.toFixed(3));
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mx", "0");
    el.style.setProperty("--my", "0");
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      data-parallax
      className="parallax-soft group relative mx-auto aspect-square w-full max-w-[15rem] [--mx:0] [--my:0] sm:max-w-sm lg:max-w-md xl:max-w-lg [--par:30px]"
      style={{
        perspective: "1000px",
      }}
    >
      {/* Halo */}
      <div
        className="absolute -inset-8 rounded-[3rem] bg-gradient-brand opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-45"
        aria-hidden
      />

      {/* Orbit ring */}
      <div
        className="animate-orbit absolute -inset-4 rounded-[2.5rem] border border-dashed border-accent/25"
        aria-hidden
      />

      {/* Frame */}
      <div
        className="relative h-full overflow-hidden rounded-[2rem] border border-accent/40 bg-secondary/40 shadow-card"
        style={{
          transform:
            "rotateX(calc(var(--my) * -10deg)) rotateY(calc(var(--mx) * 12deg)) translateZ(0)",
          transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <img
          src={profile.portrait}
          alt={profile.portraitAlt}
          className="size-full object-cover transition-transform duration-500"
          style={{
            transform: "scale(1.08) translate(calc(var(--mx) * -14px), calc(var(--my) * -14px))",
          }}
          loading="eager"
        />
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-15 mix-blend-overlay" />
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(28rem 28rem at calc(50% + var(--mx) * 100%) calc(50% + var(--my) * 100%), color-mix(in oklab, var(--accent) 22%, transparent), transparent 60%)",
          }}
          aria-hidden
        />
      </div>

      {/* Floating chips that drift against the pointer */}
     {/* Floating chips — slightly overlapping the portrait frame */}

{/* SQL — overlapping upper-left frame */}
<div
  className="glass absolute left-[-24px] top-[16%] z-30 rounded-2xl px-4 py-2.5 shadow-glow"
  style={{
    transform:
      "translate(calc(var(--mx) * -18px), calc(var(--my) * -14px))",
    transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
  }}
>
  <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
    SQL
  </span>
</div>

{/* Power BI — overlapping upper-right frame */}
<div
  className="glass absolute right-[-24px] top-[30%] z-30 rounded-2xl px-4 py-2.5 shadow-glow"
  style={{
    transform:
      "translate(calc(var(--mx) * 20px), calc(var(--my) * 16px))",
    transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1)",
  }}
>
  <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
    Power BI
  </span>
</div>

{/* Python — overlapping lower-left frame */}
<div
  className="glass absolute left-[-24px] top-[62%] z-30 rounded-2xl px-4 py-2.5 shadow-glow"
  style={{
    transform:
      "translate(calc(var(--mx) * -20px), calc(var(--my) * -16px))",
    transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
  }}
>
  <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
    Python
  </span>
</div>

{/* Cloud — larger box, overlapping bottom-right frame */}
<div
  className="glass absolute -right-6 bottom-[-20px] z-30 rounded-2xl px-5 py-4 shadow-glow"
  style={{
    transform:
      "translate(calc(var(--mx) * 18px), calc(var(--my) * -18px))",
    transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
  }}
>
  <div className="font-display text-2xl font-bold text-accent">
    CLOUD
  </div>

  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
    DATA INFRASTRUCTURE
  </div>
</div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      data-magnetic-scope
      className="relative grid items-center gap-14 pb-28 pt-32 lg:grid-cols-[1.05fr_1fr] lg:pt-40 [&>*]:min-w-0"
    >
      <ParticleField className="pointer-events-none absolute inset-x-[-2rem] inset-y-0 -z-10 h-full w-[calc(100%+4rem)]" />
      <div>
        <Reveal>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-accent">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            {profile.availability}
          </span>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.35em] text-accent">
            Hey there, I'm
          </p>
          <h1 className="mt-3 whitespace-nowrap font-display text-[clamp(2.1rem,6.2vw,4.25rem)] font-bold leading-[1.05] tracking-tight text-foreground">
            {profile.name}
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Turning <span className="font-medium text-foreground">data lifecycle</span> into{" "}
            <span className="font-medium italic text-accent">data to insight</span>.{" "}
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={300} className="mt-12 flex flex-wrap gap-4">
          <Magnetic>
            <a
              href="#projects"
              className="shine group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-glow active:scale-95"
            >
              Explore My Work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="shine inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-8 py-4 font-semibold text-secondary-foreground hover:border-accent/50 hover:shadow-glow active:scale-95"
            >
              <Download className="size-4" />
              Resume
            </a>
          </Magnetic>
        </Reveal>

        <Reveal delay={360} className="mt-8 flex gap-3">
          {profile.socials.map((link, i) => (
            <SocialButton key={link.label} link={link} delay={i * 60} />
          ))}
        </Reveal>

        <Reveal delay={420} className="mt-12 grid max-w-lg grid-cols-3 gap-6">
          {profile.stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={480} className="mt-14">
          <div className="scroll-skew relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
            <div className="flex w-max animate-marquee gap-10">
              {[...profile.marquee, ...profile.marquee, ...profile.marquee, ...profile.marquee].map(
                (skill, i) => (
                  <span
                    key={`${skill}-${i}`}
                    className="flex items-center gap-10 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
                  >
                    {skill}
                    <span className="size-1 rounded-full bg-primary/60" aria-hidden />
                  </span>
                ),
              )}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={250} className="relative order-first block lg:order-none">
        <PortraitStage />
      </Reveal>

      <Reveal delay={560} className="col-span-full hidden justify-center lg:flex">
        <a
          href="#about"
          aria-label="Scroll to about"
          className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-accent hover:text-accent"
        >
          <ArrowDown className="size-4 animate-bounce" />
        </a>
      </Reveal>
    </section>
  );
}
