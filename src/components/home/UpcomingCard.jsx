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
      <div className="flex flex-row rounded-3xl border-2 border-black">
        <div className="bg-biscuits-purple-100 items-center rounded-l-3xl justify-center text-white text-shadow py-3 w-1/3 font-bold">
          <div className="text-5xl md:text-6xl text-center font-inika">
            {month}
          </div>
          <div className="text-7xl md:text-6xl text-center font-inika">
            {date}
          </div>
          <div className="text-2xl md:text-3xl text-center font-inika">
            {time}
          </div>
        </div>
        <div className="flex flex-col bg-white w-3/4 rounded-r-3xl text-left justify-center pl-2 md:pl-3 lg:pl-5">
          <div className="text-3xl md:4xl pl-1 font-inika font-bold">
            {event}
          </div>
          <div className="text-sm sm:text-base pl-1 md:lg lg:text-m font-inika font-bold">
            {location}
          </div>
          <div className="text-xs pl-1 lg:text-sm pr-2 font-inika">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCard;
