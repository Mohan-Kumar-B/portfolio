import { useState, type FormEvent } from "react";
import { Check, Github, Linkedin, Send } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").slice(0, 100);
    const email = String(data.get("email") ?? "").slice(0, 255);
    const message = String(data.get("message") ?? "").slice(0, 2000);

    const subject = `Portfolio enquiry from ${name}`;
    const body = `${message}\n\n—\n${name}\n${email}`;

    // Open Gmail's compose window in a new tab, pre-filled and addressed to Mohan.
    const gmail =
      `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${encodeURIComponent(profile.contact.email)}` +
      `&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const win = window.open(gmail, "_blank", "noopener,noreferrer");
    if (!win) {
      // Popup blocked (or no browser mail access) — fall back to the default mail client.
      window.location.href = `mailto:${profile.contact.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
    }
    setSent(true);
  };


  return (
    <section id="contact" className="py-28">
      <SectionHeading title="Contact" aside="Say hello" />

      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal className="space-y-8">
          <h3 className="font-display text-4xl font-bold tracking-tight text-foreground">
            Start a <span className="text-gradient">conversation</span>.
          </h3>
          <p className="max-w-md leading-relaxed text-muted-foreground">{profile.contact.blurb}</p>
          <a
            href={`mailto:${profile.contact.email}`}
            className="inline-block font-display text-2xl font-bold text-foreground underline decoration-primary/60 underline-offset-8 transition-colors hover:text-accent"
          >
            {profile.contact.email}
          </a>
          <div className="flex gap-4">
            <a
              href={profile.contact.linkedin.url}
              target="_blank"
              rel="noreferrer"
              className="glass glass-hover flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm text-muted-foreground hover:text-accent"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
            <a
              href={profile.contact.github.url}
              target="_blank"
              rel="noreferrer"
              className="glass glass-hover flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm text-muted-foreground hover:text-accent"
            >
              <Github className="size-4" /> GitHub
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <form onSubmit={onSubmit} className="glass rounded-2xl p-6 shadow-card">
            {sent ? (
              <div className="flex min-h-64 flex-col items-center justify-center gap-4 text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-primary/15 text-accent shadow-glow">
                  <Check className="size-6" />
                </span>
                <p className="font-display text-xl font-semibold text-foreground">
                  Gmail is open in a new tab.
                </p>
                <p className="max-w-xs text-sm text-muted-foreground">
                  Your message is pre-filled and addressed to {profile.contact.email} — just hit
                  send there.
                </p>

              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      Name
                    </span>
                    <input
                      required
                      name="name"
                      placeholder="Ada Lovelace"
                      className="w-full rounded-xl border border-input bg-secondary/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      Email
                    </span>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-input bg-secondary/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Message
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell me about the data problem you're sitting on…"
                    className="w-full resize-none rounded-xl border border-input bg-secondary/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent focus:ring-1 focus:ring-accent"
                  />
                </label>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-glow transition-all hover:scale-[1.02] active:scale-95"
                >
                  Send message
                  <Send className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
