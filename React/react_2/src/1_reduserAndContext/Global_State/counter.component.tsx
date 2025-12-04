import { useContext } from "react";
import CounterContext from "../GlobalState/counter.context";
const CounterComponent = () => {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div>
      <p>{state.count}</p>
      <hr />
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrament" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default CounterComponent;
