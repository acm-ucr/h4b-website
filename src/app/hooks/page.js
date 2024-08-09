"use client";
import { useState } from "react";

const Page = () => {
  const [count, setCount] = useState(0);
  let countVar = 0;
  return (
    <div className="flex flex-col gap-y-3">
      <div className="text-6xl">React Hooks Demo 🥳</div>
      <div className="flex flex-col gap-y-3">
        <div className="text-2xl text-biscuits-purple-200">
          useState Counter Example
        </div>
        <div className="flex flex-row gap-x-5">
          <div className="text-2xl rounded-lg bg-white outline p-5">
            <div>Using State Hooks</div>
            <div className="text-2xl">Count: {count}</div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
          </div>

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
