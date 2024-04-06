import React from "react";
import SkillsCard from "../sub/SkillsContent";

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Skill
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-10 gap-10 px-10">
        <SkillsCard src="/next.png" title="NextJS" />
        <SkillsCard src="/js.png" title="JavaScript" />
        <SkillsCard src="/reactquery.png" title="reactquery" />
        <SkillsCard src="/css.png" title="css" />
        <SkillsCard src="/html.png" title="html" />
        <SkillsCard src="/tailwind.png" title="tailwind" />
        <SkillsCard src="/express.png" title="express" />
        <SkillsCard src="/node-js.png" title="node-js" />
        <SkillsCard src="/react.png" title="react" />
        <SkillsCard src="/ts.png" title="typescript" />
      </div>
    </div>
  );
};

export default Skills;
