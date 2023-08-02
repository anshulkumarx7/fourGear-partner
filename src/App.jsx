import React, { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Join from "./Components/Join";
import Login from "./Components/Login";
import MechanicsDetails from "./Components/MechanicsDetails";
import Dashboard from "./Components/Dashboard";
import Contact from "./Components/Contact";
import About from "./Pages/About";
import Bill from "./Components/Bill";
import { AuthProvider } from "./Context/AuthContext";
import { JoinProvider } from "./Context/JoinContext";
import { DashboardProvider } from "./Context/DashboardContext";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <JoinProvider>
            <DashboardProvider>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />}>
                  <Route path="/" element={<Join />} />
                  <Route path="mechanics" element={<MechanicsDetails />} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signin" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/bill" element={<Bill />}></Route>
              </Routes>
              <Footer />
            </DashboardProvider>
          </JoinProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
