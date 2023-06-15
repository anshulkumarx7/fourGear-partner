import React, { useRef } from 'react'
import "../Styles/Sidebar.css";

import { BsFillClipboard2Fill } from 'react-icons/bs';
import { FaFileSignature } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import { RxCross1 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import logoSidebar from "../assets/lopoSidebar.svg";
import SidebarOption from './SidebarOption';

function Sidebar(props) {
  return (
    <div className='fourGearPartnerSidebar' ref={props.reference}>
    <RxCross1  className='sidebarCrossButton' onClick={props.handleRemove}/>
    <img src={logoSidebar} alt="logo" />
    <div className='fourGearPartnerSidebarMenus'>
        <SidebarOption  iconName={BsFillClipboard2Fill} optionName="DashBoard" route="/a" />
        <SidebarOption  iconName={FaFileSignature} optionName="Daily Report" route="/" />
    </div>
    <div className="fourGearPartnerLogout">
      <Link to="/c"><BiLogOut className='partnerClipboard' /><h2>Logout</h2></Link>
    </div>
    </div>
  )
}

export default Sidebar