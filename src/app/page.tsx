import { existsSync } from "node:fs";
import path from "node:path";
import Header from "@/components/Header";
import {
  About,
  Contact,
  Footer,
  Hero,
  Projects,
  Skills,
} from "@/components/sections";
import { site } from "@/data/portfolio";

export default function Home() {
  // The resume buttons switch on automatically once the PDF is in /public.
  const resumeAvailable = existsSync(
    path.join(process.cwd(), "public", site.resumeFile),
  );

  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero resumeAvailable={resumeAvailable} />
        <About />
        <Projects />
        <Skills />
        <Contact resumeAvailable={resumeAvailable} />
      </main>
      <Footer />
    </>
  );
}
