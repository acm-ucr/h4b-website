"use client";
const Subtitle = ({ color, text }) => {
  return (
    <div
      className={`font-bold font-shrikhand text-center text-4xl lg:text-6xl ${color}`}
    >
      {text}
    </div>
  );
};

export default Subtitle;
