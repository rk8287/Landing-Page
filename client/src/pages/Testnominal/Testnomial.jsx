import React from 'react';
import img1 from '../../assets/13.png';
import img2 from '../../assets/carparts-usa.png';

import './Testnomial.css'

const Testnomial = () => {
  return (
    <div className="testnom">
      <div className="test-header">
        <h1 style={{color:"#007bff"}}>Not Sure What You Need? We’re Here to Help!</h1>
      </div>

      <div className="test-description">
        <p>
          Don’t worry if you're not an auto expert. Our knowledgeable team in the USA is here to guide you through your options,
          helping you find the right part for your specific vehicle.
          From OEM autoparts to discount auto parts, we ensure that you get the perfect fit.
        </p>
      </div>

      <div className="test-img-container">
        <div className="first-con">
          <img src={img1} alt="Fast Shipping" />
          <div className="small-head">
            <h5>Fast Shipping, Easy Shopping Across the USA</h5>
            <p>
              Need your part in a hurry? We know that time is of the essence, so we offer fast and reliable 
              shipping to get your parts to you quickly. Plus, our website is designed to make your shopping 
              experience as easy and stress-free as possible. 
              With just a few clicks, you can find, order, and have your parts shipped right to your door.
            </p>
          </div>
        </div>

        <div className="second-con">
          <img src={img2} alt="Fast Shipping" />
          <div className="small-head">
            <h5>Fast Shipping, Easy Shopping Across the USA</h5>
            <p>
              Need your part in a hurry? We know that time is of the essence, so we offer fast and reliable 
              shipping to get your parts to you quickly. Plus, our website is designed to make your shopping 
              experience as easy and stress-free as possible. 
              With just a few clicks, you can find, order, and have your parts shipped right to your door.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testnomial;
