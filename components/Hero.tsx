import { site } from "@/content/site";

export function Hero() {
  return (
    <header className="px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="mx-auto w-full max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Composer
        </p>
        <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          {site.intro}
        </p>
        <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm">
          {site.sections.music && (
            <a className="underline-offset-4 hover:underline" href="#musik">
              Music
            </a>
          )}
          {site.sections.projects && (
            <a className="underline-offset-4 hover:underline" href="#projekt">
              Selected work
            </a>
          )}
          <a className="underline-offset-4 hover:underline" href="#kontakt">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
