import React from "react";

type buttonProp = {
  text: string;
  onclick: () => void;
};

const CustomButton: React.FC<buttonProp> = ({ onclick, text }) => {
  return (
    <div>
      <button onClick={onclick}>{text}</button>
    </div>
  );
};

export default CustomButton;
