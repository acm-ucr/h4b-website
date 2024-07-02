import Landing from "@/components/home/Landing";
import Goal from "@/components/home/Goal";
import Involve from "@/components/home/Involve";
import Upcoming from "@/components/home/Upcoming";
import Button from "@/components/Button";

const Home = () => {
  return (
    <header>
      <Landing />
      <Goal />
      <Involve />
      <Upcoming />
      <Button color="blue" text="Sign Up" />
    </header>
  );
};

export default Home;
