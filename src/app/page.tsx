import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedProject from "@/components/sections/FeaturedProject";
import Businesses from "@/components/sections/Businesses";
import Leadership from "@/components/sections/Leadership";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Learning from "@/components/sections/Learning";
import Approach from "@/components/sections/Approach";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedProject />
        <Businesses />
        <Leadership />
        <Experience />
        <Skills />
        <Learning />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
