import React from 'react'
import './RefundPolicy.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const RefundPolicy = () => {
  return (
   <>
   <Header/>

   <div className="refund-policy-container">
    <div className="breadcrumb">
      Home &gt; Refund Policy
    </div>
    <h1 className="refund-title">Refund Policy</h1>
    <p className="refund-description">
      At Octagon Autoparts, we strive to provide high-quality services and customer satisfaction. If for any reason, you are not satisfied with our services or products, we offer the following refund policy:
    </p>
    <div className="refund-section">
      <h2>1. Services Refund Policy</h2>
      <ul>
        <li><strong>Satisfaction Guarantee:</strong> If you are not completely satisfied with the service provided, please contact us within 30 days of service completion...</li>
        <li><strong>Free Rework:</strong> We will correct any service-related issues at no additional cost...</li>
        <li><strong>Partial Refund:</strong> If the issue cannot be fully resolved, we may issue a partial refund based on the circumstances.</li>
        <li><strong>Full Refund:</strong> In the rare event that the service was unsatisfactory and cannot be rectified, we may issue a full refund.</li>
        <li><strong>Eligibility for Refunds:</strong>  Refund requests must be made within 30 days of the service date. Any claims made after 30 days will not be eligible for a refund.</li>
        <li><strong>Exclusions:</strong>Refunds are not applicable for services that have been tampered with or altered by other service providers after the completion of our work.</li>
      </ul>
    </div>
    <div className="refund-section">
      <h2>2. Product Refund Policy</h2>
      <ul>
        <li><strong>Return Window:</strong> Products purchased from Octagon Autoparts can be returned within 30 days...</li>
        <li><strong>Damaged or Defective Products:</strong> If you receive a defective or damaged product...</li>
      </ul>
    </div>
    <div className="refund-section">
      <h2>3. Refund Process</h2>
      <p>To initiate a refund, please contact us via email or phone...</p>
      <p>Refunds will be processed to the original payment method within 7-14 business days of approval.</p>
    </div>
    <div className="refund-section">
      <h2>4. Exclusions and Limitations</h2>
      <p>Refunds will not be issued for changes in preference...</p>
    </div>
    <div className="refund-section">
      <h2>5. Contact Us</h2>
      <p>If you have any questions or need assistance with a refund, please contact us at:</p>
      <ul>
        <li>Email: support@octagonautoparts.com</li>
        <li>Phone: ( 844 ) 417 7506</li>
      </ul>
    </div>
    <p className="footer-text">
      This policy ensures clarity for customers while protecting your business from unwarranted refunds.
    </p>
  </div>

   <Footer/>
   </>
  )
}

export default RefundPolicy
