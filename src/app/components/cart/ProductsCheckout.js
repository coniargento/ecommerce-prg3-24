'use client';
import { useAppContext } from "@/app/contexts/AppContext";
import Image from "next/image";
import { useState } from "react";

const ProductsCheckout = () => {
  const { cart, cartTotal, handleRemoveProduct, handleUpdateQuantity } = useAppContext();
  const [loading, setLoading] = useState(false);

  const handlePay = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/create_preference", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart }), 
      });

      if (!response.ok) {
        throw new Error("Error al crear la preferencia de pago");
      }

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url; // Redirigir al usuario a Mercado Pago
      } else {
        alert("Error al redirigir a Mercado Pago");
      }
    } catch (error) {
      console.error("Error al procesar el pago", error);
      alert("Hubo un error al procesar el pago");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Tu carrito de compras</h2>
      <div className="space-y-4">
        {cart.map(product => (
          <div key={product.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg transition-all hover:shadow-lg">
            <div className="flex items-center">
              <Image 
                src={`/imgs/products/${product.image}`} 
                alt={product.name} 
                className='w-16 h-16 object-cover rounded' 
                width={64} 
                height={64} 
              />
              <h3 className='ml-4 text-lg font-medium'>{product.name}</h3>
            </div>
            <div className="flex items-center">
              <div className="flex items-center border border-gray-300 rounded">
                <button 
                  onClick={() => handleUpdateQuantity(product.id, product.quantity - 1)} 
                  className='px-2 py-1 text-lg text-gray-700 hover:bg-gray-200 rounded-l'
                  disabled={product.quantity <= 1} // Deshabilita el botón si la cantidad es 1
                >
                  -
                </button>
                <span className='px-4 text-lg'>{product.quantity}</span>
                <button 
                  onClick={() => handleUpdateQuantity(product.id, product.quantity + 1)} 
                  className='px-2 py-1 text-lg text-gray-700 hover:bg-gray-200 rounded-r'
                >
                  +
                </button>
              </div>
              <p className='ml-4 text-lg font-semibold'>${(product.price * product.quantity).toFixed(2)}</p>
              <button 
                onClick={() => handleRemoveProduct(product.id)} 
                className='ml-4 text-red-500 hover:text-red-700 transition-colors'
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 border-t pt-4">
        <h3 className="text-xl font-semibold">Total: ${cartTotal().toFixed(2)}</h3>
      </div>

      {/* seccion: boton de pago */}
      <button
        onClick={handlePay}
        className={`mt-4 bg-blue-500 text-white py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
        disabled={loading || cart.length === 0} // Deshabilitar si el carrito está vacío o si está cargando
      >
        {loading ? "Procesando..." : "Pagar con Mercado Pago"}
      </button>
    </div>
  );
};

export default ProductsCheckout;

