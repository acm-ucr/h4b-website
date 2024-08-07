import Image from "next/image";
import landing from "@/public/images/landing.webp";
import mobileLanding from "@/public/images/mobilelanding.webp";

const Landing = () => {
  return (
    <>
      <div className="mt-[5%] p-1 hidden md:flex md:p-6 pb-3 md:pb-10 border-4 md:border-8 justify-center items-center border-biscuits-orange-200 rounded-3xl bg-biscuits-peach-200 bg-opacity-60 w-3/4">
        <Image src={landing} alt="landing" width={1250} height={1250} />
      </div>
      <Image
        className="md:hidden"
        src={mobileLanding}
        alt="mobileLanding"
        width={280}
        height={280}
      />
    </>
  );
};

export default Landing;
