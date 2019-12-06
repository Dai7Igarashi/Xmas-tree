import * as React from "react";
import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./star.css";

export const Star = () => {
  return (
    <motion.div
      className="star-container"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      onTap={() => {
        console.log("Taped");
      }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        initial={{ rotate: 0 }}
        animate={{
          rotate: [-45, 40, -35, 30, -25, 20, -15, 10, -5, 3, -2, 1, 0]
        }}
        transition={{
          delay: 1.5,
          type: "spring",
          loop: Infinity,
          repeatDelay: 2,
          duration: 1.3
        }}
      >
        <path
          d="M32.3 16.23L48.52 18.75L36.81 31.25L39.51 49.26L25 40.63L10.68 48.96L12.5 31.25L1.37 18.75L17.89 16.23L25 0L32.3 16.23Z"
          stroke="yellow"
          strokeWidth="1"
          strokeLinecap="round"
          fill="yellow"
        />
      </motion.svg>
    </motion.div>
  );
};
