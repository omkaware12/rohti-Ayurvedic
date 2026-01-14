import React from "react";
import "../styles/Diseases.css";

export default function Diseases() {
  return (
    <section className="diseases-section">
      <h2 className="section-title">
        <span>Most Complex Diseases</span> That We Treats
      </h2>
      <p className="section-subtitle">
        Understand the root cause behind complex infertility, from Low AMH to
        Sperm issues, and how we treat them.
      </p>

      {/* INFERTILITY */}
      <div className="grid">
        <div className="card">
          <h3>Female Infertility</h3>
          <ul>
            <li>Low AMH</li>
            <li>Recurrent IVF / IUI Failure</li>
            <li>Tubal Blockage (Fallopian Tube Block)</li>
            <li>Thin Endometrium (Poor Uterine Lining)</li>
            <li>PCOD / PCOS</li>
            <li>Endometriosis & Adenomyosis</li>
            <li>Premature Ovarian Failure</li>
            <li>Hormonal Imbalance (High FSH / LH)</li>
            <li>Unexplained Infertility</li>
            <li>Recurrent Miscarriages</li>
          </ul>
        </div>

        <div className="card">
          <h3>Male Infertility</h3>
          <ul>
            <li>Azoospermia (Zero Sperm Count)</li>
            <li>Oligospermia (Low Sperm Count)</li>
            <li>Asthenozoospermia (Low Sperm Motility)</li>
            <li>Teratozoospermia (Abnormal Sperm Morphology)</li>
            <li>Varicocele</li>
            <li>Sexual Dysfunction (ED / Premature Ejaculation)</li>
          </ul>
        </div>
      </div>

      <h3 className="sub-heading">Non Infertility Issues</h3>

      {/* NON INFERTILITY */}
      <div className="grid">
        <div className="card">
          <h3>Female</h3>
          <ul>
            <li>Irregular Periods</li>
            <li>Painful Periods (Dysmenorrhea)</li>
            <li>White Discharge (Leucorrhoea)</li>
            <li>Thyroid Management</li>
            <li>PCOD / PCOS (Non-Infertility)</li>
            <li>Menopause</li>
            <li>Skin Issues</li>
            <li>Digestive Disorders</li>
            <li>Anemia & Weakness</li>
            <li>Weight Management</li>
            <li>Urinary Tract Issues</li>
          </ul>
        </div>

        <div className="card">
          <h3>Male</h3>
          <ul>
            <li>General Weakness</li>
            <li>Digestive Disorders</li>
            <li>Vitality & Strength</li>
            <li>Stress & Insomnia</li>
            <li>Joint & Back Pain</li>
            <li>Diabetes</li>
            <li>Liver & Kidney Health</li>
            <li>IBS & Gastritis</li>
            <li>Urinary Tract Issues</li>
            <li>Weight Management</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
