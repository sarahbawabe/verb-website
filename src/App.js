import './App.css';
import Main from "./Main.js";
import './style.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";

// import image for each data item so that they can be stored in the data array
import verb_pb from './images/verb_pb.jpeg';
import verb_coco from './images/verb_coco.jpeg';
import verb_rose from './images/verb_rose.jpeg';
import bugs_bunny from './images/bugs_bunny.jpeg';
import ina from './images/ina.jpeg';
import loaf from './images/loaf.jpeg';
import hazel from './images/hazel.jpeg';
import mug from './images/mug.jpeg';
import candle from './images/candle.jpeg';

// initialize data
const data = [
  { name: "Verb Salted Peanut Butter", price: "1.50", image: verb_pb,
    description: "You (peanut) butter believe this bar is good.", sku: "SB1475601", onSale: "False"},
  { name: "Verb Coconut Chai", price: "1.50", image: verb_coco,
    description: "You'll go (coco)NUTTY when you try this bar. Mmmm-mmm.", sku: "SB1475602", onSale: "False"},
  { name: "Verb Strawberry Rose Hibiscus", price: "1.50", image: verb_rose,
    description: "One could say, this bar is berry good.", sku: "SB1475604", onSale: "False"},
  { name: "Bugs Bunny Sign", price: "5.75", image: bugs_bunny,
    description: "Heyyyyy what's up, doc? In ~vintage~.", sku: "SB1475605", onSale: "False"},
  { name: "Ina Garten's Modern Comfort Food", price: "35.00", image: ina,
    description: "A true cooking wizard. 11/10 would recommend the tomato soup recipe.", sku: "SB1475606", onSale: "False"},
  { name: "Lemon Poppy Seed Bread", price: "12.50", image: loaf,
    description: "You know what they say... when life gives you lemons, make lemon poppy seed bread!", sku: "SB1475607", onSale: "True"},
  { name: "\"Hydro Hazel\" (The Hydroponic Basil)", price: "14.25", image: hazel,
    description: "Hydro Hazel the Hydroponic Basil never fails to impress with her superior aquatic watering system.", sku: "SB1475608", onSale: "True"},
  { name: "Yellow Tea Cup", price: "5.45", image: mug,
    description: "This cup is pret-tea cool.", sku: "SB1475609", onSale: "True"},
  { name: "Peace & Tranquility Candle", price: "21.95", image: candle,
    description: "In the words of Joe Jonas, this candle is \"burnin' up\".", sku: "SB1475603", onSale: "False"}
];

/* Initialize constants used throughout program for sales, shipping, and tax.
 * These quantities can be easily updated, as necessary, and the program will
 * recalculate accordingly. */
const constants = {
  SHIPPING_COST: 3,
  TAX_PERCENT : 6.25,
  SALE_PERCENT : 15
}

/** Instantiates Main and passes it the data list and constants. */
function App() {
  return (
    <div className="App">
      <Router>
        <Main list={data} constants={constants}/>
      </Router>
    </div>
  );
}

export default App;
