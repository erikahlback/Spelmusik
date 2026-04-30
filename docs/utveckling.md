# Utveckling lokalt

Den här guiden är för att köra sidan på din egen dator innan du publicerar
ändringar.

## Engångs-setup

Du behöver:

- **Node.js 20 eller senare** — [nodejs.org](https://nodejs.org)
- **pnpm** — installera med `npm install -g pnpm` när Node är installerat

Klona repot och installera beroenden:

```sh
git clone https://github.com/erikahlback/Spelmusik.git
cd Spelmusik
pnpm install
```

## Köra utvecklingsservern

```sh
pnpm dev
```

Öppna http://localhost:3000 i webbläsaren. När du sparar en fil
uppdateras sidan automatiskt.

## Vanliga kommandon

| Kommando | Vad det gör |
|---|---|
| `pnpm dev` | Startar utvecklingsservern på port 3000 |
| `pnpm build` | Bygger en produktionsversion (testar att allt funkar inför deploy) |
| `pnpm start` | Kör produktionsbygget lokalt (efter `pnpm build`) |

## Felsökning

**"Port 3000 används redan":** En annan dev-server är igång. Stäng den, eller
kör `pnpm dev -- -p 3001` för att starta på en annan port.

**"Module not found":** Glömde du `pnpm install`? Kör det igen efter att du
hämtat nya ändringar med `git pull`.

**Sidan ser konstig ut efter ändring:** Hard-refresha med
Ctrl+Shift+R (Win/Linux) eller Cmd+Shift+R (Mac).
