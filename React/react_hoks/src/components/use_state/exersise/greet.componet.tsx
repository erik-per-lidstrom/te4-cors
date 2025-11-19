import React from "react";

const Greet = () => {
  const [text, setText] = React.useState<string>("guest");
  console.log(text);

  return (
    <div>
      <h2>ex 1</h2>
      <p>hello {text}</p>
      <button onClick={() => setText("your name")}>change</button>
    </div>
  );
};

export default Greet;
