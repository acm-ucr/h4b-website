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
      <div className="flex flex-row rounded-3xl">
        <div className="bg-biscuits-purple-100 items-center rounded-l-3xl justify-center text-white text-shadow shadow-biscuits-purple-200 py-3 w-1/3">
          <div className="text-3xl md:text-5xl text-center font-omc">
            {month}
          </div>
          <div className="text-5xl md:text-7xl text-center font-omc">
            {date}
          </div>
          <div className="text-2xl md:text-4xl text-center font-omc">
            {time}
          </div>
        </div>
        <div className="flex flex-col bg-white w-3/4 rounded-r-3xl text-left pl-5 justify-center">
          <div className="text-3xl md:text-5xl font-omc">{event}</div>
          <div className="text-sm md:text-m font-omc">{location}</div>
          <div className="text-xs md:text-sm ">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCard;
