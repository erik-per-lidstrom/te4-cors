import { useContext } from "react";
import UserContext from "../GlobalState/UserContext";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <header>
      <h2>logo</h2>
      <nav>links</nav>
      <div>
        <p>{user ? user.firstName : "gest"}</p>
        <img src={user?.img} alt={user?.firstName} />
        <p>{user ? user.email : ""}</p>
      </div>
      <button onClick={() => setUser(null)}>Log,out</button>
    </header>
  );
};

export default Navbar;
