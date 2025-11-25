import React from "react";
type users = {
  id: number;
  name: string;
  age: number;
};

const UserCard = () => {
  const data: users[] = [
    { name: "Jhon", id: 1, age: 100 },
    { name: "Erik", id: 2, age: 19 },
    { name: "Steve", id: 3, age: 30 },
  ];
  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            name:{user.name} age:{user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserCard;
