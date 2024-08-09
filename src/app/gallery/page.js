"use client";
import useView from "@/components/useView";
import React from "react";
import Image from "next/image";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import Hoverable from "@/components/gallery/Hoverable";
import { quarterlyEvents } from "@/data/gallery/QuarterlyEvents";
import Tabling1 from "@/public/images/tabling/tabling_1.webp";
import Tabling2 from "@/public/images/tabling/tabling_2.webp";
import Tabling3 from "@/public/images/tabling/tabling_3.webp";
import PastEvent from "@/public/images/past/past_3.webp";

const Page = () => {
  const [inView, ref] = useView();
  return (
    <div className="bg-blobs1 md:bg-cover bg-contain bg-biscuits-green-100 min-h-screen p-7 w-full flex flex-col items-center">
      <div
        className={`${inView && "animate-fade-up"} flex justify-center mb-10`}
      >
        <Title text="Gallery" food="chip" />
      </div>

      <div className={`${inView && "animate-fade-right animate-once"} mb-14`}>
        <div className="mb-10 flex justify-center">
          <Subtitle text="Food Tabling" color="text-biscuits-green-200" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 place-items-center">
          <Image src={Tabling1} alt="Tabling" />
          <Image src={Tabling2} alt="Tabling" />
          <Image src={Tabling3} alt="Tabling" />
        </div>
      </div>

      <div
        ref={ref}
        className={`${inView && "animate-fade-left animate-once"}mb-20`}
      >
        <div className="mb-10 flex justify-center">
          <Subtitle text="Quarterly Events" color="text-biscuits-green-200" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 place-items-center text-black">
          {quarterlyEvents.map((QuarterlyEvents, index) => (
            <Hoverable
              key={index}
              link={QuarterlyEvents.link}
              image={QuarterlyEvents.photo}
              text={QuarterlyEvents.title}
            />
          ))}
        </div>
      </div>

      <div className={`${inView && "animate-flip-up animate-once"} mb-14`}>
        <div className="mb-10 flex justify-center">
          <Subtitle text="Past Events" color="text-biscuits-green-200" />
        </div>
        <div className="text-textColor">
          <Hoverable
            link="/gallery/past"
            image={PastEvent}
            text="Past Events"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
