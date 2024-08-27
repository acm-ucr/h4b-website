"use client";
import React from "react";
import useView from "./useView";

const Subtitle = ({ color, text }) => {
  const [inView, ref] = useView();
  return (
    <div
      ref={ref}
      className={`font-bold font-shrikhand text-center text-4xl md:text-6xl ${color} ${
        inView
          ? `animate-fade-up animate-once animate-duration-[300ms] animate-ease-linear`
          : ""
      }`}
    >
      {text}
    </div>
  );
};

export default Subtitle;
