import React from "react";

function StepSubcontainer(props) {
  return (
    <div className="fourGearStepsSubInnerContainer">
      <img src={props.logo} alt=""></img>
      <h2>{props.stepNumber}</h2>
      <h5>{props.title}</h5>
    </div>
  );
}

export default StepSubcontainer;
