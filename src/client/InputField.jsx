import React from 'react';

export default function InputField(props) {
  const {
    name,
    changeProductName,
    quantity,
    changeQuantity,
    currency,
    changeCurrency,
    price,
    changePrice,
    addToCart
  } = props;
  return (
    <form className="ProductInput">
      <fieldset>
        <input
          type="text"
          value={name}
          className="ProductName"
          placeholder="Наименование"
          onChange={event => changeProductName(event.target.value)}
        />

        <input
          type="number"
          value={quantity}
          className="ProductQuantity"
          placeholder="Количество"
          onChange={event => changeQuantity(event.target.value)}
        />

        <select
          className="CurrencySelect"
          name="CurrencySelect"
          value={currency}
          onChange={event => changeCurrency(event.target.value)}
        >
          <option value="RUB">RUB</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>

        <input
          type="number"
          value={price}
          className="ProductPrice"
          placeholder="Цена"
          onChange={event => changePrice(event.target.value)}
        />

        <input
          type="button"
          value="В корзину"
          onClick={() => addToCart()}
        />
      </fieldset>
    </form>
  );
}
