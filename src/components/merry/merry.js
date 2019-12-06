import * as React from "react";
import { motion } from "framer-motion";
import "./merry.css";

export const Merry = ({ isVisible }) => {
  const merry = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 3.3,
        ease: "anticipate",
        fill: { duration: 3.5 }
      }
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        fill: { duration: 3 }
      }
    }
  };
  return (
    <div className="merry-container">
      <motion.span
        className="merry-inner"
        variants={merry}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        Merry X'mas
      </motion.span>
    </div>
  );
};
