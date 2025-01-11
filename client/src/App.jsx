import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router and Routes
import './App.css';
import 'aos/dist/aos.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Success from './pages/Success/Success';
import RefundPolicy from './pages/RefundPolicy/RefundPolicy';
import TermsConditions from './pages/Terms & Conditions/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Success />} />
        <Route path="/refundPolicy" element={<RefundPolicy />} />
        <Route path="/termCondition" element={<TermsConditions />} />
        <Route path="/privecy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
