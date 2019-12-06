import React, { useState } from "react";
import "./Xmas.css";
import Tree from "./components/tree";
import Star from "./components/star";

const Xmas = () => {
  const [isDraw, setIsDraw] = useState(false);
  const handleTap = (event, info) => {};
  return (
    <div className="Xmas">
      <Star />
      <Tree isDraw={isDraw} />
    </div>
  );
};

export default Xmas;
