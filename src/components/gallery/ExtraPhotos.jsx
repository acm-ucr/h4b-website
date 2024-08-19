"use client";
import Subtitle from "@/components/Subtitle";
import Hoverable from "@/components/gallery/Hoverable";
import PastEvent from "@/public/images/past/past_3.webp";
import BoardPhoto from "@/public/images/extra/extra_2.webp";
import useView from "@/components/useView";

const ExtraPhotos = () => {
  const [inView, ref] = useView();
  return (
    <div className="mb-14">
      <div
        ref={ref}
        className={`${
          inView && "animate-flip-up animate-once"
        } mb-10 flex justify-center`}
      >
        <Subtitle text="Extras" color="text-biscuits-green-200" />
      </div>
      <div className="text-textColor grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        <Hoverable link="/gallery/past" image={PastEvent} text="Past Events" />
        <Hoverable
          link="/gallery/more"
          image={BoardPhoto}
          text="More Photos"
        />
      </div>
    </div>
  );
};

export default ExtraPhotos;
