import React from "react";

const FavoretMovie = () => {
  const [list, setlist] = React.useState<string[]>([]);
  const [input, setInput] = React.useState<string>("");

  function addMovie() {
    if (!input.trim()) return;
    setlist([...list, input]);
    setInput("");
  }
  function removeMovie(index: number) {
    const filterd = list.filter((_, i) => i !== index);
    setlist(filterd);
  }

  return (
    <div>
      <h2>exampel array</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="faveret movies"
      />
      <button onClick={addMovie}>add to list </button>
      {list.length > 0 && (
        <ul>
          {list.map((task, i) => {
            return (
              <li key={i}>
                {task} <button onClick={() => removeMovie(i)}>❌</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FavoretMovie;
