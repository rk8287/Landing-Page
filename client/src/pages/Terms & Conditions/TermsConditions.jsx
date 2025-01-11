import React from 'react';
import './TermsConditions.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const TermsConditions = () => {
  return (
    <>
      <Header/>

      <div className="terms-container">
        <div className="breadcrumb">
          Home &gt; Terms and Conditions
        </div>
        <h1 className="terms-title">Terms and Conditions for Octagon Autoparts</h1>
        <p className="terms-description">
          Welcome to Octagon Autoparts! These Terms and Conditions (“Terms”) govern your access to and use of our website octagonautoparts.com (the “Site”). By using our Site, you agree to comply with and be bound by these Terms. If you do not agree with any part of these Terms, please do not use our Site.
        </p>

        <div className="terms-section">
          <h2>1. Use of the Site</h2>
          <h3>1.1 Eligibility</h3>
          <p>
            You must be at least 18 years old or have parental consent to use our Site. By accessing or using our Site, you represent that you meet these requirements.
          </p>
          <h3>1.2 License</h3>
          <p>
            We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our Site for personal and non-commercial purposes. You may not use our Site for any unlawful purpose or in a manner that could damage, disable, overburden, or impair the Site.
          </p>
        </div>

        <div className="terms-section">
          <h2>2. User Content</h2>
          <h3>2.1 Content Submission</h3>
          <p>
            You may have the opportunity to submit content to our Site, such as reviews, comments, or other materials (“User Content”). By submitting User Content, you grant us a worldwide, royalty-free, perpetual, and non-exclusive license to use, reproduce, modify, publish, and distribute such content.
          </p>
          <h3>2.2 Content Moderation</h3>
          <p>
            We reserve the right to review, monitor, and remove User Content at our sole discretion. We are not responsible for any User Content submitted by users of the Site.
          </p>
        </div>

        <div className="terms-section">
          <h2>3. Intellectual Property</h2>
          <h3>3.1 Ownership</h3>
          <p>
            All content on our Site, including but not limited to text, graphics, logos, images, and software, is the property of Octagon Autoparts or its licensors and is protected by intellectual property laws. You may not use any content from our Site without our express written permission.
          </p>
          <h3>3.2 Trademarks</h3>
          <p>
            “Octagon Autoparts” and our logo are trademarks of Octagon Autoparts. You may not use these trademarks without our prior written consent.
          </p>
        </div>

        <div className="terms-section">
          <h2>4. Disclaimers and Limitations of Liability</h2>
          <h3>4.1 Disclaimers</h3>
          <p>
            Our Site is provided on an “as-is” and “as-available” basis. We make no warranties, express or implied, regarding the accuracy, reliability, or availability of our Site. We do not guarantee that our Site will be error-free or uninterrupted.
          </p>
          <h3>4.2 Limitation of Liability</h3>
          <p>
            To the fullest extent permitted by law, Octagon Autoparts shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising out of or in connection with your use of our Site. Our total liability for any claim related to these Terms shall not exceed the amount you paid, if any, to access our Site.
          </p>
        </div>

        <div className="terms-section">
          <h2>5. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Octagon Autoparts, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys’ fees) arising out of or related to your use of our Site or any violation of these Terms.
          </p>
        </div>

        <div className="terms-section">
          <h2>6. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of our Site after any changes indicates your acceptance of the updated Terms.
          </p>
        </div>

        <div className="terms-section">
          <h2>7. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of Wisconsin USA, without regard to its conflict of law principles. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Wisconsin.
          </p>
        </div>

        <div className="terms-section">
          <h2>8. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to our Site, in our sole discretion, for any reason, including for violation of these Terms.
          </p>
        </div>

        <div className="terms-section">
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions or concerns about these Terms, please contact us at:
          </p>
          <ul>
            <li>Email: support@octagonautoparts.com</li>
            <li>Address: 3603 Meadow Ln Manitowoc, WI 54220</li>
            <li>Phone: ( 844 ) 417 7506</li>
          </ul>
        </div>

        <p className="footer-text">
          Thank you for using Octagon Autoparts!
        </p>
      </div>

      <Footer/>
    </>
  );
}

export default TermsConditions;
