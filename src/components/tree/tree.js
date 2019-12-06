import * as React from "react";
import { motion } from "framer-motion";
import "./tree.css";

export const Tree = ({ isVisible }) => {
  const body = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(2, 135, 96, 0)",
      transition: {
        duration: 3.3,
        ease: "anticipate",
        fill: { duration: 3.5 }
      }
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(2, 135, 96, 1)",
      transition: {
        duration: 2,
        ease: "easeInOut",
        fill: { duration: 3 }
      }
    }
  };
  const base = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(115, 78, 48, 0)",
      transition: {
        duration: 3.5,
        ease: "anticipate",
        fill: { duration: 3.8 }
      }
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(115, 78, 48, 1)",
      transition: {
        duration: 2,
        ease: "easeInOut",
        fill: { duration: 3 }
      }
    }
  };
  return (
    <div className="tree-container">
      <motion.svg
        className="tree-body"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 234 222"
      >
        <motion.path
          className="tree-body-stroke"
          d="M140.93 32.47L154.78 49.39L168.57 66.88L177.28 76.47L147.28 76.47L156.16 90.01L167.44 103.9L183.23 123.85L199.78 140.21L213.13 150.93L177.28 150.93L184.78 164.46L197.9 182.65L217.08 205.15L234 222L0.48 222L19.78 202.26L42.28 174.05L58.57 150.93L21.35 150.93L32.63 141.9L46.73 127.8L63.09 108.62L76.06 92.65L87.28 75.91L57.28 75.91L73.8 57.29L88.47 38.11L117.28 -0.24L140.93 32.47Z"
          variants={body}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
      </motion.svg>
      <motion.svg
        className="tree-base"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 43 66"
      >
        <motion.path
          className="tree-base-stroke"
          d="M33.16 0L43 66.35L0.38 66.35L10.21 0L33.16 0Z"
          variants={base}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        />
      </motion.svg>
    </div>
  );
};
