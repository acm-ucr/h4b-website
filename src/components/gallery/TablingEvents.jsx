"use client";
import Image from "next/image";
import Subtitle from "@/components/Subtitle";
import Tabling1 from "@/public/images/tabling/tabling_1.webp";
import Tabling2 from "@/public/images/tabling/tabling_2.webp";
import Tabling3 from "@/public/images/tabling/tabling_3.webp";
import useView from "@/components/useView";

const TablingEvents = () => {
  const [inView, ref] = useView();
  return (
    <div>
      <Subtitle text="Food Tabling" color="text-biscuits-green-200" />
      <div
        ref={ref}
        className={`${
          inView && "animate-fade-right animate-once"
        } mb-14 pt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 place-items-center`}
      >
        <Image src={Tabling1} alt="Tabling" />
        <Image src={Tabling2} alt="Tabling" />
        <Image src={Tabling3} alt="Tabling" />
      </div>
    </div>
  );
};

export default TablingEvents;
