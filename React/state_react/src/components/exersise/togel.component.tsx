import React from "react";

const DarkLightMod = () => {
  const [liked, setliked] = React.useState<boolean>(false);

  function handelchange(event: React.ChangeEvent<HTMLInputElement>) {
    setliked(event.target.checked);
  }

  return (
    <div>
      <h2>exampel boolean</h2>
      <label>
        <input type="checkbox" checked={liked} onChange={handelchange} /> Switch
        to Light Mode
      </label>

      <p>You {liked ? "light mode" : "dark mode"}</p>
    </div>
  );
};

export default DarkLightMod;
