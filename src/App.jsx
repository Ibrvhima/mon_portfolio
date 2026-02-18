import React from "react";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import Hero from "./sections/Hero";
import Skills from "./sections/About";
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
