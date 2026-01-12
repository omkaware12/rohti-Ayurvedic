import React from "react";
import "../styles/AyurvedaScrool.css";

export default function AyurvedaScroll() {
  return (
    <section className="ayurveda-scroll">
      <div className="scroll-overlay">

        <h2 className="scroll-title">
          Ayurved <span>take On Infertility</span>
        </h2>

        <p className="scroll-sub">
          A holistic approach that treats the root cause to restore reproductive
          health and ensure a Natural Parenthood journey.
        </p>

        <div className="scroll-content">
          
          
          <div className="scroll-block">
            <p className="scroll-sanskrit">
              "गर्भः संभवे समयः ऋतुकालोपपादितः।<br />
              क्षेत्रं बीजं च अम्बुं च सहजं च परिश्रयः॥"
            </p>

            <div className="scroll-divider" />

            <p className="scroll-translation">
              <span>Translation –</span><br />
              A healthy pregnancy occurs when the proper timing (Ritu),
              a healthy uterus (Kshetra), pure sperm/ovum (Beeja),
              adequate nourishment (Ambu), and natural emotional connection
              (Parishraya) are all present in harmony.
            </p>
          </div>

          
          <div className="scroll-block">
            <p className="scroll-sanskrit">
              "ऋतुकालानुकूलं हि बीजं शुभ्रं यदा भवेत्।<br />
              तदा एव प्रजाजननं, नान्यथा कदाचन॥"
            </p>

            <div className="scroll-divider" />

            <p className="scroll-translation">
              <span>Translation –</span><br />
              Only when healthy seed (sperm/ovum) is united during the proper
              fertile period (Ritu Kala), conception becomes successful.
              Otherwise, it does not occur.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
