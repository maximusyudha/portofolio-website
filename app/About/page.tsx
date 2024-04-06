import AboutMe from '@/components/main/AboutMe';
import { Experience } from '@/components/main/Experience';
import Skills from '@/components/main/Skills';
import React from 'react'

const About = () => {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[850px] gap-20">
        <AboutMe />
        <Experience />
        <Skills />
      </div>
    </main>
  );
}

export default About
