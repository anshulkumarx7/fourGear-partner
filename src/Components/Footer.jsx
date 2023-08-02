import React from "react";
import "../Styles/Footer.css";
import {footer,contact} from "../Constants";
import FooterLogo from "../assets/footermotomagicians.svg";
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
            {footer.description}
          </p>
          </div>
        </div>
        <div className="fourGearFooterRight">
        <h2>Contact Us</h2>
        <div className="fourGearFooterRightContent">
        <img src={FooterCall}></img>
        <p>{contact.phone}</p>
        </div>
        <div className="fourGearFooterRightContent">
        <img src={FooterMssg}></img>
        <p>{contact.email}</p>
        </div>
        


        </div>
      </div>
    </div>
  );
}

export default Footer;
