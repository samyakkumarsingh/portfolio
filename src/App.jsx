import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Portfolio() {
  const [dark, setDark] = useState(true);

  return (
    <div
      className={
        dark
          ? "min-h-screen bg-slate-950 text-slate-100"
          : "min-h-screen bg-slate-50 text-slate-900"
      }
    >
      <Navbar dark={dark} setDark={setDark} />
      <Hero dark={dark} />
      <About dark={dark} />
      <Experience dark={dark} />
      <Projects dark={dark} />
      <Skills dark={dark} />
      <Education dark={dark} />
      <Achievements dark={dark} />
      <Contact dark={dark} />
      <Footer dark={dark} />
    </div>
  );
}
