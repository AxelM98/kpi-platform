import React from "react";
import "./KPIList.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const KPIList = () => {
  return (
    <div className="KPIList">
      <div className="details">
        <p className="title">Aktiva Produkter</p>
        <h3>540 st</h3>
        <p>Ons, Jul 16</p>
      </div>
      <div className="line"></div>
      <div className="details">
        <div className="detailsTop">
          <p className="title">Dagens försäljning</p>
          <div className="performance positive">
            <ArrowUpwardIcon className="upIcon" />
            <p>3.2%</p>
          </div>
        </div>
        <h3>1 000 000 kr</h3>
        <p>856 köp</p>
      </div>
      <div className="line"></div>

      <div className="details">
        <div className="detailsTop">
          <p className="title">Antal kunder idag</p>
          <div className="performance negative">
            <ArrowDownwardIcon className="downIcon" />
            <p>3.0%</p>
          </div>
        </div>
        <h3>746 st</h3>
        <p style={{ color: "transparent" }}>1</p>
      </div>
      <div className="line"></div>

      <div className="details">
        <p className="title">Mest sålda produkt</p>
        <h3>Nike Pegasus 41</h3>
        <p style={{ color: "transparent" }}>1</p>
      </div>
    </div>
  );
};

export default KPIList;
