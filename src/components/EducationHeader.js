import React from 'react';

const EducationHeader = () => {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-neutral-700 p-4 rounded-lg shadow-lg md:flex-row md:max-w-full md:justify-between">
      <div className="flex flex-col w-full md:w-1/2 p-4"> 
               <h3 
         style={{
            backgroundColor: "#FF4E07",
            color: "#FFFFFF",
          }}
        >
        Colombia, Ecuador, Perú, México, Panamá, Costa Rica, Chile, Argentina, Estados Unidos, Emiratos Árabes, Brasil, República Dominicana, Irlanda, Canadá, España, Portugal, China, Italia.
        </h3>
        <h3 
         style={{
            backgroundColor: '#D5ADFB',
            color: "#133072",
          }}
        >
        Estados Unidos, Colombia, Perú, Brasil, Chile, México, Venezuela.
        </h3>
        <h3
        style={{
            backgroundColor: '#602680',
            color: "#FFFFFF",
          }}
        >
        Colombia, Sudáfrica, Filipinas, Chile, México, Singapur.
        </h3>
      </div>
    </div>
  );
}

export default EducationHeader;
