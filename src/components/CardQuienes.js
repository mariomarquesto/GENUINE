import React from "react";
import imagen1 from "../assets/images/Mision.png";
import imagen2 from "../assets/images/Vision.png";

const Card2 = () => {
  return (
    <div className="flex flex-wrap justify-center mt-10">
      {/* Card 1 */}
      <div className="p-4 w-full sm:w-1/2 md:w-1/3 max-w-sm">
        <div className="flex rounded-lg h-full bg-transparent p-8 flex-col borde">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <img src={imagen1} alt="Imagen PNG" />
            </div>
            <h2 className="text-[#133072] text-lg font-medium">
              Nuestra misión
            </h2>
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <p className="leading-relaxed text-base text-[#133072]">
              Educar, empoderar y conectar a nuestros estudiantes mediante
              experiencias de aprendizaje remoto que trasciendan las fronteras
              geográficas e idiomáticas.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="p-4 w-full sm:w-1/2 md:w-1/3 max-w-sm">
        <div className="flex rounded-lg h-full bg-transparent p-8 flex-col borde">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <img src={imagen2} alt="Imagen PNG" />
            </div>
            <h2 className="text-[#133072] text-lg font-medium">
              Nuestra Visión
            </h2>
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <p className="leading-relaxed text-base text-[#133072]">
              Visualizamos un mundo donde miles de jóvenes y niños usen sus
              habilidades para transformar sus comunidades y regiones por medio
              del emprendimiento, la tecnología y la innovación.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
