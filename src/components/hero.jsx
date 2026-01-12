import React from 'react'
import Navbar from './navbar'
import '../styles/hero.css'
const hero = () => {
  return (
    <section className="hero">
            
            <div className="circle left"></div>
            <div className="circle right"></div>
    
            
            <Navbar />
    
        
            <div className="hero-content">
              <h1>
                Pure Ayurveda. <br />
                Powered by Nature.
              </h1>
    
              <h2>Trusted Ayurvedic Manufacturing</h2>
    
              <p>
                We manufacture authentic Ayurvedic medicines using traditional
                formulations, modern GMP-certified processes, and ethically sourced
                medicinal herbs.
              </p>
    
              <div className="cta-buttons">
                <button className="primary-btn">Explore Products</button>
                <button className="secondary-btn">Contact Factory</button>
              </div>
            </div>
    

            <div className="features">
              <div className="feature-card">🌱 100% Herbal Ingredients</div>
              <div className="feature-card">🏭 GMP Certified Facility</div>
              <div className="feature-card">🧪 Quality Tested</div>
              <div className="feature-card">📜 AYUSH Approved</div>
            </div>
          </section>
  )
}

export default hero