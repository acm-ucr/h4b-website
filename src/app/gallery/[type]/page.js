import NotFound from "@/app/not-found";
import Title from "@/components/Title";
import Picture from "@/components/Picture.jsx";
import { PICTURES } from "@/data/gallery/pictures.js";

export async function generateStaticParams() {
  const allPages = ["fall", "winter", "spring", "past"];
  return allPages.map((page) => ({ type: page }));
}

const Page = ({ params }) => {
  const PAGES = {
    fall: "Fall",
    winter: "Winter",
    spring: "Spring",
    past: "Past",
  };
  if (PAGES.hasOwnProperty(params.type)) {
    return (
      <div className="text-7xl">
        <Title text={PAGES[params.type]} food={"chip"} />
        <div className="grid-cols-3">
          {PICTURES[params.type].map((image, index) => (
            <div key={index} className="">
              <Picture x={1} y={1} src={image} alt={"img"} />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <NotFound />;
  }
};

export default Page;
