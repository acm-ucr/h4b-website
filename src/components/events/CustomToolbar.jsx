import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

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

const CustomToolbar = (event) => {
  return (
    <div className=" text-5xl 2xl:text-6xl font-bold flex justify-center items-center gap-3 py-12 w-full">
      <BsArrowLeft
        onClick={() => {
          event.onNavigate("PREV");
        }}
        className="hover:cursor-pointer hover:opacity-50 duration-300 text-4xl"
      />
      <p className="text-swim-blue-200">{monthNames[event.date.getMonth()]}</p>
      <p className="text-swim-blue-200"> {event.date.getFullYear()}</p>
      <BsArrowRight
        onClick={() => {
          event.onNavigate("NEXT");
        }}
        className="hover:cursor-pointer hover:opacity-50 duration-300 text-4xl"
      />
    </div>
  );
};

export default CustomToolbar;
