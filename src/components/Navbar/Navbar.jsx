import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Augustus from "../../assets/Augustus.webp";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <div className="leftWrapper">
          <h2>Dashboard</h2>
          <div className="inputContainer">
            <SearchIcon className="searchIcon" />
            <input type="text" placeholder="Sök på kampanjer, produkter osv" />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="rightWrapper">
          <button>
            <AddIcon
              className="addIcon"
              sx={{ stroke: "white", strokeWidth: 1 }}
            />{" "}
            Skapa Kampanj
          </button>
          <div className="profile">
            <div className="imgContainer">
            <img src={Augustus} alt="Augustus" />
            </div>
            <div className="detailsContainer">
            <h3>Augustus</h3>
            <p>Admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
