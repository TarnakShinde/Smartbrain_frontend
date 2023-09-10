import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="parallax-effect br2 shadow-2 log"
        perspective={200}
        style={{ height: "150px", width: "150px" }}
      >
        <div className="inner-element pa3">
          <img src={brain} alt="brain" style={{ paddingTop: "5px" }} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
