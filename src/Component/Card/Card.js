import react from "react";
import "../Card/Card.css";

const Card = (props) => {
  return (
    <div className="container">
      <div className="upper-container">
        <img className="image-container" src={props.ava}></img>
      </div>
      <div className="lower-container">
        <h2>{props.name}</h2>
        <h4>{props.job}</h4>
        <h4>{props.phone}</h4>
        <h4>{props.email}</h4>
      </div>
    </div>
  );
};

export default Card;
