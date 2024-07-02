import "./index.css";
import React from "react";

const AnimatedCard = (data, index) => {
  const { id, description, title, image } = data;
  return (
    <>
      <input type="radio" name="slide" id={id} />
      <label
        htmlFor={id}
        className="card"
        style={{ background: `url(${image})`,  backgroundSize : "cover"}}
      >
        <div className="row">
          <div className="icon">{"ARUNRAJU".at(index)}</div>
          <div className="description">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </label>
    </>
  );
};

export default AnimatedCard;
