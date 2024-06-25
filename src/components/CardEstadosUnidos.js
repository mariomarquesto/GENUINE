import React from "react";
import centralImage from "../assets/images/bilinguismo1.jpg"; // Importando la imagen desde los assets
import Counters from "./Counter";
import imagenMapa from "../assets/images/Mapa.jpg";
import ProbandoCartita from "./CardFInalEeUu";


export default function EstadosUnidosCard() {
  return (
    <>
      <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-full md:flex-row">
        <div className="flex flex-col justify-start p-6 w-full md:w-auto">
          <h5
            className="mb-2 text-3xl font-semibold text-gray-900 dark:text-gray-100"
            style={{
              fontFamily: "Outfit",
              fontSize: "45px",
              fontWeight: "600",
              lineHeight: "47px",
              textAlign: "left",
              color: "#133072",
            }}
          >
            De Estados Unidos para el mundo
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Nuestro colegio digital privado está constituido y registrado en
            Estados Unidos ante el Florida Department of Education con el código
            8822.
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-300">
            Conoce el nuestro aquí
            <button
              className="bg-blue-800 text-white px-5 py-3 rounded hover:bg-blue-600 ml-2 md:ml-0 md:mt-2 md:mr-2"
              style={{ marginLeft: "17px" }}
            >
              Registro Legal
            </button>
          </p>
        </div>
        <img
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={centralImage} // Usando la imagen importada desde los assets
          alt="bilinguismo1"
          style={{
            width: "100%", // Ajustando el ancho al 100% para que sea responsive
            height: "auto", // Altura automática para mantener la proporción
          }}
        />
      </div>
      <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-blue-300"
        style={{ color:'#133072',
textAlign:'center',

        }}
        >
        Somos del mundo
        </h2>
        
        <Counters />
        <img
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={imagenMapa} // Usando la imagen importada desde los assets
          alt=""
          style={{
            width: "100%", // Ajustando el ancho al 100% para que sea responsive
            height: "auto", // Altura automática para mantener la proporción
          }}
        />
        
        <ProbandoCartita />
      </div>
      
    </>
  );
}
