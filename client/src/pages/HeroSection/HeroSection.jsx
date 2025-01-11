import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('car');
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
  const [parts, setParts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYears(Array.from({ length: currentYear - 1950 + 1 }, (_, i) => 1950 + i));
    setMakes(['Toyota', 'Ford', 'Chevrolet', 'Honda', 'BMW', 'Nissan']);
    setParts(['A Pillar', 'Bumper', 'Brake Pads', 'Radiator']);
  }, []);

  useEffect(() => {
    if (make === 'Toyota') {
      setModels(['Corolla', 'Camry', 'Highlander']);
    } else if (make === 'Ford') {
      setModels(['F-150', 'Mustang', 'Explorer']);
    } else if (make === 'Chevrolet') {
      setModels(['Malibu', 'Camaro', 'Silverado']);
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

    setTimeout(() => {
      navigate('/success');
    }, 1000);
  };

  return (
    <div className="App">
      {!showContactForm ? (
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
          <h2 style={{ color: '#467ff7' }}>Find Auto Parts and Accessories by Model and Make</h2>
          <form onSubmit={handleSubmit}>
            {activeTab === 'part' && (
              <div className="form-group">
                <label>Select Part</label>
                <select value={part} onChange={(e) => setPart(e.target.value)}>
                  {parts.map((partOption) => (
                    <option key={partOption} value={partOption}>
                      {partOption}
                    </option>
                  ))}
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
      ) : (
        <div className="contact-form">
          <h2>Contact Form</h2>
          <form onSubmit={handleContactFormSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
