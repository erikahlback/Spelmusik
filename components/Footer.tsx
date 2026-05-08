import { site } from "@/content/site";

export function Footer() {
  const { contact, name } = site;

  const socialLinks: Array<{ label: string; href: string }> = [];
  if (contact.instagram)
    socialLinks.push({
      label: "Instagram",
      href: `https://instagram.com/${contact.instagram}`,
    });
  if (contact.spotify) socialLinks.push({ label: "Spotify", href: contact.spotify });
  if (contact.youtube) socialLinks.push({ label: "YouTube", href: contact.youtube });
  if (contact.vimeo) socialLinks.push({ label: "Vimeo", href: contact.vimeo });

  const hasContact = !!contact.email || socialLinks.length > 0;

  return (
    <footer
      id="kontakt"
      className="mt-auto scroll-mt-24 border-t border-line px-6 py-12"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
        {/* Top: contact details */}
        <div>
          <p className="font-pixel text-[0.6875rem] uppercase tracking-[0.05em] text-muted">
            Contact
          </p>

          {!hasContact && (
            <p className="mt-3 text-muted">Contact details coming soon.</p>
          )}

          {contact.email && (
            <p className="mt-4">
              <a
                className="font-pixel text-sm underline-offset-4 hover:underline sm:text-base"
                href={`mailto:${contact.email}`}
              >
                {contact.email}
              </a>
            </p>
          )}

          {socialLinks.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {socialLinks.map((l) => (
                <li key={l.href}>
                  <a
                    className="text-foreground/80 underline-offset-4 hover:text-foreground hover:underline"
                    href={l.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Bottom: TMC mini mark + copyright */}
        <div className="flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          {contact.spotify ? (
            <a
              href={contact.spotify}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Teranga Music Collective"
              className="inline-flex items-center gap-3 opacity-70 transition hover:opacity-100"
            >
              <img
                src="/tmc-logo.png"
                alt="Teranga Music Collective"
                width={56}
                height={42}
                className="h-auto w-[56px]"
              />
              <span className="font-pixel text-[0.625rem] uppercase tracking-[0.05em] text-muted">
                Teranga Music Collective
              </span>
            </a>
          ) : (
            <span />
          )}

          <p className="font-pixel text-[0.625rem] text-muted">
            © {new Date().getFullYear()} {name}
          </p>
        </div>
      </div>
    </footer>
  );
}
