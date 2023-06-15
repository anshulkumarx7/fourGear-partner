import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Styles/SidebarOptions.css";
function SidebarOption(props) {
  return (
    <div className="fourGearPartnerSidebarOption">
      <NavLink to={props.route}>
        <props.iconName className="partnerClipboard" />
        <h2>{props.optionName}</h2>
      </NavLink>
    </div>
  );
}

export default SidebarOption;
