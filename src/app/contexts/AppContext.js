"use client";

import { createContext, useState, useContext } from "react";

const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const cartLength = cart.length;// nos da el total de productos

  const cartLenghtFunc = () => { // nos da el total 
    let cont = 0;
    for (let index = 0; index < cart.length; index++){
      cont = cont + cart[index].quantity
    }
    return cont
  }

  const handleAddToCart = (name, price, image, id, quantity) => {
    const product = {
      name,
      price,
      image,
      id,
      quantity,
    };
    const existingProduct = cart.find((item) => item.id === id);
    if (existingProduct) {
      existingProduct.quantity += quantity;
      return setCart([...cart]);
    } else{
      setCart([...cart, product]);
    }
  }

  const handleRemoveProduct = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  }

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) return; // Evita cantidades negativas
    setCart(prevCart => 
      prevCart.map(product => 
        product.id === id ? { ...product, quantity } : product
      )
    );
  };

  const cartTotal = () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        cartLength,
        handleAddToCart,
        cartTotal,
        handleRemoveProduct,
        handleUpdateQuantity,
        cartLenghtFunc,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(`useAppContext tiene que ser usado dentro del provider`);
  }
  return context;
};

export default AppContext;
