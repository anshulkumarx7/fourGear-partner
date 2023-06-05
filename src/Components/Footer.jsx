import React from "react";
import "../Styles/Footer.css";
import FooterLogo from "../assets/FooterLogo.svg";
import FooterCall from "../assets/Footercall.svg";
import FooterMssg from "../assets/Footermssg.svg";
function Footer() {
  return (
    <div className="fourGearFooter">
      <div className="fourGearFooterContainer">
        <div className="fourGearFooterLeft">
          <img src={FooterLogo}></img>
          <div className="fourGearFooterContent">
          <p>
            #Four Gear is the best two-wheeler servicing and repairing company
            in India, offering customers two-wheeler service or repair at
            competitive prices at their doorstep.
          </p>
          </div>
        </div>
        <div className="fourGearFooterRight">
        <h2>Contact Us</h2>
        <div className="fourGearFooterRightContent">
        <img src={FooterCall}></img>
        <p>+91-9693563637</p>
        </div>
        <div className="fourGearFooterRightContent">
        <img src={FooterMssg}></img>
        <p>example@gmail.com</p>
        </div>
        


        </div>
      </div>
    </div>
  );
}

export default Footer;
