import React, {Component} from 'react';
import './style.css';


/** Models an item in the ShoppingCart. Stores its quantity in state so
 * that it can re-render on quantity updates.
 *
 * SVGs from https://systemuicons.com/
 */
class CartItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
          quantity: 1
      };
    }

    /** Handles the (-) button functionality, and determines if an item should
     * be removed completely from cart based on its current quantity. */
    removeOne = (event) => {
      if (this.props.quantity == 1) { // if only one left, remove from cart instead
        this.removeFromCart()
      } else {
        this.props.removeOneCB(this.props.item)
      }
    }

    /** Handles the (X) button functionality by calling the removeAll
     * callback function. */
    removeFromCart = (event) => {
      this.props.removeAllCB(this.props.item)
    }

    /** Handles the add to cart functionality by calling the addToCart
     * callback function and updating the CartItem's state accordingly. */
    addToCart = (event) => {
      this.setState({ quantity: this.state.quantity + 1})
      this.props.addToCartCB(this.props.item)
    }

    /**
     * Calculates the cost of an item based on its price and quantity.
     * @param quantity : quantity of given item currently in cart
     * @param price : price of purchasing one item
     * @return total cost of CartItem
     */
    getCost(quantity, price) {
      var cost = quantity * price
      return cost.toFixed(2)
    }

    /**
     * Renders the price of the item based on whether or not it's on sale.
     * @param item : item whose price is to be rendered
     * @return price of item
     */
    renderPrice(item) {
      if (item.onSale == "True") { // if on sale, render (% off) and calculate new price
        var salePrice = (this.props.item.price * (1 - this.props.sale/100)).toFixed(2)
        return (
          <span>
            <h3>{this.props.quantity} x ${salePrice}</h3>
            <span className="sale-item"><h4>({this.props.sale}% off!)</h4></span>
          </span>
        )
      } else { // if not on sale, render full price
        return (
          <h3>{this.props.quantity} x ${this.props.item.price}</h3>
        )
      }
    }

    render() {
      if (this.props.onCheckout == "True") { // if on checkout page, exclude quantity-change functionality
        return (
           <div className="checkout-item">
            <h2><span className="teal-highlight">{this.props.item.name}</span></h2>
            {this.renderPrice(this.props.item)}
           </div>
        );
      } else {
       return (
          <div className="cart-item">
            <h2>
            <button className="remove-button" onClick={this.removeFromCart}>
              <svg height="30" viewBox="0 0 21 21" width="30" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="#C64A38" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 2)"><circle cx="8.5" cy="8.5" r="8"/><g transform="matrix(0 1 -1 0 17 0)"><path d="m5.5 11.5 6-6"/><path d="m5.5 5.5 6 6"/></g></g></svg>
            </button>
            {this.props.item.name}
            </h2>
            <div className="quantity-button-bar">
              <button onClick={this.removeOne}>&ndash;</button>
              {this.renderPrice(this.props.item)}
              <button onClick={this.addToCart}>+</button>
            </div>
          </div>
        );
      }
    }

}

export default CartItem;
