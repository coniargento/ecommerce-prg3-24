"use client";
import React, { useState } from "react";

const CheckoutForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //lógica del envío del formulario
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6 bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Datos de contacto</h2>

            <div className="mb-4">
                <label className="block text-gray-700">Nombre:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded p-2"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Dirección:</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded p-2"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded p-2"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Teléfono:</label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded p-2"
                />
            </div>

            <button
                type="submit"
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
                Confirmar Pedido
            </button>
        </form>
    );
};

export default CheckoutForm;
