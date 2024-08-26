import React from "react";

const CustomHeader = ({ label }) => {
  return (
    <div className="font-bold font-shrikhand text-center text-sm 2xl:text-3xl 2xl:py-3 py-2 uppercase text-biscuits-purple-200 bg-transparent">
      {label}
    </div>
  );
};

export default CustomHeader;
