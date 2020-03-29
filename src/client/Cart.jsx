import React from 'react';

export default function Cart(props) {
  return (
    <div className="Cart">
      {props.children}
      <div className="Total">
        Итого:
        руб.
      </div>
    </div>
  );
}
