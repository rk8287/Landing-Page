import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p className="footer-text">© All Rights Reserved.</p>
        <p className="footer-year">© 2025</p>
        <div className="footer-links">
          <Link to={'/termCondition'}  className="footer-link">Terms & Conditions</Link> |
          <Link to={'/privecy'}  className="footer-link">Privacy Policy</Link> |
          <Link to={'/refundPolicy'}  className="footer-link">Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
