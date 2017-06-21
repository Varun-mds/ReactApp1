import React, { Component } from 'react';



class Products extends Component {
    constructor(props){
        super(props)
        this.state={ qty: 0};
        this.click= this.click.bind(this)
        this.show = this.show.bind(this)
    }
    show(){
      this.props.handleShow(this.props.name);
    }
    click(){
        this.setState({ qty: this.state.qty + 1 });
        // this.props.handleTotal(this.props.price);
        
    }
  render() {
    return (
        <div>
      <p>{this.props.name}- ${this.props.price}</p>
      <button onClick={ this.click }> Buy </button>
      <button onClick={ this.show }> Show </button>
      <h3> Qty: { this.state.qty } </h3>
      <hr />
      </div>
    );
  }
}

export default Products;