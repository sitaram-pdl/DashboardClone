import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidenavbar from "./components/Sidenavbar/Sidenavbar";
import Dashboard from "./components/Dashboard/Dashboard";

// Importing Css File
import "./App.css";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [smallSidebar, setSmallSidebar] = useState(true);
  const handelToggle = () => {
    if (!smallSidebar) {
      setSmallSidebar(true);
    } else {
      setSmallSidebar(false);
    }
  };
  return (
    <div className="app_container">
      <div
        className="left_container"
        style={{ width: smallSidebar ? "18.5%" : "6%" }}
      >
        <Sidenavbar smallSidebar={smallSidebar} />
      </div>
      <div className="right_container">
        <Navbar handelToggle={handelToggle} smallSidebar={smallSidebar} />
        <Dashboard />
        <Footer />
      </div>
    </div>
  );
};

export default App;
