import React from "react";
import Image from "next/image";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import Hoverable from "@/components/gallery/Hoverable";
import { quarterlyEvents } from "@/data/gallery/QuarterlyEvents";

const Page = () => {
  return (
    <div className="bg-green-100 min-h-screen p-8 w-full flex flex-col items-center">
      <div className="flex justify-center mb-10">
        <Title text="Gallery" food="chip" color="biscuits-grey-100" />
      </div>

      <div className="mb-14">
        <div className="mb-10">
          <Subtitle text="Food Tabling" color="green" />
        </div>

        <div className="grid grid-cols-3 gap-12 place-items-center">
          <Image
            src="/images/fall/fall23_2.webp"
            alt="Food 1"
            width={406}
            height={406}
          />
          <Image
            src="/images/fall/fall23_2.webp"
            alt="Food 2"
            width={406}
            height={406}
          />
          <Image
            src="/images/fall/fall23_2.webp"
            alt="Food 3"
            width={406}
            height={406}
          />
        </div>
      </div>

      <div className="mb-14">
        <div className="mb-10">
          <Subtitle text="Quarterly Events" color="green" />
        </div>

        <div className="grid grid-cols-3 gap-4 place-items-center">
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

      <div>
        <Subtitle text="Past Event" color="green" />
        <Hoverable link="/past-event">
          <Image
            src="/images/fall/fall23_2.webp"
            alt="Past Event"
            width={1297}
            height={305}
          />
        </Hoverable>
      </div>
    </div>
  );
};

export default Page;
