import React, { Component } from "react";
import ShoppingCart from "./ShoppingCart.js";
import './style.css';

/** This component models the checkout/order confirmation page, and
 * tells the ShoppingCart that it is onCheckout, so that the cart renders
 * accordingly. */
class CheckoutPage extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div className="checkout-page">
          <h1>order confirmation!🎉</h1>
          <ShoppingCart
            onCheckout="True"
            cart={this.props.cart}
            constants={this.props.constants}
            quantities={this.props.quantities}/>
        </div>
      )
    }
}

export default CheckoutPage;
