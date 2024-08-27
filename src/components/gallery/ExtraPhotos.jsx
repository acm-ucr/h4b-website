"use client";
import Subtitle from "@/components/Subtitle";
import Hoverable from "@/components/gallery/Hoverable";
import PastEvent from "@/public/images/past/past_3.webp";
import ExtraPhoto from "@/public/images/extra/extra_2.webp";
import useView from "@/components/useView";

const ExtraPhotos = () => {
  const [inView, ref] = useView();
  return (
    <div className="flex flex-col gap-y-8">
      <div
        ref={ref}
        className={`${
          inView && "animate-flip-up animate-once"
        } flex justify-center`}
      >
        <Subtitle text="Extras" color="text-biscuits-green-200" />
      </div>
      <div className="text-textColor grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        <Hoverable link="/gallery/past" image={PastEvent} text="Past Events" />
        <Hoverable
          link="/gallery/extra"
          image={ExtraPhoto}
          text="Extra Photos"
        />
      </div>
    </div>
  );
};

export default ExtraPhotos;
