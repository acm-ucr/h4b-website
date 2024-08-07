"use client";
import useView from "@/components/useView";
import Image from "next/image";
const Board = ({ name, role, yearMajor, funFact, picture }) => {
  const [inView, ref] = useView();
  return (
    <div className="flex-col text-center justify-center w-64 h-96 bg-biscuits-yellow shadow-[20px_-15px_0px_rgb(190,156,106)]">
      <Image
        src={picture}
        alt="picture"
        className="aspect-square object-center object-scale-down my-4 mx-10"
        width={180}
        height={100}
      />

      <div
        ref={ref}
        className={`text-biscuits-green-200 font-shrikhand text-3xl ${
          inView && "animate-fade-left animate-delay-400"
        }`}
      >
        {name}
      </div>

      <div
        ref={ref}
        className={`text-biscuits-green-200 font-omc text-xl ${
          inView && "animate-fade-right animate-delay-400"
        }`}
      >
        {role}
      </div>

      <div
        ref={ref}
        className={`text-biscuits-gray-200 font-inika p-1 -translate-y-3 font-bold text-sm ${
          inView && "animate-fade-left animate-delay-400"
        }`}
      >
        {yearMajor}
      </div>

      <div
        ref={ref}
        className={`text-biscuits-gray-200 font-inika p-1 -translate-y-3 font-bold text-sm ${
          inView && "animate-fade-left animate-delay-400"
        }`}
      >
        {funFact}
      </div>
    </div>
  );
};

export default Board;
