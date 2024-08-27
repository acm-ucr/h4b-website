"use client";
import Title from "../Title";
import Button from "../Button";
import useView from "@/components/useView";

const Involve = () => {
  const [inView, ref] = useView();
  return (
    <div
      ref={ref}
      className={`${
        inView && "animate-fade-right"
      } flex flex-col justify-center items-center text-center mt-[5%] w-3/4 md:w-1/2 gap-y-4`}
    >
      <Title text="Get Involved" color="red" />
      <div
        className={`${
          inView && "animate-fade-right"
        } flex font-light justify-center text-center text-l md:text-2xl pb-4 `}
      >
        Our food & information tabling occurs every Wednesday from 9 AM to 3 PM
        around the Bell Tower All that is needed to participate is fill the Food
        Tabling Sign-Up Sheet to choose your preferred time slot
      </div>
      <Button text="SIGN UP" link="google.com" />
    </div>
  );
};

export default Involve;
