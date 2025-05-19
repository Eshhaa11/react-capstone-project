
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Checkout from "./Pages/Checkout";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Products />
      <Checkout />
      <Cart />
    </div>
  );
}

export default App;
