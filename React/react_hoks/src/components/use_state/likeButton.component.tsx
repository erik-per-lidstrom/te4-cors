import React from "react";

const LikeButtonComponent = () => {
  const [liked, setliked] = React.useState<boolean>(false);

  function handelchange(event: React.ChangeEvent<HTMLInputElement>) {
    setliked(event.target.checked);
  }

  return (
    <div>
      <h2>exampel boolean</h2>
      <label>
        <input type="checkbox" checked={liked} onChange={handelchange} />i like
        this 👍
      </label>

      <p>You {liked ? "Liked this" : "did not like this"}</p>
    </div>
  );
};

export default LikeButtonComponent;
