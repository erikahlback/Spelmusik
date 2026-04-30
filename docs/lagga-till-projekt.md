# Lägga till projekt

Projekt-sektionen läser från `content/projects.ts`.

## Lägga till ett projekt

Öppna [`content/projects.ts`](../content/projects.ts) och lägg till ett
objekt i listan:

```ts
export const projects: Project[] = [
  {
    title: "Projekt Norrsken",
    description:
      "En kort beskrivning av vad projektet är, vad det handlar om och var det är på väg.",
    status: "pågående",                              // valfritt: "pågående" | "släppt" | "vilande"
    link: {                                           // valfritt
      href: "https://example.com",
      label: "Läs mer",
    },
  },
];
```

## Fält

| Fält | Krävs | Beskrivning |
|---|---|---|
| `title` | Ja | Projektets namn, visas som rubrik |
| `description` | Ja | Kort text om projektet, 1–3 meningar |
| `status` | Nej | "pågående", "släppt" eller "vilande" — visas som etikett |
| `link` | Nej | En länk med text. Lägg ihela URL:en i `href` och länktexten i `label` |

## Tom lista

Om listan är tom visar sektionen "Projekt visas här när de är redo att delas."
Om du istället vill dölja sektionen helt — sätt `sections.projects: false` i
`content/site.ts`.

## Sortering

Projekten visas i samma ordning som i listan. Sätt det viktigaste (eller
nyaste) överst.
