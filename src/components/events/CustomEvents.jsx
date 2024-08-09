import React from "react";

const CustomEvent = ({ event }) => {
  const getColorClass = () => {
    if (event.summary.includes("Tabling")) {
      return "bg-biscuits-pinkTabling";
    }
    if (event.summary.includes("Event")) {
      return "bg-biscuits-orangeEvent";
    }
    return "bg-biscuits-blueResources";
  };

  return (
    <div className={`rounded-lg p-2 mb-2 ${getColorClass()}`}>
      <p className="text-black truncate text-center text-sm font-shrikhand">
        {event.summary}
      </p>
    </div>
  );
};

export default CustomEvent;
