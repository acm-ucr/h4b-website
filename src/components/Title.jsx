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
    <div className="flex flex-row w-fit justify-center self-center">
      <div
        className={`md:text-shadow text-shadow-sm ${darkColor} font-omc text-5xl lg:text-8xl sm:text-6xl mb-2 drop-shadow left-1 bottom-0.5 ${lightColor} text-center`}
      >
        {text}
      </div>

      {food && COOKIES[food] && (
        <div className="ml-2 md:flex items-center hidden">
          <Image
            src={COOKIES[food]}
            alt={`${food} cookies`}
            className="w-16 h-16"
          />
        </div>
      )}
    </div>
  );
};

export default Title;
