import React from "react";
import "./index.css";
import SliderItem from "./SliderItem";

const ThreeDSlider = () => {
  return (
    <div className="banner">
      <div className="slider">
        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(index => <SliderItem key={index} index={index} degree = {(index) * (360/12) }/>)}
        </div>
      </div>
  );
};

export default ThreeDSlider;
