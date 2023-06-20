import React from 'react'
import { Link } from 'react-router-dom';
import FacebookLogo from "../assets/facebook 1.svg";
import TwitterLogo from "../assets/twitter 1.svg";
import InstaGramLogo from "../assets/instagram 1.svg";
import LinkedinLogo from "../assets/linkedin 1.svg";
import CallLogo from "../assets/phone-call 1.svg";
import "../Styles/Navbar.css"
function NavbarHeader() {
  return (
    <div className="fourGearNavbarHeader">
        <div className="fourGearNavbarContactno">
          <img src={CallLogo}></img>
          <h1>+91-9693563637</h1>
        </div>
        <div className="fourGearNavbarSocialMedia">
          <Link to={{ pathname: "https://www.facebook.com/" }}>
            <img src={FacebookLogo}></img>
          </Link>
          <Link to={{ pathname: "https://www.facebook.com/" }}>
            <img src={TwitterLogo}></img>
          </Link>
          <Link to={{ pathname: "https://www.facebook.com/" }}>
            <img src={InstaGramLogo}></img>
          </Link>
          <Link to={{ pathname: "https://www.facebook.com/" }}>
            <img src={LinkedinLogo}></img>
          </Link>
        </div>
      </div>
  )
}

export default NavbarHeader