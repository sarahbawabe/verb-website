import React, { Component } from "react";
import Product from "./Product.js";
import './style.css';
import ShoppingCart from "./ShoppingCart.js";


/** This component models the home/landing page. */
class HomePage extends Component {
    constructor(props) {
      super(props);
    }

    /* addToCart, removeAll, and removeOne are functions that simply allow
     * for passing of the callback to the Products and ShoppingCart, so that
     * they are able to have cart-adjusting functionality. */
    addToCart = (item) => {
      this.props.addToCartCB(item);
    }

    removeAll = (item) => {
      this.props.removeAllCB(item);
    }

    removeOne = (item) => {
      this.props.removeOneCB(item);
    }

    render() {
      // render item list first and store as items variable
      const items = this.props.list.map(item => {
        return (<Product key={item.name}
                  item={item}
                  addToCartCB={this.addToCart.bind(this)}
                  sale={this.props.constants.SALE_PERCENT}
                  showFull="False"/>)
      });

      return (
        <div className="app-container">
          <div id="product-list">
            {items}
          </div>
          <ShoppingCart
            onCheckout="False"
            cart={this.props.cart}
            constants={this.props.constants}
            quantities={this.props.quantities}
            removeAllCB={this.removeAll.bind(this)}
            addToCartCB={this.addToCart.bind(this)}
            removeOneCB={this.removeOne.bind(this)}/>
        </div>
      );
    }
}

export default HomePage;
