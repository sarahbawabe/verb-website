import React, {Component} from 'react';
import './style.css';
import { Link, withRouter } from "react-router-dom";

class Product extends Component {
    constructor(props) {
      super(props);
    }

    addToCart = (event) => {
      this.props.addToCartCB(this.props.item);
    }

    // renderProductPage = (event) => {
    //   this.props.redirectCB(this.props.item);
    // }

    // loadImage = (imageName) => {
    //   import(`./images/${imageName}`).then(image => {
    //     return image // try using img and src and returning that?
    //   });
    // };

    handleSale(onSale) {
      if (onSale == "True") {
        var salePrice = (this.props.item.price * (1 - this.props.sale/100)).toFixed(2)
        return (
          <span>
            <span className="sale-item">
              <h3>on sale!
              <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" transform="matrix(-1 0 0 1 20 2)"><path d="m8.5 2.56534572h2c3.3137085 0 6 2.6862915 6 6v1.93465428c0 3.3137085-2.6862915 6-6 6h-2c-3.3137085 0-6-2.6862915-6-6v-1.93465428c0-3.3137085 2.6862915-6 6-6z"/><path d="m3.94265851-.12029102c-1.05323083.28505997-1.86575682 1.17688618-1.86575682 2.30840383 0 1.16606183.73081563 2.21070886 1.78973019 2.50733508" transform="matrix(.62932039 .77714596 -.77714596 .62932039 2.893856 -1.491094)"/><path d="m16.9295345-.10708618c-1.0898445.26224883-1.9419712 1.17003523-1.9419712 2.3284815 0 1.16644061.7312905 2.21138754 1.7907622 2.50762392" transform="matrix(-.62932039 .77714596 .77714596 .62932039 24.205765 -11.545558)"/><path d="m9.5 5.5v4h-3.5"/><path d="m15 15 2 2"/><path d="m2 15 2 2" transform="matrix(-1 0 0 1 6 0)"/></g></svg>
              </h3></span>
            <h4>({this.props.sale}% off)</h4>
            <h3>
              <span className="cross-out">
                ${this.props.item.price}
              </span>
              <strong> ${salePrice}</strong>
            </h3>
          </span>
        );
      } else {
        return (
          <h3>${this.props.item.price}</h3>)
      }
    }

    render() {
      let item = this.props.item

      if (this.props.showFull == "True") {
        return (
           <div className="product">
              <img src={item.image} className="product-img"></img>
              <h2>{item.name}</h2>
              {this.handleSale(item.onSale)}
              <p>{item.description}</p>
              <h4>SKU: #{item.sku}</h4>
              <button onClick={this.addToCart}>
                <span className="button-content">add to bag <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="m2.42575356.50254623 8.09559774-.00228582c.5209891-.0001471.9548019.39973171.9969972.91900928l.8938128 10.99973961c.0447299.5504704-.3652538 1.0329756-.9157242 1.0777056-.0269414.0021892-.0539605.0032851-.0809907.0032851h-9.83555122c-.55228475 0-1-.4477152-1-1 0-.0255993.00098299-.0511891.00294679-.076713l.84614072-10.99745378c.0400765-.52088193.4743495-.92313949.99677087-.92328699zm7.07424644 3.64272599v1c0 1.10456949-1.8954305 1.35472778-3 1.35472778s-3-.3954305-3-1.5v-1" fill="none" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" transform="translate(4 4)"/></svg></span>
              </button>
          </div>
        );
      } else {
        return (
           <div className="product">
              <Link to={"/product/" + item.sku} className="unstyled-link">
                <img src={item.image} className="product-img"></img>
                <h2>{item.name}</h2>
              </Link>
              {this.handleSale(item.onSale)}
              <button onClick={this.addToCart}>
                <span className="button-content">add to bag <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="m2.42575356.50254623 8.09559774-.00228582c.5209891-.0001471.9548019.39973171.9969972.91900928l.8938128 10.99973961c.0447299.5504704-.3652538 1.0329756-.9157242 1.0777056-.0269414.0021892-.0539605.0032851-.0809907.0032851h-9.83555122c-.55228475 0-1-.4477152-1-1 0-.0255993.00098299-.0511891.00294679-.076713l.84614072-10.99745378c.0400765-.52088193.4743495-.92313949.99677087-.92328699zm7.07424644 3.64272599v1c0 1.10456949-1.8954305 1.35472778-3 1.35472778s-3-.3954305-3-1.5v-1" fill="none" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" transform="translate(4 4)"/></svg></span>
              </button>
          </div>
        );
      }
    }

}

export default withRouter(Product);
