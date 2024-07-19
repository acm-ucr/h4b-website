import Image from "next/image";
import landing from "@/public/images/landing.webp";

const Landing = () => {
  return (
    <div className="p-6 pb-10  border-8 flex justify-center items-center border-biscuits-orange-200 rounded-3xl bg-biscuits-peach-200 bg-opacity-60 w-3/4">
      <Image src={landing} alt="landing" width={1250} height={1250} />
    </div>
  );
};

export default Landing;
