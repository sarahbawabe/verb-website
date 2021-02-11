import React, { Component } from "react";
import "./App.css";
import CartItem from "./CartItem.js";
import { Link } from "react-router-dom";

/** This component models the ShoppingCart, and handles quantity updates
 * through the use of callback functions passed to it from parent components.
 * This component also handles the calculation of subtotal, tax, shipping,
 * and total based on the constants that it is given from the parent classes.
 *
 * SVGs from https://systemuicons.com/
 */
class ShoppingCart extends Component {
  constructor(props) {
    super(props);
  }

  /* addToCart, removeAll, and removeOne are functions that simply allow
   * for passing of the callback to the CartItems, so that they are able
   * to have cart-adjusting functionality. */
  addToCart = (item) => {
    this.props.addToCartCB(item);
  }

  removeAll = (item) => {
    this.props.removeAllCB(item);
  }

  removeOne = (item) => {
    this.props.removeOneCB(item);
  }

  /**
  * Totals the cost of the tax, given the subtotal.
  * @param subtotal of items in cart
  * @return cost of tax
  */
  getTax(subtotal) {
    var taxToPercent = this.props.constants.TAX_PERCENT/100
    return (taxToPercent * subtotal)
  }

  /**
  * Totals the cost of the cart, taking into account subtotal, tax, and shipping.
  * @param subtotal of items in cart
  * @param tax to be added
  * @return total of cart
  */
  getTotal(subtotal, tax) {
    if (subtotal == 0) { // if nothing in cart, it's weird to charge for shipping, so return 0
      return 0
    }
    return subtotal + tax + this.props.constants.SHIPPING_COST
  }

  /**
  * Totals the cost of the items in the cart, taking into account the quantities
  * of each.
  * @return subtotal of cart
  */
  getSubtotal() {
    var subtotal = 0
    for (var i=0; i < this.props.cart.length; i++) {
      var item = this.props.cart[i]
      if (item.onSale == "True") {
        subtotal += (item.price * (1 - this.props.constants.SALE_PERCENT/100)) * this.props.quantities[i]
      } else {
        subtotal += item.price * this.props.quantities[i]
      }
    }
    return subtotal
  }

  /** Renders the list of cart items. */
  renderCartItems() {
    if (this.props.cart.length == 0) {
      return <h3><strong>your shopping bag is empty?!🤨</strong></h3>
    }
    const items = this.props.cart.map(item => {
      var index = this.props.cart.indexOf(item)
      return <CartItem key={item.name}
                item={item}
                onCheckout={this.props.onCheckout}
                quantity={this.props.quantities[index]}
                removeAllCB={this.removeAll.bind(this)}
                addToCartCB={this.addToCart.bind(this)}
                removeOneCB={this.removeOne.bind(this)}
                sale={this.props.constants.SALE_PERCENT}/>
    });
    return items
  }

  /** Renders the shopping cart and handles all calculation calls (i.e. subtotal,
  * tax, and total). */
  render() {
    var subtotal = this.getSubtotal()
    var tax = this.getTax(subtotal)
    var total = this.getTotal(subtotal, tax)

    if (this.props.onCheckout == "True") { // if on the checkout page, exclude quantity-change functionality
      return (
        <span>
          {this.renderCartItems()}
          <h3>subtotal: ${subtotal.toFixed(2)}</h3>
          <h4>tax ({this.props.constants.TAX_PERCENT}%): ${tax.toFixed(2)}</h4>
          <h4>shipping: ${this.props.constants.SHIPPING_COST.toFixed(2)}</h4>
          <h2><span className="yellow-highlight">total: ${total.toFixed(2)}</span></h2>
        </span>
      );
    } else {
      return (
        <div id="shopping-cart">
          <span className="align-text-svg"><h1>shopping bag</h1><svg height="35" viewBox="0 0 21 21" width="35" xmlns="http://www.w3.org/2000/svg"><path d="m2.42575356.50254623 8.09559774-.00228582c.5209891-.0001471.9548019.39973171.9969972.91900928l.8938128 10.99973961c.0447299.5504704-.3652538 1.0329756-.9157242 1.0777056-.0269414.0021892-.0539605.0032851-.0809907.0032851h-9.83555122c-.55228475 0-1-.4477152-1-1 0-.0255993.00098299-.0511891.00294679-.076713l.84614072-10.99745378c.0400765-.52088193.4743495-.92313949.99677087-.92328699zm7.07424644 3.64272599v1c0 1.10456949-1.8954305 1.35472778-3 1.35472778s-3-.3954305-3-1.5v-1" fill="none" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" transform="translate(4 4)"/></svg>
          </span>
          {this.renderCartItems()}
          <h3>subtotal: ${subtotal.toFixed(2)}</h3>
          <h4>tax ({this.props.constants.TAX_PERCENT}%): ${tax.toFixed(2)}</h4>
          <h4>shipping: ${this.props.constants.SHIPPING_COST.toFixed(2)}</h4>
          <h2>total: ${total.toFixed(2)}</h2>
          <Link to="/checkout" className="button unstyled-link">checkout</Link>
        </div>
      );
    }
  }
}

export default ShoppingCart;
