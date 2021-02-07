import React, { Component } from "react";
import "./App.css";
import Product from "./Product.js";
import ShoppingCart from "./ShoppingCart.js";
import CartItem from "./CartItem.js";
import './style.css';


class ProductList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        cart: [],
        quantities: []
      }
    }

  renderList() {
    const items = this.props.list.map(item => {
        return <Product key={item.name} item={item} addToCartCB={this.addToCart.bind(this)}/>
    });
    return items;
  }

  renderCart() {
    const items = this.state.cart.map(item => {
      var index = this.state.cart.indexOf(item)
      return <CartItem key={item.name}
                item={item}
                quantity={this.state.quantities[index]}
                removeAllCB={this.removeItem.bind(this)}
                addToCartCB={this.addToCart.bind(this)}
                removeOneCB={this.removeOne.bind(this)}/>
    });
    return items
  }

  addToCart(item) {
    if (this.state.cart.includes(item)) {
      // update quantity
      var index = this.state.cart.indexOf(item)
      var holder = this.state.quantities
      holder[index] += 1
      this.setState({quantities: holder})
    } else {
      this.setState({
        cart: this.state.cart.concat([item]),
        quantities: this.state.quantities.concat([1.0])
      })
    }
  }

  removeItem(item) {
    if (this.state.cart.includes(item)) {
      if (this.state.cart.length == 1) {
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

  removeOne(item) {
    if (this.state.cart.includes(item)) {
      var index = this.state.cart.indexOf(item)
      var holder = this.state.quantities
      holder[index] -= 1
      this.setState({quantities: holder});
    }
  }

  getSubtotal() {
    var subtotal = 0
    for (var i=0; i < this.state.cart.length; i++) {
      subtotal += this.state.cart[i].price * this.state.quantities[i]
    }
    return subtotal.toFixed(2)
  }

  render() {
    var productList = (<div id="product-list">{this.renderList()}</div>);

    return (
      <div className="app-container">
          <div id="product-list">
            {this.renderList()}
          </div>
          <div id="shopping-cart">
            <span className="align-text-svg"><h1>shopping bag</h1><svg height="35" viewBox="0 0 21 21" width="35" xmlns="http://www.w3.org/2000/svg"><path d="m2.42575356.50254623 8.09559774-.00228582c.5209891-.0001471.9548019.39973171.9969972.91900928l.8938128 10.99973961c.0447299.5504704-.3652538 1.0329756-.9157242 1.0777056-.0269414.0021892-.0539605.0032851-.0809907.0032851h-9.83555122c-.55228475 0-1-.4477152-1-1 0-.0255993.00098299-.0511891.00294679-.076713l.84614072-10.99745378c.0400765-.52088193.4743495-.92313949.99677087-.92328699zm7.07424644 3.64272599v1c0 1.10456949-1.8954305 1.35472778-3 1.35472778s-3-.3954305-3-1.5v-1" fill="none" stroke="#2a2e3b" stroke-linecap="round" stroke-linejoin="round" transform="translate(4 4)"/></svg>
            </span>
            {this.renderCart()}
            <h2>subtotal: ${this.getSubtotal()}</h2>
          </div>
      </div>
    );
  }
}

export default ProductList;
