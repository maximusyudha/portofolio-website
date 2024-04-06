"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const AboutContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-10 mt-20 w-full z-[20] md:px-20"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box flex py-[8px] px-[2px] rounded-lg w-[210px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] text-white">About Me</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Maximus
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Yudha{" "}
            </span>
            Junior Developer
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Hello! 👋 I am a passionate Junior Developer with a desire to create
          engaging and interactive user experiences in an ever-evolving digital
          world. Skill refinement through internships in leading companies. I am
          excited to connect with collaborators who have a passion for
          innovative technological developments, and the profound impact
          technology has had on the world.
        </motion.p>

        <motion.a
          href="/"
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] border hover:bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          Home
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden md:w-full md:h-full md:flex md:justify-center md:items-center md:border rounded-lg bg-transparent"
      >
        <Image src="/yudha.png" alt="work icons" height={650} width={380} />
      </motion.div>
    </motion.div>
  );
};

export default AboutContent;