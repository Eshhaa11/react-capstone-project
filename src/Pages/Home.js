import React from 'react';
import '../Styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
        <div className="hero-content">
          <h1>Welcome to Shophoria 🛒</h1>
          <p>Find It. Love It. Get It.</p>
          <a href="/products">Shop Now</a>
        </div>
      </div>
  );
};

export default Home;
