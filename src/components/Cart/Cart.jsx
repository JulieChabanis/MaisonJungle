import React from 'react';

const Cart = () => {
  const montserraPrice = 8;
  const ivyPrice = 10;
  const flowerPrice = 15;

  return (
    <div>
      <h2>{"Panier"}</h2>
      <ul>
        <li>Montserrat : {montserraPrice} €</li>
        <li>IvyPrice : {ivyPrice} €</li>
        <li>FlowerPrice : {flowerPrice} €</li>
      </ul>
      Total : {montserraPrice + ivyPrice + flowerPrice} €
    </div>
  )
}

export default Cart;