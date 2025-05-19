
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Checkout from "./Pages/Checkout";
import Cart from "./Pages/Cart";
import ProductDetail from "./Pages/ProductDetail";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Products />
      <Checkout />
      <Cart />
      <ProductDetail />
    </div>
  );
}

export default App;
