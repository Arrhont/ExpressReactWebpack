import React from 'react';

export default function Cart(props) {
  const {calculateTotal}
  return (
    <div className="Cart">
      {props.children}
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
