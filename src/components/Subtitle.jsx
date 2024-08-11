"use client";
import React from "react";
import useView from "./useView";

const Subtitle = ({ color, text }) => {
  const [inView, ref] = useView();
  return (
    <div
      ref={ref}
      className={`my-2 font-bold font-shrikhand text-center text-4xl md:text-7xl ${color} ${
        inView
          ? `animate-fade-up animate-once animate-duration-[1500ms] animate-ease-linear`
          : ""
      }`}
    >
      {text}
    </div>
  );
};

export default Subtitle;
