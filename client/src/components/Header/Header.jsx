import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import NavLink
import './Header.css';

import logo from '../../assets/weblogo.jpeg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="main-header-section">
      <div className="header-section">
        {/* Logo */}
        <Link to={'/'} className="img">
          <img className="imgg" src={logo} alt="Logo" />
        </Link>

        {/* Hamburger Icon */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Links & Call Button */}
        <div className={`center-link ${isOpen ? 'open' : ''}`}>
          <NavLink 
            className="link" 
            to="/" 
            onClick={() => setIsOpen(false)} 
            activeClassName="active-link" // Use NavLink's activeClassName
          >
            Home
          </NavLink>
          <NavLink 
            className="link" 
            to="/about" 
            onClick={() => setIsOpen(false)} 
            activeClassName="active-link"
          >
            About
          </NavLink>
          <NavLink 
            className="link" 
            to="/contact" 
            onClick={() => setIsOpen(false)} 
            activeClassName="active-link"
          >
            Contact
          </NavLink>

          {/* Shared Call Button */}
          <button className="call-btn" onClick={() => window.location.href = 'tel:8444177506'}>
            Call: ( 844 ) 417 7506
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
