import React from "react";
import { LogOut } from "lucide-react";
import "../Styles/Dashboard.css";
import DashBoardCard from "./DashBoardCard";
function Dashboard() {
  return (
    <div className="fourGearDashboard">
      <div className="fourGearDashboardContainer">
        <div className="fourGearDashboardHeader">
          <div className="fourGearDashboardShopDetails">
            <div className="fourGearDashboardCircle"></div>
            <div className="fourGearDashboardDetails">
              <h2>Rajiv New Garage</h2>
              <h5>Patia,Bhubaneshwar</h5>
            </div>
          </div>
          <div className="fourGearLogout">
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
          <h2 className="fourGearRecentServicesTitle">Recent Services</h2>
          <div className="fourGearDashboardService">
            <DashBoardCard />
            <DashBoardCard />
            <DashBoardCard />
            <DashBoardCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
