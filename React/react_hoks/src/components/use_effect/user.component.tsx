import React from "react";

const GetUser = () => {
  const [user, setUser] = React.useState<string[]>([]);

  React.useEffect(() => {
    async function fecthusers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      const userName = data.map((user: { name: string }) => user.name);
      setUser(userName);
    }
    fecthusers();
  }, []);

  return (
    <div>
      <ul>
        {user.map((u) => (
          <li key={u}>{u}</li>
        ))}
      </ul>
    </div>
  );
};

export default GetUser;
