import React from 'react';
import PropTypes from 'prop-types';

export default function Cart(props) {
  const { calculateTotal, children, prices } = props;
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
        {prices.map(([currency, total]) => (
          <div>
            <div>
              {currency}
            </div>
            <div>
              {total}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Cart.propTypes = {
  calculateTotal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  prices: PropTypes.array.isRequired
};
