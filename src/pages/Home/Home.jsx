import React from "react";
import "./home.scss";
import KPIList from "./../../components/KPIList/KPIList";
import Chart from "./../../components/Chart/Chart";
import BestsellerList from "./../../components/BestsellerList/BestsellerList";
import KPICard from "./../../components/KPICard/KPICard";

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
          <KPICard />
          <KPICard />
        </div>
      </div>
    </div>
  );
};

export default Home;
