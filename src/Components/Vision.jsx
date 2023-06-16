import React from "react";
import "../Styles/Vision.css";
import VisionIcon from "../assets/Illustration.svg";
function Vision() {
  return (
    <div className="fourGearVision">
      <div className="fourGearVisionContainer">
        <img src={VisionIcon}></img>
        <div className="fourGearVisionContent">
          <h1>Vision</h1>
          <h3>
            Our vision is to provide you with the best and most affordable bike
            service and repair facility at your doorstep in the shortest
            possible time.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Vision;
