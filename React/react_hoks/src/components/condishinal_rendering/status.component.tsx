import React from "react";

type StatusProp = {
  isOnline: boolean;
};

const StatusComponent: React.FC<StatusProp> = ({ isOnline }) => {
  return (
    <div>
      <span style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "online" : "ofline"}
      </span>
    </div>
  );
};

export default StatusComponent;
