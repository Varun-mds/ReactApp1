import React, { Component } from 'react';
import Hello from './Components/Hello';
import Products from './Components/Product';
import Total from './Components/Total';
import ProductList from './Components/ProductList';

class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        
        <ProductList />
      </div>
    );
  }
}

export default App;
