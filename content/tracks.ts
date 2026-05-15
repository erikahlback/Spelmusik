// Låtar som visas i musikspelaren.
//
// Lägg till nya låtar så här:
//   1. Lägg ljudfilen i /public/music/, t.ex. /public/music/min-lat.mp3
//   2. Lägg till en rad i listan nedan med rätt fil-sökväg.
//
// Om listan är tom visas en placeholder-text på sidan istället för spelaren.

export type Track = {
  title: string;
  file: string; // sökväg under /public, t.ex. "/music/min-lat.mp3"
  description?: string;
  year?: string | number;
};

export const tracks: Track[] = [
  {
    title: "Medieval jam",
    file: "/music/mediaval-jam.mp3",
    year: "2:07",
  },
  {
    title: "Mysterious nature",
    file: "/music/mysterious-nature.mp3",
    year: "1:57",
  },
];
