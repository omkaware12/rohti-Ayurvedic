import React from "react";
import "../styles/footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Diseases</li>
            <li>Treatments</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* TREATMENTS */}
        <div className="footer-col">
          <h4>Treatments</h4>
          <ul>
            <li>Suprajanan</li>
            <li>Panchakarma</li>
            <li>Treatment Methodology</li>
            <li>Factory – Own Pharmacy</li>
          </ul>
        </div>

        {/* DISEASES */}
        <div className="footer-col">
          <h4>Diseases</h4>
          <ul>
            <li>Male Infertility</li>
            <li>Female Infertility</li>
            <li>PCOD</li>
            <li>Uterine Disorders</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col contact">
          <h4>Contact Us</h4>

          <div className="location-tabs">
            <span className="active">Nashik</span>
            <span>Thane</span>
            <span>Pune</span>
          </div>

          <p className="address">
            4th Floor, Roongta Supremus, Near Chandak Circle, Tilak Colony,
            Mumbai Naka, Nashik 422 002
          </p>

          <p>
            <FaPhoneAlt /> +91-9623230512
          </p>
          <p>
            <FaEnvelope /> rohatayurved@gmail.com
          </p>

          <div className="socials">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© 2025 All Rights Reserved By Rohati Ayurved</p>
        <div className="footer-links">
          <span>Terms and Conditions</span>
          <span>Privacy Policy</span>
          <span>Payment</span>
        </div>
      </div>
    </footer>
  );
}
