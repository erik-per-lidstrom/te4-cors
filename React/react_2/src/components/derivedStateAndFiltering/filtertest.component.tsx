import React, { useState } from "react";
type User = {
  id: number;
  name: string;
  isOnline: boolean;
};
const staticUser: User[] = [
  { id: 1, name: "bob", isOnline: true },
  { id: 2, name: "dave", isOnline: false },
  { id: 3, name: "jane", isOnline: true },
];
const FilterTestComponent = () => {
  const [users, setUsers] = useState<User[]>(staticUser);
  const match = (item: string, query: string) => {
    return item.toLocaleLowerCase().includes(query.toLocaleLowerCase());
  };
  const handelSerch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    if (!query) {
      setUsers(staticUser);
      return;
    }
    const filterdUsers = users.filter((user) => match(user.name, query));
    setUsers(filterdUsers);
  };

  return (
    <div>
      <input type="text" onChange={handelSerch} />
      <ul>
        {users.map((u) => {
          return <li key={u.id}>{u.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default FilterTestComponent;
