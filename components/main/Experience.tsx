import React from 'react'
import WorkExp from '../sub/ExperienceContent'

export const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Experience
      </h1>
      <WorkExp />
    </div>
  );
}
