import React, { useState } from "react";
import Navbar from "./ui/Navbar";
import MobileMenu from "./ui/MobileMenu";
import LoadingScreenAnimation from "./ui/LoadingScreenAnimation";
import Home from "./sections/Home";
import AnimationWaves from "./ui/AnimationWaves";
import About from "./sections/About";
import Project from "./sections/Project";
import {Contact} from "./sections/Contact";
import RevealOnScroll from "./ui/RevealOnScroll";
import Footer from "./sections/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {!isLoading && (
        <LoadingScreenAnimation onComplete={() => setIsLoading(true)} />
      )}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <RevealOnScroll><Home/></RevealOnScroll>
      <AnimationWaves/>
      <About />
      <Project/>
      <Contact/>
      <Footer/>
      
    </>
  );
}

export default App;
