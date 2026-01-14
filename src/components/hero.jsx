import React from "react";
import Navbar from "./navbar"; 
import "../styles/hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      {/* Decorative circles */}
      <div className="circle left"></div>
      <div className="circle right"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
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
          <button
            className="secondary-btn"
            onClick={() => navigate("/factory-login-selection")}
          >
            Factory Login
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="features">
        <div className="feature-card"> 100% Herbal Ingredients</div>
        <div className="feature-card">GMP Certified Facility</div>
        <div className="feature-card"> Quality Tested</div>
        <div className="feature-card"> AYUSH Approved</div>
      </div>
    </section>
  );
};

export default Hero;
