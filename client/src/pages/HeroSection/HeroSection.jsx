import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('car'); // Set 'car' as the default active tab
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

  // Use React Router's useNavigate hook
  const navigate = useNavigate();

  // Simulate fetching makes, models, and parts based on selected year
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYears(Array.from({ length: currentYear - 1950 + 1 }, (_, i) => 1950 + i));
    setMakes([
      'Toyota',
      'Ford',
      'Chevrolet',
      'Honda',
      'BMW',
      'Nissan',
      'Hyundai',
      'Kia',
      'Mercedes-Benz',
      'Volkswagen',
      'Audi',
      'Subaru',
      'Mazda',
      'Lexus',
      'Dodge',
      'Jeep',
      'Porsche',
      'Volvo',
      'Land Rover',
      'Jaguar',
    ]); // 20 makes

    setParts([
      'A Pillar',
      'Bumper',
      'Brake Pads',
      'Radiator',
      'Air Filter',
      'Spark Plugs',
      'Fuel Pump',
      'Engine Mounts',
      'Control Arm',
      'Headlight Assembly',
      'Tail Light Assembly',
      'Windshield',
      'Wiper Blades',
      'Alternator',
      'Battery',
      'Exhaust Pipe',
      'Timing Belt',
      'Transmission',
      'Suspension Springs',
      'Wheel Bearings',
    ]); // 20 parts
  }, []);

  useEffect(() => {
    // Simulate model change based on selected make
    if (make === 'Toyota') {
      setModels(['Corolla', 'Camry', 'Highlander', 'Tacoma', 'Tundra']);
    } else if (make === 'Ford') {
      setModels(['F-150', 'Mustang', 'Explorer', 'Bronco', 'Ranger']);
    } else if (make === 'Chevrolet') {
      setModels(['Malibu', 'Camaro', 'Silverado', 'Tahoe', 'Traverse']);
    } else if (make === 'Honda') {
      setModels(['Civic', 'Accord', 'Pilot', 'CR-V', 'Odyssey']);
    } else if (make === 'BMW') {
      setModels(['3 Series', 'X5', 'M3', 'X3', '5 Series']);
    } else if (make === 'Nissan') {
      setModels(['Altima', 'Rogue', 'Sentra', 'Pathfinder', 'Murano']);
    } else if (make === 'Hyundai') {
      setModels(['Elantra', 'Sonata', 'Tucson', 'Santa Fe', 'Kona']);
    } else if (make === 'Kia') {
      setModels(['Sportage', 'Sorento', 'Telluride', 'Forte', 'Optima']);
    } else if (make === 'Mercedes-Benz') {
      setModels(['C-Class', 'E-Class', 'GLC', 'GLE', 'A-Class']);
    } else if (make === 'Volkswagen') {
      setModels(['Golf', 'Jetta', 'Tiguan', 'Passat', 'Atlas']);
    } else if (make === 'Audi') {
      setModels(['A4', 'Q5', 'A6', 'Q7', 'A3']);
    } else if (make === 'Subaru') {
      setModels(['Outback', 'Forester', 'Crosstrek', 'Impreza', 'Ascent']);
    } else if (make === 'Mazda') {
      setModels(['CX-5', 'Mazda3', 'Mazda6', 'CX-30', 'MX-5']);
    } else if (make === 'Lexus') {
      setModels(['RX', 'ES', 'NX', 'GX', 'UX']);
    } else if (make === 'Dodge') {
      setModels(['Charger', 'Challenger', 'Durango', 'Ram 1500', 'Journey']);
    } else if (make === 'Jeep') {
      setModels(['Wrangler', 'Grand Cherokee', 'Cherokee', 'Renegade', 'Compass']);
    } else if (make === 'Porsche') {
      setModels(['911', 'Cayenne', 'Macan', 'Panamera', 'Taycan']);
    } else if (make === 'Volvo') {
      setModels(['XC90', 'XC60', 'S60', 'V60', 'XC40']);
    } else if (make === 'Land Rover') {
      setModels(['Range Rover', 'Defender', 'Discovery', 'Evoque', 'Velar']);
    } else if (make === 'Jaguar') {
      setModels(['F-Pace', 'XE', 'XF', 'E-Pace', 'I-Pace']);
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
    </div>
  );
};

export default HeroSection;
