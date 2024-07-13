import Notfound from "@/app/not-found";
import Title from "@/components/Title";

const Page = ({ params }) => {
  const PAGES = {
    fall: "Fall",
    winter: "Winter",
    spring: "Spring",
    past: "Past",
  };
  if (!PAGES[params.type]) {
    return (
      <div className="text-7xl">
        {" "}
        <Notfound />{" "}
      </div>
    );
  }

  return (
    <div className="text-7xl">
      {<Title text={PAGES[params.type]} food={"chip"} />}
    </div>
  );
};

export default Page;
