import React from "react";
import imagenMapa from "../assets/images/Mapa.jpg";

const Veamos1 = () => {
  return (
    <div className="h-screen bg-blue-200 p-4 md:p-16 grid grid-cols-1 md:grid-cols-4 grid-rows-4 gap-6">
      <div className="bg-blue-500 text-white text-center text-3xl md:text-5xl py-4 rounded-lg row-span-3 md:col-span-2">
        <h2 className="font-bold text-blue-800 dark:text-blue-300">
          Somos del mundo
        </h2>
        <div className="text-base md:text-lg">
          <p
            className="p-4"
            style={{
              backgroundColor: "#FF4E07",
              color: "#FFFFFF",
            }}
          >
            Colombia, Ecuador, Perú, México, Panamá, Costa Rica, Chile,
            Argentina, Estados Unidos, Emiratos Árabes, Brasil, República
            Dominicana, Irlanda, Canadá, España, Portugal, China, Italia.
          </p>
          <p
          style={{
            backgroundColor: '#D5ADFB',
            color: "#133072",
          }}
          >
            Estados Unidos, Colombia, Perú, Brasil, Chile, México, Venezuela.
          </p>
          <p
            style={{
                backgroundColor: '#602680',
                color: "#FFFFFF",
              }}
          >Colombia, Sudáfrica, Filipinas, Chile, México, Singapur.</p>
        </div>
      </div>
      <div className="bg-blue-500 text-white text-center text-3xl md:text-5xl py-4 rounded-lg md:col-span-2">
        <div className="h-full flex justify-center items-center">
          <div>+ 400 estudiantes</div>
          <div>28 Staf</div>
          <div>48 profesores</div>
        </div>
      </div>
      <div className="bg-blue-500 text-white text-center text-3xl md:text-5xl py-4 rounded-lg md:col-span-2">
        <div className="h-full flex justify-center items-center">
          <img
            className="h-full w-full object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={imagenMapa}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Veamos1;
