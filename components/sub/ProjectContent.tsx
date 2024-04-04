"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fillOut, slideInFromLeft } from "@/utils/motion";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
      variants={fillOut}
      initial="hidden"
      animate="visible"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <motion.h1
          className="text-2xl font-semibold text-white"
          variants={fillOut}
        >
          {title}
        </motion.h1>
        <motion.p className="mt-2 mb-4 text-gray-300" variants={fillOut}>
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
