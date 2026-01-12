import React from "react";
import "../styles/expertise.css";
import {
  CalendarCheck,
  Trophy,
  MapPin,
  PhoneCall,
  Award,
  Users,
  Leaf,
  Activity,
  TrendingUp
} from "lucide-react";

export default function ExpertiseSection() {
  return (
    <section className="expertise">
      <div className="expertise-wrapper">

    
        <div className="expertise-content">
          <h2>
            Our <span>Expertise</span>
          </h2>

          <p className="expertise-sub">
            Result Oriented • Scientific • Proven
          </p>

          <ul>
            <li>Complex & Long-Standing Infertility Cases</li>
            <li>Ayurvedic Alternative to IVF & IUI</li>
            <li>Improves IVF & IUI Success Rates</li>
            <li>Root-Cause-Based Ayurvedic Treatment</li>
            <li>Accurate & Holistic Diagnosis</li>
            <li>Classical Panchakarma Therapies</li>
            <li>100% Authentic Ayurvedic Principles</li>
            <li>Structured & Time-Bound Protocols</li>
            <li>Personalized Lifestyle & Diet Plans</li>
            <li>One-to-One Doctor Consultations</li>
          </ul>
        </div>

        
        <div className="expertise-actions">
          <div className="action-card orange">
            <CalendarCheck size={28} />
            <span>Book Appointment</span>
          </div>

          <div className="action-card gray">
            <Trophy size={28} />
            <span>Success Story</span>
          </div>

          <div className="action-card gray">
            <MapPin size={28} />
            <span>Locate Clinic</span>
          </div>

          <div className="action-card orange">
            <PhoneCall size={28} />
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      
      <div className="expertise-stats">
        <div className="stat-card">
          <Award size={34} />
          <span className="stat-number">25+</span>
          <p>Years Collective<br />Experience</p>
        </div>

        <div className="stat-card">
          <Users size={34} />
          <span className="stat-number">25000+</span>
          <p>Patients<br />Treated</p>
        </div>

        <div className="stat-card">
          <Leaf size={34} />
          <span className="stat-number">100%</span>
          <p>Natural<br />Treatment</p>
        </div>

        <div className="stat-card">
          <Activity size={34} />
          <span className="stat-number">2000+</span>
          <p>Panchakarma<br />Done</p>
        </div>

        <div className="stat-card">
          <TrendingUp size={34} />
          <span className="stat-number">93%</span>
          <p>Success<br />Rate</p>
        </div>
      </div>
    </section>
  );
}
