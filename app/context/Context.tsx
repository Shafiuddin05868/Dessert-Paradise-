"use client";

import React, { createContext, useContext, useState, useMemo } from "react";
import data from "../assets/data.json";

interface CartContextType {
  cart: { [id: number]: number }; // Dessert ID as key, quantity as value
  addOrUpdateDessert: (id: number, quantity: number) => void;
  removeDessert: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  totalAmount: number; // Total price of all items in the cart
  resetCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<{ [id: number]: number }>({});

  // Add or update a dessert with a specific quantity
  const addOrUpdateDessert = (id: number, quantity: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: quantity,
    }));
  };

  // Remove a dessert from the cart
  const removeDessert = (id: number) => {
    setCart((prevCart) => {
      const { [id]: _, ...rest } = prevCart;
      return rest;
    });
  };

  // Increase the quantity of a dessert
  const increaseQuantity = (id: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
  };

  // Decrease the quantity of a dessert
  const decreaseQuantity = (id: number) => {
    setCart((prevCart) => {
      const currentQuantity = prevCart[id] || 0;
      if (currentQuantity <= 1) {
        const { [id]: _, ...rest } = prevCart; // Remove the item if quantity reaches 0
        return rest;
      }
      return {
        ...prevCart,
        [id]: currentQuantity - 1,
      };
    });
  };
    // Calculate the total amount using `useMemo` for performance optimization
    const totalAmount = useMemo(() => {
      return Object.entries(cart).reduce((total, [id, quantity]) => {
        const dessert = data.find((item) => item.id === Number(id));
        return dessert ? total + dessert.price * quantity : total;
      }, 0);
    }, [cart]);
  
    const resetCart = () => {
      setCart({});
    };
    
  
  return (
    <CartContext.Provider
      value={{ cart, addOrUpdateDessert, removeDessert, increaseQuantity, decreaseQuantity, totalAmount, resetCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
