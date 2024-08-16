"use client";
import Subtitle from "@/components/Subtitle";
import Hoverable from "@/components/gallery/Hoverable";
import PastEvent from "@/public/images/past/past_3.webp";
import useView from "@/components/useView";

const PastEvents = () => {
  const [inView, ref] = useView();
  return (
    <div className="mb-14">
      <div
        ref={ref}
        className={`${
          inView && "animate-flip-up animate-once"
        } mb-10 flex justify-center`}
      >
        <Subtitle text="Past Events" color="text-biscuits-green-200" />
      </div>
      <div className="text-textColor">
        <Hoverable link="/gallery/past" image={PastEvent} text="Past Events" />
      </div>
    </div>
  );
};

export default PastEvents;
