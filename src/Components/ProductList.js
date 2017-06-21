import React, { Component } from 'react';
import Products from './Product';
import Total from './Total';


class ProductList extends Component {
  constructor(props){
  super(props)
  this.state = { total: 0}

}
  calctotal(price){
    this.setState({ total: this.state.total +  price });
    alert(this.state.total);
  }

  showProduct(name){
    alert("You selected" + name);
  }
  render() {
    return (
        <div>
      <Products name="Android" price={121} handleShow={this.showProduct} handleTotal={this.calcTotal} />
      <Products name="Apple" price= {123} handleShow={this.showProduct} handleTotal={this.calcTotal}/>
      <Products name="Nokia" price={65} handleShow={this.showProduct} handleTotal={this.calcTotal}/>
      <Total total={this.state.total}/>

      </div>
    );
  }
}

export default ProductList;