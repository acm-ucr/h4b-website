"use client";
import Item from "@/components/involvement/Item";
import Subtitle from "@/components/Subtitle";
import QUESTIONS from "@/data/involve/Questions";
import useView from "@/components/useView";

const FAQs = () => {
  const [inView, ref] = useView();
  return (
    <div
      ref={ref}
      className={`${
        inView && "animate-fade-left"
      } bg-biscuits-peach bg-opacity-0 md:w-11/12 w-5/6 md:pt-[5%] pt-[10%] text-left flex flex-col items-center gap-y-6`}
    >
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
