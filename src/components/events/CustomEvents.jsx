import React from "react";

const categoryColors = {
  "H4B Food Tabling": "#FFDDE7", // pink
  "H4B Events": "#FFC679 ", // orange
  "Food Resources": "#4A90E2", // Blue
};

const CustomEvent = ({ event }) => {
  const getColor = () => {
    if (event.title.includes("Tabling")) {
      return categoryColors["H4B Food Tabling"];
    }
    if (event.title.includes("Event")) {
      return categoryColors["H4B Events"];
    }
    return categoryColors["Food Resources"];
  };

  const backgroundColor = getColor();

  return (
    <div
      className="border-2 rounded-2xl p-4 mb-4"
      style={{ backgroundColor, borderColor: backgroundColor }}
    >
      <p className="text-black truncate text-center font-shrikhand">
        {event.title}
      </p>
    </div>
  );
};

export default CustomEvent;
