import React from "react";

const Subtitle = ({ color, text, animate, animationClass, delay }) => {
  return (
    <div
      className={`my-2 font-bold font-shrikhand text-center text-4xl md:text-7xl ${color} ${
        animate ? `${animationClass} animate-delay-${delay}` : ""
      }`}
    >
      {text}
    </div>
  );
};

export default Subtitle;
