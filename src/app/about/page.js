"use client";
import React from "react";
import springPicture from "@/public/images/spring/spring24_9.webp";
import { ABOUT } from "@/data/aboutPage";
import Title from "@/components/Title";
import Picture from "@/components/Picture";
import Subtitle from "@/components/Subtitle";
import useView from "@/components/useView";

const Page = () => {
  const [inView, ref] = useView();

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
      <div ref={ref} className={ANIMATION HERE}>
      {ABOUT.map((section, index) => {
        // Base animation class for both Subtitle and paragraphs
        const animationClass =
          "animate-fade-up animate-once animate-duration-[1500ms] animate-ease-linear";

        // Define delays to stagger animations
        const subtitleDelay = "animate-delay-0";
        const paragraphDelay = "animate-delay-500"; // Adjust this to your liking

        return (
          <div key={index} ref={ref} className="mb-8 text-center">
            <Subtitle
              color="text-biscuits-green-200"
              text={section.subtitle}
              animate={inView}
              animationClass={animationClass}
              delay={subtitleDelay}
            />
            <div
              className={`md:text-2xl text-base font-inika md:w-2/3 w-10/12 mx-auto ${
                inView ? `${animationClass} ${paragraphDelay}` : ""
              }`}
            >
              {section.paragraph}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
