import React from 'react';
import PropTypes from 'prop-types';

export default function Cart(props) {
  const {
    calculateTotal, getCorrectPrice, children, prices, resetCart
  } = props;

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
      <button
        className="CalcButton"
        type="button"
        onClick={() => resetCart()}
      >
        Очистить корзину
      </button>
      <div className="Total">
        {prices.map(([currency, total]) => (
          <div className="EntryElement" key={currency}>
            <div>
              {currency}
            </div>
            <div>
              {getCorrectPrice(total)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Cart.propTypes = {
  calculateTotal: PropTypes.func.isRequired,
  getCorrectPrice: PropTypes.func.isRequired,
  resetCart: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  prices: PropTypes.array.isRequired
};
