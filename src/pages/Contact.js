import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page contact">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Discover our story, mission, and the values that drive us forward.</p>
        </div>
      </section>

      {/* Contact Content */}
      <div className="contact-container">

        <div className='contact-main'>
        {/* Left Side: Form */}
        <div className="contact-form">
          <h1>Get in Touch</h1>
          <p>We’d love to hear from you! Please fill out the form below to get in touch.</p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Write your message here"></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>

        {/* Right Side: Image */}
        <div className="contact-image">
        <img src="https://img.freepik.com/free-photo/adult-person-working-late-night-from-home_23-2150064964.jpg?t=st=1732750346~exp=1732753946~hmac=7f26640d1939b213596d8c5aafa335d2f317d527262ac17ce7d04713a70417da&w=740" alt="Contact Us" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
