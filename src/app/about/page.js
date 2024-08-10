"use client";
import React, { useEffect, useRef, useState } from "react";
import springPicture from "@/public/images/spring/spring24_9.webp";
import { ABOUT } from "@/data/aboutPage";
import Title from "@/components/Title";
import Picture from "@/components/Picture";
import Subtitle from "@/components/Subtitle";

const Page = () => {
  const [animationStates, setAnimationStates] = useState(
    ABOUT.map(() => ({ subtitle: false, paragraph: false }))
  );

  const refs = useRef([]);

  useEffect(() => {
    const localRefs = refs.current; // Copy the refs to a local variable

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = localRefs.indexOf(entry.target);
          if (index !== -1) {
            setAnimationStates((prevStates) =>
              prevStates.map((state, i) => ({
                subtitle: i === index ? entry.isIntersecting : state.subtitle,
                paragraph: i === index ? entry.isIntersecting : state.paragraph,
              }))
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    localRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      localRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Animation classes with delays
  const baseAnimationClass =
    "animate-fade-up animate-once animate-duration-[1000ms] animate-ease-out";
  const subtitleAnimationClass = `${baseAnimationClass} animate-delay-0`;
  const paragraphAnimationClass = `${baseAnimationClass} animate-delay-500`;

  return (
    <div className="bg-biscuits-green-100 flex flex-col items-center gap-y-10 p-4 md:p-10">
      <Title text="About Us" color="red" />
      <Picture
        classname="flex justify-center"
        x={10}
        y={10}
        image={springPicture}
        alt="Spring 24 Picture"
      />
      {ABOUT.map((section, index) => (
        <div
          key={index}
          ref={(el) => (refs.current[index] = el)}
          className="mb-8 text-center"
        >
          <div
            className={`my-2 font-bold font-shrikhand text-center text-4xl md:text-7xl ${
              animationStates[index].subtitle ? subtitleAnimationClass : ""
            }`}
          >
            <Subtitle color="text-biscuits-green-200" text={section.subtitle} />
          </div>
          <div
            className={`md:text-2xl text-base font-inika md:w-2/3 w-10/12 mx-auto ${
              animationStates[index].subtitle
                ? `${paragraphAnimationClass}`
                : ""
            }`}
          >
            {section.paragraph}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
