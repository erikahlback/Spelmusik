import { site } from "@/content/site";

export function Hero() {
  return (
    <header className="px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="mx-auto w-full max-w-3xl">
        <p className="font-pixel text-[0.625rem] uppercase tracking-[0.05em] text-muted">
          Composer
        </p>
        <h1 className="mt-8 font-pixel text-3xl leading-[1.25] tracking-tight sm:text-5xl">
          {site.name}
        </h1>
        <p className="mt-8 max-w-xl font-serif italic text-xl leading-relaxed text-foreground/80 sm:text-2xl">
          {site.intro}
        </p>
        <nav className="mt-12 flex flex-wrap gap-x-6 gap-y-3 font-pixel text-[0.6875rem]">
          {site.sections.music && (
            <a
              className="text-foreground/70 underline-offset-4 transition hover:text-accent hover:underline"
              href="#musik"
            >
              Music
            </a>
          )}
          {site.sections.projects && (
            <a
              className="text-foreground/70 underline-offset-4 transition hover:text-accent hover:underline"
              href="#projekt"
            >
              Selected work
            </a>
          )}
          <a
            className="text-foreground/70 underline-offset-4 transition hover:text-accent hover:underline"
            href="#kontakt"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
