"use client";
import useView from "@/components/useView";
import React from "react";
import Image from "next/image";

const GalleryImage = ({ src, alt }) => {
  const [inView, ref] = useView();

  return (
    <div
      ref={ref}
      className={`${
        inView && "animate-fade-down animate-once"
      } transition-transform duration-100 ease-in-out`}
    >
      <Image src={src} alt={alt} />
    </div>
  );
};

export default GalleryImage;
