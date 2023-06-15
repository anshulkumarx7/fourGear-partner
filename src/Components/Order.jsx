import React from "react";
import "../Styles/Order.css";
import { SlCalender } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import IdIcon from "../assets/id.svg";
import CustomerIcon from "../assets/customer.svg";
import MobileIcon from "../assets/mobile.svg";
import BikeIcon from "../assets/bike.svg";
import { FaBars } from 'react-icons/fa';

import StatusIcon from "../assets/statussvg.svg";
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
        <NavLink to="/d">All Orders</NavLink>
        <NavLink to="/e">Confirmed Orders</NavLink>
        <NavLink to="/f">Pending Orders</NavLink>
        <NavLink to="/g">Paid Orders</NavLink>
      </div>
      <table className="fourGearPartnerOrderDetailTable">
        <tr className="fourGearPartnerDetailTableFirstRow">
          <th className="fourGearPartnerOrderTableHeader">
            <h2>
              <img src={IdIcon} alt="id"></img>Orders
            </h2>
          </th>
          <th className="fourGearPartnerOrderTableHeader">
            <h2>
              <img src={CustomerIcon} alt="id"></img>Customer Name
            </h2>
          </th>
          <th className="fourGearPartnerOrderTableHeader">
            <h2>
              {" "}
              <img src={MobileIcon} alt="id"></img>Mobile Number
            </h2>
          </th>
          <th className="fourGearPartnerOrderTableHeader">
            <h2>
              {" "}
              <img src={BikeIcon} alt="id"></img>Bike Model
            </h2>
          </th>
          <th className="fourGearPartnerOrderTableHeader">
            <h2>
              <img src={StatusIcon} alt="id"></img>Status
            </h2>
          </th>
        </tr>
        <tr>
          <td>#353</td>
          <td>Anshul Kumar</td>
          <td>3829105768</td>
          <td>CX-3123</td>
          <td>Confirm</td>
        </tr>
        <tr>
          <td>#353</td>
          <td>Anshul Kumar</td>
          <td>3829105768</td>
          <td>CX-3123</td>
          <td>Confirm</td>
        </tr>
        <tr>
          <td>#353</td>
          <td>Anshul Kumar</td>
          <td>3829105768</td>
          <td>CX-3123</td>
          <td>Confirm</td>
        </tr>
        <tr>
          <td>#353</td>
          <td>Anshul Kumar</td>
          <td>3829105768</td>
          <td>CX-3123</td>
          <td>Confirm</td>
        </tr>
        <tr>
          <td>#353</td>
          <td>Anshul Kumar</td>
          <td>3829105768</td>
          <td>CX-3123</td>
          <td>Confirm</td>
        </tr>
        <tr>
          <td>#353</td>
          <td>Anshul Kumar</td>
          <td>3829105768</td>
          <td>CX-3123</td>
          <td>Confirm</td>
        </tr>
        
      </table>
    </div>
  );
}

export default Order;
