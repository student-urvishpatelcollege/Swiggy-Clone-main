// src/context/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item or increment quantity
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove one quantity or delete if quantity = 1
  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove item completely
  const clearItemCompletely = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearItemCompletely }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
