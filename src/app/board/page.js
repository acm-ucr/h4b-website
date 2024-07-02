import Board from "@/components/board/Board";
import example from "@/public/example.webp";
const Page = () => {
  return (
    <div className="justify-center items-center flex flex-col h-screen">
      <Board
        name="Hana Guruz"
        role="President"
        yearMajor=" 3rd Year Cell, Molecular, and Developmental Biology"
        funFact="Fun Fact: I almost became a polo player"
        picture={example}
      />
    </div>
  );
};

export default Page;
