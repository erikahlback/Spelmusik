# Styling

Sidan är medvetet minimalistisk: varm off-white bakgrund, mörk text, tunna
linjer mellan sektioner, och en enda accent-färg som följer textfärgen.

## Var vad ändras

| Vad | Var |
|---|---|
| Färger (bakgrund, text, linjer) | `app/globals.css` — variabler i `:root` |
| Mörkt läge | `app/globals.css` — `@media (prefers-color-scheme: dark)` |
| Fonter | `app/layout.tsx` — `Geist` (sans), `Instrument_Serif` (rubriker), `Geist_Mono` (etiketter) |
| Layout-bredd | `components/Section.tsx` och `components/Hero.tsx` — `max-w-3xl` (~768px) |
| Avstånd mellan sektioner | `components/Section.tsx` — `py-16 sm:py-24` |

## Färgvariabler

I `app/globals.css`:

```css
:root {
  --background: #faf8f4;   /* bakgrundsfärg */
  --foreground: #1a1a18;   /* huvudtextfärg */
  --muted: #6b6b66;        /* dämpad text (etiketter, sekundär info) */
  --line: #e6e2d8;         /* linjer mellan sektioner */
  --accent: #1a1a18;       /* accentfärg (knappar, scrubber) */
}
```

För att ge sidan en helt annan känsla — ändra dessa fyra–fem variabler. Resten
av sidan följer med automatiskt eftersom alla komponenter använder
`bg-background`, `text-foreground`, `border-line`, `text-muted` etc.

## Responsiv layout

Allt är mobile-first. Tailwind-prefixen `sm:` (≥640px), `md:` (≥768px) gör
att layouten anpassar sig:

- På mobil: en kolumn, lite mindre rubriker och padding.
- På desktop: större typografi, projekt-listan får två kolumner (status
  vänster, innehåll höger).

Sidan testas mot 375×812 (iPhone-storlek) som golv. Om något ser konstigt
ut på mobil — kolla viewport och om någon `min-w` eller fast bredd smiter
in.

## Lägga till nya sektioner

Komponenten `<Section>` i `components/Section.tsx` är wrappern alla sektioner
använder. Skapa en ny komponent, importera `Section` och rendera ditt
innehåll:

```tsx
import { Section } from "./Section";

export function Skivor() {
  return (
    <Section id="skivor" eyebrow="Diskografi" title="Släppt">
      <p>Innehåll här...</p>
    </Section>
  );
}
```

Lägg sedan till `<Skivor />` i `app/page.tsx`.
