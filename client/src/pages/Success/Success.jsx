import React from 'react';
import './Success.css';
import suc from '../../assets/Animation - 1736260332206.gif'; // Ensure the path is correct
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom for navigation

const Success = () => {
  return (
    <div className="success-page">
      <div className="success-container">
        <div className="tick-logo">
          <img src={suc} alt="Success Animation" />
        </div>
        <div className="success-message">
          <h2>We will call you shortly and understand your needs</h2>
          <p>
            Thank you for reaching out to us! We have received your request and
            our team will get in touch with you as soon as possible. Rest assured,
            we'll provide the best service to fulfill your needs.
          </p>
          <p className="additional-info">
            In the meantime, feel free to explore our wide range of products and services. We are here to help you!
          </p>
        </div>

        {/* Home Button */}
        <div className="home-btn-container">
          <Link to="/" className="home-btn" style={{color: "green"}}>Go to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Success;
