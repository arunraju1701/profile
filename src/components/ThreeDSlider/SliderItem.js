import React from "react";

const SliderItem = ({ index, degree}) => {
    
    let src = index < 3 ?`${index}.png` : `${index}.jpg`;
    console.log({ src, index, degree});
  return (
    <div 
      className="item"
      style={{ transform: `rotateY(${degree}deg) translateZ(550px)` }}
    >
      <img src={src} alt="This is an " />
    </div>
  );
};

export default SliderItem;
