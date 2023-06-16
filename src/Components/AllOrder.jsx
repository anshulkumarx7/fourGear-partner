import React from 'react'
import IdIcon from "../assets/id.svg";
import CustomerIcon from "../assets/customer.svg";
import MobileIcon from "../assets/mobile.svg";
import BikeIcon from "../assets/bike.svg";
import StatusIcon from "../assets/statussvg.svg";

function AllOrder() {
  return (
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
  )
}

export default AllOrder
