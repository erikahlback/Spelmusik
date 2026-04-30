# Erik Ahlbäck — personlig hemsida

Minimalistisk landningssida för Erik Ahlbäck. Byggd med [Next.js](https://nextjs.org/),
[Tailwind CSS](https://tailwindcss.com) och hostad på [Vercel](https://vercel.com).

## Snabbstart

```sh
pnpm install
pnpm dev
```

Öppna http://localhost:3000.

## Redigera innehåll

All text och alla låtar/projekt finns i mappen [`content/`](./content):

- [`content/site.ts`](./content/site.ts) — namn, intro, om-text, kontakt
- [`content/tracks.ts`](./content/tracks.ts) — låtar i musikspelaren
- [`content/projects.ts`](./content/projects.ts) — projektlistan

Detaljerade guider finns i [`docs/`](./docs/README.md).

## Struktur

```
app/                Next.js App Router (layout, sidor, global CSS)
components/         React-komponenter (Hero, Section, MusicPlayer, ...)
content/            Redaktionellt innehåll — det här är det Erik redigerar
docs/               Guider på svenska för redigering, deploy, etc.
public/music/       Ljudfiler som spelaren läser från
```

## Deploy

Sidan deployas automatiskt till Vercel när något pushas till `main` på GitHub.
Detaljer i [`docs/driftsattning.md`](./docs/driftsattning.md).
