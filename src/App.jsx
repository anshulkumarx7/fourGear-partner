import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Order from "./Components/Order";
import Steps from "./Components/Steps";
import Join from "./Components/Join";
import MechanicsDetails from "./Components/MechanicsDetails";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import AllOrder from "./Components/AllOrder";
import ConfirmedOrders from "./Components/ConfirmedOrders";
import PendingOrders from "./Components/pendingOrders";
import PaidOrders from "./Components/paidOrders";
import Gallery from "./Pages/Gallery";
import ContactP from "./Pages/ContactP";

function App() {
  const handleBars = () => {
    barRef.current.classList.add("responsive_sidebar");
  };
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar />
      <Login />
      <Contact />
      <Join />
      <Steps />
      <MechanicsDetails /> */}
        {/* <Sidebar /> */}
        {/* <Dashboard /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactP />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route
              path="/dashboard"
              element={<Order handleBars={handleBars} />}
            >
              <Route path="/dashboard/" element={<AllOrder />} />
              <Route path="/dashboard/confirmed" element={<ConfirmedOrders />} />
              <Route path="/dashboard/pending" element={<PendingOrders />} />
              <Route path="/dashboard/paid" element={<PaidOrders />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
