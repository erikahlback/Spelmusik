// Webbplatsens grundinformation. Redigera här för att ändra namn, tagline,
// kontaktuppgifter och hur sektioner visas.

export const site = {
  name: "Erik Ahlback",
  tagline: "The work moves between two coasts.",
  intro:
    "Composer for games, film, and performances.” — and cultural initiator trying to build bridges between artists in Sweden and Senegal.",
  about: [
    "In Toubab Dialaw — a fishing village an hour south of Dakar, Senegal — I run a small studio I built in partnership with a local foundation that keeps it open to musicians in the village.",
    "This year we traveled across Senegal with a portable rig and recorded 25 musicians outdoors — environmental sound and texture were as much the point as the music itself.",
    "Recent projects include a score for a dance piece premiered in Senegal, and music for an art exhibition opening in Copenhagen this July — a piece written to listen to a room, and to the materials inside it.",
    "When a project asks for it, I also shoot and edit — documentary work, music videos and sometimes scoring my own footage.",
  ],
  contact: {
    email: "erik.ahlback@gmail.com",
    instagram: "teranga_music"
    spotify: "https://open.spotify.com/artist/17NRbi7px0HQeAmbSi2nCQ?si=r05POGQxS7WSH7BLRwi5EA"
    youtube: "https://www.youtube.com/@teranga_music"
    vimeo: "https://vimeo.com/715517273?share=copy&fl=sv&fe=ci"  
  },
  // Visa eller dölj sektioner
  sections: {
    music: true,
    projects: true,
  },
} as const;
