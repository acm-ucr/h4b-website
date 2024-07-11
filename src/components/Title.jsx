import { COOKIES, COLORS } from "@/data/Title";

const Title = ({ text, food, color }) => {
  let lightColor = "biscuits-gray-100";
  let darkColor = "biscuits-gray-200";

  if (color && COLORS[color]) {
    lightColor = COLORS[color].light;
    darkColor = COLORS[color].dark;
  }

  return (
    <div className="inset-0 flex justify-center items-top p-3">
      <div
        className="absolute font-omc text-8xl mb-4"
        style={{ color: lightColor }}
      >
        {text}
      </div>
      <div
        className="relative font-omc text-8xl mb-2 drop-shadow left-1 bottom-0.5"
        style={{ color: darkColor }}
      >
        {text}
      </div>
      {food && COOKIES[food] && (
        <img src={COOKIES[food]} alt={`${food} cookies`} className="ml-4" />
      )}
    </div>
  );
};

export default Title;
