import React,{useRef} from 'react'
import Order from '../Components/Order'
import "../Styles/Dashboard.css";
import Sidebar from '../Components/Sidebar';
import Bill from '../Components/Bill';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  const barRef=useRef(null);
  
  const handleRemove =()=>{
    barRef.current.classList.remove("responsive_sidebar");
  }
  return (
    <div className='fourGearPartnerDashBoard'>
        <Sidebar reference={barRef} handleRemove={handleRemove}/>
        {/* <Order handleBars={handleBars} /> */}
        {/* <Bill handle={handleBars} /> */}
        <Outlet />
    </div>
  )
}

export default Dashboard