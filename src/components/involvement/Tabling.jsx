import { TABLING } from "@/data/involve/Tabling";
import Picture from "../Picture";
import Subtitle from "../Subtitle";
import tabling1 from "@/public/images/tabling/tabling_1.webp";
import tabling4 from "@/public/images/tabling/tabling_4.webp";

const Tabling = () => {
  return (
    <div className="flex flex-col items-center gap-y-8">
      <Subtitle
        className="w-3/4"
        color="text-biscuits-brown-200"
        text="How to Table"
      />

      <Picture x={20} y={20} image={tabling1} className="w-3/4 mx-auto" />
      <ul className="font-inika text-lg md:text-2xl list-decimal px-8 w-full md:px-0 md:w-3/4">
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
