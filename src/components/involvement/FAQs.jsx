import Item from "@/components/involvement/Item";
import Subtitle from "@/components/Subtitle";
import QUESTIONS from "@/data/involve/Questions";

const FAQs = () => {
  return (
    <div className="bg-biscuits-peach bg-opacity-0 w-11/12 p-8 text-left flex flex-col items-center gap-y-6">
      <Subtitle color="text-biscuits-brown-200" text="FAQS" />
      <div className="w-full flex flex-col items-start gap-y-2">
        {QUESTIONS.map((faq, index) => (
          <Item
            key={index}
            question={faq.question}
            answer={faq.answer}
            className="w-full"
          />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
