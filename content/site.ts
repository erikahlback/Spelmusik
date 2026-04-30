// Webbplatsens grundinformation. Redigera här för att ändra namn, tagline,
// kontaktuppgifter och hur sektioner visas.

export const site = {
  name: "Erik Ahlbäck",
  tagline: "Musiker och projektmakare.",
  intro:
    "Jag skapar musik och driver olika projekt. Här samlar jag det jag jobbar på just nu och saker jag släppt.",
  about: [
    "Musiken är centrum i det jag gör. Jag rör mig mellan inspelning, framträdande och ljudidéer som inte riktigt vill bli något ännu.",
    "Vid sidan om musiken pågår det alltid något. Mindre projekt, samarbeten och experiment som ibland leder vidare och ibland bara får finnas.",
  ],
  contact: {
    email: "", // t.ex. "erik@example.com" — lämna tom för att dölja
    instagram: "", // t.ex. "erikahlback" (utan @)
    spotify: "", // full URL till artistsidan
    youtube: "", // full URL
  },
  // Visa eller dölj sektioner
  sections: {
    music: true,
    projects: true,
  },
} as const;
