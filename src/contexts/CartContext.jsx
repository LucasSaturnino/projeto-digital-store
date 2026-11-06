import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Adicionar produto ao carrinho (considerando id, variação de tamanho e cor)
  const addToCart = (product, size, color, quantity = 1) => {
    setCartItems(prevItems => {
      const existingIndex = prevItems.findIndex(
        item => item.id === product.id && item.size === size && item.color === color
      );

      if (existingIndex >= 0) {
        // Se o item com a mesma variação já existe, atualiza a quantidade
        const updatedItems = [...prevItems];
        updatedItems[existingIndex].quantity += quantity;
        return updatedItems;
      } else {
        // Senão, adiciona um novo item ao carrinho
        return [...prevItems, { ...product, size, color, quantity }];
      }
    });
  };

  // Remover item do carrinho
  const removeFromCart = (id, size, color) => {
    setCartItems(prevItems =>
      prevItems.filter(
        item => !(item.id === id && item.size === size && item.color === color)
      )
    );
  };

  // Alterar quantidade de um item específico
  const updateQuantity = (id, size, color, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id, size, color);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.size === size && item.color === color
          ? { ...item, quantity }
          : item
      )
    );
  };

  // Cálculo do total de itens para o badge do Header
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Cálculo do subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + (item.priceDiscount || item.price) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);