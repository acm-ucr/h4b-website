import Board from "@/components/board/Board";
import { BOARD } from "@/data/boardMembers";
import Title from "@/components/Title";

const Page = () => {
  return (
    <div>
      <div>
        <Title text="Get To Know Us" />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-16 gap-x-20 mx-16 my-16">
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
    </div>
  );
};

export default Page;
