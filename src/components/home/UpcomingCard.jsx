const UpcomingCard = ({ month, date, time, event, location, description }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-x-2 border-2 border-biscuits-purple-200  rounded-3xl">
        <div className="grid bg-biscuits-purple-100 items-center justify-center rounded-l-3xl text-white">
          <p className="text-3xl text-center font-omc">{month}</p>
          <p className="text-5xl text-center font-omc">{date}</p>
          <p className="text-lg text-center font-omc">{time}</p>
        </div>
        <div className="col-span-2">
          <p className="text-2xl font-omc">{event}</p>
          <p className="text-m font-omc">{location}</p>
          <p className="text-sm ">{description}</p>
        </div>
      </div>
    </div>
  );
};

UpcomingCard.defaultProps = {
  month: "FEB",
  date: "19",
  time: "8PM",
  event: "Tabling Event",
  location: "Location",
  description:
    "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
};

export default UpcomingCard;
