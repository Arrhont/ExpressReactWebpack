import React from 'react';

export default function CartRecord(props) {
  const { name, quantity, currency, price } = props;
  return (
    <div>
      <div>{name}</div>
      <div>{quantity}</div>
      <div>{currency}</div>
      <div>{price}</div>
    </div>
  );
}
