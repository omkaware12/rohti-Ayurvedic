import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/forgotpassword.css";
export default function ForgotPasswordPage() {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reset password for:', email);
     navigate("/otp");
  };

  return (
    <div className="forgot-password-page">
      {/* Background decorative circle */}
      <div className="bg-decoration"></div>

      <div className="content-container">
        {/* Left Section */}
        <div className="left-section">
          <a href="#" className="back-button">
            <span>←</span>
            <span>Back to role selection</span>
          </a>

          <h1 className="main-title">Forgot Password</h1>
          <p className="subtitle">
            Enter your email address and we'll send you a link to reset your password
          </p>

          <ul className="features-list">
            <li>Secure password reset process</li>
            <li>Email verification required</li>
            <li>Link expires in 24 hours</li>
            <li>Support available if needed</li>
          </ul>

          <div className="info-box">
            This is a secure administrative portal. All actions are logged.
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="right-section">
          <h2 className="portal-title">Reset Password</h2>
          <p className="portal-subtitle">We'll send you instructions to reset your password</p>

          <div className="forgot-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="admin@rohatlayurved.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button onClick={handleSubmit} className="submit-button">
              Send Reset Link
            </button>

            <div className="back-to-login">
              Remember your password? <a href="#">Sign In</a>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
}