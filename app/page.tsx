import Hero from "@/components/Hero";
import About from "@/components/About";
import Academics from "@/components/Academics";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      {/* Grain overlay for texture */}
      <div className="grain-overlay" />
      
      {/* All sections */}
      <Hero />
      <About />
      <Academics />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
