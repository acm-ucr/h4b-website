import Board from "@/components/board/Board";
import { BOARD } from "@/data/board/Board";
import Title from "@/components/Title";

const Page = () => {
  return (
    <div className="flex flex-col bg-biscuits-pink bg-blobs1 md:bg-cover bg-contain bg-repeat-y gap-y-8 py-[2%] items-center p-3">
      <Title text="Get To Know Us" color="green" />

      <div className="animate-fade-down animate-delay-300 grid justify-items-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-16 gap-x-32">
        {BOARD.map((boardMember, index) => (
          <Board
            key={index}
            name={boardMember.name}
            role={boardMember.role}
            yearMajor={boardMember.yearMajor}
            funFact={boardMember.funFact}
            picture={boardMember.picture}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
