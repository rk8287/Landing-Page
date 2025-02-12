import React from "react"; 
import { Link } from "react-router-dom"; // Importing Link for navigation
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact Support</Link></li>
            <li><Link to="/refundPolicy">Return Policy</Link></li>
          </ul>
        </div>

        {/* Customer Information Section */}
        <div className="footer-section">
          <h3><strong>Customer Information</strong></h3>
          <div className="customer-info">
            <p><strong>Customer Support Email:</strong></p>
            <span className="email"><a href="mailto:support@nexoautoparts.com" className="email">
                support@nexoautoparts.com
              </a></span>

            <p><strong>Working Days/Hours:</strong></p>
            <span className="working-hours">Mon - Sat / 9:30AM - 6:30PM</span>

            <p><strong>Address:</strong></p>
            <span>Ogtagon Group LLC 33 Academy St, Poughkeepsie, NY 12601</span>
          </div>
        </div>

        {/* Trusted Car Parts Section */}
        <div className="footer-section">
          <h3>Trusted Car Parts Online</h3>
          <p>
          Octagon Autoparts is an online marketplace for buying high-quality aftermarket 
          car spare parts. With a strong backend network of manufacturers and dealers, we
           provide the largest range of products for your car parts needs at the lowest prices.
            Whether you're looking for engine components, suspension parts, braking systems, 
          or accessories, Octagon Autoparts ensures durability, reliability, and affordability for every vehicle
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p><strong>© Octagon Autoparts LIMITED</strong>. All Rights Reserved.</p>
        <div className="footer-links">
          <Link to="/termCondition">Terms of Service</Link> | 
          <Link to="/privecy">Privacy Policy</Link> | 
          <Link to="/contact">Contact</Link> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
