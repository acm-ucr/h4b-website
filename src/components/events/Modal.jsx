import { IoMdClose } from "react-icons/io";
import { COLORS } from "@/data/events/Color";

const Modal = ({
  title = "Event Title",
  startTime,
  endTime,
  location = "No Location Specified",
  description = "No Description Specified",
  setEvents,
}) => {
  const getStyle = () => {
    if (title.toLowerCase().includes("tabling")) {
      return COLORS["tabling"].modal;
    } else if (title.toLowerCase().includes("resources")) {
      return COLORS["resources"].modal;
    }
    return "border-biscuits-orangeEvent";
  };
  return (
    <div
      className={`flex-col p-6 fixed rounded-3xl border-8 md:w-1/3 w-11/12 bg-white ${getStyle()} z-50 top-[45%] md:translate-x-2/3 -translate-x-5`}
    >
      <button
        onClick={() => setEvents(null)}
        className="absolute top-6 right-6 hover:scale-110 duration-150 text-2xl"
      >
        <IoMdClose />
      </button>
      <div className="text-4xl mb-2 font-bold">{title}</div>
      <ul className="list-disc marker:text-2xl list-inside">
        <li>
          Start: {startTime.toLocaleTimeString().split(":")[0]}{" "}
          {startTime.toLocaleTimeString().split(":")[2].split(" ")[1]}
        </li>
        <li>
          End: {endTime.toLocaleTimeString().split(":")[0]}{" "}
          {endTime.toLocaleTimeString().split(":")[2].split(" ")[1]}
        </li>
        <li>{location}</li>
        <li>{description}</li>
      </ul>
    </div>
  );
};

export default Modal;
