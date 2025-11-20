import React, { useRef, useState } from "react";

const RenderCounter = () => {
  const [count, setcount] = useState(0);
  const rendercount = useRef(0);
  return <div>RenderCounter</div>;
};

export default RenderCounter;
