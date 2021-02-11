import React, { Component } from "react";
import './style.css';
import Product from "./Product.js";
import ShoppingCart from "./ShoppingCart.js";


/** This component models the single-product page, and figures
 * out which product to show based on the unique sku that is stored
 * in the URL params when an item is clicked on.
 */
class ProductPage extends Component {
    constructor(props) {
      super(props);
    }

    /**
     * Figures out which item should be shown by parsing the list and
     * cross-checking skus.
     * @param sku : sku number to be searched
     * @return item with associated sku */
    getItem(sku) {
      console.log(sku);
      for (var i=0; i<this.props.list.length; i++) {
        if (this.props.list[i].sku == sku) {
          return this.props.list[i]
        }
      }
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
      let productId = this.props.match.params.productid;
      console.log("productId", productId);
      return (
        <div className="app-container">
          <Product item={this.getItem(this.props.match.params.productid)}
            addToCartCB={this.addToCart.bind(this)}
            sale={this.props.constants.SALE_PERCENT}
            showFull="True"/>
          <ShoppingCart
            onCheckout="False"
            cart={this.props.cart}
            constants={this.props.constants}
            quantities={this.props.quantities}
            removeAllCB={this.removeAll.bind(this)}
            addToCartCB={this.addToCart.bind(this)}
            removeOneCB={this.removeOne.bind(this)}/>
        </div>
      )
    }
}

export default ProductPage;
