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
    <div className="flex xl:flex-row flex-col items-center justify-between relative">
      <div className="font-bold flex justify-center items-center gap-3 text-5xl xl:text-6xl ">
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
      <Title text="Calendar of Events" color="purple" />
      <div className="font-fredoka font-semibold m-0 md:p-0 flex xl:flex-col md:flex-row flex-col">
        {filters.map((filter, index) => (
          <div key={index} xs={9} sm={3} className="p-1">
            <p
              className={`${filter.color} rounded-xl p-1 mb-1 px-12 text-center md:text-lg text-sm`}
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
