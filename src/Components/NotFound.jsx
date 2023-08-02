import React from 'react';
import "../Styles/NotFound.css";
import { GrAlert } from "react-icons/gr";
function NotFound() {
  return (
    <div className="notFoundMotomagicians">
       <GrAlert className='notFoundAlert'></GrAlert>
       <h2>No service found!!</h2>
    </div>
  )
}

export default NotFound