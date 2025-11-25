import React from "react";

type UserProp = {
  userName: string;
  isAdmin: boolean;
};

const UserComponentAdmin: React.FC<UserProp> = ({ isAdmin, userName }) => {
  return (
    <div>
      <h2>hello {userName}</h2>

      {isAdmin && <p>you have admin access</p>}
    </div>
  );
};

export default UserComponentAdmin;
