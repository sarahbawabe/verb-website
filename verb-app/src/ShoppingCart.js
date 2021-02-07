import React, { Component } from "react";
import "./App.css";
import CartItem from "./CartItem.js";
import Product from "./Product.js";



// class ShoppingCart extends Component {
//   constructor(props) {
//     super(props);
//     // this.state = {
//     //   cart: []
//     // };
//     // this.addToCart = this.addToCart.bind(this)
//   }
//
//   addToCart(item) {
//     console.log("add to cart!")
//     this.setState({cart: this.state.cart.concat([item])})
//     console.log(this.state.cart)
//   }
//
//   // renderList() {
//   //   const items = this.state.cart.map(item => {
//   //       return <CartItem item={item}/>
//   //   });
//   //   return items;
//   // }
//
//   // getSubtotal() {
//   //   var subtotal = this.state.cart.reduce((total, item) => { return total + item.price})
//   //   console.log("SUBTOTAL:", subtotal)
//   //   return subtotal
//   // }
//
//   render() {
//     // console.log(this.getSubtotal())
//     return (
//       <div id="shopping-cart">
//
//         <div id="cart-items">
//           {this.props.items}
//         </div>
//
//       </div>
//     );
//     // <h2>SUBTOTAL: {this.getSubtotal()}</h2>
//     // <h2>SUBTOTAL: {this.getSubtotal()}</h2>
//   }
// }
//
// export default ShoppingCart;
