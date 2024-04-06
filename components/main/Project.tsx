"use client";
import React from "react";
import ProjectCard from "../sub/ProjectContent";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/perkotaanIo.png"
          title="Perkotaan.Io"
          description="Real Estate Website with update design and clear user experience"
        />
        <ProjectCard
          src="/anime.png"
          title="MxAnimelist"
          description="Anime list adaptation of the MyAnimelist website"
        />
        <ProjectCard
          src="/pln.png"
          title="PLN Website"
          description="'State Electricity Company', abbreviated as PLN) is an Indonesian government-owned corporation which has a monopoly on electric power distribution in Indonesia and generates the majority of the country's electrical power, producing 176.4 TWh in 2015."
        />
      </div>
    </div>
  );
};

export default Projects;
