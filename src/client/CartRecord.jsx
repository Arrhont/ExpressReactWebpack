import React from 'react';
import PropTypes from 'prop-types';

export default function CartRecord(props) {
  const {
    name, quantity, currency, price
  } = props;
  return (
    <div className="CartEntry">
      <div className="EntryElement">{`Наименование: ${name}`}</div>
      <div className="EntryElement">{`Количество: ${quantity}`}</div>
      <div className="EntryElement">{`Валюта: ${currency}`}</div>
      <div className="EntryElement">{`Цена: ${price}`}</div>
    </div>
  );
}

CartRecord.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
};
