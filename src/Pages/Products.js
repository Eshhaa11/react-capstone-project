import { useContext } from 'react';
import products from '../data/productdata';
import { CartContext } from '../Context/CartContext';
import '../Styles/Products.css';


const Products = () => {
  const { addToCart } = useContext(CartContext);
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="products-container">
      <h2>Shop by Category</h2>
      {categories.map(category => (
        <div key={category} className="product-category">
          <h3>{category}</h3>
          <div className="product-list">
            {products.filter(p => p.category === category).map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.title} />
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <p>${product.price.toFixed(2)}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
