import React from "react";
import "./card.styles.css";

type CardComponentProps = {
  title: string;
  description: string;
  imgUrl: string;
};

const CardComponent: React.FC<CardComponentProps> = (props) => {
  return (
    <div className="card">
      <h2 className="cardHeder">{props.title}</h2>
      <p className="cardBody">{props.description}</p>
      <img src={props.imgUrl} alt={props.description} />
    </div>
  );
};

export default CardComponent;
