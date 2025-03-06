import React from "react";
import "./rootLayout.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

const RootLayout = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="right">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
