import GreetingComponent from "./components/condishinal_rendering/greeting.component";
import StatusComponent from "./components/condishinal_rendering/status.component";
import UserComponentAdmin from "./components/condishinal_rendering/user.component";
import UserCard from "./components/List_of_data/user.component";
import GretingCard from "./components/React_practice/greeting.card.component";

function App() {
  return (
    <div className="">
      <h1>state in react</h1>
      <hr />
      <GretingCard />
      <hr />
      <UserCard />
      <hr />
      <GreetingComponent isloggedin={true} />
      <hr />
      <StatusComponent isOnline={true} />
      <hr />
      <UserComponentAdmin userName="erik" isAdmin={true} />
    </div>
  );
}

export default App;
