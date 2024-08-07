import UpcomingCard from "./UpcomingCard";
import Title from "../Title";

const Upcoming = () => {
  return (
    <div className="flex flex-col justify-center text-center my-[5%]">
      <Title text="Upcoming Events" color="purple" />
      <div className="m-10 md:m-11 grid md:grid-cols-2 grid-cols-1 gap-4 ">
        <UpcomingCard />
        <UpcomingCard />
        <UpcomingCard />
        <UpcomingCard />
      </div>
    </div>
  );
};

export default Upcoming;
