import React, { Component } from "react";
import Product from "./Product.js";
import ShoppingCart from "./ShoppingCart.js";
import './style.css';

class CheckoutPage extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <h1>order confirmation</h1>
      )
    }
}

export default CheckoutPage;
