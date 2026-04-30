import { site } from "@/content/site";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="om" eyebrow="Om" title={site.tagline}>
      <div className="space-y-5 text-base leading-relaxed text-foreground/80 sm:text-lg">
        {site.about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
