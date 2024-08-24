"use client";
import { TABLING } from "@/data/involve/Tabling";
import Picture from "../Picture";
import Subtitle from "../Subtitle";
import tabling5 from "@/public/images/tabling/tabling_5.webp";
import tabling4 from "@/public/images/tabling/tabling_4.webp";
import useView from "@/components/useView";

const Tabling = () => {
  const [inView, ref] = useView();
  return (
    <div
      ref={ref}
      className={`${
        inView && "animate-fade-right animate-duration-1000"
      } flex flex-col items-center gap-y-8 md:w-3/4`}
    >
      <Subtitle
        className="w-3/4"
        color="text-biscuits-brown-200"
        text="How to Table"
      />
      <Picture x={20} y={20} image={tabling5} className="w-3/4 mx-auto" />
      <ul className="font-inika text-lg md:text-2xl list-decimal px-8 md:px-0 ">
        {TABLING.map((tabling, index) => (
          <li key={index} className="my-8">
            {tabling}
          </li>
        ))}
      </ul>
      <Picture x={20} y={20} image={tabling4} className="w-3/4 mx-auto" />
    </div>
  );
};

export default Tabling;
