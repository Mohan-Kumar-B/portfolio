import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Saudi Business Intelligence",
    description:
      "A Saudi-focused data project analyzing business data to uncover trends, performance patterns, and actionable insights for decision-making.",
    technologies: ["SQL", "Python", "Power BI"],
    github:
      "https://github.com/Mohan-Kumar-B/saudi-business-intelligence",
  },
  {
    title: "E-Commerce Data Pipeline",
    description:
      "An end-to-end data engineering project that ingests, validates, transforms, and stores e-commerce data in PostgreSQL for analytics and reporting.",
    technologies: ["Python", "SQL", "PostgreSQL", "ETL"],
    github:
      "https://github.com/Mohan-Kumar-B/ecommerce-data-pipeline",
  },
  {
    title: "STRATO — Atmospheric Data Intelligence",
    description:
      "A data platform that processes atmospheric data to explore environmental patterns, detect anomalies, and turn raw data into meaningful insights.",
    technologies: ["Python", "SQL", "PostgreSQL", "APIs"],
    github:
      "https://github.com/Mohan-Kumar-B/strato",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mb-12">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Selected Work
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Projects
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          A selection of projects demonstrating my work across data analytics,
          business intelligence, and data engineering.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group flex h-full flex-col rounded-2xl border border-border bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-card/70"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">
                0{index + 1}
              </span>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Github className="size-4" />
              </a>
            </div>

            <h3 className="text-xl font-semibold tracking-tight text-foreground">
              {project.title}
            </h3>

            <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {technology}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              View on GitHub
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}