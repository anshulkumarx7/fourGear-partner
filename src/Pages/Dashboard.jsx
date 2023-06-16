import React,{useRef} from 'react'
import Order from '../Components/Order'
import "../Styles/Dashboard.css";
import Sidebar from '../Components/Sidebar';
import Bill from '../Components/Bill';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  const barRef=useRef(null);
  const handleBars = () => {
    barRef.current.classList.add("responsive_sidebar");
  };
  const handleRemove =()=>{
    barRef.current.classList.remove("responsive_sidebar");
  }
  return (
    <div className='fourGearPartnerDashBoard'>
        <Sidebar reference={barRef} handleRemove={handleRemove}/>
        {/* <Order  /> */}
        {/* <Bill handle={handleBars} /> */}
        <Outlet handleBars={handleBars} />
    </div>
  )
}

export default Dashboard