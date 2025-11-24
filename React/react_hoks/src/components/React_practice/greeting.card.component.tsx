import { useEffect, useRef, useState } from "react";

const GretingCard = () => {
  const [name, setname] = useState<string>("name");
  const [mood, setmood] = useState<string>("");

  const inputref = useRef<HTMLInputElement>(null);
  const focusinput = () => {
    if (inputref.current) inputref.current.focus();
  };

  useEffect(() => {
    document.title = `${name}s greetingcard`;
  }, [name]);

  useEffect(() => {
    focusinput();
  }, []);

  const clear = () => {
    setmood("");
    setname("name");
    focusinput();
  };

  return (
    <div>
      <p>{name}</p>
      <input
        type="text"
        value={name}
        ref={inputref}
        onChange={(event) => setname(event.target.value)}
      />
      <br />
      <input
        type="radio"
        id="(happy"
        name="mood"
        value="(happy"
        onClick={() => setmood("😀")}
      />
      <label htmlFor="(happy">😀</label>
      <br />
      <input
        type="radio"
        id="angry"
        name="mood"
        value="angry"
        onClick={() => setmood("😤")}
      />
      <label htmlFor="angry">😤</label>
      <br />
      <input
        type="radio"
        id="tired"
        name="mood"
        value="tired"
        onClick={() => setmood("😴")}
      />
      <label htmlFor="tired">😴</label>
      <br />

      <input
        type="radio"
        id="cool"
        name="mood"
        value="cool"
        onClick={() => setmood("😎")}
      />
      <label htmlFor="cool">😎</label>
      <br />
      {mood && <p>youre mod is {mood}</p>}
      <button onClick={clear}>clear</button>
    </div>
  );
};

export default GretingCard;
