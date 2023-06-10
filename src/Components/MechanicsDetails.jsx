import React, { useState } from "react";
import "../Styles/MechanicsDetails.css";
function MechanicsDetails() {
  return (
    <div className="fourGearMechanics">
      <h1>Enter all the mechanics details</h1>
      <div className="fourGearMechanicsContainer">
        <h1>Mechanics Details</h1>
        <div className="fourGearMechanicsSubContainer">
          <div className="fourGearMechanicsForm">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Contact Number" />
            <input type="text" placeholder="Address" />
            <input type="" />
          </div>
          <button>+ Add more</button>
        </div>
      </div>
      <button className="mechanicSubmitButton">Submit</button>
    </div>
  );
}

export default MechanicsDetails;
