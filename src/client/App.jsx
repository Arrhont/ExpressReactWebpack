import React, { Component } from 'react';
import './app.css';
import ReactImage from './logo.svg';
import Cart from './Cart';
import InputField from './InputField'

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

  changeQuantity = (value) => {
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
      products: [1, 2, 3],
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
      inputFieldPrice,
      products
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

        {products.length > 0
        && (
          <Cart
            products={products}
          >
            pampam
          </Cart>
        )
        }
      </div>
    );
  }
}
