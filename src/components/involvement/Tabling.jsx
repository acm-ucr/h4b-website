import { TABLING } from "@/data/involve/Tabling";
import Picture from "../Picture";
import Subtitle from "../Subtitle";
import tabling1 from "@/public/images/tabling/tabling_1.webp";
import tabling4 from "@/public/images/tabling/tabling_4.webp";

const Tabling = () => {
  return (
    <div className="flex w-3/4 flex-col items-center gap-y-8">
      <Subtitle color="text-biscuits-brown-200" text="How to Table" />

      <Picture x={20} y={20} image={tabling1} className="px-4 my-4" />
      <ul className="font-inika text-2xl list-decimal">
        {TABLING.map((tabling, index) => (
          <li key={index} className="my-8">
            {tabling}
          </li>
        ))}
      </ul>

      <Picture x={20} y={20} image={tabling4} className="px-4 my-4" />
    </div>
  );
};

export default Tabling;
