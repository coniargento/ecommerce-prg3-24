"use client";
import { useAppContext } from "@/app/contexts/AppContext";

const AddToCart = ({name, price, id, image, quantity = 1}) => {
    const { handleAddToCart } = useAppContext();

    return(
        <>
            <button
            onClick={() => handleAddToCart(name, price, image, id, quantity)} className="btn"
            >
                AGREGAR AL CARRITO
            </button>
        </>
    );
};

export default AddToCart;