import React from 'react';
import PropTypes from 'prop-types';

export default function CartRecord(props) {
  const {
    name, quantity, currency, price
  } = props;
  return (
    <div>
      <div>{name}</div>
      <div>{quantity}</div>
      <div>{currency}</div>
      <div>{price}</div>
    </div>
  );
}

CartRecord.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired
};
