import React from 'react'
import Sidebar from '../Components/sideBar'
import Order from '../Components/Order'
import "../Styles/Dashboard.css";
function Dashboard() {
  return (
    <div className='fourGearPartnerDashBoard'>
        <Sidebar />
        <Order />
    </div>
  )
}

export default Dashboard