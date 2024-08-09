"use client";
import React, { useState, useEffect } from "react";
import springPicture from "@/public/images/spring/spring24_9.webp";
import { ABOUT } from "@/data/aboutPage";
import Title from "@/components/Title";
import Picture from "@/components/Picture";
import Subtitle from "@/components/Subtitle";
import "animate.css/animate.min.css";
import { useInView } from "react-intersection-observer";

const Page = () => {
  // Create hooks for each section
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });
  // Continue for as many sections as needed

  const refs = [ref1, ref2, ref3];
  const inViews = [inView1, inView2, inView3];

  const [visibleIndex, setVisibleIndex] = useState(
    new Array(ABOUT.length).fill(false)
  );

  useEffect(() => {
    inViews.forEach((inView, index) => {
      if (inView) {
        setVisibleIndex((prev) => {
          const newVisible = [...prev];
          newVisible[index] = true;
          return newVisible;
        });
      }
    });
  }, [inViews]);

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
      {ABOUT.map((section, index) => {
        const ref = refs[index];

        return (
          <div key={index} className="mb-8 text-center">
            <Subtitle
              color="text-biscuits-green-200"
              text={section.subtitle}
              className={`${
                visibleIndex[index]
                  ? "animate__animated animate__fadeInDown animate__duration-1500ms animate__ease-linear"
                  : ""
              }`}
              ref={ref}
            />
            <div
              className={`md:text-2xl text-base font-inika md:w-2/3 w-10/12 mx-auto ${
                visibleIndex[index]
                  ? `animate__animated ${
                      index % 2 === 0
                        ? "animate__fadeInLeft"
                        : "animate__fadeInRight"
                    } animate__duration-1500ms animate__ease-linear`
                  : ""
              }`}
              ref={ref}
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
