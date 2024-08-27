import NotFound from "@/app/not-found";
import Title from "@/components/Title";
import GalleryImage from "@/components/gallery/GalleryImage";
import { PICTURES } from "@/data/gallery/Pictures.js";

export async function generateStaticParams() {
  const allPages = ["fall", "winter", "spring", "past", "extra"];
  return allPages.map((page) => ({ type: page }));
}

const Page = ({ params }) => {
  const PAGES = {
    fall: "Fall '23",
    winter: "Winter '24",
    spring: "Spring '24",
    past: "Past",
    extra: "Extra",
  };
  if (
    PAGES.hasOwnProperty(params.type) &&
    PICTURES.hasOwnProperty(params.type)
  ) {
    return (
      <div className="bg-blobs1 md:bg-cover bg-contain bg-biscuits-green-100 flex flex-col text-7xl items-center pt-10">
        <Title text={PAGES[params.type]} food="chip" />
        <div className="grid grid-cols-1 lg:grid-cols-3 w-4/5 py-10 gap-2">
          {PICTURES[params.type].map((image, index) => (
            <GalleryImage
              src={image}
              alt={`${PAGES[params.type]}_${index}`}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <NotFound />;
  }
};

export default Page;
