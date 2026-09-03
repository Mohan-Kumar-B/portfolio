import { ArrowUpRight, Github } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const projects = [
  {
    title: "Saudi Business Intelligence",
    description:
      "A Saudi-focused analytics project using business data to identify trends, performance patterns, and actionable insights for better decision-making.",
    technologies: ["SQL", "Python", "Power BI"],
    github:
      "https://github.com/Mohan-Kumar-B/Saudi-Retail-Operations-Analytics",
  },
  {
    title: "E-Commerce Data Pipeline",
    description:
      "An end-to-end data engineering project that ingests, validates, transforms, and stores e-commerce data in PostgreSQL for analytics and reporting.",
    technologies: ["Python", "SQL", "PostgreSQL", "ETL"],
    github:
      "https://github.com/Mohan-Kumar-B/E-Commerce_DataPipline",
  },
  {
    title: "STRATO — Gamified Engagement Platform",
    description:
      "A gamified learning platform designed to improve academic and social engagement for students with ADHD and Autism. User-behavior tracking helped inform feature design and create a more engaging learning experience.",
    technologies: ["React.js", "Spring Boot", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Mohan-Kumar-B/Strato",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28">
      <SectionHeading
        title="Projects"
        aside="Selected Work · Data · Engineering"
      />

      <Reveal>
        <div className="mb-12 max-w-2xl">
          <p className="leading-relaxed text-muted-foreground">
            A selection of projects demonstrating my work across data
            analytics, business intelligence, data engineering, and
            application development.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 120}>
            <article
              className="group flex h-full min-h-[390px] flex-col rounded-3xl border border-border bg-card/40 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:bg-card/70 hover:shadow-glow"
            >
              {/* Top */}
              <div className="mb-7 flex items-center justify-between">
                <span className="font-mono text-sm font-medium text-muted-foreground">
                  0{index + 1}
                </span>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="rounded-full border border-border p-2.5 text-muted-foreground transition-all duration-300 hover:border-accent hover:text-accent hover:rotate-6"
                >
                  <Github className="size-4" />
                </a>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-7 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-border bg-background/20 px-3 py-1.5 text-xs text-muted-foreground transition-colors duration-300 group-hover:border-accent/30"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* GitHub */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-foreground transition-colors duration-300 hover:text-accent"
              >
                View on GitHub
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}