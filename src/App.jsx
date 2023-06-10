import React from "react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Steps from "./Components/Steps";
import Join from "./Components/Join";
import MechanicsDetails from "./Components/MechanicsDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      {/* <Login />
      <Contact /> */}
      <Join />
      <Steps />
      <MechanicsDetails />
      <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
