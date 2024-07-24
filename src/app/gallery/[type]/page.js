import NotFound from "@/app/not-found";
import Title from "@/components/Title";
import Image from "next/image";
import { PICTURES } from "@/data/gallery/pictures.js";

export async function generateStaticParams() {
  const allPages = ["fall", "winter", "spring", "past"];
  return allPages.map((page) => ({ type: page }));
}

const Page = ({ params }) => {
  const PAGES = {
    fall: "Fall 2023",
    winter: "Winter 2024",
    spring: "Spring 2024",
    past: "Past",
  };
  if (PAGES.hasOwnProperty(params.type)) {
    return (
      <div className="flex flex-col text-7xl items-center pt-10">
        <Title text={PAGES[params.type]} food={"chip"} />
        <div className="grid grid-cols-3 w-4/5 py-10 gap-2">
          {PICTURES[params.type].map((image, index) => (
            <Image
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
