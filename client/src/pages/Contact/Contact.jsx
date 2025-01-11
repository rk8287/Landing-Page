import React, { useState } from 'react';
import './Contact.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate(); // Initialize navigate
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Set form submission state
    setFormSubmitted(true);

    // Simulate form submission process (e.g., API call)
    setTimeout(() => {
      // Redirect to the success page
      navigate('/success'); // Change this to your success page path
    }, 1000); // Adjust the time as needed for the loading effect
  };

  return (
    <>
      <Header />
      <div className="contact-page">
        <h1 className="heading">We're Here for You</h1>

        {/* Business Hours Section */}
        <div className="business-hours">
          <h2>Business Hours</h2>
          <p>We’re available to assist you during the following hours:</p>
          <p>Monday to Friday: 9:00 AM – 6:00 PM</p>
          <p>Saturday to Sunday: Closed</p>
        </div>

        {/* Contact Information Section */}
        <div className="contact-info">
          <h2>Address</h2>
          <p>Ogtagon Group LLC 33 Academy St, Poughkeepsie, NY 12601</p>
          <h2>Phone</h2>
          <p>(844) 417 7506</p>
          <h2>Email</h2>
          <p>support@nexoautoparts.com</p>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleFormSubmit}>
            <label>
              Full Name *
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Email *
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Message *
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
