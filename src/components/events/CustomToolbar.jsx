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

const filters = [
  {
    topic: "H4B Food Tabling",
    color: "bg-biscuits-pinkTabling",
  },
  {
    topic: "H4B Events",
    color: "bg-biscuits-orangeEvent",
  },
  {
    topic: "Food Resources",
    color: "bg-biscuits-blueResources",
  },
];

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
      <div className="font-inika font-bold absolute right-[5%] m-0 p-0 flex flex-col">
        {filters.map((filter, index) => (
          <div key={index} xs={9} sm={3} className="p-1">
            <p
              className={`${filter.color} rounded-xl p-1 mb-1 px-12 text-center text-sm`}
            >
              {filter.topic}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomToolbar;
