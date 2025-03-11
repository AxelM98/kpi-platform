import React, { useState } from "react";
import "./bestsellerList.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import data from "../../../data.json";

const bestsellerListData = data.BestsellerList;

const BestsellerList = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [dropdownCurrent, setDropdownCurrent] = useState("Alla");

  const dropdownAlts = ["Alla", "Löparskor", "Löparklockor", "Träningskläder"];

  const sortedBestsellerList = bestsellerListData.sort(
    (a, b) => b.purchases - a.purchases
  );

  return (
    <div className="bestsellerList">
      <div className="titleContainer">
        <h3>Mest sålda produkter (till antalet)</h3>
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
      <div className="tableCategories">
        <p className="tableCategory">Produkt</p>
        <p className="tableCategory">Antal Köp</p>
        <p className="tableCategory">Snittpris</p>
        <p className="tableCategory">Försäljning</p>
      </div>
      <div className="line"></div>
      <div className="tableProductsWrapper">
        <div className="tableProducts">
          {sortedBestsellerList.map((item, i) => (
            <p key={i} className="tableProduct product">
              {item.product}
            </p>
          ))}
        </div>
        <div className="tableProducts">
          {sortedBestsellerList.map((item, i) => (
            <p key={i} className="tableProduct quantity">
              {item.purchases} st
            </p>
          ))}
        </div>
        <div className="tableProducts">
          {sortedBestsellerList.map((item, i) => (
            <p key={i} className="tableProduct price">
              {item.averagePrice.toLocaleString()} kr
            </p>
          ))}
        </div>
        <div className="tableProducts">
          {sortedBestsellerList.map((item, i) => (
            <p key={i} className="tableProduct sales">
              {item.sales.toLocaleString()} kr
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestsellerList;
