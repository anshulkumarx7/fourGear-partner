import React, { useState } from "react";
import "../Styles/MechanicsDetails.css";
import { RxCross2 } from "react-icons/rx";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import mechanicsValidation from "../schemas/mechanicsValidtion";
import { CgDanger } from "react-icons/cg";

function MechanicsDetails() {
  const [mechanicDetails, setMechanicsDetails] = useState([
    {
      name: "",
      contactNumber: "",
      address: "",
      aadharNumber: "",
    },
  ]);
  // const [errors, setErrors] = useState({});
  // const [loading, setLoading] = useState(false);
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
    // setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };
  const handleRemove = (index) => {
    const list = [...mechanicDetails];
    list.splice(index, 1);
    setMechanicsDetails(list);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // try {
    //   setLoading(true);
    //   // await mechanicsValidation.validate(mechanicDetails, {
    //   //   abortEarly: false,
    //   // });
    //   setLoading(false);
    //   // login(config);
    // } catch (validationError) {
    //   setLoading(false);
    //   console.log(validationError);
    //   // const newErrors ={};
    //   // validationError.inner.forEach((error) => {
    //   //   newErrors[error.path] = error.message;
    //   // });
    //   // setErrors(newErrors);
    // }  
    console.log(mechanicDetails);
  };
  // const handleBlur = (event,index) => {
  //   const { name } = event.target;
  //   try {
  //     mechanicsValidation.validateSyncAt(name, mechanicDetails[index]);
  //     // setErrors((prevErrors) => ({
  //     //   ...prevErrors,
  //     //   [index]: {
  //     //     ...prevErrors[index],
  //     //     [name]: undefined,
  //     //   },
  //     // }));
  //   } catch (validationError) {
  //     setErrors((prevErrors) => ({
  //       ...prevErrors,
  //       [index]: {
  //         ...prevErrors[index],
  //         [name]:validationError.message
  //       }
  //     }));
  //   }
  // };
  // console.log(errors);
  return (
    <div className="fourGearMechanics">
      <h1>Enter all the mechanics details</h1>
      <div className="fourGearMechanicsContainer">
        <h1>Mechanics Details</h1>
        <div className="fourGearMechanicsSubContainer">
          {mechanicDetails.map((data,index) => {
            return (
              <div className="fourGearMechanicsForm" key={index}>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={(event) => handleChange(event,index)}
                    // onBlur={(event) => handleBlur(event,index)}
                    value={mechanicDetails[index].name}
                  />
                  {/* {(errors[index]) && (
                    <div className="mechanicsErrors">
                      <CgDanger className="cgDanger" />
                      {errors[index].name}
                    </div>
                  )} */}
                </div>
                <div>
                  <input
                    type="text"
                    name="contactNumber"
                    placeholder="Contact Number"
                    onChange={(event) => handleChange(event, index)}
                    // onBlur={(event) => handleBlur(event, index)}
                    value={mechanicDetails[index].contactNumber}
                  />
                  {/* {errors[index] && (
                    <div className="mechanicsErrors">
                      <CgDanger className="cgDanger" />
                      {errors[index]}
                    </div>
                  )} */}
                </div>
                <div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={(event) => handleChange(event, index)}
                    // onBlur={(event) => handleBlur(event, index)}
                    value={mechanicDetails[index].address}
                  />
                  {/* {errors[index] && (
                    <div className="mechanicsErrors">
                      <CgDanger className="cgDanger" />
                      {errors[index]}
                    </div>
                  )} */}
                </div>
                <div>
                  <input
                    type="text"
                    name="aadharNumber"
                    placeholder="Aadhar Number"
                    onChange={(event) => handleChange(event, index)}
                    // onBlur={(event) => handleBlur(event, index)}
                    value={mechanicDetails[index].aadharNumber}
                  />
                  {/* {errors[index] && (
                    <div className="mechanicsErrors">
                      <CgDanger className="cgDanger" />
                      {errors[index]}
                    </div>
                  )} */}
                </div>
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
      <button className="mechanicSubmitButton" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default MechanicsDetails;
