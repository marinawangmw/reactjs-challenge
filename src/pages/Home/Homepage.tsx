import React from "react";
import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__body">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
