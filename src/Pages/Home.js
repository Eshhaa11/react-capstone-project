import React from 'react';
import '../Styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay-content">
        <h1>GrindFits</h1>
        <p>Fit for the Hustle.</p>
        <a href="/products">Shop Now</a>
      </div>
    </div>
  );
};

export default Home;
