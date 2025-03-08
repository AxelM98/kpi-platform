import React from "react";
import "./home.scss";
import KPIList from "./../../components/KPIList/KPIList";
import Chart from "./../../components/Chart/Chart";
import BestsellerList from "./../../components/BestsellerList/BestsellerList";
import KPICard from "./../../components/KPICard/KPICard";
import data from "../../../data.json";

const topSellingCustomerCategoriesData =
  data.KPICard.topSellingCustomerCategories;
const topSellingProductCategoriesData =
  data.KPICard.topSellingProductCategories;

const Home = () => {
  return (
    <div className="home">
      <div className="top">
        <KPIList />
      </div>
      <div className="bottom">
        <div className="bottomLeft">
          <Chart />
          <BestsellerList />
        </div>
        <div className="bottomRight">
          <KPICard
            title="Kundkategorier"
            data={topSellingCustomerCategoriesData}
          />
          <KPICard
            title="Produktkategorier"
            data={topSellingProductCategoriesData}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
