import React from "react";

const AdditionalInfo = () => {
  const name = "Info";
  return (
    <div className="bg-biscuits-peach p-8 text-center ">
      <div className="text-8xl font-normal text-biscuits-brown-200 mb-20 font-shrikhand">
        Additional {name}
      </div>
      <div className="text-2xl text-center mb-12 font-inika font-normal leading-10">
        Since a H4B board member will accompany you, we kindly ask for no more
        than one person per time slot.
      </div>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSduexmqB7bXaydEKOG5h7GjIwLGRVT0FdIqyYBE4WzyNO2k2g/viewform"
        target="_blank"
      >
        <button className="bg-biscuits-pink text-biscuits-brown-200 font-inika font-bold text-4xl py-2 px-20 rounded-full mb-24">
          SIGN UP
        </button>
      </a>
      <div className="text-2xl flex justify-center font-inika font-normal leading-10 mb-12">
        Here are some talking points while tabling
      </div>
      <a
        href="https://docs.google.com/document/d/1tp1QWfc2W1Jh8vkc32TeL17PM5dYtjgMGbx7VrPZpkY/edit?usp=sharing"
        target="_blank"
      >
        <button className="bg-biscuits-pink text-biscuits-brown-200 font-inika font-bold text-4xl py-2 px-24 rounded-full mb-24">
          DOCS
        </button>
      </a>
    </div>
  );
};

export default AdditionalInfo;
