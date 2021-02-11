import React, { Component } from "react";
import ProductPage from "./ProductPage.js";
import CheckoutPage from "./CheckoutPage.js";
import HomePage from "./HomePage.js";
import './style.css';
import { Switch, Route } from "react-router-dom";

/** Top-level component for the app. Stores the cart and quantities and
 * passes these states to its children components, so that everything is
 * in sync. */
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      quantities: []
    }
  }

  /**
  * Increases item quantity by one.
  * @param item : item whose quantity is to be updated
  */
  addToCart(item) {
    if (this.state.cart.includes(item)) { // if in cart, update quantity
      var index = this.state.cart.indexOf(item)
      var holder = this.state.quantities
      holder[index] += 1
      this.setState({quantities: holder})
    } else { // if not in cart, add to cart and store quantity as 1
      this.setState({
        cart: this.state.cart.concat([item]),
        quantities: this.state.quantities.concat([1.0])
      })
    }
  }

  /**
  * Removes the item completely from the cart.
  * @param item : item to be removed from cart
  */
  removeItem(item) {
    if (this.state.cart.includes(item)) {
      if (this.state.cart.length == 1) { // if last in cart, clear
        this.setState({cart: [], quantities: []})
      } else {
        var index = this.state.cart.indexOf(item)
        var cart = this.state.cart
        cart.splice(index,1)
        var quantities = this.state.quantities
        quantities.splice(index,1)
        this.setState({cart: cart, quantities: quantities})
      }
    }
  }

  /**
  * Reduces item quantity by one.
  * @param item : item whose quantity is to be updated
  */
  removeOne(item) {
    if (this.state.cart.includes(item)) {
      var index = this.state.cart.indexOf(item)
      var holder = this.state.quantities
      holder[index] -= 1
      this.setState({quantities: holder});
    }
  }

  /** Renders the page, determining what should be shown based on URL route. */
  render() {
    return (
      <Switch>
        <Route path="/product/:productid" render={(props) => (
          <ProductPage {...props}
            list={this.props.list}
            cart={this.state.cart}
            quantities={this.state.quantities}
            addToCartCB={this.addToCart.bind(this)}
            removeAllCB={this.removeItem.bind(this)}
            removeOneCB={this.removeOne.bind(this)}
            constants={this.props.constants}/>)}/>

        <Route path="/checkout" render={(props) => (
          <CheckoutPage {...props}
            list={this.props.list}
            cart={this.state.cart}
            quantities={this.state.quantities}
            constants={this.props.constants}/>)}/>

        <Route path="/" render={(props) => (
          <HomePage {...props}
            list={this.props.list}
            cart={this.state.cart}
            quantities={this.state.quantities}
            addToCartCB={this.addToCart.bind(this)}
            removeAllCB={this.removeItem.bind(this)}
            removeOneCB={this.removeOne.bind(this)}
            constants={this.props.constants}/>)}/>
      </Switch>
    );
  }
}

export default Main;
