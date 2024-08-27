const UpcomingCard = ({
  month,
  date,
  time,
  event,
  location = "No Location Specified",
  description = "No Description",
}) => {
  return (
    <div className="flex flex-row rounded-3xl border-2 border-biscuits-purple-200 h-full min-w-full">
      <div className="flex flex-col bg-biscuits-purple-100 items-center rounded-l-3xl justify-center text-white text-shadow py-3 w-1/3 font-bold">
        <div className="text-3xl lg:text-6xl text-center font-inika">
          {month}
        </div>
        <div className="text-5xl lg:text-6xl text-center font-inika">
          {date}
        </div>
        <div className="text-xl lg:text-3xl text-center font-inika">{time}</div>
      </div>
      <div className="flex flex-col bg-white w-3/4 rounded-r-3xl text-left justify-center pl-2">
        <div className="text-3xl lg:4xl pl-1 font-inika font-bold">{event}</div>
        <div className="text-sm sm:text-base pl-1 lg:lg lg:text-m font-inika font-bold">
          {location}
        </div>
        <div className="text-xs pl-1 lg:text-sm pr-2 font-inika">
          {description}
        </div>
      </div>
    </div>
  );
};

export default UpcomingCard;
