import { useState } from "react";
import CustomButton from "./components/EventHandelers/CustomButton";

function App() {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  function handelClick() {
    setIsVisible(!isVisible);
  }

  return (
    <div className="">
      <h1>state in react</h1>

      <hr />
      <CustomButton onclick={handelClick} text={isVisible ? "hide" : "show"} />
      <span style={{ visibility: isVisible ? "visible" : "hidden" }}>
        Some content here
      </span>
    </div>
  );
}

export default App;
