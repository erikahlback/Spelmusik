// Webbplatsens grundinformation. Redigera här för att ändra namn, tagline,
// kontaktuppgifter och hur sektioner visas.

export const site = {
  name: "Erik Ahlback",
  tagline: "Most of my work happens between two studios.",
  intro:
    "Composer for games, film, and artists — working between Stockholm and Dakar, where Nordic restraint meets West African rhythm.",
  about: [
    "In Toubab Dialaw — a fishing village an hour south of Dakar, Senegal — I run a small studio I built in partnership with a local foundation that keeps it open to musicians in the village.",
    "This year we traveled across Senegal with a portable rig and recorded 25 musicians outdoors — environmental sound and texture were as much the point as the music itself.",
    "Recent projects include a score for a dance piece premiered in Senegal, and music for an art exhibition opening in Copenhagen this July — a piece written to listen to a room, and to the materials inside it.",
    "When a project asks for it, I also shoot and edit — documentary work, music videos and sometimes scoring my own footage.",
  ],
  contact: {
    email: "erik.ahlback@gmail.com",
    instagram: "", // t.ex. "erikahlback" (utan @)
    spotify: "", // full URL till artistsidan — t.ex. Teranga Music
    youtube: "", // full URL
  },
  // Visa eller dölj sektioner
  sections: {
    music: true,
    projects: true,
  },
} as const;
