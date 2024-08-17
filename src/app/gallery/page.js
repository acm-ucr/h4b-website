"use client";
import useView from "@/components/useView";
import React from "react";
import Title from "@/components/Title";
import TablingEvents from "@/components/gallery/TablingEvents";
import QuarterlyEvents from "@/components/gallery/QuarterlyEvents";
import PastEvents from "@/components/gallery/PastEvents";

const Page = () => {
  const [inView, ref] = useView();
  return (
    <div className="bg-blobs1 md:bg-cover bg-contain bg-biscuits-green-100 min-h-screen p-7 w-full flex flex-col items-center">
      <div
        ref={ref}
        className={`${inView && "animate-fade-up"} flex justify-center mb-10`}
      >
        <Title text="Gallery" food="chip" />
      </div>

      <TablingEvents />
      <QuarterlyEvents />
      <PastEvents />
    </div>
  );
};

export default Page;
