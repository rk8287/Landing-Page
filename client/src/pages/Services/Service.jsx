import React from 'react';
import './Service.css';
import img1 from '../../assets/6.png';
import img2 from '../../assets/differential-small-truck-closeup-view-600nw-2201399841.webp';
import img3 from '../../assets/auto.jpeg';
import img4 from '../../assets/10-1024x576.png';

const Service = () => {
  return (
    <div className="service">
      <div className="left">
        <div className="image-container">
          <img src={img1} alt="Car Part 1" />
          <img src={img2} alt="Car Part 1" />
          <img src={img3} alt="Car Part 1" />
          <img src={img4} alt="Car Part 1" />
         
        </div>
      </div>

      <div className="right">
        <header className="service-header">
          <h1>Why Timeless Car Parts</h1>
          <h2>Where Quality Meets Affordability in OEM, Aftermarket, and Reused Auto Parts</h2>
          <p>
            Welcome to Timeless Car Parts, your trusted partner in the USA for all things auto. We know how important it is to keep your car running smoothly, so we offer a wide variety of OEM auto parts, aftermarket components, and even reused auto parts for those on a budget. Whether you’re fixing up your daily ride or restoring a classic, we’ve got what you need at prices you’ll love.
          </p>
          <button className="call-button">Call: 307 243 0044</button>
        </header>
      </div>
    </div>
  );
};

export default Service;
