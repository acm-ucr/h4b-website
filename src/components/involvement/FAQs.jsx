import Item from "@/components/Item";
import Subtitle from "@/components/Subtitle";
import QUESTIONS from "@/data/involve/Questions";

const FAQs = () => {
  return (
    <div className="bg-biscuits-peach w-11/12 p-8 text-left flex flex-col items-center gap-y-6">
      <Subtitle color="text-biscuits-brown-200" text="FAQS" />
      <div className="w-full flex flex-col items-start gap-y-2">
        {QUESTIONS.map((faq, index) => (
          <div key={index} className="w-full">
            <Item question={faq.question} answer={faq.answer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
