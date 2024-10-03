"use client";

import React, { useState } from "react";
import Image from "next/image";
import AddToCart from "@/app/components/AddToCart";
import { motion } from "framer-motion";

const ProductSingle = ({ product }) => {
    const { image, name, price, description, _id } = product;
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [quantity, setQuantity] = useState(1); 

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1); // Evita que la cantidad sea menor a 1
    };

    return (
        <section className="py-20">
            <div className="flex items-center justify-center">
                <motion.div
                    className="flex-none w-1/2 flex justify-center items-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src={`/imgs/products/${image}`}
                        width={400}
                        height={400}
                        alt={name}
                        className="transition-transform duration-500 hover:scale-105"
                    />
                </motion.div>
                <motion.div
                    className="flex-none w-1/2 flex flex-col items-start p-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-2xl font-bold mb-2">{name}</h1>
                    <p className="mb-4">{description}</p>
                    <h3 className="text-lg font-semibold mb-2">${price}</h3>
                    <p className="text-green-600 font-semibold mb-2">6 cuotas sin interés</p>

                    {/* seccion: botón para ver medios de pago */}
                    <span 
                        className="cursor-pointer text-gray-600 underline mb-4"
                        onClick={handleOpenPopup}
                    >
                        VER MEDIOS DE PAGO
                    </span>

                    {/* seccion: + - cantidad */}
                    <div className="flex items-center mb-4">
                        <button
                            onClick={decreaseQuantity}
                            className="px-3 py-1 bg-gray-300 rounded-l"
                        >
                            -
                        </button>
                        <span className="px-4">{quantity}</span>
                        <button
                            onClick={increaseQuantity}
                            className="px-3 py-1 bg-gray-300 rounded-r"
                        >
                            +
                        </button>
                    </div>

                    {/* Precio Total */}
                    <h3 className="text-lg font-semibold mb-2">
                        Total: ${price * quantity}
                    </h3>

                    <AddToCart 
                        price={price} 
                        name={name} 
                        image={image} 
                        id={_id} 
                        quantity={quantity} // Pasa la cantidad seleccionada al componente AddToCart
                    />

                    {/* seccion: envio gratis */}
                    <div className="mt-4 flex items-center">
                        <Image
                            src="/imgs/camion.png" 
                            alt="Envío gratis"
                            width={20}
                            height={20} 
                            className="mr-2" // Espacio a la derecha del ícono
                        />
                        <p className="text-sm text-gray-600">Envío gratis superando los $200.000</p>
                    </div>
                </motion.div>
            </div>

            {/* seccion: pop-up de Medios de Pago */}
            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg w-1/3">
                        <h2 className="text-lg font-bold mb-4">Medios de Pago</h2>
                        <p>Ofrecemos varias opciones de pago, incluyendo tarjetas de crédito, débito y transferencias bancarias.</p>
                        <div className="my-4">
                            <Image
                                src="/imgs/pagos.png"
                                alt="Métodos de pago"
                                width={300} 
                                height={100}
                                className="mx-auto" // Centra la imagen
                            />
                        </div>

                        <button 
                            className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
                            onClick={handleClosePopup}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProductSingle;



