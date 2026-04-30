# Driftsättning

Sidan körs på [Vercel](https://vercel.com), kopplad till GitHub-repot
[erikahlback/Spelmusik](https://github.com/erikahlback/Spelmusik).

## Hur det fungerar

1. Du pushar en ändring till `main`-branchen på GitHub.
2. Vercel märker ändringen direkt och bygger en ny version.
3. Inom en minut eller två är den nya versionen live.

Du behöver alltså aldrig deploya manuellt — bara pusha till GitHub.

## Förhandsgranska ändringar (preview deploys)

Om du jobbar i en separat branch (t.ex. `nytt-projekt`) och pushar den till
GitHub, ger Vercel automatiskt en **preview-URL** med en unik adress där du
kan förhandsgranska ändringen utan att den syns på den riktiga sidan.

Du hittar preview-URL:en i:
- Vercels webbgränssnitt under projektets "Deployments"
- Som en kommentar på Pull Request:en om du jobbar via PR

## Första gången: koppla repot till Vercel

Det här gjordes vid uppsättning, men för referens:

1. Gå till [vercel.com/new](https://vercel.com/new).
2. Välj GitHub som källa och välj `erikahlback/Spelmusik`.
3. Vercel detekterar Next.js automatiskt — ingen extra konfiguration behövs.
4. Tryck **Deploy**.

Notera: Vercel-projektet ligger under det Vercel-konto som klickade
"Deploy" — så om Erik ska äga deployen långsiktigt bör han vara den som
kopplar repot till Vercel (eller så kan projektet flyttas till hans team
senare).

## Domän

Som standard får sidan en `*.vercel.app`-adress. För att lägga till en
egen domän (t.ex. `erikahlback.se`):

1. Köp domänen hos valfri registrar (Loopia, Namecheap, etc.).
2. I Vercel: **Project → Settings → Domains → Add**.
3. Följ Vercels instruktioner för att peka DNS:en mot Vercel.

## Rollback

Om en ny version har problem — gå till **Deployments** i Vercel, hitta en
tidigare lyckad deploy och klicka **Promote to Production**. Då rullar
sidan tillbaka till den versionen direkt.

## Miljövariabler

Just nu används inga. Skulle behov uppstå (t.ex. API-nycklar) — lägg till
dem under **Project → Settings → Environment Variables** i Vercel, *inte*
i koden.
