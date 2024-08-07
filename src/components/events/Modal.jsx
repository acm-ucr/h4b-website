import { IoMdClose } from "react-icons/io";

const Modal = ({
  title = "Event Title",
  date = "Date",
  time = "Time",
  place = "Place",
  description = "No description provided.",
}) => {
  return (
    <div className="relative flex-col bg-opacity-55 p-6 rounded-3xl border-8 w-1/3 bg-white border-biscuits-blue-100 z-100">
      <button className="absolute top-6 right-6 hover:text-biscuits-blue-100 text-2xl">
        <IoMdClose />
      </button>
      <div className="text-2xl mb-2 font-bold">{title}</div>
      <ul className="list-none">
        <li className="flex items-center mb-1">
          <span className="w-3 h-3 bg-biscuits-blue-100 inline-block rounded-full mr-2"></span>
          {date}
        </li>
        <li className="flex items-center mb-1">
          <span className="w-3 h-3 bg-biscuits-blue-100 inline-block rounded-full mr-2"></span>
          {time}
        </li>
        <li className="flex items-center mb-1">
          <span className="w-3 h-3 bg-biscuits-blue-100 inline-block rounded-full mr-2"></span>
          {place}
        </li>
        <li className="flex items-center mb-1">
          <span className="w-3 h-3 bg-biscuits-blue-100 inline-block rounded-full mr-2"></span>
          {description}
        </li>
      </ul>
    </div>
  );
};

export default Modal;
