"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     alert(`🥳 ${count}`)
  //   }, [count])
  return (
    <div className="text-2xl rounded-lg bg-white outline p-5">
      <div>Using State Hooks</div>
      <div className="text-2xl">Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
