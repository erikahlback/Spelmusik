import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-line py-16 sm:py-24 ${className ?? ""}`}
    >
      <div className="mx-auto w-full max-w-3xl px-6">
        {(eyebrow || title) && (
          <header className="mb-10 sm:mb-14">
            {eyebrow && (
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
