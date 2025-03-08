import React from "react";
import "./bestsellerList.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const BestsellerList = () => {
  return (
    <div className="bestsellerList">
      <div className="titleContainer">
        <h3>Mest sålda produkter</h3>
        <div className="dropdown">
          <p>Alla</p>
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <div className="tableCategories">
        <p className="tableCategory">Produkt</p>
        <p className="tableCategory">Antal Köp</p>
        <p className="tableCategory">Snittpris</p>
        <p className="tableCategory">Försäljning</p>
      </div>
      <div className="line"></div>
      <div className="tableProductsWrapper">
        <div className="tableProducts">
          <p className="tableProduct product">Nike Pegaus 41</p>
          <p className="tableProduct product">NB 1080 v14</p>
          <p className="tableProduct product">Asics Nimbus 27</p>
          <p className="tableProduct product">GMI Forerunner 265</p>
        </div>
        <div className="tableProducts">
          <p className="tableProduct quantity">300 st</p>
          <p className="tableProduct quantity">250 st</p>
          <p className="tableProduct quantity">200 st</p>
          <p className="tableProduct quantity">150 st</p>
        </div>
        <div className="tableProducts">
          <p className="tableProduct price">1799 kr</p>
          <p className="tableProduct price">2099 kr</p>
          <p className="tableProduct price">2199 kr</p>
          <p className="tableProduct price">4699 kr</p>
        </div>
        <div className="tableProducts">
          <p className="tableProduct sales">3 000 000 kr</p>
          <p className="tableProduct sales">2 000 000 kr</p>
          <p className="tableProduct sales">1 000 000 kr</p>
          <p className="tableProduct sales">500 000 kr</p>
        </div>
      </div>
    </div>
  );
};

export default BestsellerList;
