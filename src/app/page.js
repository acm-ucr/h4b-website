import Demo from "@/components/Demo";

const Home = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center font-shrikhand bg-biscuits-red-100 text-5xl">
      <Demo text="Hello World" color="text-white" />
    </div>
  );
};

export default Home;
