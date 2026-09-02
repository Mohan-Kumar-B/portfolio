import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollRail } from "@/components/ScrollRail";
import { CursorGlow } from "@/components/CursorGlow";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { profile } from "@/data/portfolio";
import { useScrollMotion } from "@/hooks/use-scroll-motion";

const title = `${profile.name} — ${profile.role} Portfolio`;
const description =
  "Portfolio of Mohan Kumar B, an aspiring data analyst: analytics internships, SQL/Python/Power BI skills, education and contact.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.role,
          email: `mailto:${profile.contact.email}`,
          sameAs: [profile.contact.github.url, profile.contact.linkedin.url],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useScrollMotion();

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Ambient aurora glows — drift with page scroll */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
        <div className="scroll-drift absolute -left-[10%] -top-[20%] size-[60vw] animate-aurora rounded-full bg-glow-violet/15 blur-[120px]" />
        <div className="scroll-drift-slow absolute -right-[10%] top-[30%] size-[50vw] animate-aurora rounded-full bg-glow-indigo/15 blur-[120px] [animation-delay:6s]" />
        <div className="scroll-drift absolute -bottom-[10%] left-[20%] size-[40vw] animate-aurora rounded-full bg-glow-plum/12 blur-[120px] [animation-delay:12s]" />
        <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black_60%,transparent_100%)]" />
      </div>

      <CursorGlow />
      <ScrollRail />
      <SiteHeader />

      <main className="relative z-10 mx-auto max-w-6xl px-6">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <SiteFooter />
    </div>
  );
}
