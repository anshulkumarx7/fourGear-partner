import React, { useContext, useRef } from "react";
import "../Styles/Navbar.css";
import { NavLink } from "react-router-dom";
import FourgearLogo from "../assets/lopgo 1.svg";
import UserLogo from "../assets/user-circle 1.svg";
import Cross from "../assets/cross.svg";
import Bars from "../assets/bars.svg";
import NavbarHeader from "./NavbarHeader";
import { AuthContext } from "../Context/AuthContext";
function Navbar() {
  const navRef = useRef();
  const removeTransitionRef=useRef();
  const {isLoggedIn}=useContext(AuthContext);
  function showNavbar() {
    navRef.current.classList.toggle("responsive_nav");
  }
  function hideNavbar(){
    navRef.current.classList.remove("responsive_nav");
    removeTransitionRef.current.classList.add("remove_transition");
  }

  return (
    <div id="fourGearNavbar">
      <NavbarHeader />
      <div className="fourGearNavbarMain" >
        <img className="mainLogo" src={FourgearLogo}></img>
        <div className="fourGearNavbarContent" ref={navRef} >
          <NavLink to="/" onClick={hideNavbar}>Home</NavLink>
          <NavLink to="/about" onClick={hideNavbar}>About</NavLink>
          {/* <NavLink to="/dashboard" onClick={hideNavbar}>Dashboard</NavLink> */}
          {/* <NavLink to="/" onClick={hideNavbar}>Partn</NavLink> */}
          <NavLink to="/gallery" onClick={hideNavbar}>Gallery</NavLink>
          <NavLink to="/contact" onClick={hideNavbar}>Contact</NavLink>
          <NavLink className="responsivenavlinkDashboard" to={isLoggedIn ? "/dashboard":"/signin"} onClick={hideNavbar}>{isLoggedIn ? "Dashboard" : "Login"}</NavLink>
          <button className="nav-btn close-button" onClick={showNavbar}>
            <img src={Cross}></img>
          </button>
        </div>
        <NavLink className="userLogo" to={isLoggedIn ? "/dashboard" :"/signin"}>
          <img src={UserLogo}></img>
        </NavLink>
        <button className="nav-btn open-button" onClick={showNavbar}>
          <img src={Bars}></img>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
