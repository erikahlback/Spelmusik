import { site } from "@/content/site";
import { Section } from "./Section";

export function About() {
  // Render the TMC logo mark inline after the second paragraph (the one
  // about field recordings) — visual evidence of the collective behind
  // the Senegal studio. Subtle, monochrome-friendly, links to Spotify.
  const tmcInsertAfter = 1;

  return (
    <Section id="om" eyebrow="About" title={site.tagline}>
      <div className="space-y-5 text-base leading-relaxed text-foreground/80 sm:text-lg">
        {site.about.map((paragraph, i) => (
          <div key={i} className="space-y-5">
            <p>{paragraph}</p>
            {i === tmcInsertAfter && site.contact.spotify && (
              
                href={site.contact.spotify}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Teranga Music Collective on Spotify"
                className="group inline-flex flex-col gap-2 pt-3"
              >
                <img
                  src="/tmc-logo.png"
                  alt="Teranga Music Collective"
                  width={104}
                  height={78}
                  className="h-auto w-[104px] opacity-80 transition group-hover:opacity-100"
                />
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted group-hover:text-foreground/80">
                  Teranga Music Collective →
                </span>
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
