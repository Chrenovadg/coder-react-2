import React from 'react';

export const CartItem = ({ item }) => {
  const { id, name, price, quantity } = item;

  return (
    <div>
      <p>ID: {id}</p>
      <p>Nombre: {name}</p>
      <p>Precio unitario: ${price}</p>
      <p>Cantidad: {quantity}</p>
      <p>Total: ${price * quantity}</p>
    </div>
  );
};

