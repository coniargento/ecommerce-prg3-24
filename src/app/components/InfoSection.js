import React from 'react';

const InfoSection = () => {
  return (
    <div className="info">
      <div className="container mx-auto flex justify-around text-center">
        <div className="info-item">
          <h3 className="font-bold">ENVÍOS A TODO EL PAÍS</h3>
          <p className="text-sm">Realizamos envíos a todo el territorio nacional</p>
        </div>
        <div className="info-item">
          <h3 className="font-bold">HASTA 6 CUOTAS SIN INTERÉS</h3>
          <p className="text-sm">Compra hoy y paga en cómodas cuotas</p>
        </div>
        <div className="info-item">
          <h3 className="font-bold">CONSULTAS</h3>
          <p className="text-sm">Contáctanos para cualquier duda</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;