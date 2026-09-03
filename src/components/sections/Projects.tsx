import { ArrowUpRight, CheckCircle2, Github } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "DATA ANALYTICS",
    title: "Saudi Business Intelligence",
    description:
      "A Saudi-focused analytics project built to turn business data into clear insights for better decision-making.",
    highlights: [
      <>
        Analyzed <strong>Saudi business data</strong> to identify trends and
        performance patterns.
      </>,
      <>
        Used <strong>SQL and Python</strong> for data analysis and
        preparation.
      </>,
      <>
        Built interactive <strong>Power BI</strong> reporting for
        decision-making.
      </>,
    ],
    technologies: ["SQL", "Python", "Power BI"],
    github:
      "https://github.com/Mohan-Kumar-B/Saudi-Retail-Operations-Analytics",
  },
  {
    number: "02",
    category: "DATA ENGINEERING",
    title: "E-Commerce Data Pipeline",
    description:
      "An end-to-end data engineering project designed to move raw e-commerce data into a structured analytics-ready environment.",
    highlights: [
      <>
        Built a <strong>Python-based data ingestion</strong> workflow for
        e-commerce data.
      </>,
      <>
        Applied <strong>data validation and transformation</strong> before
        storage.
      </>,
      <>
        Stored and prepared data in <strong>PostgreSQL</strong> for analytics
        and reporting.
      </>,
    ],
    technologies: ["Python", "SQL", "PostgreSQL", "ETL"],
    github:
      "https://github.com/Mohan-Kumar-B/E-Commerce_DataPipline",
  },
  {
    number: "03",
    category: "SOFTWARE + USER DATA",
    title: "STRATO — Gamified Engagement Platform",
    description:
      "A gamified learning platform designed to improve academic and social engagement for students with ADHD and Autism.",
    highlights: [
      <>
        Developed an interactive <strong>gamified learning platform</strong>{" "}
        focused on student engagement.
      </>,
      <>
        Implemented the application using <strong>React.js and Spring
        Boot</strong>.
      </>,
      <>
        Used <strong>user-behavior tracking</strong> to help inform feature
        design and improve the learning experience.
      </>,
    ],
    technologies: ["React.js", "Spring Boot", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Mohan-Kumar-B/Strato",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      {/* Section heading */}
      <div className="mb-12">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-10 bg-accent" />

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Selected Work
          </p>
        </div>

        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Projects
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          A selection of projects demonstrating my experience across data
          analytics, business intelligence, data engineering, and software
          development.
        </p>
      </div>

      {/* Project cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/40 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:bg-card/70 hover:shadow-2xl"
          >
            {/* Subtle top accent */}
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Header */}
            <div className="mb-7 flex items-start justify-between">
              <div>
                <span className="font-display text-3xl font-bold text-accent/80">
                  {project.number}
                </span>

                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {project.category}
                </p>
              </div>

              {/* GitHub icon */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="rounded-full border border-border p-2.5 text-muted-foreground transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent"
              >
                <Github className="size-4" />
              </a>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold leading-tight tracking-tight text-foreground">
              {project.title}
            </h3>

            {/* Short description */}
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {project.description}
            </p>

            {/* Highlights */}
            <div className="mt-6 space-y-3">
              {project.highlights.map((highlight, highlightIndex) => (
                <div
                  key={highlightIndex}
                  className="flex items-start gap-3 text-sm leading-5 text-muted-foreground"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />

                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="mt-7 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-border bg-background/20 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors group-hover:border-accent/30 group-hover:text-foreground"
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* GitHub link */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
            >
              View on GitHub
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}