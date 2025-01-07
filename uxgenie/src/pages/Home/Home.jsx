import React from "react";
import "./Home.css";
import HomeCard from "../../components/home-card/HomeCard";

function Home() {
  return (
    <div className="home-page">
      <div className="home-content">
        <div className="room">
          <div className="home"></div>
        </div>
        <div className="home-section">
          <HomeCard />
          <HomeCard />
        </div>
        <div className="header-frame"></div>
        <div className="home-default-section">
          <div className="card">
            <h2>Home Page</h2>
          </div>
        </div>
        <div className="home-section">
          <HomeCard />
          <HomeCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
