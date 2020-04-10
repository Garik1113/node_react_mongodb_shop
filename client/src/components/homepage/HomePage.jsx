import React from "react";
import Navbar from "./Navbar";
import Categories from "./Categories";
import TrendingNow from "../trendingNow/TrendingNow";
class HomePage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <Categories />
        <TrendingNow />
      </div>
    );
  }
}

export default HomePage;
