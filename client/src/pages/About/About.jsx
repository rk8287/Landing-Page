import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS animations
  }, []);

  return (
    <>
      <Header />
      <div className="About">
        <header className="About-header" data-aos="fade-up">
          <h1>Committed to Quality, Affordability, and Customer Satisfaction in the USA</h1>
          <p>
            At Octagon Autoparts Car parts, we believe in making high-quality vehicle parts accessible to everyone in the USA...
          </p>
        </header>

        <div className="second-section">
          <section className="App-mission" data-aos="fade-right">
            <h2>Our Mission: Quality for Every Budget in the USA</h2>
            <p>
              We know that car maintenance can be expensive, so we focus on providing quality parts...
            </p>
          </section>

          <div className="App-image" data-aos="zoom-in">
            <img src="https://nexoautoparts.com/wp-content/uploads/2024/10/32.png" alt="Car Headlight" />
          </div>
        </div>

        {/* Add more sections with animations */}
        <div className="second-section" data-aos="fade-left">
          <div className="App-image">
            <img src="https://nexoautoparts.com/wp-content/uploads/2024/10/23-300x300.png" alt="Car Headlight" />
          </div>

          <section className="App-mission">
            <h2>Our Mission: Quality for Every Budget in the USA</h2>
            <p>
              We focus on providing quality parts at various price points. Our reused autoparts...
            </p>
          </section>
        </div>

        <div className="banner" data-aos="flip-up">
          <h1>Sustainability and Responsibility</h1>
          <p>
            We’re committed to sustainability and reducing waste...
          </p>
          <button className="call-button">Call: (844) 417 7506</button>
        </div>

        <div className="App-choose">
          <header className="choose-header" data-aos="fade-down">
            <h1>Why Choose Us?</h1>
            <div className="columns">
              <div className="column" data-aos="fade-up">
                <h2>A Wide Range of Parts</h2>
                <p>We offer a huge selection of Octagon Autoparts, aftermarket, and reused auto parts...</p>
                <button className="call-button">Call: (844) 417 7506</button>
              </div>
              <div className="column" data-aos="fade-up">
                <h2>Quality You Can Trust</h2>
                <p>All our products undergo strict quality checks...</p>
              </div>
              <div className="column" data-aos="fade-up">
                <h2>Affordable Solutions</h2>
                <p>We offer discount auto parts to fit into any budget...</p>
              </div>
            </div>
          </header>
        </div>

        <div className="Appss" data-aos="zoom-out">
          <header className="bannerr">
            <h1>Join the Octagon Autoparts Car parts Family</h1>
            <p>We’re proud to be a part of your automotive journey...</p>
            <button className="call-button">Call: (844) 417 7506</button>
          </header>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
