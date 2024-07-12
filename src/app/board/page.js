import Board from "@/components/board/Board";
import { BOARD } from "@/data/boardMembers";
import Title from "@/components/Title";

const Page = () => {
  return (
  <div className="flex flex-col bg-biscuits-green-100 bg-blobs1 md:bg-cover bg-contain bg-repeat-y">
    <div className="flex justify-center items-center p-3">
      <div className="grid grid-cols-1">
        <Title text="Get To Know Us" />
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-16 gap-x-20">
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
    </div>
  );
};

export default Page;
