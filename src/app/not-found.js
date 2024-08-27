import Title from "@/components/Title";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center	bg-biscuits-purple-200 flex-1 overscroll-none">
      <div className="lg:w-1/2 w-11/12 h-[450px] shadow-2xl shadow-black">
        <div className="bg-biscuits-brown-100 w-full h-14 rounded-t-lg flex justify-end items-center px-4 space-x-5">
          <div className="bg-green-500 rounded-full w-5 h-5" />
          <div className="bg-yellow-500 rounded-full w-5 h-5" />
          <div className="bg-red-500 rounded-full w-5 h-5" />
        </div>
        <div className="bg-biscuits-peach rounded-b-lg pb-7 h-full flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center">
            <Title text="Error" color="red" />
            <Title text="4O4" color="red" />
          </div>
          <div className="text-biscuits-red-200 font-shrikhand md:text-6xl self-center text-2xl">
            Page Not Found
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
