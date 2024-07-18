import Item from "@/components/Item";
import Subtitle from "@/components/Subtitle";

const faqsData = [
  {
    question: "When + where do we table?",
    answer:
      "Every Wednesday at the Belltower area from 9 AM - 3 PM. A board member will be present during your shift! Last week of tabling ends Week 8.",
  },
  {
    question: "Where + how to rent out a table?",
    answer:
      " At the HUB front desk, ask the HUB staff for a table (2 chairs, if needed). If you are the first shift to table, you will need an R’Card to rent out a table. If there are no tables to rent at HUB, notify the H4B board and wait until a table is available again (shift hour will not be penalized).",
  },
  {
    question: "Where are the food + info tabling materials?",
    answer:
      "Located in the Basic Needs Office (Costo Hall 110) by the Basic Needs Coordinator’s cubicle (on top of a large safe in the back right corner). When picking up supplies, please introduce yourself as Hungry 4 Biscuits and that you need to pick up tabling supplies!",
  },
  {
    question: "What happens if an emergency occurs and I cannot table?",
    answer:
      "Please notify an H4B Board at least an hour before your shift starts. We understand that emergencies arise unexpectedly, so please communicate as soon as you can.",
  },
  {
    question: "Do we need to bring anything to the table?",
    answer:
      "If first shift, you will need an R'Card! However, you are not required to bring anything. We do accept food donations as long as it is unopened and pre-packaged.",
  },
  {
    question: "Any additional questions or concerns?",
    answer: "Message H4B Board in the discord or private message.",
  },
];

const FAQs = () => {
  return (
    <div className="bg-biscuits-peach p-8 text-left flex flex-col items-center gap-y-6">
      <Subtitle color="text-biscuits-brown-200" text="FAQS" />
      <div className="w-full max-w-4xl flex flex-col items-start gap-y-2">
        {faqsData.map((faq, index) => (
          <Item key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
