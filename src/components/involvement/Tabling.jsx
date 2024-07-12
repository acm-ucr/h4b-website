import { TABLING } from "@/data/involve/Tabling";
import Picture from "../Picture";
import example from "@/public/images/example.webp";

const Tabling = () => {
  return (
    <div className="flex w-screen flex-col">
      <p className="text-biscuits-brown-200 font-normal font-shrikhand text-6xl">
        How to Table
      </p>

      <Picture x={20} y={20} image={example} className="float-right" />

      {TABLING.map((tabling, index) => (
        <div key={index} className="flex flex-row font-inika text-2xl">
          <p className="font-bold">{tabling.number} </p>
          <p>{tabling.bullet}</p>
        </div>
      ))}
    </div>
  );
};

export default Tabling;
