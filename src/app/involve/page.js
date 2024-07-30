import Tabling from "@/components/involvement/Tabling";
import FAQs from "@/components/involvement/FAQs";
import AdditionalInfo from "@/components/involvement/AdditionalInfo";
import Title from "@/components/Title";

const Page = () => {
  return (
    <div className="flex flex-col items-center bg-biscuits-peach bg-blobs1 bg-contain bg-repeat-y">
      <Title text="Involvement" food="swirl" color="biscuits-grey-100" />
      <Tabling />
      <FAQs />
      <AdditionalInfo />
    </div>
  );
};

export default Page;
