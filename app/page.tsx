import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Music } from "@/components/Music";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <About />
        {site.sections.music && <Music />}
        {site.sections.projects && <Projects />}
      </main>
      <Footer />
    </>
  );
}
