import React from 'react';

const ReturnPolicy = () => {
  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Cambios y Devoluciones</h2>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <p className="mb-4 text-lg">
          Si recibiste alguna pieza rota o con algún inconveniente serio, aceptamos reclamos hasta 5 días posteriores a la entrega del pedido. 
          Escríbenos a <a href="mailto:cococlay@ceramica.com" className="text-blue-500 underline">cococlay@ceramica.com</a> y a nuestro WhatsApp para que podamos resolver la reposición del mismo lo antes posible.
        </p>
        <p className="mb-4 text-lg">
          En caso de que no dispongamos de stock del producto adquirido, BARRO propondrá una alternativa para cumplir con el pedido a tiempo.
        </p>
        <p className="mb-4 text-lg">
          Atención pedidos CABA y GBA - Contamos con un servicio de logística que lleva los productos embalados, puerta a puerta en vehículo. 
          Esto nos permite asegurar que las piezas llegan cuidadas y sin daños de transporte. 
        </p>
        <p className="mb-4 text-lg">
          Por este motivo, no aceptaremos reclamos de calidad en pedidos que hayan sido recibidos por intermediarios (portería, seguridad, encargado, etc.), 
          dado que no podemos asegurar en qué condiciones conservan los productos antes de ser entregados a nuestro cliente final. 
          Te sugerimos recibir el pedido tú mismo y abrirlo en el momento para asegurarte de que todas tus piezas estén en perfectas condiciones.
        </p>
      </div>
    </section>
  );
};

const Cart = () => {
  return (
    <div>
      <ReturnPolicy />
    </div>
  );
}

export default Cart;
