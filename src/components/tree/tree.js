import * as React from "react";
import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./tree.css";

export const Tree = () => {
  const tree = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  };
  return (
    <div className="tree-container">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 240 360"
        className="tree-edge"
        variants={tree}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 2,
          ease: "easeInOut",
          loop: Infinity,
          repeatDelay: 2
        }}
      >
        <motion.path
          d="M105.64 60.26L107.18 42.82L96.41 31.03L112.82 30L120 13.59L128.21 30L142.56 32.56L131.28 43.85L134.36 60.26L123.08 55.13L147.69 87.95L162.05 106.92L179.49 125.9L150.26 126.92L174.36 160.26L198.46 186.41L213.85 200.77L179.49 200.77L196.41 225.9L216.92 250.51L235.38 271.03L131.28 271.03L141.03 337.98L98.97 336.15L108.72 269.49L5.13 269.49L31.28 242.31L44.62 224.36L61.03 200.77L26.15 200.77L42.56 186.41L58.97 167.95L76.41 147.95L90.77 126.92L61.03 126.92L73.85 111.54L92.31 87.95L120 51.54L105.64 60.26Z"
          variants={tree}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 2,
            ease: "easeInOut",
            fill: { duration: 2, yoyo: Infinity },
            yoyo: Infinity,
            repeatDelay: 1
          }}
        />
      </motion.svg>
    </div>
  );
};
