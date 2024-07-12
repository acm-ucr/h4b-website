import Landing from "@/components/home/Landing";
import Goal from "@/components/home/Goal";
import Involve from "@/components/home/Involve";
import Upcoming from "@/components/home/Upcoming";

const Home = () => {
  return (
    <div className="flex flex-col gap-y-64 bg-biscuits-peach bg-blobs1 md:bg-cover bg-contain bg-repeat-y">
      <Landing />
      <Goal />
      <Involve />
      <Upcoming />
    </div>
  );
};

export default Home;
