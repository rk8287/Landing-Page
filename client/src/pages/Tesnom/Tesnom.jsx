import React from 'react';
import './Tesnom.css';

const Tesnom = () => {
  return (
    <div className="testnom">
      <div className="testimonials-section">
        <h1>Testimonials: Thousands of our customers in the USA have something in common</h1>
        <h2 style={{color:"#007bff"}}>They can’t stop bragging about Octagon Autoparts Car parts.</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>
              "Octagon Autoparts Car parts has been a lifesaver for my restoration projects in the USA.
               Their selection of Octagon Autoparts, like fuel injectors and brake calipers, has made it easy 
               to bring my classic car back to life. The quality is unmatched!"
            </p>
            <p className="author">Emily S., Car Restoration Enthusiast</p>
          </div>
          <div className="testimonial">
            <p>
              "As a fleet manager in the USA, I need reliable parts for our vehicles.
               Octagon Autoparts Car parts consistently delivers high-quality components,
                from alternators to radiators, and their fast shipping keeps our fleet on the road. Highly recommend!"
            </p>
            <p className="author">David K., Fleet Manager</p>
          </div>
          <div className="testimonial">
            <p>
              "I love sharing my DIY projects, and Octagon Autoparts Car parts is my secret weapon! 
              I've sourced everything from headlights to exhaust systems in the USA, and the quality is always excellent.
               Plus, their customer service is always quick to help!"
            </p>
            <p className="author">Lisa T., Automotive Blogger</p>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Tesnom;
