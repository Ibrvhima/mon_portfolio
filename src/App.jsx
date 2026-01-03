import React from "react";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import GitHub from "./sections/GitHub";
import Timeline from "./sections/Timeline";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHub />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
