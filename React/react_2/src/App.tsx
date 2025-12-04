import { useState, useReducer } from "react";
import UserContext from "./1_reduserAndContext/GlobalState/UserContext";
import { userinfo } from "./1_reduserAndContext/data";
import "./index.css";
import { type User } from "./1_reduserAndContext/typs";
import Navbar from "./1_reduserAndContext/Global_State/navbar.compnent";
import CounterComponent from "./1_reduserAndContext/Global_State/counter.component";
import CounterContext from "./1_reduserAndContext/GlobalState/counter.context";
import { ReduserCounter } from "./1_reduserAndContext/redusers/counter.reduser";

function App() {
  const [user, setUser] = useState<User | null>(userinfo);
  const [state, dispatch] = useReducer(ReduserCounter, { count: 0 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <CounterContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <br />
        <CounterComponent />
      </CounterContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
