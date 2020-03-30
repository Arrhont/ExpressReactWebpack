import React from 'react';
import PropTypes from 'prop-types';

export default function Cart(props) {
  const { calculateTotal, children } = props;
  return (
    <div className="Cart">
      {children}
      <button
        type="button"
        onClick={() => calculateTotal()}
      >
        Посчитать стоимость
      </button>
      <div className="Total">
        Итого:
      </div>
    </div>
  );
}

Cart.propTypes = {
  calculateTotal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};
