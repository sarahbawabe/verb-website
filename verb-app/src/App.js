// import logo from './logo.svg';
import './App.css';
import Main from "./Main.js";
import './style.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";

// import background from './images/background-01.png';
import verb_pb from './images/verb_pb.jpeg';
import verb_coco from './images/verb_coco.jpeg';
import verb_rose from './images/verb_rose.jpeg';
import bugs_bunny from './images/bugs_bunny.jpeg';
import ina from './images/ina.jpeg';
import loaf from './images/loaf.jpeg';
import hazel from './images/hazel.jpeg';
import mug from './images/mug.jpeg';
import candle from './images/candle.jpeg';


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
        <Main list={data}/>
      </Router>
    </div>
  );
}

export default App;
