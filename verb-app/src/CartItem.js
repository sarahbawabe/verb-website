import React, {Component} from 'react';
import './style.css';

class CartItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
          quantity: 1
      };
      // this.addToCart = this.addToCart.bind(this)
    }

    removeOne = (event) => {
      if (this.props.quantity == 1) {
        this.removeFromCart()
      } else {
        // console.log("remove one")
        this.props.removeOneCB(this.props.item)
      }
    }

    removeFromCart = (event) => {
      // console.log("remove")
      this.props.removeAllCB(this.props.item)
    }

    addToCart = (event) => {
      // console.log("add")
      this.setState({ quantity: this.state.quantity + 1})
      this.props.addToCartCB(this.props.item)
    }

    getCost(quantity, price) {
      var cost = quantity * price
      return cost.toFixed(2)
    }

    getPrice(item) {
      if (item.onSale == "True") {
        var salePrice = (this.props.item.price * (1 - this.props.sale/100)).toFixed(2)
        return (
          <span>
            <h3>{this.props.quantity} x ${salePrice}</h3>
            <span className="sale-item"><h4>({this.props.sale}% off!)</h4></span>
          </span>
        )
      } else {
        return (
          <h3>{this.props.quantity} x ${this.props.item.price}</h3>
        )
      }
    }
    // <h3>Cost: ${this.getCost(this.state.quantity, this.props.item.price)}</h3> <div className="flex-row align-center">

    render() {
       return (
          <div className="cart-item">
            <h2>
            <button className="remove-button" onClick={this.removeFromCart}>
              <svg height="30" viewBox="0 0 21 21" width="30" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="#C64A38" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 2)"><circle cx="8.5" cy="8.5" r="8"/><g transform="matrix(0 1 -1 0 17 0)"><path d="m5.5 11.5 6-6"/><path d="m5.5 5.5 6 6"/></g></g></svg>
            </button>
            {this.props.item.name}
            </h2>
            <div className="quantity-button-bar">
              <button onClick={this.removeOne}>&ndash;</button>
              {this.getPrice(this.props.item)}
              <button onClick={this.addToCart}>+</button>
            </div>
          </div>
      );
    }

}

// <span className="button-content"><svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="#2a2e3b" strokeLinecap="round" stroke-linejoin="round" transform="translate(5 5)"><path d="m.5 10.5 10-10"/><path d="m10.5 10.5-10-10z"/></g></svg> remove</span>


export default CartItem;
