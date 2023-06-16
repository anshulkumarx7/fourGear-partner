import React from "react";
import "../Styles/AboutMain.css";
import mechanicImg from "../assets/mechanic.svg";
function AboutMain() {
  return (
    <div className="fourGearAboutMain">
      <div className="fourGearAboutMainContainer">
        <h1>About FourGear</h1>
        <div className="fourGearAboutMainContent">
          <img src={mechanicImg}></img>
          <div className="fourGearAboutMainContent-About">
          <h3>
            #Four Gear is the best two-wheeler servicing and repairing company
            in India, offering customers two-wheeler service or repair at
            competitive prices at their doorstep.
          </h3>
          <h3>
            Four Gear offers the best bike service and repair in the comfort of
            your own home. You no longer need to waste time for servicing bikes
            because four gears will handle it. Within 30 minutes of your
            appointment, Four Gear will deliver the best, most skilled bike
            mechanics to your door. Reliable and reasonably priced bike service
            and repair. Four Gear provides the best prices for bike services.
          </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMain;
