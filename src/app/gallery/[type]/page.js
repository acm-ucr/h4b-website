import NotFound from "@/app/not-found";
import Title from "@/components/Title";

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
      </div>
    );
  } else {
    return <NotFound />;
  }
};

export default Page;
