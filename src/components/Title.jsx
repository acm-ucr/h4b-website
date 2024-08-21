import { COOKIES, COLORS } from "@/data/Title";
import Image from "next/image";

const Title = ({ text, food, color }) => {
  let lightColor = "text-biscuits-gray-100";
  let darkColor = "shadow-biscuits-gray-200";

  if (color && COLORS[color]) {
    lightColor = COLORS[color].light;
    darkColor = COLORS[color].dark;
  }

  return (
    <div className="flex flex-row justify-center">
      <div className="inset-0 flex justify-center items-top p-3">
        <div
          className={`text-shadow ${darkColor} font-omc text-5xl md:text-8xl mb-2 drop-shadow left-1 bottom-0.5 ${lightColor} text-center`}
        >
          {text}
        </div>
      </div>

      {food && COOKIES[food] && (
        <div className="ml-2 flex items-center">
          <Image
            src={COOKIES[food]}
            alt={`${food} cookies`}
            width={100}
            height={100}
            className="w-12 h-12 md:w-24 md:h-24"
          />
        </div>
      )}
    </div>
  );
};

export default Title;
