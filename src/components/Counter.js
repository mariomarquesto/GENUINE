import React from 'react';

const Counter = ({ title, value, prefix = '', suffix = '', customStyle = {} }) => {
  const defaultStyles = {
    estudiantes: {
      color: '#FF4E07',
      fontFamily: 'Outfit',
      fontSize: '30px',
      fontWeight: '700',
      lineHeight: '37.8px',
      textAlign: 'center',
      display: 'inline-block',
      padding: '10px 40px',
      margin: '10px',
      borderRadius: '10px',
      border: '3px solid #D5ADFB',
      opacity: '1',
    },
    staf: {
      color: '#FF4E07',
      fontFamily: 'Outfit',
      fontSize: '30px',
      fontWeight: '700',
      lineHeight: '37.8px',
      textAlign: 'center',
      display: 'inline-block',
      padding: '10px 40px',
      margin: '10px',
      borderRadius: '10px',
      border: '3px solid #D5ADFB',
      opacity: '1',
    },
    profesores: {
      color: '#FF4E07',
      fontFamily: 'Outfit',
      fontSize: '30px',
      fontWeight: '700',
      lineHeight: '37.8px',
      textAlign: 'center',
      display: 'inline-block',
      padding: '10px 40px',
      margin: '10px',
      borderRadius: '10px',
      border: '3px solid #D5ADFB',
      opacity: '1',
    },
  };

  const styles = { ...defaultStyles[title.toLowerCase()], ...customStyle };

  return (
    <div style={styles}>
      <div className="text-4xl font-extrabold">
        <span className="text-blue-600">{prefix}</span>
        <span>{value}</span>
        <span className="text-blue-600">{suffix}</span>
      </div>
      <div className="text-lg font-bold">{title}</div>
    </div>
  );
};

const Counters = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-lg">
      <Counter title="Estudiantes" value="400" prefix="+" customStyle={{}} />
      <Counter title="Staff" value="28" customStyle={{}} />
      <Counter title="Profesores" value="44" customStyle={{}} />
    </div>
  );
};

export default Counters;
