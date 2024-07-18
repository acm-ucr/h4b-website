const UpcomingCard = ({
  month = "FEB",
  date = "19",
  time = "8PM",
  event = "Tabling Event",
  location = "Location",
  description = "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
}) => {
  return (
    <div>
      <div className="grid grid-cols-3 border-2 border-biscuits-purple-200 rounded-3xl">
        <div className="grid bg-biscuits-purple-100 items-center justify-center rounded-l-3xl text-white py-3">
          <p className="text-3xl text-center font-omc">{month}</p>
          <p className="text-5xl text-center font-omc">{date}</p>
          <p className="text-lg text-center font-omc">{time}</p>
        </div>
        <div className="bg-white rounded-r-3xl col-span-2 p-3">
          <p className="text-2xl font-omc">{event}</p>
          <p className="text-m font-omc">{location}</p>
          <p className="text-sm ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCard;
