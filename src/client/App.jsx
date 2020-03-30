import React, { Component } from 'react';
import './app.css';
import ReactImage from './logo.svg';
import Cart from './Cart';
import InputField from './InputField';
import CartRecord from './CartRecord';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFieldName: '',
      inputFieldQuantity: '',
      inputFieldCurrency: 'RUB',
      inputFieldPrice: '',
      products: [],
      prices: []
    };
  }

  changeProductName = (name) => {
    this.setState({ inputFieldName: name });
  };

  changeQuantity = (value) => {
    this.setState({ inputFieldQuantity: value });
  };


  changeCurrency = (currency) => {
    this.setState({ inputFieldCurrency: currency });
  };

  changePrice = (price) => {
    this.setState({ inputFieldPrice: price });
  };

  addToCart = () => {
    const {
      inputFieldName, inputFieldQuantity, inputFieldCurrency, inputFieldPrice
    } = this.state;

    const productRecord = {
      inputFieldName,
      inputFieldQuantity,
      inputFieldCurrency,
      inputFieldPrice
    };

    this.setState(prevState => ({
      products: [...prevState.products, productRecord],
      inputFieldName: '',
      inputFieldQuantity: '',
      inputFieldCurrency: 'RUB',
      inputFieldPrice: ''
    }));
  };

  resetCart = () => {
    this.setState({ products: [] });
  }

  calculateTotal = () => {
    const { products } = this.state;

    fetch('http://localhost:8080/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(products),
    })
      .then(response => response.json()
        .then((answer) => { this.setState({ prices: answer }); }));
  }

  render() {
    const {
      inputFieldName,
      inputFieldQuantity,
      inputFieldCurrency,
      inputFieldPrice,
      products,
      prices
    } = this.state;

    return (
      <div className="App">
        <header className="AppHeader">
          <img className="AppLogo" src={ReactImage} alt="react" />
        </header>

        <InputField
          name={inputFieldName}
          changeProductName={this.changeProductName}
          quantity={inputFieldQuantity}
          changeQuantity={this.changeQuantity}
          currency={inputFieldCurrency}
          changeCurrency={this.changeCurrency}
          price={inputFieldPrice}
          changePrice={this.changePrice}
          addToCart={this.addToCart}
        />

        {products.length > 0 && (
          <Cart
            products={products}
            calculateTotal={this.calculateTotal}
            resetCart={this.resetCart}
            prices={prices}
          >
            {products.map(productRecord => (
              <CartRecord
                key={productRecord.inputFieldName}
                name={productRecord.inputFieldName}
                quantity={productRecord.inputFieldQuantity}
                currency={productRecord.inputFieldCurrency}
                price={productRecord.inputFieldPrice}
              />
            ))}
          </Cart>
        )}
      </div>
    );
  }
}
