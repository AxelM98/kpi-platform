import React from "react";
import "./KPIList.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import data from "../../../data.json";

const KPIListdata = data.KPIList;

const date = new Date();
const options = {
  weekday: "long",
  month: "long",
  day: "numeric",
};
const formattedDate = date.toLocaleDateString("sv-SE", options);

const KPIList = () => {
  return (
    <div className="KPIList">
      <div className="details">
        <p className="title">Lagersaldo</p>
        <h3>{KPIListdata.totalProductsInStock.toLocaleString()} varor</h3>
        <p className="date">{formattedDate}</p>
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
        <h3>{KPIListdata.todaysSales.toLocaleString()} kr</h3>
        <p>{KPIListdata.purchasesToday.toLocaleString()} köp</p>
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
        <h3>{KPIListdata.visitorsToday.toLocaleString()} st</h3>
        <p style={{ color: "transparent" }}>1</p>
      </div>
      <div className="line"></div>

      <div className="details">
        <p className="title">Mest sålda produkt idag</p>
        <h3>{KPIListdata.bestsellerToday}</h3>
        <p style={{ color: "transparent" }}>1</p>
      </div>
    </div>
  );
};

export default KPIList;
