import React, { Component } from 'react';
import './app.css';
import ReactImage from './logo.svg';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFieldName: '',
      inputFieldQuantity: '',
      inputFieldCurrency: 'RUB',
      inputFieldPrice: '',
      products: []
    };
  }

  changeQuntity = (value) => {
    this.setState({ inputFieldQuantity: value });
  }

  changeProductName = (name) => {
    this.setState({ inputFieldName: name });
  }

  changeCurrency = (currency) => {
    this.setState({ inputFieldCurrency: currency });
  }

  changePrice = (price) => {
    this.setState({ inputFieldPrice: price });
  }

  addToCart = () => {
    this.setState(prevState => ({
      products: ,
      inputFieldName: '',
      inputFieldQuantity: '',
      inputFieldCurrency: 'RUB',
      inputFieldPrice: '',
    }));
  }

  render() {
    const {
      inputFieldName,
      inputFieldQuantity,
      inputFieldCurrency,
      inputFieldPrice
    } = this.state;

    return (
      <div className="App">
        <header className="AppHeader">
          <img className="AppLogo" src={ReactImage} alt="react" />
        </header>

        <form className="ProductInput">
          <fieldset>
            <input
              type="text"
              value={inputFieldName}
              className="ProductName"
              placeholder="Наименование"
              onChange={event => this.changeProductName(event.target.value)}
            />

            <input
              type="number"
              value={inputFieldQuantity}
              className="ProductQuantity"
              placeholder="Количество"
              onChange={
                (event) => {
                  this.changeQuntity(event.target.value);
                }
              }
            />

            <select
              className="CurrencySelect"
              name="CurrencySelect"
              value={inputFieldCurrency}
              onChange={
                (event) => {
                  this.changeCurrency(event.target.value);
                }
              }
            >
              <option value="RUB">RUB</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>

            </select>

            <input
              type="number"
              value={inputFieldPrice}
              className="ProductPrice"
              placeholder="Цена"
              onChange={
                (event) => {
                  this.changePrice(event.target.value);
                }
              }
            />

            <input
              type="button"
              value="В корзину"
              onClick={() => this.addToCart()}
            />
          </fieldset>
        </form>
      </div>
    );
  }
}
