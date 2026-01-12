import React from "react";
import "../styles/whyAyurveda.css";

export default function WhyAyurvedaSection() {
  return (
    <section className="why-ayurveda">
      <div className="why-wrapper">

        
        <div className="why-image">
          <img src="/ayurveda-god.png" alt="Ayurveda Deity" />
        </div>

        
        <div className="why-content">
          <h2>
            Why <span>Ayurveda</span> for Infertility?
          </h2>

          <p className="why-sub">
            It offers a chemical-free, natural path to improve egg and sperm
            quality while preparing the womb for a successful parenthood.
          </p>

          <p>
            Ayurveda sees infertility not as a disease, but as an imbalance in
            the body's natural rhythm.
          </p>

          <p className="why-bold">
            According to Ayurvedic science, successful conception depends on
            four essential factors:
          </p>

          <ul>
            <li><strong>Ritu</strong> (timing)</li>
            <li><strong>Kshetra</strong> (uterus / reproductive system)</li>
            <li><strong>Ambu</strong> (nutrition)</li>
            <li><strong>Beeja</strong> (sperm / ovum)</li>
          </ul>

          <p>
            When all four are healthy and in harmony, fertility blossoms
            naturally.
          </p>

          <p className="why-bold">Infertility may arise due to:</p>

          <ul>
            <li>Dosha imbalance (Vata, Pitta, Kapha)</li>
            <li>Improper lifestyle</li>
            <li>Mental stress</li>
            <li>Poor digestion (Agni dushti)</li>
            <li>Accumulation of toxins (Aama)</li>
            <li>Weakness of Shukra Dhatu (reproductive tissue)</li>
          </ul>

          <p className="why-highlight">
            Ayurveda addresses these root causes — not just the symptoms —
            through a deeply personalized and holistic path.
          </p>
        </div>
      </div>
    </section>
  );
}
