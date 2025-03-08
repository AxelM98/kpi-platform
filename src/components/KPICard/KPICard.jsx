import React from "react";
import "./KPICard.scss";

const KPICard = () => {
  return (
    <div className="KPICard">
      <div className="top">
        <h3>Kundkategorier</h3>
      </div>
      <div className="bottom">
        <div className="categories">
          <p className="category">Löpare</p>
          <p className="category">Gymkunder</p>
          <p className="category">Motionärer</p>
        </div>
        <div className="values">
          <p className="value">60%</p>
          <p className="value">10%</p>
          <p className="value">30%</p>
        </div>
      </div>
    </div>
  );
};

export default KPICard;
