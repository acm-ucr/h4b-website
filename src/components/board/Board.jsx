import Image from "next/image";
const Board = ({ name, role, yearMajor, funFact, picture }) => {
  return (
    <div className="container w-60 h-90 bg-biscuits-yellow shadow-[20px_-15px_0px_rgb(190,156,106)]">
      <div className="justify-center">
        <Image
          src={picture}
          alt="picture"
          className="aspect-square object-scale-down object-contain h-40 w-64"
          width={100}
          height={100}
        />

        <div className="text-wrap text-center">
          <p
            className={
              "text-biscuits-green-200 font-shrikhand text-xl p-1 -translate-y-1"
            }
          >
            {name}
          </p>

          <div>
            <p
              className={"text-biscuits-green-200 font-omc p-1 -translate-y-3"}
            >
              {role}
            </p>

            <div>
              <p
                className={
                  "text-biscuits-gray-200 font-inika p-1 -translate-y-3 font-bold"
                }
              >
                {yearMajor}
              </p>

              <div>
                <p
                  className={
                    "text-biscuits-gray-200 font-inika p-1 -translate-y-3 font-bold"
                  }
                >
                  {funFact}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
