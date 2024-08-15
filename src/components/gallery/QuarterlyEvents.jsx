"use client";
import Subtitle from "@/components/Subtitle";
import Hoverable from "@/components/gallery/Hoverable";
import { quarterlyEvents } from "@/data/gallery/QuarterlyEvents";
import useView from "@/components/useView";

const QuarterlyEvents = () => {
  const [inView, ref] = useView();
  return (
    <div className="mb-20">
      <div
        ref={ref}
        className={`${
          inView && "animate-flip-up animate-once"
        } mb-10 flex justify-center`}
      >
        <Subtitle text="Quarterly Events" color="text-biscuits-green-200" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 place-items-center text-black">
        {quarterlyEvents.map((QuarterlyEvents, index) => (
          <Hoverable
            key={index}
            link={QuarterlyEvents.link}
            image={QuarterlyEvents.photo}
            text={QuarterlyEvents.title}
          />
        ))}
      </div>
    </div>
  );
};

export default QuarterlyEvents;
