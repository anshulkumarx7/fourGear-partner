import React, { useState } from "react";
import "../Styles/MechanicsDetails.css";
import { RxCross2 } from "react-icons/rx";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
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
  const handleRemove = (index) => {
    const list = [...mechanicDetails];
    list.splice(index, 1);
    setMechanicsDetails(list);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(mechanicDetails);
  };
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
          <div className="fourGearMechanicsDetailsButtons">
            {mechanicDetails.length < 5 && (
              <button onClick={handleAddMore}>
                <IoIosAddCircle className="rxcross2" />
                Add more
              </button>
            )}

            {mechanicDetails.length > 1 && (
              <button className="mechanicsRemoveButton" onClick={handleRemove}>
                <IoIosRemoveCircle className="rxcross2" />
                Remove
              </button>
            )}
          </div>
        </div>
      </div>
      <button className="mechanicSubmitButton" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default MechanicsDetails;
