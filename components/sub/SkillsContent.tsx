"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fillOut, slideInFromLeft } from "@/utils/motion";

interface Props {
  src: string;
  title: string;

}

const SkillsCard = ({ src, title }: Props) => {
  return (
    <motion.div
      className="relative overflow-hidden"
      variants={fillOut}
      initial="hidden"
      animate="visible"
    >
      <Image
        src={src}
        alt={title}
        width={100}
        height={300}
        className="w-full object-contain"
      />
    </motion.div>
  );
};

export default SkillsCard;
