import React from 'react';
import PropTypes from 'prop-types';

export default function Cart(props) {
  const {
    calculateTotal, children, prices, resetCart
  } = props;

  function getPriceLikeNumber(num) {
    const tempArr = num.toString().split('');
    const commaIndex = tempArr.indexOf('.');
    if (commaIndex === -1) tempArr.push('.', 0, 0);
    if (commaIndex === tempArr.length - 2) tempArr.push(0);
    return tempArr.join('');
  }

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
              {getPriceLikeNumber(total)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Cart.propTypes = {
  calculateTotal: PropTypes.func.isRequired,
  resetCart: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  prices: PropTypes.array.isRequired
};
