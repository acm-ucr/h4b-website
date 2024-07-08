import UpcomingCard from "./UpcomingCard";

const Upcoming = () => {
  return (
    <div>
      Upcoming
      <div className="m-11 grid grid-cols-2 gap-4 ">
        <UpcomingCard />
        <UpcomingCard />
        <UpcomingCard />
        <UpcomingCard />
      </div>
    </div>
  );
};

export default Upcoming;
