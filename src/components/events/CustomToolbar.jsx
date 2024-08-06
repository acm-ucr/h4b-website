import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import Title from "@/components/Title";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const mapToNum = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sept: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12",
};

const CustomToolbar = (event) => {
  return (
    <div className="flex items-center justify-center w-full text-5xl xl:text-6xl text-center relative h-60 md:h-80 xl:h-52">
      <div className="font-bold flex justify-center items-center gap-3 py-12 absolute left-[50%] translate-x-[-50%] -top-7 xl:left-0 xl:translate-x-0 xl:top-0">
        <ImArrowLeft
          onClick={() => {
            event.onNavigate("PREV");
          }}
          className="hover:cursor-pointer hover:opacity-50 duration-300 text-4xl text-biscuits-purple-200"
        />
        <div>
          <div className="font-shrikhand text-biscuits-purple-100 text-shadow shadow-biscuits-gray-200">
            {mapToNum[monthNames[event.date.getMonth()]]}
          </div>
          <div className="font-shrikhand text-biscuits-purple-100 text-shadow shadow-biscuits-gray-200">
            {event.date.getFullYear().toString().substr(2, 4)}
          </div>
        </div>
        <ImArrowRight
          onClick={() => {
            event.onNavigate("NEXT");
          }}
          className="hover:cursor-pointer hover:opacity-50 duration-300 text-4xl text-biscuits-purple-200"
        />
      </div>
      <div className="absolute top-28 xl:top-[50%] xl:left-[50%] xl:translate-x-[-50%] xl:translate-y-[-50%]">
        <Title text="Calendar of Events" color="purple" />
      </div>
    </div>
  );
};

export default CustomToolbar;
