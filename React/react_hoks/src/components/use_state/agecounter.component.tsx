import React from "react";

const AgeCountertComponent = () => {
  const [name, setName] = React.useState<string>("Talor");
  const [age, setAge] = React.useState<number>(0);
  return (
    <div>
      <h2>exampel string and number</h2>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={() => setAge(age + 1)}>age button</button>
      <br />
      {name && age > 0 && (
        <p>
          hello my name is {name} and i am {age} yers old
        </p>
      )}
    </div>
  );
};

export default AgeCountertComponent;
