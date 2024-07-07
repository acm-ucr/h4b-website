"use client";
import { useState } from "react";

const Item = ({ question, answer }) => {
  const [clicked, setClicked] = useState("");
  const onClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="bg-biscuits-orange w-full pl-2 pt-2 pb-2 rounded font-inika">
      <div
        className="text-biscuits-brown-200 font-bold cursor-pointer text-xl md:text-3xl"
        onClick={onClick}
      >
        {question}
      </div>
      <div className={`${clicked ? "" : "hidden"} text-black pl-3 md:text-xl`}>
        {answer}
      </div>
    </div>
  );
};

export default Item;
