import Tabling from "@/components/involvement/Tabling";
import FAQs from "@/components/involvement/FAQs";
import AdditionalInfo from "@/components/involvement/AdditionalInfo";

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <Tabling />
      <FAQs />
      <AdditionalInfo />
    </div>
  );
};

export default Page;
