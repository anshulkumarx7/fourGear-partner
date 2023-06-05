import React from "react";
import "../Styles/Steps.css";
import Step1Logo from "../assets/step1.svg";
import Step2Logo from "../assets/step2.svg";
import Step3Logo from "../assets/step3.svg";
import Step4Logo from "../assets/step4.svg";
import StepSubcontainer from "./StepSubcontainer";
function Steps() {
  return (
    <div className="fourGearSteps">
      <div className="fourGearStepsContainer">
        <h1>Steps to Partner with Four Gear</h1>
        <h4>Its simple to become partner with Four Gear</h4>
        <div className="fourGearStepsInnerContainer">
          <StepSubcontainer
            logo={Step1Logo}
            stepNumber="Step 1"
            title="Register yourself as a partner on four gear."
          />
          <StepSubcontainer
            logo={Step2Logo}
            stepNumber="Step 2"
            title=" Complete the above form and our team will contact you."
          />
          <StepSubcontainer
            logo={Step3Logo}
            stepNumber="Step 3"
            title="Sign a MOU (Memorandum of Understanding) with us."
          />
          <StepSubcontainer
            logo={Step4Logo}
            stepNumber="Step 4"
            title="Get help from our team with your work and get bookings."
          />
        </div>
      </div>
    </div>
  );
}

export default Steps;
