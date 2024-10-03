import React from 'react';

const CareInstructions = () => {
  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Usos y Cuidados</h2>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <p className="mb-4 text-lg">
          Las piezas de cerámica son frágiles y requieren un manejo cuidadoso. Para asegurar su durabilidad, sigue estas recomendaciones:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">🌟 Limpieza: Se recomienda lavar a mano las piezas con agua tibia y un jabón suave. Evita el uso de detergentes abrasivos que puedan rayar la superficie.</li>
          <li className="mb-2">❄️ Temperatura: No expongas las piezas a cambios bruscos de temperatura, como ponerlas de un lugar frío a uno caliente de inmediato.</li>
          <li className="mb-2">☀️ Secado: Después de lavar, sécalas bien con un paño suave para evitar manchas de agua y mantener el brillo.</li>
          <li className="mb-2">🧼 Uso: Aunque algunas piezas pueden ser aptas para microondas o lavavajillas, se sugiere verificar las instrucciones específicas del producto.</li>
        </ul>
        <p className="text-lg">
          Siguiendo estos cuidados, podrás disfrutar de tus productos de cerámica por mucho más tiempo. ¡Gracias por elegir nuestras creaciones!
        </p>
      </div>
    </section>
  );
};

const Cart = () => {
  return (
    <div>
      <CareInstructions />
    </div>
  );
}

export default Cart;
