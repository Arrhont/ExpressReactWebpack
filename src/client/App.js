import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';

export default class App extends Component {
  state = { test: 'TEST' };

  render() {
    const { test } = this.state;
    return (
      <div>
        {test ? <h1>{`${test}`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}
