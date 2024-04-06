import React from "react";
import HeroContent from "../sub/HeroContent";
import Projects from "./Project";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <HeroContent />
      <Projects />
    </div>
  );
};

export default Hero;
