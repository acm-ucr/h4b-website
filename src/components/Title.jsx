const Title = ({ text }) => {
  return (
    <div className="inset-0 flex justify-center items-top p-3">
      <h1 className="absolute font-omc text-biscuits-gray-200 text-6xl mb-4">
        {text}
      </h1>
      <h1 className="relative font-omc text-biscuits-gray-100 text-6xl mb-4 drop-shadow left-1 bottom-0.5">
        {text}
      </h1>
    </div>
  );
};

export default Title;
