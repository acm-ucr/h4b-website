import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-svh	bg-biscuits-purple-200">
      <div className="w-[70%] h-[50%] shadow-2xl shadow-black">
        <div className="bg-biscuits-brown-100 w-full h-14 rounded-t-lg flex justify-end items-center px-4 space-x-5">
          <div className="bg-green-500 rounded-full w-5 h-5"></div>
          <div className="bg-yellow-500 rounded-full w-5 h-5"></div>
          <div className="bg-red-500 rounded-full w-5 h-5"></div>
        </div>
        <div className="bg-biscuits-peach rounded-b-lg pb-7 h-full flex flex-col items-center justify-center">
          <div className=" flex justify-center">
            <Title text="Error" color="red" />
            <Title text="4O4" />
          </div>
          <Subtitle text="Page not found" color={"text-biscuits-red-200"} />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
