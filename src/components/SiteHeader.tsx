import { profile } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ThemeToggle";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="group flex items-center gap-3">
          <img
            src={profile.portrait}
            alt={profile.name}
            className="size-10 rounded-xl border border-accent/40 bg-secondary object-cover object-top shadow-glow transition-transform duration-300 group-hover:scale-110"
          />
          <span className="leading-tight">
            <span className="block font-display text-sm font-semibold text-foreground">
              {profile.name}
            </span>
            <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {profile.role}
            </span>
          </span>
        </a>


        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {profile.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="shine hidden rounded-xl bg-primary px-4 py-2 font-display text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-glow active:scale-95 sm:block"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Mobile nav */}
      <nav
        className="flex gap-5 overflow-x-auto border-t border-border/60 px-6 py-2 md:hidden"
        aria-label="Primary mobile"
      >
        {profile.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="whitespace-nowrap font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
