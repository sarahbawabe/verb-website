// import logo from './logo.svg';
import './App.css';
import ProductList from "./ProductList.js";
import ShoppingCart from "./ShoppingCart.js";
import './style.css';

const data = [
  { name: "Verb Vanilla Latte", price: "1.95", image: "", description: "", sku: "#SB1475601", onSale: "False"},
  { name: "Verb Coconut Chai", price: "1.95", image: "", description: "", sku: "#SB1475602", onSale: "False"},
  { name: "Verb Cookie Butter", price: "1.95", image: "", description: "", sku: "#SB1475603", onSale: "False"},
  { name: "Verb Strawberry Rose Hibiscus", price: "1.95", image: "", description: "", sku: "#SB1475604", onSale: "False"},
  { name: "Bugs Bunny Sign", price: "5.75", image: "", description: "", sku: "#SB1475605", onSale: "False"},
  { name: "Ina Garten's Modern Comfort Food", price: "35.00", image: "", description: "", sku: "#SB1475606", onSale: "False"},
  { name: "Olive Oil", price: "21.50", image: "", description: "", sku: "#SB1475607", onSale: "True"},
  { name: "'Hydro Hazel' (The Hydroponic Basil)", price: "14.25", image: "", description: "", sku: "#SB1475608", onSale: "True"},
  { name: "Yellow Tea Cup", price: "5.45", image: "", description: "", sku: "#SB1475609", onSale: "True"}
];

function App() {
  return (
    <div className="App">
      <ProductList list={data}/>
    </div>
  );
}

export default App;
