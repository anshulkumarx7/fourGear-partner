import React from 'react'
import "../Styles/DashboardCard.css";
function DashBoardCard() {
  return (
    <div className="fourGearServiceCard">
              <div className="fourGearBikeInfo">
                <h5>#1352</h5>
                <h5>Royal Enfield</h5>
              </div>
              <div className="fourGearCustomer">
                <div className="fourGearCustomerInfo">
                  <h2>Anshul Kumar</h2>
                  <h5>9984771258</h5>
                </div>
                <div
                  className="fourGearStatus"
                  style={{ background: "#16BA50" }}
                >
                  <h5>Pending</h5>
                </div>
              </div>
              <button className="fourGearCardButton">Confirm</button>
            </div>
  )
}

export default DashBoardCard