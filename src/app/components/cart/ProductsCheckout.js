'use client';
import { useAppContext } from "@/app/contexts/AppContext";
import Image from "next/image";
import { useState } from "react";

const ProductsCheckout = () => {
  const { cart, cartTotal, handleRemoveProduct, handleUpdateQuantity } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [couponCode, setCouponCode] = useState(""); // Estado para el código del cupón
  const [discount, setDiscount] = useState(0); // Estado para el descuento aplicado
  const [discountText, setDiscountText] = useState(""); // Texto del descuento

  // Array de cupones disponibles
  const availableCoupons = [
    { descuento: "5% OFF", codigo: "DESC5OFF", type: "percentage", value: 0.05 },
    { descuento: "ENVÍO GRATIS", codigo: "ENVIOGRATIS", type: "shipping" },
    { descuento: "$10.000", codigo: "10MILGRATIS", type: "fixed", value: 10000 },
    { descuento: "50% OFF", codigo: "DESC50OFF", type: "percentage", value: 0.50 },
    { descuento: "20% OFF", codigo: "DESC20OFF", type: "percentage", value: 0.20 },
    { descuento: "10% OFF", codigo: "DESC10OFF", type: "percentage", value: 0.10 },
    { descuento: "$5.000", codigo: "5MILGRATIS", type: "fixed", value: 5000 },
  ];

  // Función para manejar el ingreso del cupón
  const handleApplyCoupon = () => {
    const coupon = availableCoupons.find(coupon => coupon.codigo === couponCode.toUpperCase());

    if (coupon) {
      setDiscountText(coupon.descuento); // Establecer el texto del descuento
      switch (coupon.type) {
        case "percentage":
          setDiscount(coupon.value); // Aplicar el porcentaje
          break;
        case "fixed":
          setDiscount(coupon.value / cartTotal()); // Descuento fijo, dividiendo entre el total
          break;
        case "shipping":
          alert("Envio gratis aplicado");
          // Aquí puedes implementar la lógica de envío gratis si es necesario
          break;
        case "gift":
          alert("Regalo sorpresa aplicado");
          // Aquí puedes implementar la lógica de "regalo sorpresa" si es necesario
          break;
        default:
          setDiscount(0);
      }
      alert(`Cupón aplicado: ${coupon.descuento}`);
    } else {
      alert("Cupón no válido");
      setDiscount(0);
      setDiscountText("");
    }
  };

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

  const finalTotal = cartTotal() * (1 - discount); // Calcula el total después de aplicar el descuento

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

      {/* Sección para ingresar el cupón */}
      <div className="mt-6 border-t pt-4">
        <h3 className="text-xl font-semibold">Total: ${(finalTotal).toFixed(2)}</h3>
        <div className="mt-4">
          <input 
            type="text" 
            value={couponCode} 
            onChange={(e) => setCouponCode(e.target.value)} 
            placeholder="Ingresa tu cupón de descuento" 
            className="border p-2 rounded"
          />
          <button 
            onClick={handleApplyCoupon} 
            className="ml-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Aplicar Cupón
          </button>
        </div>
        {discountText && (
          <div className="mt-4 text-green-600 font-semibold">
            Cupón Aplicado: {discountText}
          </div>
        )}
      </div>

      {/* Sección: boton de pago */}
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
  