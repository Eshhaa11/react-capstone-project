import React, { useEffect } from 'react';
import '../Styles/Home.css';

const Home = () => {
  useEffect(() => {
    // Add class to body when Home mounts
    document.body.classList.add('no-scroll-home');

    // Remove class when Home unmounts (user navigates away)
    return () => {
      document.body.classList.remove('no-scroll-home');
    };
  }, []);

  return (
    <div className="home-container">
      <div className="overlay-content">
        <h1>VibeFits</h1>
        <p>Your Vibe, Your Hustle.</p>
        <a href="/products" className="shop-button">Shop Now</a>
      </div>
    </div>
  );
};

export default Home;
