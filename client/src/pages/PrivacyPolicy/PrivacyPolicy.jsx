import React from 'react'
import './PrivacyPolicy.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const PrivacyPolicy = () => {
    
  return (
   <>
   <Header/>

   <div className="privacy-policy-container">
      <div className="privacy-policy-content">
        <h1 className="privacy-policy-title">Privacy Policy for Octagon Autoparts</h1>
        <p>Welcome to Octagon Autoparts! At Octagon Autoparts, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, octagonautoparts.com (the “Site”). By using our Site, you agree to the collection and use of information in accordance with this policy.</p>

        <h2>1. Information We Collect</h2>
        <h3>1.1 Personal Information</h3>
        <p>We may collect personal information that you voluntarily provide to us when you:</p>
        <ul>
          <li>Register on our Site</li>
          <li>Subscribe to our newsletter</li>
          <li>Contact us for support or inquiries</li>
        </ul>
        <p>This may include your name, email address, phone number, and any other information you choose to provide.</p>

        <h3>1.2 Usage Data</h3>
        <p>We collect information about your interactions with our Site, such as your IP address, browser type, operating system, referring URLs, and browsing behavior. This helps us improve our Site and tailor our services to better meet your needs.</p>

        <h3>1.3 Cookies and Tracking Technologies</h3>
        <p>We use cookies and similar tracking technologies to enhance your experience on our Site. Cookies are small data files stored on your device that help us remember your preferences and understand how you use our Site. You can control cookie settings through your browser, but disabling cookies may affect the functionality of our Site.</p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect for various purposes, including to:</p>
        <ul>
          <li>Provide, operate, and maintain our Site</li>
          <li>Improve, personalize, and expand our Site</li>
          <li>Communicate with you, including responding to inquiries and sending updates</li>
          <li>Analyze usage and trends to enhance user experience</li>
          <li>Ensure the security and integrity of our Site</li>
        </ul>

        <h2>3. How We Share Your Information</h2>
        <p>We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:</p>
        <ul>
          <li><strong>Service Providers:</strong> We may share your information with third-party service providers who assist us in operating our Site and providing services to you.</li>
          <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., subpoenas).</li>
          <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or any form of sale of some or all of our assets, your information may be transferred as part of that transaction.</li>
        </ul>

        <h2>4. Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

        <h2>5. Your Choices</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access, correct, or delete your personal information</li>
          <li>Opt-out of receiving marketing communications from us</li>
          <li>Control cookie preferences through your browser settings</li>
        </ul>
        <p>To exercise these rights, please contact us at support@octagonautoparts.com.</p>

        <h2>6. Children’s Privacy</h2>
        <p>Our Site is not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete that information.</p>

        <h2>7. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of the Site after any changes indicates your acceptance of the updated Privacy Policy.</p>

        <h2>8. Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
        <address>
          Octagon Autoparts<br />
          Email: <a href="mailto:support@octagonautoparts.com">support@octagonautoparts.com</a><br />
          Address: 3603 Meadow Ln Manitowoc, WI 54220
        </address>
      </div>
    </div>

   <Footer/>
   </>
  )
}

export default PrivacyPolicy
