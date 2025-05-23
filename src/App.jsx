import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <>
    <Analytics />
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
    </>
  );
};

export default App;