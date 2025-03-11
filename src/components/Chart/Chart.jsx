"use client";

import React, { useState } from "react";
import "./chart.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BarChart1 from "../BarChart1/BarChart1";
import AreaChart1 from "../AreaChart1/AreaChart1";

const Chart = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [dropdownCurrent, setDropdownCurrent] = useState("År");

  const dropdownAlts = [
    "År",
    "Januari",
    "Februari",
    "Mars",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "Augusti",
    "September",
    "Oktober",
    "November",
    "December",
  ];

  return (
    <div className="chart">
      <div className="titleContainer">
        <h3>Försäljningskurva</h3>
        <div
          className="dropdownContainer"
          onClick={() => setOpenDropdown(!openDropdown)}
        >
          <p>{dropdownCurrent}</p>
          <KeyboardArrowDownIcon />
          {openDropdown && (
            <div className="dropdown">
              {dropdownAlts.map((alt, i) => (
                <p
                  key={i}
                  className="dropdownAlt"
                  onClick={() => setDropdownCurrent(alt)}
                >
                  {alt}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="chartContainer">
        <AreaChart1 />
      </div>
    </div>
  );
};

export default Chart;
