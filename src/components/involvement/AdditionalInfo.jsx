import React from "react";
import Button from "../Button";
const AdditionalInfo = () => {
  const name = "Info";
  return (
    <div className="p-8 text-center flex flex-col items-center gap-y-10">
      <div className="text-6xl font-normal text-biscuits-brown-200 font-shrikhand">
        Additional {name}
      </div>
      <div className="text-2xl text-center font-inika font-normal">
        Since a H4B board member will accompany you, we kindly ask for no more
        than one person per time slot.
      </div>
      <Button
        text="SIGN UP"
        link="https://docs.google.com/forms/d/e/1FAIpQLSduexmqB7bXaydEKOG5h7GjIwLGRVT0FdIqyYBE4WzyNO2k2g/viewform"
      />
      <div className="text-2xl flex justify-center font-inika font-normal">
        Here are some talking points while tabling
      </div>
      <Button
        text="DOCS"
        link="https://docs.google.com/document/d/1tp1QWfc2W1Jh8vkc32TeL17PM5dYtjgMGbx7VrPZpkY/edit?usp=sharing"
      />
    </div>
  );
};

export default AdditionalInfo;
