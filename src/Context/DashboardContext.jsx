import React, { createContext, useState, useEffect,useContext } from 'react';
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
export const DashboardContext=createContext();

export const DashboardProvider = ({ children }) => {
    const { regenerateToken, logout } = useContext(AuthContext);
    const [profileData, setProfileData] = useState({});
    const [bookingData, setBookingData] = useState([]);
    const [dataLoading, setDataLoading] = useState(false);
    const [billServiceId,setBillServiceId]=useState("");
    let accessToken = localStorage.getItem("accessToken");
    let refreshToken = localStorage.getItem("refreshToken");
    let configRegenerateToken = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/api/auth/refresh",
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    };
    const urlUser = "http://localhost:5000/api/partners/user";
    const urlBooking = "http://localhost:5000/api/partners/bike";
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    const makeRequest = async () => {
      try {
        setDataLoading(true);
        const response = await axios.get(urlUser, { headers });
        setProfileData(response.data.user);
        setDataLoading(false);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          // whenever there is error with status code 400 regenrating token
          console.log("Error: Bad Request");
          regenerateToken(configRegenerateToken);
          makeRequest();
        } else {
          console.log("Error:", error);
        }
      }
    };
    const fetchBookingData=async()=>{
      try{
        const res = await axios.get(urlBooking, { headers });
        console.log(JSON.stringify(res.data.data));
        setBookingData(Object.values(res.data.data));
      }catch(error){
        if (error.response && error.response.status === 400) {
          // whenever there is error with status code 400 regenrating token
          console.log("Error: Bad Request");
          regenerateToken(configRegenerateToken);
          fetchBookingData();
        } else {
          console.log("Error:", error);
        }
      }
    } 
    // const 
  return (
      <DashboardContext.Provider value={{profileData,bookingData,makeRequest,fetchBookingData,dataLoading,setBillServiceId,billServiceId}}>
        {children}
      </DashboardContext.Provider>
    );
  };
  