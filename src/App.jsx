import React, { useRef } from "react";
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
import Signin from "./Pages/Signin";
import { AuthProvider } from "./Context/AuthContext";
import { JoinProvider } from "./Context/JoinContext";
function App(props) {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <JoinProvider>
            <Routes>
              <Route path="/" element={<Home />}>
                <Route path="/" element={<Join />} />
                <Route path="mechanics" element={<MechanicsDetails />} />
              </Route>
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<ContactP />} />
              <Route path="/signin" element={<Signin />} />
              
              <Route path="/dashboard" element={<Dashboard />}>
                <Route
                  path="/dashboard"
                  element={<Order handleBars={props.handleBars} />}
                >
                  <Route path="/dashboard/" element={<AllOrder />} />
                  <Route
                    path="/dashboard/confirmed"
                    element={<ConfirmedOrders />}
                  />
                  <Route
                    path="/dashboard/pending"
                    element={<PendingOrders />}
                  />
                  <Route path="/dashboard/paid" element={<PaidOrders />} />
                </Route>
              </Route>
            </Routes>
            <Footer />
          </JoinProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
