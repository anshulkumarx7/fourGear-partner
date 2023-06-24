import React, { useRef, useState, useEffect, useContext } from "react";
import "../Styles/Join.css";
import Image1 from "../assets/joinfourGear.svg";
import { FiUpload } from "react-icons/fi";
import detailsValidation from "../schemas/joinValidation";
import ownerImageValidations from "../schemas/ownerImageValidations";
import { CgDanger } from "react-icons/cg";
import { JoinContext } from "../Context/JoinContext";
import { useNavigate } from "react-router-dom";


function Join() {
  const navigate = useNavigate();
  const navigation = () => {
    navigate("/mechanics");
  };
  const [imageError,setImageError]=useState(false);
  const {
    details,
    setDetails,
    currLocation,
    setCurrLocation,
    handleImage1Uplaod,
    handleImage2Uplaod,
    ownerImage,
    shImage,
    setOwnerImage,
    setShopImage,
  } = useContext(JoinContext);
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
  // const [ownerImage, setOwnerImage] = useState("");
  // const [shImage, setShopImage] = useState("");
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const [detailsErrors, setDetailsErrors] = useState({});
  const [ownerImageErrors, setOwnerImageErrors] = useState({});
  const [loading, setLoading] = useState(false);

  //handleChange
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
    setDetailsErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    setImageError(false);
  };
  const handleImage1Click = () => {
    image1Ref.current.click();
  };
  const handleImage2Click = () => {
    image2Ref.current.click();
  };
  //handleBlur
  const handleDetailsBlur = (event) => {
    const { name } = event.target;
    try {
      if (name in details) {
        detailsValidation.validateSyncAt(name, details);
      } else if (name in ownerImage) {
        joinValidation.validateSyncAt(name, ownerImage);
      } else if (name in shImage) {
        joinValidation.validateSyncAt(name, shImage);
      }
    } catch (validationError) {
      setDetailsErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validationError.message,
      }));
    }
  };
  //handleSubmit
  const handleSubmit = async (e) => {
    if(ownerImage.length === 0 || shImage.length === 0){
      setImageError(true);
    }
    e.preventDefault();
    try {
      setLoading(true);
      await detailsValidation.validate(details, { abortEarly: false });
      setLoading(false);
      console.log(details);
      console.log("shopImage");
      console.log(shImage);
      console.log("ownerImage");
      console.log(ownerImage);
      console.log(currLocation);
      // navigation();
      // setSubmit(true);
      navigate("/mechanics");
    } catch (validationError) {
      setLoading(false);
      console.log(validationError);
      const newErrors = {};
      validationError.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setDetailsErrors(newErrors);
    }
  };
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
            onBlur={handleDetailsBlur}
            value={details.name}
          />
          {detailsErrors.name && (
            <div className="loginErrors">
              <CgDanger className="cgDanger" />
              {detailsErrors.name}
            </div>
          )}
          <input
            type="text"
            placeholder="Contact Number"
            name="contactNumber"
            autoComplete="off"
            onBlur={handleDetailsBlur}
            onChange={handleChange}
            value={details.contactNumber}
          />
          {detailsErrors.contactNumber && (
            <div className="loginErrors">
              <CgDanger className="cgDanger" />
              {detailsErrors.contactNumber}
            </div>
          )}
          <input
            type="email"
            placeholder="Email (optional)"
            name="email"
            autoComplete="off"
            onBlur={handleDetailsBlur}
            onChange={handleChange}
            value={details.email}
          />
          {detailsErrors.email && (
            <div className="loginErrors">
              <CgDanger className="cgDanger" />
              {detailsErrors.email}
            </div>
          )}
          <input
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="off"
            onBlur={handleDetailsBlur}
            onChange={handleChange}
            value={details.password}
          />
          {detailsErrors.password && (
            <div className="loginErrors">
              <CgDanger className="cgDanger" />
              {detailsErrors.password}
            </div>
          )}
          <input
            type="text"
            placeholder="Address"
            name="address"
            autoComplete="off"
            onBlur={handleDetailsBlur}
            onChange={handleChange}
            value={details.address}
          />
          {detailsErrors.address && (
            <div className="loginErrors">
              <CgDanger className="cgDanger" />
              {detailsErrors.address}
            </div>
          )}
          <input
            type="text"
            placeholder="Aadhar Number"
            name="aadharNumber"
            autoComplete="off"
            onBlur={handleDetailsBlur}
            value={details.aadharNumber}
            onChange={handleChange}
          />
          {detailsErrors.aadharNumber && (
            <div className="loginErrors">
              <CgDanger className="cgDanger" />
              {detailsErrors.aadharNumber}
            </div>
          )}
          <input
            type="text"
            placeholder="Account Number"
            name="accountNumber"
            autoComplete="off"
            onBlur={handleDetailsBlur}
            value={details.accountNumber}
            onChange={handleChange}
          />
          {detailsErrors.accountNumber && (
            <div className="loginErrors">
              <CgDanger className="cgDanger" />
              {detailsErrors.accountNumber}
            </div>
          )}
          <input
            type="text"
            placeholder="IFSC Code"
            name="ifscCode"
            autoComplete="off"
            onBlur={handleDetailsBlur}
            value={details.ifscCode}
            onChange={handleChange}
          />
          {detailsErrors.ifscCode && (
            <div className="loginErrors">
              <CgDanger className="cgDanger" />
              {detailsErrors.ifscCode}
            </div>
          )}
          <input
            type="file"
            name="shopOwnerImage"
            accept=".jpeg,.png,.jpg"
            ref={image1Ref}
            onBlur={handleDetailsBlur}
            onChange={(e) => handleImage1Uplaod(e)}
            // value={ownerImage}
          ></input>
          <div className="inputFile" onClick={handleImage1Click}>
            <h4>
              {ownerImage.length === 0 ? "Shop Owner photo" : "Image Uploaded"}
            </h4>
            <FiUpload className="upload" />
          </div>
          {detailsErrors.shopOwnerImage && (
            <div className="loginErrors">
              <CgDanger className="cgDanger" />
              {detailsErrors.shopOwnerImage}
            </div>
          )}
          {(imageError && !detailsErrors.shopOwnerImage) && (
            <div className="loginErrors">
              <CgDanger className="cgDanger" />
               Image Required
            </div>
          )}
          
          {/* {(ownerImage.length === 0 && !errors.shopOwnerImage) &&  } */}
          <input
            type="file"
            ref={image2Ref}
            accept=".jpeg,.png,.jpg"
            name="shopImage"
            onBlur={handleDetailsBlur}
            onChange={(e) => handleImage2Uplaod(e)}
            // value={shImage}
          ></input>
          <div className="inputFile" onClick={handleImage2Click}>
            <h4>{shImage.length === 0 ? "Shop Photo" : "Image Uploaded"}</h4>
            <FiUpload className="upload" />
          </div>
          {detailsErrors.shopImage && (
            <div className="loginErrors">
              <CgDanger className="cgDanger" />
              {detailsErrors.shopImage}
            </div>
          )}
          {(imageError && !detailsErrors.shopOwnerImage) && (
            <div className="loginErrors">
              <CgDanger className="cgDanger" />
               Image Required
            </div>
          )}
          <input
            type="text"
            placeholder="Number of mechanics"
            name="numberofMechanics"
            autoComplete="off"
            onBlur={handleDetailsBlur}
            value={details.numberofMechanics}
            onChange={handleChange}
          />
          {detailsErrors.numberofMechanics && (
            <div className="loginErrors">
              <CgDanger className="cgDanger" />
              {detailsErrors.numberofMechanics}
            </div>
          )}
        </form>
        <button className="fourGearJoinButton" onClick={handleSubmit}>
          Enter mechanics details
        </button>
      </div>
    </div>
  );
}

export default Join;
