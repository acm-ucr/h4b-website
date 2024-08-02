import { IoMdClose } from "react-icons/io";

const Bullet = ({ item }) => (
  <li className="flex items-center mb-1">
    <span className="w-3 h-3 bg-biscuits-blue-100 inline-block rounded-full mr-2"></span>
    {item}
  </li>
);

const Modal = ({ title, date, time, place, description }) => {
  return (
    <div className="relative flex-col bg-opacity-55 p-6 rounded-3xl border-8 w-1/4 bg-white border-biscuits-blue-100">
      <button className="absolute top-6 right-6 hover:text-biscuits-blue-100 text-2xl">
        <IoMdClose />
      </button>
      <div className="text-xl mb-2 font-bold">{title}</div>
      <ul className="list-none">
        <Bullet item={date} />
        <Bullet item={time} />
        <Bullet item={place} />
        <Bullet item={description} />
      </ul>
    </div>
  );
};

Modal.defaultProps = {
  title: "Event Title",
  date: "Date",
  time: "Time",
  place: "Place",
  description: "No description provided.",
};

export default Modal;
