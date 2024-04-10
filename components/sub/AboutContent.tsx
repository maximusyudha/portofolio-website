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
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import GitHub and LinkedIn icons

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

        <div className="flex gap-4">
          <motion.a
            variants={slideInFromLeft(1)}
            href="https://github.com/maximusyudha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white h-8 w-8 hover:text-gray-300" />
          </motion.a>
          <motion.a
            variants={slideInFromLeft(1)}
            href="https://www.linkedin.com/in/maximus-yudha-prasetyo-75b423220/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white h-8 w-8 hover:text-gray-300" />
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden md:w-full md:h-full md:flex md:justify-center md:items-center md:border-4 md:border-dashed border-purple-600 rounded-lg bg-transparent"
      >
        <Image
          src="/yudha.png"
          alt="work icons"
          height={650}
          width={380}
          className="shadow-lg shadow-cyan-500/50"
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutContent;
