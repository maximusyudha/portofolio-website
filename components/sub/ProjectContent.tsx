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
  const { ref, animation } = useScrollSlideInFromBottom(); // Gunakan hook di sini

  return (
    <motion.div
      ref={ref} // Terapkan ref di sini
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
      variants={animation} // Gunakan objek animation sebagai variants
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
          variants={animation} // Terapkan animation pada elemen ini jika diperlukan
        >
          {title}
        </motion.h1>
        <motion.p className="mt-2 mb-4 text-gray-300" variants={animation}> // Terapkan animation pada elemen ini jika diperlukan
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
