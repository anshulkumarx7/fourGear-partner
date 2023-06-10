import React from "react";
import "../Styles/Join.css";
import Image1 from "../assets/joinfourGear.svg";
function Join() {
  return (
    <div className="fourGearJoin">
      <div className="fourGearJoinLeftContainer">
        <img src={Image1} alt="fourgear" />
        <h1>Become <span className="colorChange">Four Gear</span> Partner Today!</h1>
        <h5>
          Join India’s fastest growing two wheeler service network and get more
          customers with dedicated customer support. 1000+ Partners Across India
        </h5>
      </div>
      <div className="fourGearJoinRightContainer">
      <h2>Join Four Gear</h2>
      <form className="fourGearJoinForm">
      <input type="text" placeholder="Name"/>
      <input type="number" placeholder="Contact Number" />
      <input type="email" placeholder="Email (optional)" />
      <input type="text" placeholder="Address" />
      <input type="number" placeholder="Aadhar Number"/>
      <input type="number" placeholder="Account Number"/>
      <input type="text" placeholder="IFSC Code"/>
      <input type="text" placeholder="Shop Owner Photo"/>
      {/* <input type="file"></input> */}
      <input type="text" placeholder="Shop Photo"/>
      <input type="text" placeholder="Number of mechanics"/> 
      </form>
      <button className="fourGearJoinButton">Enter mechanics details</button>
        
      </div>
    </div>
  );
}

export default Join;
