import React, { useState, useEffect } from "react";
import "./Xmas.css";
import Tree from "./components/tree";
import Star from "./components/star";

const Xmas = () => {
  const [canTrans, setCanTrans] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const handleTap = (event, info) => {
    if (!canTrans) {
      return;
    }
    setCanTrans(false);
    setIsVisible(true);
  };

  useEffect(() => {
    if (!canTrans) {
      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    }
    if (isVisible) {
      setTimeout(() => {
        setCanTrans(true);
      }, 8400);
    }
  }, [isVisible, canTrans]);

  return (
    <div className="Xmas">
      <Star handleTap={handleTap} />
      <Tree isVisible={isVisible} />
    </div>
  );
};

export default Xmas;
