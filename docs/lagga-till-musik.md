# Lägga till musik

Musikspelaren på sidan läser från en lista i `content/tracks.ts`. Så här
lägger du till en ny låt:

## 1. Lägg ljudfilen i `public/music/`

Stoppa in din ljudfil i mappen [`public/music/`](../public/music/). Använd
gärna ett enkelt filnamn utan mellanslag eller specialtecken:

```
public/music/min-forsta-lat.mp3
```

**Format som funkar i webbläsare:**
- `.mp3` — bredast stöd, rekommenderas
- `.m4a` / `.aac` — bra ljudkvalitet, fungerar i moderna webbläsare
- `.ogg` — fungerar i Firefox och Chrome, inte Safari
- `.wav` — funkar men är onödigt stora för webben

**Tips på filstorlek:** Sikta på max ~5–10 MB per låt. Komprimera till mp3
192–256 kbps för bra kvalitet utan onödig storlek.

## 2. Lägg till låten i `content/tracks.ts`

Öppna [`content/tracks.ts`](../content/tracks.ts) och lägg till ett objekt i
listan:

```ts
export const tracks: Track[] = [
  {
    title: "Min första låt",
    file: "/music/min-forsta-lat.mp3",
    description: "Inspelad i köket, vintern 2026.", // valfritt
    year: 2026,                                      // valfritt
  },
];
```

**Viktigt:** `file` ska börja med `/music/...` (absolut sökväg från `public/`).

## 3. Spara och se resultatet

- Lokalt: Kör `pnpm dev` och öppna sidan i webbläsaren.
- Live: Pusha till GitHub — Vercel publicerar automatiskt.

## Flera låtar

Lägg till så många objekt du vill i listan. När det finns mer än en låt
visar spelaren en spårlista där du kan klicka på varje spår.

```ts
export const tracks: Track[] = [
  { title: "Spår ett", file: "/music/spar-1.mp3", year: 2025 },
  { title: "Spår två", file: "/music/spar-2.mp3", year: 2025 },
  { title: "Spår tre", file: "/music/spar-3.mp3", year: 2026 },
];
```

## Tom spelare

Om listan är tom (`tracks: []`) visas en "Musik kommer snart"-text på
sidan istället för spelaren. Spelaren aktiveras automatiskt så fort du
lägger till första låten.

## Stora filer och Git

Git hanterar stora binärfiler dåligt. Om dina ljudfiler börjar bli många
eller stora (t.ex. fler än ~10 låtar) — hör av dig så sätter vi upp
[Vercel Blob Storage](https://vercel.com/docs/storage/vercel-blob) istället,
som är gjort för det.
