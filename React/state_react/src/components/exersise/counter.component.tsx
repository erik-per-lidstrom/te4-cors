import React from "react";

function CounterEX() {
  const [count, setCount] = React.useState<number>(0);
  console.log(count);

  return (
    <div className="">
      <h2>CounterEX</h2>
      <button onClick={() => setCount(count + 1)}>count:+{count}</button>
      <button onClick={() => setCount(count - 1)}>count:-{count}</button>
    </div>
  );
}

export default CounterEX;
