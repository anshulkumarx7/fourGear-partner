import React, { useRef, useState,useEffect } from "react";
import "../Styles/Join.css";
import Image1 from "../assets/joinfourGear.svg";
import { FiUpload } from "react-icons/fi";
import joinValidation from "../schemas/joinValidation"
import { CgDanger } from "react-icons/cg";
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
    password: "",
    address: "",
    aadharNumber: "",
    accountNumber: "",
    ifscCode: "",
    numberofMechanics: "",
  });
  const [currLocation, setCurrLocation] = useState({
    latitude: "",
    longitude: "",
  });
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrLocation({
        latitude: latitude,
        longitude: longitude,
      });
    });
  };
  useEffect(() => {
    getLocation();
  }, []);
  const [ownerImage, setOwnerImage] = useState("");
  const [shImage, setShopImage] = useState("");
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  //handleChange
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };
  const handleImage1Click = () => {
    image1Ref.current.click();
  };
  const handleImage2Click = () => {
    image2Ref.current.click();
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
  console.log("Shop image")

  console.log(shImage);
  console.log("image")

  console.log(ownerImage);
  //handleBlur
  
  const handleBlur = (event) => {
    const { name } = event.target;
    try {
      if (name in details) {
        joinValidation.validateSyncAt(name, details);
      } else if (name in ownerImage) {
        joinValidation.validateSyncAt(name, ownerImage);
      } else if (name in shopImage) {
        joinValidation.validateSyncAt(name, shopImage);
      }
    } catch (validationError) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validationError.message,
      }));
    }
  };
  //handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        details,
        ownerImage,
        shImage
      };
      setLoading(true);
      await joinValidation.validate(formData, { abortEarly: false });
      setLoading(false);
      // login(config);
    } catch (validationError) {
      setLoading(false);
      console.log(validationError);
      const newErrors = {};
      validationError.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };
  console.log("errors")
  console.log(errors);
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
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            value={details.name}
          />
          {errors.name && (
                <div className="loginErrors">
                  <CgDanger className="cgDanger" />
                  {errors.name}
                </div>
              )}
          <input
            type="text"
            placeholder="Contact Number"
            name="contactNumber"
            autoComplete="off"
            onBlur={handleBlur}
            onChange={handleChange}
            value={details.contactNumber}
          />
          {errors.contactNumber && (
                <div className="loginErrors">
                  <CgDanger className="cgDanger" />
                  {errors.contactNumber}
                </div>
              )}
          <input
            type="email"
            placeholder="Email (optional)"
            name="email"
            autoComplete="off"
            onBlur={handleBlur}
            onChange={handleChange}
            value={details.email}
          />
          {errors.email && (
                <div className="loginErrors">
                  <CgDanger className="cgDanger" />
                  {errors.email}
                </div>
              )}
          <input
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="off"
            onBlur={handleBlur}
            onChange={handleChange}
            value={details.password}
          />
          {errors.password && (
                <div className="loginErrors">
                  <CgDanger className="cgDanger" />
                  {errors.password}
                </div>
              )}
          <input
            type="text"
            placeholder="Address"
            name="address"
            autoComplete="off"
            onBlur={handleBlur}
            onChange={handleChange}
            value={details.address}
          />
          {errors.address && (
                <div className="loginErrors">
                  <CgDanger className="cgDanger" />
                  {errors.address}
                </div>
              )}
          <input
            type="text"
            placeholder="Aadhar Number"
            name="aadharNumber"
            autoComplete="off"
            onBlur={handleBlur}
            value={details.aadharNumber}
            onChange={handleChange}
          />
          {errors.aadharNumber && (
                <div className="loginErrors">
                  <CgDanger className="cgDanger" />
                  {errors.aadharNumber}
                </div>
              )}
          <input
            type="text"
            placeholder="Account Number"
            name="accountNumber"
            autoComplete="off"
            onBlur={handleBlur}
            value={details.accountNumber}
            onChange={handleChange}
          />
          {errors.accountNumber && (
                <div className="loginErrors">
                  <CgDanger className="cgDanger" />
                  {errors.accountNumber}
                </div>
              )}
          <input
            type="text"
            placeholder="IFSC Code"
            name="ifscCode"
            autoComplete="off"
            onBlur={handleBlur}
            value={details.ifscCode}
            onChange={handleChange}
          />
          {errors.ifscCode && (
                <div className="loginErrors">
                  <CgDanger className="cgDanger" />
                  {errors.ifscCode}
                </div>
              )}
          <input
            type="file"
            name="shopOwnerImage"
            accept=".jpeg,.png,.jpg"
            ref={image1Ref}
            onBlur={handleBlur}
            onChange={(e) => handleImage1Uplaod(e)}
            // value={ownerImage}
          ></input>
          <div className="inputFile" onClick={handleImage1Click}>
            <h4>{ownerImage.length===0 ? "Shop Owner photo" : "Image Uploaded"}</h4>
            <FiUpload className="upload" />
          </div>
          {errors.shopOwnerImage && (
                <div className="loginErrors">
                  <CgDanger className="cgDanger" />
                  {errors.shopOwnerImage}
                </div>
              )}
          <input
            type="file"
            ref={image2Ref}
            accept=".jpeg,.png,.jpg"
            name="shopImage"
            onBlur={handleBlur}
            onChange={(e) => handleImage2Uplaod(e)}
            // value={shImage}
          ></input>
          <div className="inputFile" onClick={handleImage2Click}>
            <h4>{shImage.length===0 ? "Shop Photo" : "Image Uploaded"}</h4>
            <FiUpload className="upload" />
          </div>
          {errors.shopImage && (
                <div className="loginErrors">
                  <CgDanger className="cgDanger" />
                  {errors.shopImage}
                </div>
              )}
          <input
            type="text"
            placeholder="Number of mechanics"
            name="numberofMechanics"
            autoComplete="off"
            onBlur={handleBlur}
            value={details.numberofMechanics}
            onChange={handleChange}
          />
          {errors.numberofMechanics && (
                <div className="loginErrors">
                  <CgDanger className="cgDanger" />
                  {errors.numberofMechanics}
                </div>
              )}
        </form>
        <button className="fourGearJoinButton" onClick={handleSubmit}>Enter mechanics details</button>
      </div>
    </div>
  );
}

export default Join;
