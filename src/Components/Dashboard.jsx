import React, { useEffect, useState, useContext } from "react";
import { LogOut } from "lucide-react";
import "../Styles/Dashboard.css";
import { MagnifyingGlass } from "react-loader-spinner";
import DashBoardCard from "./DashBoardCard";
import { DashboardContext } from "../Context/DashboardContext";
import { AuthContext } from "../Context/AuthContext";
import NotFound from "./NotFound";
function Dashboard() {
  const { profileData, bookingData, makeRequest, fetchBookingData, dataLoading } = useContext(DashboardContext);
  const { logout } = useContext(AuthContext);
  useEffect(() => {
    makeRequest();
  }, []);
  useEffect(() => {
    fetchBookingData();
  }, [bookingData])
  //Pending services
  const pending = bookingData.filter(card => (card.isConfirmed || card.isAbandoned) === false);
  //Confirmed Services
  const confirmed =bookingData.filter(card => (card.isConfirmed) === true);
  //Cancelled Services
  const cancelled=bookingData.filter(card => card.isAbandoned === true);
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
                {pending.length === 0 && <NotFound/>}
                {pending.length !=0 && pending.map((data, index) => {
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
                  )})};
              </div>
              <h2 className="fourGearRecentServicesTitle">Confirmed Services</h2>
              <div className="fourGearDashboardService">
                {confirmed.length === 0 && <NotFound/>}
                {confirmed.length!=0 && confirmed.map((data, index) => {
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
                {cancelled.length === 0 && <NotFound/>}
                {cancelled.length !=0 && cancelled.map((data, index) => {
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
    )
    };

export default Dashboard;
