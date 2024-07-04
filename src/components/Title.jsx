const Title = ({ text }) => {
  return (
    <div className="inset-0 flex justify-center items-top p-3">
      <div className="absolute font-omc text-biscuits-gray-200 text-8xl mb-4">
        {text}
      </div>
      <div className="relative font-omc text-biscuits-gray-100 text-8xl mb-4 drop-shadow left-1 bottom-0.5">
        {text}
      </div>
    </div>
  );
};

export default Title;
