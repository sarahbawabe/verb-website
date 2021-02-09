// import logo from './logo.svg';
import './App.css';
import ProductList from "./ProductList.js";
import './style.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import verb_pb from './images/verb_pb.jpeg';
import verb_coco from './images/verb_coco.jpeg';
import verb_rose from './images/verb_rose.jpeg';
import bugs_bunny from './images/bugs_bunny.jpeg';
import ina from './images/ina.jpeg';
import loaf from './images/loaf.jpeg';
import hazel from './images/hazel.jpeg';
import mug from './images/mug.jpeg';
import candle from './images/candle.jpeg';
//
// verb_coco.jpeg
// mug.jpeg
// loaf.jpeg
// ina.jpeg
// hazel.jpeg
// candle.jpeg
// bugs_bunny.jpeg';

const data = [
  { name: "Verb Salted Peanut Butter", price: "1.95", image: verb_pb, description: "", sku: "#SB1475601", onSale: "False"},
  { name: "Verb Coconut Chai", price: "1.95", image: verb_coco, description: "", sku: "#SB1475602", onSale: "False"},
  { name: "Verb Strawberry Rose Hibiscus", price: "1.95", image: verb_rose, description: "", sku: "#SB1475604", onSale: "False"},
  { name: "Bugs Bunny Sign", price: "5.75", image: bugs_bunny, description: "", sku: "#SB1475605", onSale: "False"},
  { name: "Ina Garten's Modern Comfort Food", price: "35.00", image: ina, description: "", sku: "#SB1475606", onSale: "False"},
  { name: "Lemon Poppy Seed Bread", price: "12.50", image: loaf, description: "", sku: "#SB1475607", onSale: "True"},
  { name: "'Hydro Hazel' (The Hydroponic Basil)", price: "14.25", image: hazel, description: "", sku: "#SB1475608", onSale: "True"},
  { name: "Yellow Tea Cup", price: "5.45", image: mug, description: "", sku: "#SB1475609", onSale: "True"},
  { name: "Peace & Tranquility Candle", price: "21.95", image: candle, description: "", sku: "#SB1475603", onSale: "False"}
];

// const data = [
//   { name: "Verb Salted Peanut Butter", price: "1.95", image: "verb_pb.jpeg", description: "", sku: "#SB1475601", onSale: "False"},
//   { name: "Verb Coconut Chai", price: "1.95", image: "verb_coco.jpeg", description: "", sku: "#SB1475602", onSale: "False"},
//   { name: "Verb Strawberry Rose Hibiscus", price: "1.95", image: "verb_rose.jpeg", description: "", sku: "#SB1475604", onSale: "False"},
//   { name: "Bugs Bunny Sign", price: "5.75", image: "bugs_bunny.jpeg", description: "", sku: "#SB1475605", onSale: "False"},
//   { name: "Ina Garten's Modern Comfort Food", price: "35.00", image: "ina.jpeg", description: "", sku: "#SB1475606", onSale: "False"},
//   { name: "Lemon Poppy Seed Bread", price: "12.50", image: "loaf.jpeg", description: "", sku: "#SB1475607", onSale: "True"},
//   { name: "'Hydro Hazel' (The Hydroponic Basil)", price: "14.25", image: "hazel.jpeg", description: "", sku: "#SB1475608", onSale: "True"},
//   { name: "Yellow Tea Cup", price: "5.45", image: "mug.jpeg", description: "", sku: "#SB1475609", onSale: "True"},
//   { name: "Peace & Tranquility Candle", price: "21.95", image: "candle.jpeg", description: "", sku: "#SB1475603", onSale: "False"}
// ];


// function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//   return images;
//   // return r.keys().map(r)
// }
//
// const images = importAll(require.context('./images/', false, /\.(jpe?g)$/));

// <Route path="/about">
//   <About />
// </Route>
// <Route path="/users">
//   <Users />
// </Route>
// console.log("IMAGES", images)

// <img src={require(images['verb_pb.jpeg'])} />
// <img src={images['verb_pb.jpeg']} />

function App() {
  return (
    <div className="App">
      <Router>
        <ProductList list={data}/>

      </Router>

    </div>
  );
}

export default App;
