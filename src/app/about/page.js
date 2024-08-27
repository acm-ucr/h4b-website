"use client";
import React from "react";
import springPicture from "@/public/images/spring/NewImg.webp";
import { ABOUT } from "@/data/about/About";
import Title from "@/components/Title";
import Picture from "@/components/Picture";
import Subtitle from "@/components/Subtitle";
import useView from "@/components/useView";
import Button from "@/components/Button";

const Page = () => {
  const [inView, ref] = useView();

  return (
    <div className="bg-biscuits-green-100 bg-blobs1 md:bg-cover bg-contain flex flex-col items-center gap-y-10 p-4 md:p-10">
      <Title text="About Us" color="red" />
      <Picture x={25} y={25} image={springPicture} alt="Spring 24 Picture" />
      <div ref={ref} className="w-full">
        {ABOUT.map((section, index) => {
          return (
            <div
              key={index}
              className={`mb-8 text-center ${
                inView
                  ? `animate-fade-up animate-duration-300 animate-ease-linear animate-delay-500`
                  : ""
              }`}
            >
              <Subtitle
                color="text-biscuits-green-200"
                text={section.subtitle}
              />
              <div className="mt-4 md:mt-6 text-lg md:text-xl font-inika md:w-2/3 w-10/12 mx-auto">
                {section.paragraph}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center w-full -mt-4 mb-8">
        <Button text="GET INVOLVED" link="/involve" />
      </div>
    </div>
  );
};

export default Page;
