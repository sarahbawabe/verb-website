import React, { Component } from "react";
import Product from "./Product.js";
import ShoppingCart from "./ShoppingCart.js";
import './style.css';


class HomePage extends Component {
    constructor(props) {
      super(props);
    }

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
      const items = this.props.list.map(item => {
        return (<Product key={item.name}
                  item={item}
                  addToCartCB={this.addToCart.bind(this)}
                  sale={this.props.constants.SALE_PERCENT}
                  showFull="False"/>)
      });

      return (
        <div id="product-list">
          {items}
        </div>
      );
    }
}

export default HomePage;
