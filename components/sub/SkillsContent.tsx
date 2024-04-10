"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fillOut, slideInFromLeft } from "@/utils/motion";
import { useScrollSlideInFromBottom } from "@/utils/motion";

interface Props {
  src: string;
  title: string;

}

const SkillsCard = ({ src, title }: Props) => {
  const { ref, animation } = useScrollSlideInFromBottom();
  return (
    <motion.div
      ref={ref}
      variants={animation}
      className="relative overflow-hidden"
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
