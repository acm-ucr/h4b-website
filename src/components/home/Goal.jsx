"use client";
import Title from "../Title";
import useView from "@/components/useView";
const Goal = () => {
  const [inView, ref] = useView();
  return (
    <div
      className={`${
        inView && "animate-fade-up"
      } flex flex-col justify-center text-center`}
    >
      <Title text="Our Goal" />
      <div
        ref={ref}
        className={`${inView && "animate-fade-up"} w-1/2 self-center text-2xl`}
      >
        Hungry 4 Biscuits was created to encourage our community to give back to
        the Inland Empire, be compassionate towards those who reside there, and
        fight food insecurity.
      </div>
    </div>
  );
};

export default Goal;
