import React from 'react';
import { FaCode, FaBrush, FaMobileAlt } from 'react-icons/fa';
import './Services.css'; // Ensure this file exists and contains styles.

const Services = () => {
  return (
    <div className="page services">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>Discover our story, mission, and the values that drive us forward.</p>
        </div>
      </section>

      {/* Services Section */}
      <div className="service-box">
        <header className="services-header">
          <h1 className="services-title">Our Services</h1>
          <p className="services-description">Discover how we can help elevate your business with our expertise.</p>
        </header>
        <section className="services-grid">
          <div className="service-card">
            <FaCode className="service-icon" />
            <h3 className="service-title">Web Development</h3>
            <p className="service-description">
              Building responsive and high-performance websites tailored to your needs.
            </p>
          </div>
          <div className="service-card">
            <FaBrush className="service-icon" />
            <h3 className="service-title">UI/UX Design</h3>
            <p className="service-description">
              Creating beautiful, user-centric designs to enhance user experiences.
            </p>
          </div>
          <div className="service-card">
            <FaMobileAlt className="service-icon" />
            <h3 className="service-title">Mobile App Development</h3>
            <p className="service-description">
              Crafting scalable and feature-rich mobile applications for all platforms.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
