import Tabling from "@/components/involvement/Tabling";
import FAQs from "@/components/involvement/FAQs";
import AdditionalInfo from "@/components/involvement/AdditionalInfo";

const Page = () => {
  return (
    <div className="flex flex-col items-center bg-biscuits-peach bg-blobs1 md:bg-cover bg-contain bg-repeat-y">
      <Tabling />
      <FAQs />
      <AdditionalInfo />
    </div>
  );
};

export default Page;
