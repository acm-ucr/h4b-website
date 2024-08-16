"use client";
import UpcomingCard from "./UpcomingCard";
import Title from "../Title";
import useView from "@/components/useView";

const Upcoming = () => {
  const [inView, ref] = useView();
  return (
    <div
      ref={ref}
      className={`${
        inView && "animate-fade-left animate-delay-200 "
      } flex flex-col justify-center text-center my-[5%]`}
    >
      <Title text="Upcoming Events" color="purple" />
      <div
        className={`${
          inView && "animate-fade-left"
        } grid md:grid-cols-2 grid-cols-1 gap-4`}
      >
        <UpcomingCard />
        <UpcomingCard />
        <UpcomingCard />
        <UpcomingCard />
      </div>
    </div>
  );
};

export default Upcoming;
