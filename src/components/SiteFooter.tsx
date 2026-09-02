import { profile } from "@/data/portfolio";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          © {year} {profile.name} · {profile.role}
        </p>
        <div className="flex gap-6">
          <a
            href={profile.contact.linkedin.url}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={profile.contact.github.url}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
