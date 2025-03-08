import React from "react";
import "./chart.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Chart = () => {
  return (
    <div className="chart">
      <div className="titleContainer">
        <h3>Försäljningskurva</h3>
        <div className="dropdown">
          <p>Juli</p>
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <div className="chartContainer"></div>
    </div>
  );
};

export default Chart;
