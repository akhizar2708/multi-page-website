import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Multi Page Website</h1>
          <p className="hero-description">
            Discover amazing services, exciting offers, and a world of creativity. We're here to make your experience unforgettable!
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Learn More</button>
            <button className="btn btn-secondary">Contact Us</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Quality Services</h3>
            <p>We provide top-notch services tailored to your needs.</p>
          </div>
          <div className="feature-item">
            <h3>Affordable Prices</h3>
            <p>Our pricing is competitive without compromising on quality.</p>
          </div>
          <div className="feature-item">
            <h3>Expert Support</h3>
            <p>Our team is here to support you every step of the way.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
