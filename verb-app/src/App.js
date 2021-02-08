// import logo from './logo.svg';
import './App.css';
import ProductList from "./ProductList.js";
import './style.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";

const data = [
  { name: "Verb Salted Peanut Butter", price: "1.95", image: "verb_pb.jpeg", description: "", sku: "#SB1475601", onSale: "False"},
  { name: "Verb Coconut Chai", price: "1.95", image: "verb_coco.jpeg", description: "", sku: "#SB1475602", onSale: "False"},
  { name: "Verb Strawberry Rose Hibiscus", price: "1.95", image: "verb_rose.jpeg", description: "", sku: "#SB1475604", onSale: "False"},
  { name: "Bugs Bunny Sign", price: "5.75", image: "bugs_bunny.jpeg", description: "", sku: "#SB1475605", onSale: "False"},
  { name: "Ina Garten's Modern Comfort Food", price: "35.00", image: "ina.jpeg", description: "", sku: "#SB1475606", onSale: "False"},
  { name: "Lemon Poppy Seed Bread", price: "12.50", image: "loaf.jpeg", description: "", sku: "#SB1475607", onSale: "True"},
  { name: "'Hydro Hazel' (The Hydroponic Basil)", price: "14.25", image: "hazel.jpeg", description: "", sku: "#SB1475608", onSale: "True"},
  { name: "Yellow Tea Cup", price: "5.45", image: "mug.jpeg", description: "", sku: "#SB1475609", onSale: "True"},
  { name: "Peace & Tranquility Candle", price: "21.95", image: "candle.jpeg", description: "", sku: "#SB1475603", onSale: "False"}
];
// <Route path="/about">
//   <About />
// </Route>
// <Route path="/users">
//   <Users />
// </Route>

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
