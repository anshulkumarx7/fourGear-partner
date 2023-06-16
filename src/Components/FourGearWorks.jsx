import React from "react";
import "../Styles/FourGearWorks.css";
import TimeLine1 from "../assets/Group 29.svg";
import TimeLine2 from "../assets/Group 30.svg";
import TimeLine3 from "../assets/Group 31.svg";
import TimeLine4 from "../assets/Group 32.svg";
function FourGearWorks() {
  return (
    <div className="fourGearWork">
      <div className="fourGearworkContainer">
        <h1>How Four Gear Works?</h1>
        <div className="fourGearWorkInnerContainer">
        <div className="fourGearWorkTimeline">
          <img src={TimeLine1}></img>
          <div className="fourGearWorkBorder"></div>
          <img src={TimeLine2}></img>
          <div className="fourGearWorkBorder"></div>
          <img src={TimeLine3}></img>
          <div className="fourGearWorkBorder"></div>
          <img src={TimeLine4}></img>
        </div>
        <div className="fourGearWorkContent">
            <div className="fourGearWorkContentContainer">
                <p>Choose your location</p>
            </div>
            <div className="fourGearWorkContentContainer">
                <p>Select Bike For Service</p>
            </div>
            <div className="fourGearWorkContentContainer">
                <p>Book a mechanic</p>
            </div>
            <div className="fourGearWorkContentContainer">
                <p>Pay Online/Cash</p>
            </div>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default FourGearWorks;
