import React, { useRef, useState } from "react";
import "../Styles/Join.css";
import Image1 from "../assets/joinfourGear.svg";
import { FiUpload } from "react-icons/fi";
function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
function Join() {
  const [details, setDetails] = useState({
    name: "",
    contactNumber: "",
    email: "",
    password:"",
    address: "",
    aadharNumber: "",
    accountNumber: "",
    ifscCode: "",
    numberofMechanics: "",
  });
  const [ownerImage, setOwnerImage] = useState("");
  const [shopImage, setshopImage] = useState("");
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  const handleImage1Click = () => {
    image1Ref.current.click();
  };
  const handleImage2Click = () => {
    image1Ref.current.click();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleImage1Uplaod = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertToBase64(file);
    setOwnerImage(base64);
  };
  const handleImage2Uplaod = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertToBase64(file);
    setShopImage(base64);
  };
  // console.log(shopImage);
  // console.log(ownerImage);
  return (
    <div className="fourGearJoin">
      <div className="fourGearJoinLeftContainer">
        <img src={Image1} alt="fourgear" />
        <h1>
          Become <span className="colorChange">Four Gear</span> Partner Today!
        </h1>
        <h5>
          Join India’s fastest growing two wheeler service network and get more
          customers with dedicated customer support. 1000+ Partners Across India
        </h5>
      </div>
      <div className="fourGearJoinRightContainer">
        <h2>Join Four Gear</h2>
        <form className="fourGearJoinForm">
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={details.name}
          />
          <input
            type="text"
            placeholder="Contact Number"
            name="contactNumber"
            onChange={handleChange}
            value={details.contactNumber}
          />
          <input
            type="email"
            placeholder="Email (optional)"
            name="email"
            onChange={handleChange}
            value={details.email}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={details.password}
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            onChange={handleChange}
            value={details.address}
          />
          <input
            type="text"
            placeholder="Aadhar Number"
            name="aadharNumber"
            value={details.aadharNumber}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Account Number"
            name="accountNumber"
            value={details.accountNumber}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="IFSC Code"
            name="ifscCode"
            value={details.ifscCode}
            onChange={handleChange}
          />
          {/* <input type="text" placeholder="Shop Owner Photo"/> */}
          <input
            type="file"
            name="shopOwnerImage"
            accept=".jpeg,.png,.jpg"
            ref={image1Ref}
            onChange={(e) => handleImage1Uplaod(e)}
          ></input>
          <div className="inputFile" onClick={handleImage1Click}>
            <h4>Shop Owner photo</h4>
            <FiUpload className="upload" />
          </div>
          <input
            type="file"
            ref={image2Ref}
            accept=".jpeg,.png,.jpg"
            name="shopImage"
            onChange={(e) => handleImage2Uplaod(e)}
          ></input>
          <div className="inputFile" onClick={handleImage2Click}>
            <h4>Shop photo</h4>
            <FiUpload className="upload" />
          </div>
          <input
            type="text"
            placeholder="Number of mechanics"
            name="numberofMechanics"
            value={details.numberofMechanics}
            onChange={handleChange}
          />
        </form>
        <button className="fourGearJoinButton">Enter mechanics details</button>
      </div>
    </div>
  );
}

export default Join;
