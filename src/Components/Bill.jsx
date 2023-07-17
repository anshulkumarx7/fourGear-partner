import React, { useState } from "react";
import "../Styles/Bill.css";
import DescIcon from "../assets/id.svg";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { FaBars } from "react-icons/fa";

function Bill(props) {
  const [billDetails, setBillDetails] = useState([
    {
      description: "",
      amount: "",
    },
  ]);
  const handleAdd = () => {
    setBillDetails([...billDetails, { description: "", amount: "" }]);
  };
  const handleRemove = (index) => {
    const list = [...billDetails];
    list.splice(index, 1);
    setBillDetails(list);
  };
  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...billDetails];
    list[index][name] = value;
    setBillDetails(list);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(billDetails);
  };
  return (
    <div className="fourGearPartnerBillGeneration">
      <div className="fourGearPartnerBillContainer">
        {/* <FaBars className="billBars" onClick={props.handle}/> */}
        <div className="billDetails">
          <h2>
            <span className="billcolor-change">Order Id: </span> #123
          </h2>
          <h2>
            <span className="billcolor-change">Customer Name: </span>Akash Jha
          </h2>
        </div>
        <div className="billDetails">
          <h2>
            <span className="billcolor-change">Mobile Number: </span>9984771258
          </h2>
          <h2>
            <span className="billcolor-change">Bike Model: </span>CX-756
          </h2>
        </div>
        <div className="billTitle">
          <h2>S.N</h2>
          <h2>
            <img src={DescIcon}></img>Description
          </h2>
          <h2>Amount</h2>
        </div>
        {billDetails.map((data, index) => {
          return (
            <div className="billgenerate">
              <h2>{index + 1}.</h2>
              <input
                type="text"
                placeholder="Description"
                onChange={(event) => handleChange(event, index)}
                value={billDetails.description}
              />
              <input
                type="text"
                placeholder="Enter amount"
                onChange={(event) => handleChange(event, index)}
                value={billDetails.amount}
              />
            </div>
          );
        })}
        <div className="partnerBillButtons">
          <button className="partnerBill-addButton" onClick={handleAdd}>
            <IoIosAddCircle className="rxcross2" />
            Add more
          </button>
          {billDetails.length > 1 && (
            <button className="partnerBill-removeButton" onClick={handleRemove}>
              <IoIosRemoveCircle className="rxcross2" />
              Remove
            </button>
          )}
        </div>
        <div className="sendBill">
          <h2>Total amount : xxxxxx</h2>
          <button onClick={handleSubmit}>Send Bill</button>
        </div>
      </div>
    </div>
  );
}

export default Bill;
