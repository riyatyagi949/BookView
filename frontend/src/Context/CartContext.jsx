import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useAuth } from "./AuthContext";
import {
  fetchCart,
  addToCartApi,
  removeFromCartApi,
  clearCartApi,
  placeOrderApi,
} from "../Services/api";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const { token } = useAuth();
  const [cartItems, setCartItems] = useState([]);

  const loadCart = useCallback(async () => {
    if (!token) {
      setCartItems([]);
      return;
    }
    try {
      const data = await fetchCart(token);
      setCartItems(data?.items || data?.cartItems || []);
    } catch (err) {
      console.error(err);
      setCartItems([]);
    }
  }, [token]);

  useEffect(() => {
    loadCart();
  }, [loadCart]);

  const addToCart = async (bookId, qty) => {
    if (!token) throw new Error("Not authenticated");
    await addToCartApi(bookId, qty, token);
    await loadCart();
  };

  const removeFromCart = async (bookId) => {
    if (!token) throw new Error("Not authenticated");
    await removeFromCartApi(bookId, token);
    await loadCart();
  };

  const clearCart = async () => {
    if (!token) throw new Error("Not authenticated");
    await clearCartApi(token);
    await loadCart();
  };

  const placeOrderAndClearCart = async (orderData) => {
    if (!token) throw new Error("Not authenticated");
    const response = await placeOrderApi(orderData, token);
    if (response) {
      await clearCart();
    }
    return response;  
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, placeOrderAndClearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
