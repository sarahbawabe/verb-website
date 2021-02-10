import React, { Component } from "react";
import ProductPage from "./ProductPage.js";
import CheckoutPage from "./CheckoutPage.js";
import HomePage from "./HomePage.js";
import ShoppingCart from "./ShoppingCart.js";
import './style.css';
import { Switch, Route } from "react-router-dom";

/* constants used throughout program for sales, shipping, and tax, so that
 * these quantities can be easily updated, as necessary. */
const constants = {
  SHIPPING_COST: 3,
  TAX_PERCENT : 6.25,
  SALE_PERCENT : 15
}

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

  /** Renders the page, determining what should be shown based on url route. */
  render() {
    var showCheckoutBtn = "True"

    return (
      <div class="app-container">
        <Switch>
          <Route path="/product/:productid" render={(props) => (
            <ProductPage {...props}
              list={this.props.list}
              cart={this.state.cart}
              quantities={this.state.quantities}
              addToCartCB={this.addToCart.bind(this)}
              constants={constants}/>)}/>

          <Route path="/checkout" render={(props) => (
            <CheckoutPage {...props}
              list={this.props.list}
              cart={this.state.cart}
              quantities={this.state.quantities}
              constants={constants}/>)}/>

          <Route path="/" render={(props) => (
            <HomePage {...props}
              list={this.props.list}
              cart={this.state.cart}
              quantities={this.state.quantities}
              addToCartCB={this.addToCart.bind(this)}
              constants={constants}/>)}/>
        </Switch>

        <ShoppingCart
          cart={this.state.cart}
          constants={constants}
          quantities={this.state.quantities}
          removeAllCB={this.removeItem.bind(this)}
          addToCartCB={this.addToCart.bind(this)}
          removeOneCB={this.removeOne.bind(this)}/>

      </div>


    );
  }
}

export default Main;

// var subtotal = this.getSubtotal()
// var tax = this.getTax(subtotal)
// var total = this.getTotal(subtotal, tax)

// based on the url route, determine which page to show

// {this.renderProduct(this.props.location.state.item)}
// console.log(this.props)

// {this.renderProduct(this.props.location.state.item)}
// {this.renderProduct(this.props.location.state.item)}

// <h1>checkout page</h1>
// <div id="shopping-cart">
//   {this.renderCart(subtotal, tax, total)}
// </div>

//
// <div className="app-container">
//   <div id="product-list">
//     {this.renderList()}
//   </div>
//   <div id="shopping-cart">
//     <span className="align-text-svg"><h1>shopping bag</h1><svg height="35" viewBox="0 0 21 21" width="35" xmlns="http://www.w3.org/2000/svg"><path d="m2.42575356.50254623 8.09559774-.00228582c.5209891-.0001471.9548019.39973171.9969972.91900928l.8938128 10.99973961c.0447299.5504704-.3652538 1.0329756-.9157242 1.0777056-.0269414.0021892-.0539605.0032851-.0809907.0032851h-9.83555122c-.55228475 0-1-.4477152-1-1 0-.0255993.00098299-.0511891.00294679-.076713l.84614072-10.99745378c.0400765-.52088193.4743495-.92313949.99677087-.92328699zm7.07424644 3.64272599v1c0 1.10456949-1.8954305 1.35472778-3 1.35472778s-3-.3954305-3-1.5v-1" fill="none" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" transform="translate(4 4)"/></svg>
//     </span>
//     {this.renderCart(subtotal, tax, total)}
//     <Link to="/checkout" className="button unstyled-link">checkout</Link>
//   </div>
// </div>
// <button onClick={this.goToCheckout()}>checkout</button>
