"use client";

import Image from "next/image";
import { motion } from "motion/react";

const Photo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="relative h-[260px] w-[260px] md:h-[270px] md:w-[270px] lg:h-[350px] lg:w-[350px]"
      >
        {/* Photo */}
        <Image
          fill
          priority
          alt="Andrés"
          quality={100}
          src="/assets/Andrés.png"
          sizes="(max-width: 767px) 260px, (max-width: 1023px) 270px, 350px"
          className="object-contain rounded-full mix-blend-lighten"
        />

        {/* Animated circle */}
        <motion.svg
          fill="transparent"
          viewBox="0 0 508 508"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0"
        >
          <motion.circle
            cx="254"
            cy="254"
            r="252"
            stroke="#00FFFF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
};

export default Photo;
