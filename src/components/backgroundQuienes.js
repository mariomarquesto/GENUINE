import React from "react";
import "./BackgroundQuienes.css";
import centralImage from "../assets/images/Jet-pack1.png";
import CardQuienes from "../components/CardQuienes";

const BackgroundQuienes = () => {
  return (
    <><div className="background-quienes-container">
          <img src={centralImage} alt="Jet pack" className="central-image" />
          <h1 className="central-text">Nuestra misión en el mundo y lo que soñamos para tus hijos</h1>
      </div><div> <CardQuienes /></div></>
  );
};

export default BackgroundQuienes;
