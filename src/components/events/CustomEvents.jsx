import React from "react";

const CustomEvent = ({ event }) => {
  const getColorClass = () => {
    if (event.title.includes("Tabling")) {
      return "bg-biscuits-pinkTabling";
    }
    if (event.title.includes("Event")) {
      return "bg-biscuits-orangeEvent";
    }
    return "bg-biscuits-blueResources";
  };

  const colorClass = getColorClass();

  return (
    <div className={`rounded-lg p-2 mb-2 ${colorClass}`}>
      <p className="text-black truncate text-center text-sm font-shrikhand">
        {event.title}
      </p>
    </div>
  );
};

export default CustomEvent;
