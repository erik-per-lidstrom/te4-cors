import React, { useEffect, useRef, useState } from "react";

const Previos = () => {
  const [value, setvalue] = useState<string>("frank");
  const prevtext = useRef<string>("");
  useEffect(() => {
    prevtext.current = value;
  }, [value]);
  return (
    <div>
      <h2></h2>
      <input type="text" onChange={(e) => setvalue(e.target.value)} />
      <p>{value}</p>
      <p>{prevtext.current}</p>
    </div>
  );
};

export default Previos;
