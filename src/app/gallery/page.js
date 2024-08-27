"use client";
import useView from "@/components/useView";
import React from "react";
import Title from "@/components/Title";
import TablingEvents from "@/components/gallery/TablingEvents";
import QuarterlyEvents from "@/components/gallery/QuarterlyEvents";
import ExtraPhotos from "@/components/gallery/ExtraPhotos";

const Page = () => {
  const [inView, ref] = useView();
  return (
    <div className="bg-blobs1 lg:bg-cover bg-contain bg-biscuits-green-100 py-[2%] px-7 w-full flex flex-col items-center justify-center gap-y-8">
      <Title
        text="Gallery"
        food="chip"
        ref={ref}
        className={`${inView && "animate-fade-up"} flex justify-center mb-10`}
      />

      <TablingEvents />
      <QuarterlyEvents />
      <ExtraPhotos />
    </div>
  );
};

export default Page;
