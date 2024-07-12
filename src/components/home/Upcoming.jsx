import UpcomingCard from "./UpcomingCard";
import Title from "../Title";

const Upcoming = () => {
  return (
    <div className="flex flex-col justify-center text-center">
      <Title text="Upcoming Events" color="purple" />
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
