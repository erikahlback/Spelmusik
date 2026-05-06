// Webbplatsens grundinformation. Redigera här för att ändra namn, tagline,
// kontaktuppgifter och hur sektioner visas.

export const site = {
  name: "Erik Ahlback",
  tagline: "The work moves between two coasts.",
  intro:
    "Composer for games, film, and performances — and cultural initiator trying to build bridges between artists in Sweden and Senegal.",
  about: [
    "Most of my work moves between two studios — one in Malmö, and one I built with local collaborators in Toubab Dialaw, an hour south of Dakar.",
    "This year we traveled across Senegal with a portable rig and recorded 25 musicians outdoors — environmental sound and texture were as much the point as the music itself.",
    "Recent work includes a score for a dance piece premiered in Senegal, and music for an art exhibition opening in Copenhagen this July — a piece written to listen to a room and the materials inside it.",
    "I'm especially drawn to games as a storytelling form, where music shapes world, mood, and player experience as much as narrative does. When a project asks for it, I also shoot and edit — documentary work, music videos, and sometimes scoring my own footage.",
  ],
  contact: {
    email: "erik.ahlback@gmail.com",
    instagram: "teranga_music", // utan @
    spotify: "https://open.spotify.com/artist/17NRbi7px0HQeAmbSi2nCQ",
    youtube: "https://www.youtube.com/@teranga_music",
    vimeo: "https://vimeo.com/715517273",
  },
  // Visa eller dölj sektioner
  sections: {
    music: true,
    projects: true,
  },
} as const;
