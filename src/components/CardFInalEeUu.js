import React from "react";

const SimpleCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        className=" text-white text-center text-lg p-4 rounded-lg"
        style={{ backgroundColor: "#FF4E07" }}
      >
        <p
          className="p-4 bg-orange-400  text-lg"
          style={{ backgroundColor: "#FF4E07", color: "#fffff" }}
        >
          Colombia, Ecuador, Perú, México, Panamá, Costa Rica, Chile, Argentina,
          Estados Unidos, Emiratos Árabes, Brasil, República Dominicana,
          Irlanda, Canadá, España, Portugal, China, Italia.
        </p>
      </div>
      <div
        className=" text-white text-center text-lg p-4 rounded-lg"
        style={{ backgroundColor: "#D5ADFB" }}
      >
        <p
          className="p-4  text-lg"
          style={{ backgroundColor: "#D5ADFB", color: "#133072" }}
        >
          Estados Unidos, Colombia, Perú, Brasil, Chile, México, Venezuela.
        </p>
      </div>
      <div
        className=" text-center text-lg p-4 rounded-lg"
        style={{ backgroundColor: "#602680" }}
      >
        <p
          className="p-4  text-lg"
          style={{ backgroundColor: "#602680", color: "#FFFFFF" }}
        >
          Colombia, Sudáfrica, Filipinas, Chile, México, Singapur.
        </p>
      </div>
    </div>
  );
};

export default SimpleCard;
