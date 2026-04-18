import React from "react";

import Hero from "../components/hero";
import About from "../components/about";
import Education from "../components/education";
import Skills from "../components/skills";
import Experience from "../components/Experience";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <footer />
    </div>
  );
};

export default Home;