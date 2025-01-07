import React from 'react'
import './Parts.css'

const Parts = () => {
  return (
   
        <div className="part-app">
          <header className="part-header">
            <h1>A Wide Range of AutoParts</h1>
            <h2>That Fits Every Need and Budget</h2>
          </header>
          <div className="parts-section">
            <div className="part">
              <img src="https://nexoautoparts.com/wp-content/uploads/2024/10/9.png" alt="OEM Autoparts" />
              <h3>OEM Autoparts</h3>
              <p>If you want your vehicle to run like it just rolled off the factory floor, our OEM replacement parts are exactly what you need. These parts meet the original specs for a perfect fit.</p>
            </div>
            <div className="part">
              <img src="https://nexoautoparts.com/wp-content/uploads/2024/10/11.png" alt="Aftermarket Parts For Customization" />
              <h3>Aftermarket Parts For Customization</h3>
              <p>Want to upgrade or customize your car? Our aftermarket autoparts offer you the freedom to enhance your vehicle’s performance or style at competitive prices.</p>
            </div>
            <div className="part">
              <img src="https://nexoautoparts.com/wp-content/uploads/2024/10/8.png" alt="Reused Autoparts: A Budget-Friendly Choice" />
              <h3>Reused Autoparts: A Budget-Friendly Choice</h3>
              <p>If you want to save money, our reused parts are a fantastic option. These parts might have minor blemishes but work just as well as new ones—and they’ll help you stick to your budget.</p>
            </div>
            <div className="part">
              <img src="https://nexoautoparts.com/wp-content/uploads/2024/10/12.png" alt="High Quality At Prices You’ll Love In The USA" />
              <h3>High Quality At Prices You’ll Love In The USA</h3>
              <p>We get it—vehicle repairs can get pricey. That’s why we offer the best of both worlds: high-quality parts without breaking the bank. Our OEM autoparts and aftermarket components are sourced from trusted suppliers, and our reused parts are thoroughly inspected for quality.</p>
            </div>
          </div>
        </div>
      );
    }
    

export default Parts