import React from "react";

const ToDo = () => {
  const [list, setlist] = React.useState<string[]>([]);
  const [input, setImput] = React.useState<string>("");

  function addtask() {
    if (!input.trim()) return;
    setlist([...list, input]);
    setImput("");
  }
  function removeTask(index: number) {
    const filterd = list.filter((_, i) => i !== index);
    setlist(filterd);
  }

  return (
    <div>
      <h2>exampel array</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setImput(e.target.value)}
        placeholder="new to do ...."
      />
      <button onClick={addtask}>add to list </button>
      {list.length && (
        <ul>
          {list.map((task, i) => {
            return (
              <li key={i}>
                {task} <button onClick={() => removeTask(i)}>❌</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ToDo;
