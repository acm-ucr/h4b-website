"use client";
import { useState } from "react";

const Item = ({ question, answer }) => {
  const [clicked, setClicked] = useState(false);

  const toggleAnswer = () => {
    setClicked(!clicked);
  };

  return (
    <div
      className="bg-biscuits-orange w-full p-4 rounded font-inika cursor-pointer"
      onClick={toggleAnswer}
    >
      <div className="text-biscuits-brown-200 font-bold  text-lg md:text-3xl">
        {question}
      </div>
      <div className={`mt-2 ${clicked ? "" : "hidden"} text-black md:text-xl`}>
        {answer}
      </div>
    </div>
  );
};

export default Item;
