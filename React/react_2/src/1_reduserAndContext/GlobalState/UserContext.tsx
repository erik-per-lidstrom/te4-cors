import { createContext } from "react";
import type { User } from "../typs";

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};
const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export default UserContext;
