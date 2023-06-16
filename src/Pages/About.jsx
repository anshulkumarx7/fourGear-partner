import React from "react";
import AboutMain from "../Components/AboutMain";
import AboutDetail from "../Components/AboutDetail";
import Vision from "../Components/Vision";
import FourGearWorks from "../Components/FourGearWorks";
import Navbar from "../Components/Navbar";
function About() {
  return (
    <div>
      <Navbar />
      <AboutMain />
      <AboutDetail />
      <Vision />
      {/* <FourGearWorks /> */}
    </div>
  );
}

export default About;
