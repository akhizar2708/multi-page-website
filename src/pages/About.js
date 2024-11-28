import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faLightbulb, faStar } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="page about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>Discover our story, mission, and the values that drive us forward.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide exceptional services that empower our customers to achieve their goals. We strive to make a meaningful impact through innovation and dedication.
        </p>
      </section>



 {/* Values Section */}
 <section className="values">
  <h2>Our Core Values</h2>
  <div className="value-list">
    <div className="value-item">
      <div className="icon-container">
        <FontAwesomeIcon icon={faShieldAlt} />
      </div>
      <h3>Integrity</h3>
      <p>We uphold honesty and transparency in everything we do.</p>
    </div>
    <div className="value-item">
      <div className="icon-container">
        <FontAwesomeIcon icon={faLightbulb} />
      </div>
      <h3>Innovation</h3>
      <p>We constantly innovate to bring better solutions to our customers.</p>
    </div>
    <div className="value-item">
      <div className="icon-container">
        <FontAwesomeIcon icon={faStar} />
      </div>
      <h3>Excellence</h3>
      <p>We aim for excellence and consistently exceed expectations.</p>
    </div>
  </div>
</section>


    </div>
  );
};

export default About;
