import React from "react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Steps from "./Components/Steps";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Login />
      <Contact />
      <Steps />
      <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
