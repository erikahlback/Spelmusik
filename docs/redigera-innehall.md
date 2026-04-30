# Redigera innehåll

All text på sidan ligger i `content/site.ts`. Öppna filen och ändra direkt —
strukturen är självförklarande.

## Vad du kan ändra i `site.ts`

```ts
export const site = {
  name: "Erik Ahlbäck",            // Ditt namn (visas stort i hero)
  tagline: "Musiker och projektmakare.", // Kort underrubrik
  intro: "...",                     // Intro-paragraf längst upp
  about: [
    "Första stycket i om-sektionen...",
    "Andra stycket...",
  ],
  contact: {
    email: "",                      // T.ex. "erik@example.com"
    instagram: "",                  // Bara användarnamnet, utan @
    spotify: "",                    // Full URL till artistsidan
    youtube: "",                    // Full URL
  },
  sections: {
    music: true,                    // Sätt till false för att dölja musik-sektionen
    projects: true,                 // Sätt till false för att dölja projekt-sektionen
  },
};
```

## Tips

- **Lägg till fler stycken i om-texten** genom att lägga till fler rader i
  `about: [...]`. Varje sträng blir ett stycke.
- **Tomma kontaktfält** visas inte alls i sidfoten. Lägg bara till de länkar
  du faktiskt vill visa.
- **Citattecken** i texten skrivs med backslash, t.ex. `"Han sa \"hej\""`,
  eller använd enkla citattecken runt texten istället.
- **Å, Ä, Ö** funkar utan problem — skriv som vanligt.

## Hur ser jag ändringarna?

- **Lokalt:** Kör `pnpm dev` (se [utveckling.md](./utveckling.md)) och öppna
  http://localhost:3000.
- **Live:** Pusha till GitHub. Vercel publicerar inom någon minut.
