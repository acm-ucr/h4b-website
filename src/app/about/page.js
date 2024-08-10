"use client";
import React from "react";
import springPicture from "@/public/images/spring/spring24_9.webp";
import { ABOUT } from "@/data/about/About";
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
      <div ref={ref}>
        {ABOUT.map((section, index) => {
          return (
            <div key={index} className="mb-8 text-center">
              <Subtitle
                color="text-biscuits-green-200"
                text={section.subtitle}
              />
              <div
                className={`md:text-2xl text-base font-inika md:w-2/3 w-10/12 mx-auto ${
                  inView
                    ? `animate-fade-up animate-once animate-duration-[1500ms] animate-ease-linear animate-delay-500`
                    : ""
                }`}
              >
                {section.paragraph}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
