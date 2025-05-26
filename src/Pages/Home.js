import React, { useEffect } from 'react';
import '../Styles/Home.css';

const Home = () => {
  useEffect(() => {
    document.body.classList.add('no-scroll-home');
    return () => {
      document.body.classList.remove('no-scroll-home');
    };
  }, []);

  return (
    <div className="home-hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">VibeFits</h1>
        <p className="hero-tagline">Elevate Your Fit. Own Your Vibe.</p>
        <a href="/products" className="cta-button">Explore Collection</a>
      </div>
    </div>
  );
};

export default Home;
