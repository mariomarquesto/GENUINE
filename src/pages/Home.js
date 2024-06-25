import React from "react";
import "./HomeStyles.css";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-background">
        <Card className="tarjeta"/>   
        <div className="texto-abajo">studyatgenuine.com</div>
      </div>
      
    </div>
  );
};

export default Home;
