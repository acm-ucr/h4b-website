import Image from "next/image";
const Board = ({ name, role, yearMajor, funFact, picture }) => {
  return (
    <div className="flex justify-center w-64 h-96 bg-biscuits-yellow shadow-[20px_-15px_0px_rgb(190,156,106)]">
      <div className="">
        <Image
          src={picture}
          alt="picture"
          className="aspect-square object-center object-scale-down my-4 mx-10"
          width={180}
          height={100}
        />

        <div className="text-wrap text-center text-biscuits-green-200 font-shrikhand p-1 -translate-y-1 text-3xl ">
          {name}
          <div className="text-biscuits-green-200 font-omc p-1 -translate-y-2 text-xl">
            {role}
            <div className="text-biscuits-gray-200 font-inika p-1 -translate-y-2 font-bold text-base">
              {yearMajor}
              <div className="text-biscuits-gray-200 font-inika p-1 -translate-y-2 font-bold text-base">
                {funFact}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
