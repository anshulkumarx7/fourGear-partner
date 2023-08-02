import React, { useContext, useEffect, useState } from "react";
import "../Styles/DashboardCard.css";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { DashboardContext } from "../Context/DashboardContext";
function DashBoardCard(props) {
  const {billServiceId,setBillServiceId}=useContext(DashboardContext);
  const navigate=useNavigate();
  let accessToken = localStorage.getItem("accessToken");
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  const urlConfirm = "http://localhost:5000/api/partners/confirm";
  const urlDecline = "http://localhost:5000/api/partners/decline";
  const handleConfirm = async () => {
    const id = { _id: props.id };
    try {
      const response = await axios.post(urlConfirm, id, { headers });
      console.log(JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  const handleDecline = async () => {
    // console.log(props.id);
    const id = { _id: props.id };
    try {
      setLoading(true);
      const response = await axios.post(urlDecline, id, { headers });
      console.log(JSON.stringify(response.data));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleGenerateBillButton =()=>{
    setBillServiceId(props.id);
    navigate("/bill");
  }
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="fourGearServiceCard"
    >
      <div className="fourGearBikeInfo">
        <h5>#{props.id.substr(props.id.length - 5)}</h5>
        <h5>
          {props.bikeCompany} {props.bikeModel}
        </h5>
      </div>
      <div className="fourGearCustomer">
        <div className="fourGearCustomerInfo">
          <h2>{props.customerName}</h2>
          <h5>{props.customerContact}</h5>
        </div>
        <div
          className={
            props.confirmed
              ? "fourGearStatus statusConfirmed"
              : "fourGearStatus statusPending"
          }
        >
          {!props.declined && (
            <h5>{props.confirmed ? "Confirmed" : "Pending"}</h5>
          )}
          {props.declined && (
            <h5 className="fourGearStatus declinedStatus">Cancelled</h5>
          )}
        </div>
      </div>
      <div className="fourGearAddressInfo">
        <h2>Address:</h2>
        <h5>Street: {props.addressStreet}</h5>
        <h5>Landmark: {props.addressLandmark}</h5>
        <h5>{props.address}</h5>
      </div>
      {props.declined ? (
        <div></div>
      ) : (
        <div>
          {props.confirmed ? (
            <button onClick={handleGenerateBillButton} className="fourGearCardButton">Generate Bill</button>
          ) : (
            <button className="fourGearCardButton" onClick={handleConfirm}>
              Confirm
            </button>
          )}
        </div>
      )}
      {props.declined ||
        (!props.confirmed && (
          <>
            <button
              className="fourGearCardButton cardDeclineButton"
              onClick={handleDecline}
            >
              Decline
            </button>
          </>
        ))}
    </div>
  );
}

export default DashBoardCard;
