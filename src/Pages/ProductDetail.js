import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/productdata';
import { CartContext } from '../Context/CartContext';
import '../Styles/ProductDetail.css';


const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

 
  const product = products.find(p => p.id === parseInt(id));

  
  if (!product) return <p style={{ padding: '2rem' }}>Product not found.</p>;

  return (
    <div className="detail-container">
      <img src={product.image} alt={product.title} className="detail-image" />
      <div className="detail-info">
        <h2>{product.title}</h2>
        <p className="detail-price">${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <br />
        <a href="/products" style={{ marginTop: '1rem', display: 'inline-block', color: '#009688' }}>
          ← Back to Products
        </a>
      </div>
    </div>
  );
};

export default ProductDetail;
