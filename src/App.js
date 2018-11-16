import React, { Component } from 'react';
import './App.css';
import CryptoContainer from './components/cryptoContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className ="app-header">
          <h2>CryptoCurrency</h2>
        </div>
        <CryptoContainer />
      </div>
    );
  }
}

export default App;
