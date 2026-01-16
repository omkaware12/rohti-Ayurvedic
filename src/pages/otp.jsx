import React, { useState, useRef } from 'react';
import "../styles/otp.css";
export default function OTPVerificationPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split('').forEach((char, index) => {
      if (index < 6) newOtp[index] = char;
    });
    setOtp(newOtp);

    // Focus last filled input or next empty
    const lastIndex = Math.min(pastedData.length, 5);
    inputRefs.current[lastIndex]?.focus();
  };

  const handleVerify = () => {
    const otpCode = otp.join('');
    console.log('Verifying OTP:', otpCode);
    // Add your OTP verification logic here
  };

  const handleResend = () => {
    console.log('Resending OTP...');
    // Add your resend OTP logic here
  };

  const isComplete = otp.every(digit => digit !== '');

  return (
    <div className="otp-page">
      <div className="bg-decoration"></div>

      <div className="content-container">
        {/* Left Section */}
        <div className="left-section">
          <a href="#" className="back-button">
            <span>←</span>
            <span>Back to forgot password</span>
          </a>

          <h1 className="main-title">Verify Your Email</h1>
          <p className="subtitle">
            We've sent a 6-digit verification code to your email address
          </p>

          <ul className="features-list">
            <li>Enter the code sent to your email</li>
            <li>Code expires in 10 minutes</li>
            <li>Check your spam folder if not received</li>
            <li>Request a new code if needed</li>
          </ul>

          <div className="info-box">
            This is a secure administrative portal. All actions are logged.
          </div>
        </div>

        {/* Right Section - OTP Form */}
        <div className="right-section">
          <h2 className="portal-title">Enter Verification Code</h2>
          <p className="portal-subtitle">
            Please enter the 6-digit code sent to<br />
            <strong>ad***@rohatlayurved.com</strong>
          </p>

          <div className="otp-form">
            <div className="otp-inputs">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  className="otp-input"
                />
              ))}
            </div>

            <button
              onClick={handleVerify}
              className="submit-button"
              disabled={!isComplete}
            >
              Verify Code
            </button>

            <div className="resend-section">
              <p className="resend-text">
                Didn't receive the code?{' '}
                <button onClick={handleResend} className="resend-button">
                  Resend Code
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}