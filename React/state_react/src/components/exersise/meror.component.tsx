import React from "react";

const Meror = () => {
  const [text, setText] = React.useState<string>("hi");
  console.log(text);

  function handelchange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <div>
      <h2>ex 2</h2>
      <input type="text" value={text} onChange={handelchange} />
      <p>you typed {text}</p>
      <button onClick={() => setText("")}>reset</button>
    </div>
  );
};

export default Meror;
