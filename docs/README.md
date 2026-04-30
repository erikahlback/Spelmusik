# Dokumentation

Den här mappen innehåller guider för att redigera och driftsätta hemsidan utan
att behöva sätta sig in i kodbasen.

## Översikt

- [redigera-innehall.md](./redigera-innehall.md) — Ändra namn, intro, om-text
  och sektioner som visas på sidan.
- [lagga-till-musik.md](./lagga-till-musik.md) — Ladda upp låtar och få upp dem
  i spelaren.
- [lagga-till-projekt.md](./lagga-till-projekt.md) — Lägga till nya projekt i
  projekt-listan.
- [styling.md](./styling.md) — Hur sidan är uppbyggd visuellt och var färger,
  fonter och layout justeras.
- [driftsattning.md](./driftsattning.md) — Hur ändringar hamnar live på Vercel.
- [utveckling.md](./utveckling.md) — Köra sidan lokalt på din egen dator.

## Snabbstart för Erik

Allt redaktionellt innehåll ligger i en enda mapp: [`/content`](../content).
Tre filer styr hela sidan:

| Fil | Vad du ändrar |
|---|---|
| `content/site.ts` | Ditt namn, taglinen, intro-texten, om-texten, kontaktuppgifter |
| `content/tracks.ts` | Låtar som visas i musikspelaren |
| `content/projects.ts` | Projekt som visas i projektlistan |

När du sparar och pushar till GitHub bygger Vercel om sidan automatiskt — så
inga andra steg behövs för att uppdatera innehållet.
