import React, { useState } from "react";
import "../Styles/MechanicsDetails.css";
import { RxCross2 } from "react-icons/rx";
import { GrAdd } from "react-icons/gr";
function MechanicsDetails() {
  const [mechanicDetails, setMechanicsDetails] = useState([
    {
      name: "",
      contactNumber: "",
      address: "",
      aadharNumber: "",
    },
  ]);
  const handleAddMore = () => {
    setMechanicsDetails([
      ...mechanicDetails,
      { name: "", contactNumber: "", address: "", aadharNumber: "" },
    ]);
  };
  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...mechanicDetails];
    list[index][name] = value;
    setMechanicsDetails(list);
  };
  console.log(mechanicDetails);
  return (
    <div className="fourGearMechanics">
      <h1>Enter all the mechanics details</h1>
      <div className="fourGearMechanicsContainer">
        <h1>Mechanics Details</h1>
        <div className="fourGearMechanicsSubContainer">
          {mechanicDetails.map((data, index) => {
            return (
              <div className="fourGearMechanicsForm" key={index}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={(event) => handleChange(event, index)}
                  value={mechanicDetails[index].name}
                />
                <input
                  type="text"
                  name="contactNumber"
                  placeholder="Contact Number"
                  onChange={(event) => handleChange(event, index)}
                  value={mechanicDetails[index].contactNumber}
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  onChange={(event) => handleChange(event, index)}
                  value={mechanicDetails[index].address}
                />
                <input
                  type="text"
                  name="aadharNumber"
                  placeholder="Aadhar Number"
                  onChange={(event) => handleChange(event, index)}
                  value={mechanicDetails[index].aadharNumber}
                />
              </div>
            );
          })}
          {/* <button className="mechanicsRemoveButton">
            <RxCross2 className="rxcross2" />
            Remove
          </button> */}
          {/* {mechanicDetails.length === 5 ? (
            <h5 className="exceededMechanicMessage">
              Can't add more Mechanics
            </h5>
          ) : ( */}
            <div className="fourGearMechanicsDetailsButtons">
              <button onClick={handleAddMore}>+Add more</button>
              <button className="mechanicsRemoveButton">
                <RxCross2 className="rxcross2" />
                Remove
              </button>
            </div>
          {/* )} */}
        </div>
      </div>
      <button className="mechanicSubmitButton">Submit</button>
    </div>
  );
}

export default MechanicsDetails;
