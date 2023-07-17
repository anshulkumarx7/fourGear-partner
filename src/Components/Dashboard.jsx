import React, { useEffect, useState, useContext } from "react";
import { LogOut } from "lucide-react";
import "../Styles/Dashboard.css";
import { MagnifyingGlass } from "react-loader-spinner";
import DashBoardCard from "./DashBoardCard";
import axios from "axios";

import { AuthContext } from "../Context/AuthContext";
function Dashboard() {
  const { regenerateToken, logout } = useContext(AuthContext);
  const [profileData, setProfileData] = useState({});
  const [bookingData, setBookingData] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
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
  const urlBooking = "http://localhost:5000/api/bookings/partner/bike";
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
  useEffect(() => {
    makeRequest();
  }, []);
  useEffect(()=>{
    fetchBookingData();
  },[bookingData])
  
  console.log(`bookingData :${bookingData}`);
  return (
    <div>
      {dataLoading ? (
        <div className="loaderDashboard">
          <MagnifyingGlass
            visible={true}
            height="100"
            width="100"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#b65e0c"
          />
        </div>
      ) : (
        <div className="fourGearDashboard">
          <div className="fourGearDashboardContainer">
            <div className="fourGearDashboardHeader">
              <div className="fourGearDashboardShopDetails">
                <div className="fourGearDashboardCircle"></div>
                <div className="fourGearDashboardDetails">
                  <h2>{profileData.shopName}</h2>
                  <h5>
                    {profileData.address} , {profileData.city}
                  </h5>
                </div>
              </div>
              <div className="fourGearLogout" onClick={logout}>
                <LogOut
                  size={32}
                  color="#b65e0c"
                  strokeWidth={1.75}
                  absoluteStrokeWidth
                />
                <h2>Logout</h2>
              </div>
            </div>
            <div className="fourGearRecentServices">
             
              <h2 className="fourGearRecentServicesTitle">Pending Services</h2>
              <div className="fourGearDashboardService">
                {bookingData.filter(card => (card.isConfirmed || card.isAbandoned) === false ).map((data, index) => {
                  return (
                    <DashBoardCard
                      key={index}
                      id={data._id}
                      bikeCompany={data.bike_Company}
                      bikeModel={data.bike_Model}
                      customerName={
                        data.name.charAt(0).toUpperCase() +
                        data.name.slice(1, data.name.length)
                      }
                      customerContact={data.phone}
                      confirmed={data.isConfirmed}
                      address={data.address.address}
                      addressStreet={data.address.street}
                      addressLandmark={data.address.landmark}
                      declined={data.isAbandoned}
                    />
                  );
                })}
              </div>
              <h2 className="fourGearRecentServicesTitle">Confirmed Services</h2>
              <div className="fourGearDashboardService">
                {bookingData.filter(card => (card.isConfirmed) === true ).map((data, index) => {
                  return (
                    <DashBoardCard
                      key={index}
                      id={data._id}
                      bikeCompany={data.bike_Company}
                      bikeModel={data.bike_Model}
                      customerName={
                        data.name.charAt(0).toUpperCase() +
                        data.name.slice(1, data.name.length)
                      }
                      customerContact={data.phone}
                      confirmed={data.isConfirmed}
                      address={data.address.address}
                      addressStreet={data.address.street}
                      addressLandmark={data.address.landmark}
                      declined={data.isAbandoned}
                    />
                  );
                })}
              </div>
              <h2 className="fourGearRecentServicesTitle">Cancelled Services</h2>
              <div className="fourGearDashboardService">
                {bookingData.filter(card => card.isAbandoned === true ).map((data, index) => {
                  return (
                    <DashBoardCard
                      key={index}
                      id={data._id}
                      bikeCompany={data.bike_Company}
                      bikeModel={data.bike_Model}
                      customerName={
                        data.name.charAt(0).toUpperCase() +
                        data.name.slice(1, data.name.length)
                      }
                      customerContact={data.phone}
                      confirmed={data.isConfirmed}
                      address={data.address.address}
                      addressStreet={data.address.street}
                      addressLandmark={data.address.landmark}
                      declined={data.isAbandoned}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
