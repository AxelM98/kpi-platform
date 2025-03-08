import React from "react";
import "./sidebar.scss";
import { NavLink } from "react-router-dom";
import TechoverLogo from "../../assets/logo-dark.png";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import BarChartIcon from "@mui/icons-material/BarChart";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="imgContainer">
        <img src={TechoverLogo} alt="TechoverLogo" />
      </div>
      <div className="navItems">
        <NavLink className="navItem" to="/">
          <SpaceDashboardIcon />
          <p>Dashboard</p>
        </NavLink>
        <NavLink className="navItem" to="/campaigns">
          <QueryStatsIcon />
          <p>Kampanjer</p>
        </NavLink>
        <NavLink className="navItem" to="/stats">
          <BarChartIcon />
          <p>Statistik</p>
        </NavLink>
        <div className="line"></div>
        <NavLink className="navItem" to="/profile">
          <PersonIcon />
          <p>Profil</p>
        </NavLink>
        <NavLink className="navItem" to="/settings">
          <SettingsIcon />
          <p>Inställningar</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
