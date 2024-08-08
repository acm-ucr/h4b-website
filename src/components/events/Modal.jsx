import { IoMdClose } from "react-icons/io";

const Modal = ({
  title = "Event Title",
  startTime,
  endTime,
  location = "No Location Specified",
  description = "No Description Specified",
  setEvents,
}) => {
  return (
    <div className="flex-col p-6 fixed rounded-3xl border-8 w-1/3 bg-white border-biscuits-blue-100 z-50 top-[45%] translate-x-2/3">
      <button
        onClick={() => setEvents(null)}
        className="absolute top-6 right-6 hover:text-biscuits-blue-100 text-2xl"
      >
        <IoMdClose />
      </button>
      <div className="text-4xl mb-2 font-bold">{title}</div>
      <ul className="list-disc marker:text-biscuits-blue-100 marker:text-2xl list-inside">
        <li>Start: {startTime}</li>
        <li>End: {endTime}</li>
        <li>{location}</li>
        <li>{description}</li>
      </ul>
    </div>
  );
};

export default Modal;
