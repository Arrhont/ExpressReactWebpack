import React from 'react';
import PropTypes from 'prop-types';

export default function Cart(props) {
  const { calculateTotal, children, prices } = props;
  return (
    <div>
      <div className="Cart">
        {children}
      </div>
      <button
        className="CalcButton"
        type="button"
        onClick={() => calculateTotal()}
      >
        Посчитать стоимость
      </button>
      <div className="Total">
        {prices.map(([currency, total]) => (
          <div className="EntryElement">
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
