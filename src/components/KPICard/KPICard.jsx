import React from "react";
import "./KPICard.scss";

const KPICard = ({ title, data }) => {
  return (
    <div className="KPICard">
      <div className="top">
        <h3>{title}</h3>
      </div>
      <div className="bottom">
        <div className="categories">
          {data.map((item, i) => (
            <p className="category" key={i}>
              {item.category}
            </p>
          ))}
        </div>
        <div className="values">
          {data.map((item, i) => (
            <p className="value" key={i}>
              {item.percentage}%
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KPICard;
