import { useState } from "react";
import "./cvapp.css";
import Personal from "./Personal";

function First() {
  // Lifted state to First component
  const [personal, setPersonal] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    address: "",
  });

  // Function to handle changes in the input fields
  const handleChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPersonal((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <div className="main">
        <div className="left">
          <h1>Left</h1>
          <Personal personal={personal} handleChanges={handleChanges} />
        </div>
        <section className="right">
          <div className="right-left">
            <div className="right-container">
              <h3>First Name: {personal.fName}</h3>
              <h3>Last Name: {personal.lName}</h3>
              <h3>Email: {personal.email}</h3>
              <h3>Phone: {personal.phone}</h3>
              <h3>Address: {personal.address}</h3>
            </div>
          </div>
          <div className="right-right">
            <h1>Right</h1>
          </div>
        </section>
      </div>
    </>
  );
}

export default First;