import React from "react";
import "../Styles/Order.css";
import { SlCalender } from "react-icons/sl";
import { NavLink } from "react-router-dom";

import { FaBars } from 'react-icons/fa';
import { Outlet } from "react-router-dom";

function Order(props) {
  return (
    <div className="fourGearPartnerOrder">
      <div className="fourGearPartnerOrderHeader">
        <FaBars className="orderBars" onClick={props.handleBars}/>
        <div className="fourGearPartnerOrderDate">
          <SlCalender className="calender" />
          <h2>June 15,2023</h2>
        </div>
        <div className="fourGearPartnerOrderDetails">
          <h2>New Rajiv Garage</h2>
          <h4>Patia,Bhubaneshwar</h4>
        </div>
      </div>

      <div className="fourGearPartnerOrderMenus">
        <NavLink to="/dashboard">All Orders</NavLink>
        <NavLink to="/dashboard/confirmed">Confirmed Orders</NavLink>
        <NavLink to="/dashboard/pending">Pending Orders</NavLink>
        <NavLink to="/dashboard/paid">Paid Orders</NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Order;
