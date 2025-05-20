import React from 'react';
import '../Styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Shophoria 🛍️</h1>
      <p>Your one-stop shop for everything you need </p>
      <a href="/products">Start Shopping</a>
    </div>
  );
};

export default Home;
