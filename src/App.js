import react from "react";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Checkout from "./Pages/Checkout";
import Cart from "./Pages/Cart";
import ProductDetail from './Pages/ProductDetail';


function App() {
  return (
    <div>
      <Home />
      <Products />
      <Checkout />
      <Cart />
    </div>
  );
}

export default App;
