import { site } from "@/content/site";

export function Footer() {
  const { contact, name } = site;
  const links: Array<{ label: string; href: string }> = [];
  if (contact.email) links.push({ label: "E-post", href: `mailto:${contact.email}` });
  if (contact.instagram)
    links.push({
      label: "Instagram",
      href: `https://instagram.com/${contact.instagram}`,
    });
  if (contact.spotify) links.push({ label: "Spotify", href: contact.spotify });
  if (contact.youtube) links.push({ label: "YouTube", href: contact.youtube });

  return (
    <footer
      id="kontakt"
      className="mt-auto scroll-mt-24 border-t border-line px-6 py-12"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Kontakt
          </p>
          {links.length === 0 ? (
            <p className="mt-3 text-muted">
              Kontaktuppgifter läggs till här när de är klara.
            </p>
          ) : (
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    className="underline-offset-4 hover:underline"
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {name}
        </p>
      </div>
    </footer>
  );
}
