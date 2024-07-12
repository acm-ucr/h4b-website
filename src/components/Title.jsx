import { COOKIES, COLORS } from "@/data/Title";
import Image from "next/image";

const Title = ({ text, food, color }) => {
  let lightColor = "text-biscuits-gray-100";
  let darkColor = "text-biscuits-gray-200";

  if (color && COLORS[color]) {
    lightColor = COLORS[color].light;
    darkColor = COLORS[color].dark;
  }

  return (
    <div className="flex flex-row justify-center">
      <div className="inset-0 flex justify-center items-top p-3">
        <div className={`absolute font-omc text-8xl mb-4 ${darkColor}`}>
          {text}
        </div>
        <div
          className={`relative font-omc text-8xl mb-2 drop-shadow left-1 bottom-0.5 ${lightColor}`}
        >
          {text}
        </div>
      </div>

      {food && COOKIES[food] && (
        <div className="ml-4">
          <Image
            src={COOKIES[food]}
            alt={`${food} cookies`}
            width={100}
            height={100}
          />
        </div>
      )}
    </div>
  );
};

export default Title;
