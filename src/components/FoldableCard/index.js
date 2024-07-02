import React from "react";
import "./index.css";
const FoldableCard = () => {
  return (
    <div className="main">
      <div className="card">
        <div className="imgBox">
            <img src="2.png" alt="" />
            <img src="1.png" alt="" />
        </div>
          <div className="details">
            <div className="content">
              <h2>
                Arun Raju
                <br />
                <span>Technical Architect</span>
              </h2>
              <div className="social-icons">
                <a href="#"><i className="fa fa-facebook" aria-hidden="true">A</i></a>
                <a href="#"><i className="fa fa-facebook" aria-hidden="true">R</i></a>
                <a href="#"><i className="fa fa-facebook" aria-hidden="true">U</i></a>
                <a href="#"><i className="fa fa-facebook" aria-hidden="true">N</i></a>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default FoldableCard;
