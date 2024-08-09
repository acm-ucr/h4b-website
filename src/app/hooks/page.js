"use client";
import Counter from "@/components/hooks/Counter";
const Page = () => {
  let countVar = 0;

  return (
    <div className="flex flex-col gap-y-3">
      <div className="text-6xl">React Hooks Demo 🥳</div>
      <div className="flex flex-col gap-y-3">
        <div className="text-2xl text-biscuits-purple-200">Counter Example</div>
        <div className="flex flex-row gap-x-5">
          <Counter />

          <div className="text-2xl  rounded-lg bg-white outline p-5">
            <div>Using Count Var</div>
            <div>Count: {countVar}</div>
            <button
              onClick={() => {
                countVar = countVar + 1;
                console.log(countVar);
              }}
            >
              Increment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
