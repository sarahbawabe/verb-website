import React, { Component } from "react";
import './style.css';
import Product from "./Product.js";

class ProductPage extends Component {
    constructor(props) {
      super(props);
    }

    getItem(sku) {
      console.log(sku);
      for (var i=0; i<this.props.list.length; i++) {
        if (this.props.list[i].sku == sku) {
          return this.props.list[i]
        }
      }
    }

    addToCart = (item) => {
      this.props.addToCartCB(item);
    }

    render() {
      let productId = this.props.match.params.productid;
      console.log("productId", productId);
      return (
        <Product item={this.getItem(this.props.match.params.productid)}
          addToCartCB={this.addToCart.bind(this)}
          sale={this.props.constants.SALE_PERCENT}
          showFull="True"/>
      )
    }
}

export default ProductPage;
