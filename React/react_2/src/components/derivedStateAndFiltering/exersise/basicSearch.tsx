import React, { useState } from "react";
const staticFruit = ["Apple", "Banana", "Orange", "Mango"];
const BasicSearch = () => {
  const [Fruits, setFruits] = useState(staticFruit);
  const match = (item: string, query: string) => {
    return item.toLocaleLowerCase().includes(query.toLocaleLowerCase());
  };
  const handelSerch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    if (!query) {
      setFruits(staticFruit);
      return;
    }
    const filterdFruits = Fruits.filter((F) => match(F, query));
    setFruits(filterdFruits);
  };

  return (
    <div>
      <input type="text" onChange={handelSerch} />
      <ul>
        {Fruits.map((u, i) => {
          return <li key={i}>{u}</li>;
        })}
      </ul>
    </div>
  );
};

export default BasicSearch;
