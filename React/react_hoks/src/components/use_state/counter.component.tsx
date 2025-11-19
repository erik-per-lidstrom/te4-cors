import React from "react";

function Counter() {
  const [count, setCount] = React.useState<number>(0);
  console.log(count);

  return (
    <div className="">
      <h2>Counter</h2>
      <button onClick={() => setCount(count + 1)}>count:+{count}</button>
      <button onClick={() => setCount(count - 1)}>count:-{count}</button>
    </div>
  );
}

export default Counter;
