import { createContext } from "react";
import type { counterState, CounterAction } from "../typs";

const CounterContext = createContext<{
  state: counterState;
  dispatch: React.Dispatch<CounterAction>;
}>({
  state: { count: 0 },
  dispatch: () => {},
});

export default CounterContext;
