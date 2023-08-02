import React from "react";
import "../Styles/Contact.css";
import {contact} from "../Constants";
import ContactLogo from "../assets/contact.svg";
import CallLogo from "../assets/phoneBlack.svg";
import EmailLogo from "../assets/emailBlack.svg";
function Contact() {
  return (
    <div className="fourGearContact">
      <div className="fourGearContactContainer">
        <img src={ContactLogo}></img>
        <div className="fourGearContactContent">
          <h1>Contact Us</h1>
          <h3>
            {contact.description}
          </h3>
          <div className="fourGearContactDetails">
            <div className="fourGearContactIcon">
              <img src={CallLogo}></img>
              <h3>{contact.phone}</h3>
            </div>
            <div className="fourGearContactIcon">
              <img src={EmailLogo}></img>
              <h3>{contact.email}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
