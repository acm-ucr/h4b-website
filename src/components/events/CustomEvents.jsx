import React from "react";
import { COLORS } from "@/data/events/Color";

const CustomEvent = ({ event }) => {
  const getStyle = () => {
    if (event.summary.toLowerCase().includes("tabling")) {
      return COLORS["tabling"].event;
    } else if (event.summary.toLowerCase().includes("resources")) {
      return COLORS["resources"].event;
    }
    return "bg-biscuits-orangeEvent";
  };

  return (
    <div className={`rounded-lg p-2 mb-2 ${getStyle()}`}>
      <p className="truncate text-center md:text-xl text-sm font-fredoka font-semibold text-black">
        {event.summary}
      </p>
    </div>
  );
};

export default CustomEvent;
