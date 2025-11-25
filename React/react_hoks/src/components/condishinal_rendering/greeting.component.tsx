import React from "react";

interface GreetingProps {
  isloggedin: boolean;
}

const GreetingComponent: React.FC<GreetingProps> = ({ isloggedin }) => {
  if (isloggedin) {
    return <div>welcome back</div>;
  } else {
    return <div>log in please</div>;
  }
};

export default GreetingComponent;
