"use client";
import Tabling from "@/components/involvement/Tabling";
import FAQs from "@/components/involvement/FAQs";
import AdditionalInfo from "@/components/involvement/AdditionalInfo";
import Title from "@/components/Title";
import useView from "@/components/useView";

const Page = () => {
  const [inView, ref] = useView();
  return (
    <div
      ref={ref}
      className={`${
        inView && "animate-fade-left"
      } flex flex-col items-center bg-biscuits-peach bg-blobs1 bg-contain bg-repeat-y`}
    >
      <Title text="Involvement" food="swirl" color="biscuits-grey-100" />
      <Tabling />
      <FAQs />
      <AdditionalInfo />
    </div>
  );
};

export default Page;
