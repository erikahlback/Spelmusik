// Projekt som visas i sektionen "Projekt".
//
// Varje projekt har en titel, kort beskrivning och valfri länk.
// Om listan är tom visas sektionen inte alls.

export type Project = {
  title: string;
  description: string;
  link?: { href: string; label: string };
  status?: "pågående" | "släppt" | "vilande";
};

export const projects: Project[] = [
  // Exempel — ersätt med riktiga projekt:
  // {
  //   title: "Projekt Norrsken",
  //   description: "Ett samarbete kring elektronisk musik och fältinspelningar.",
  //   status: "pågående",
  //   link: { href: "https://example.com", label: "Läs mer" },
  // },
];
