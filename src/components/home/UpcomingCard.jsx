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
        <div className="flex flex-col bg-white w-3/4 rounded-r-3xl text-left justify-center pl-2 md:pl-3 lg:pl-5">
          <div className="text-2xl sm:3xl md:4xl lg:text-5xl font-omc">
            {event}
          </div>
          <div className="text-sm sm:text-base md:lg lg:text-m font-omc">
            {location}
          </div>
          <div className="text-xs lg:text-sm ">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCard;
