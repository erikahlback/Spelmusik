import { projects } from "@/content/projects";
import { Section } from "./Section";

export function Projects() {
  if (projects.length === 0) {
    return (
      <Section id="projekt" eyebrow="Selected work">
        <p className="text-muted">Selected work will appear here soon.</p>
      </Section>
    );
  }

  return (
    <Section id="projekt" eyebrow="Selected work">
      <ul className="divide-y divide-line border-y border-line">
        {projects.map((p) => (
          <li key={p.title} className="grid gap-2 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              {p.status ?? ""}
            </div>
            <div>
              <h3 className="font-serif text-xl leading-tight">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-foreground/80">
                {p.description}
              </p>
              {p.link && (
                <a
                  href={p.link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-3 inline-block font-mono text-sm underline-offset-4 hover:underline"
                >
                  {p.link.label} →
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
