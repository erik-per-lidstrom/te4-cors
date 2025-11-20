import React from "react";

const InputFocus = () => {
  const inputref = React.useRef<HTMLInputElement>(null);

  function focusinput() {
    if (inputref.current) inputref.current.focus();
  }

  return (
    <div>
      <h2>UseRef Exampel 1</h2>
      <input ref={inputref} type="text" placeholder="type som thing" />
      <button onClick={focusinput}>Focus</button>
    </div>
  );
};

export default InputFocus;
