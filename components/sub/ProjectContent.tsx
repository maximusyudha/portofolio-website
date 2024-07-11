"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useScrollSlideInFromBottom } from "@/utils/motion"; // Pastikan path ini benar

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  const { ref, animation } = useScrollSlideInFromBottom(); 

  return (
    <motion.div
      ref={ref} 
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-[1348px] h-[300px]"
      variants={animation} 
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
          variants={animation}
        >
          {title}
        </motion.h1>
        <motion.p className="mt-2 mb-4 text-gray-300" variants={animation}> 
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
