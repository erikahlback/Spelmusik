import { tracks } from "@/content/tracks";
import { Section } from "./Section";
import { MusicPlayer } from "./MusicPlayer";

export function Music() {
  return (
    <Section id="musik" eyebrow="Musik" title="Lyssna">
      <MusicPlayer tracks={tracks} />
    </Section>
  );
}
