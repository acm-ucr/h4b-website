"use client";
import React, { useRef, useEffect, useState } from "react";

const Subtitle = ({ color, text }) => {
  const ref = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setHasAnimated(true);
        } else {
          setHasAnimated(false); // Optionally reset animation state if not in view
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`my-2 font-bold font-shrikhand text-center text-4xl md:text-7xl ${color} ${
        hasAnimated
          ? "animate-fade-up animate-once animate-duration-[1500ms] animate-ease-linear"
          : ""
      }`}
    >
      {text}
    </div>
  );
};

export default Subtitle;
