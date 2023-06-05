import React from "react";
import "../Styles/Contact.css";
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
            Empowering millions of bike service professionals and making
            two-wheeler maintenance simple, cost effective and stress-free.
          </h3>
          <div className="fourGearContactDetails">
            <div className="fourGearContactIcon">
              <img src={CallLogo}></img>
              <h3>+91-9693563637</h3>
            </div>
            <div className="fourGearContactIcon">
              <img src={EmailLogo}></img>
              <h3>example@gmail.com</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
