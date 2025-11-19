import React from "react";

const MyImput = () => {
  const [text, setText] = React.useState<string>("hi");
  console.log(text);

  function handelchange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <div>
      <h2>exampel string with use state</h2>
      <input type="text" value={text} onChange={handelchange} />
      <p>you typed {text}</p>
      <button onClick={() => setText("")}>reset</button>
    </div>
  );
};

export default MyImput;
