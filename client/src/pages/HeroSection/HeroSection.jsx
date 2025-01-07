import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('car');  // Set 'car' as the default active tab
  const [year, setYear] = useState('2025');
  const [make, setMake] = useState('Toyota');
  const [model, setModel] = useState('Corolla');
  const [part, setPart] = useState('A Pillar');
  const [vin, setVin] = useState('');
  const [loading, setLoading] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [years, setYears] = useState([]);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);

  // Use React Router's useNavigate hook
  const navigate = useNavigate();

  // Simulate fetching makes and models based on selected year
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYears(Array.from({ length: currentYear - 1950 + 1 }, (_, i) => 1950 + i));
    setMakes(['Toyota', 'Ford', 'Chevrolet', 'Honda', 'BMW']); // Example makes
  }, []);

  useEffect(() => {
    // Simulate model change based on selected make
    if (make === 'Toyota') {
      setModels(['Corolla', 'Camry', 'Highlander']);
    } else if (make === 'Ford') {
      setModels(['F-150', 'Mustang', 'Explorer']);
    } else if (make === 'Chevrolet') {
      setModels(['Malibu', 'Camaro', 'Silverado']);
    } else if (make === 'Honda') {
      setModels(['Civic', 'Accord', 'Pilot']);
    } else if (make === 'BMW') {
      setModels(['3 Series', 'X5', 'M3']);
    } else {
      setModels([]);
    }
  }, [make]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowContactForm(true);
    }, 2000);
  };

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Redirect to success page after form submission
    setTimeout(() => {
      navigate('/success'); // Replace '/success' with the desired route
    }, 1000);
  };

  return (
    <div className="App">
      <div className="search-bar">
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'part' ? 'active' : ''}`}
            onClick={() => setActiveTab('part')}
          >
            Shop By Part Name
          </button>
          <button
            className={`tab ${activeTab === 'car' ? 'active' : ''}`}
            onClick={() => setActiveTab('car')}
          >
            Shop By Car
          </button>
          <button
            className={`tab ${activeTab === 'vin' ? 'active' : ''}`}
            onClick={() => setActiveTab('vin')}
          >
            Search By VIN
          </button>
        </div>
        <h2>Find Auto Parts and Accessories by Model and Make</h2>
        <form onSubmit={handleSubmit}>
          {activeTab === 'part' && (
            <div className="form-group">
              <label>Select Part</label>
              <select value={part} onChange={(e) => setPart(e.target.value)}>
                <option value="A Pillar">A Pillar</option>
                {/* Add more part options here */}
              </select>
            </div>
          )}

          {activeTab === 'car' && (
            <>
              <div className="form-group">
                <label>Select Year</label>
                <select value={year} onChange={(e) => setYear(e.target.value)}>
                  {years.map((yearOption) => (
                    <option key={yearOption} value={yearOption}>
                      {yearOption}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Select Make</label>
                <select value={make} onChange={(e) => setMake(e.target.value)}>
                  {makes.map((makeOption) => (
                    <option key={makeOption} value={makeOption}>
                      {makeOption}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Select Model</label>
                <select value={model} onChange={(e) => setModel(e.target.value)}>
                  {models.map((modelOption) => (
                    <option key={modelOption} value={modelOption}>
                      {modelOption}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}

          {activeTab === 'vin' && (
            <div className="form-group">
              <label>Enter VIN</label>
              <input
                type="text"
                value={vin}
                onChange={(e) => setVin(e.target.value)}
                placeholder="Enter Vehicle Identification Number"
              />
            </div>
          )}

          <button type="submit" className="submit-button">
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>

      {loading && (
        <div className="loading-spinner">
          <span>Loading...</span>
        </div>
      )}

      {showContactForm && !loading && (
        <div className="contact-form">
          <h3>Please Fill Out the Contact Form Below</h3>

          <form onSubmit={handleContactFormSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter your phone number" />
            </div>
            <button type="submit" className="submit-button">
              Submit Contact Info
            </button>
          </form>

          {formSubmitted && (
            <div className="success-message" style={{ color: 'green' }}>
              <h4>Looking for parts in green!</h4>
            </div>
          )}
        </div>
      )}

      <div className="promotions">
        <div className="promo">
          <div className="promo-content">
            <span className="promo-text">Wide Range of Parts that Fit Every Need and Budget</span>
          </div>
        </div>
        <div className="promo">
          <div className="promo-content">
            <span className="promo-text">Your Go-To Destination for All Vehicle Parts in the USA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
