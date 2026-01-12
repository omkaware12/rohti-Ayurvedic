import "../styles/Howitworks.css";
import {
  LuSprout,
  LuLeaf,
  LuFlaskConical,
  LuBadgeCheck
} from "react-icons/lu";

export default function HowItWorks() {
  return (
    <section className="how-section">
      <h2 className="how-title">How Our Ayurveda Works</h2>
      <p className="how-subtitle">
        From nature to medicine — crafted with care and tradition
      </p>

      <div className="how-steps">
        <div className="how-card">
          <div className="icon-box"><LuSprout /></div>
          <h3>Herb Selection</h3>
          <p>Ethically sourced medicinal herbs from trusted farms.</p>
        </div>

        <div className="arrow">→</div>

        <div className="how-card">
          <div className="icon-box"><LuLeaf /></div>
          <h3>Traditional Processing</h3>
          <p>Prepared using classical Ayurvedic methods.</p>
        </div>

        <div className="arrow">→</div>

        <div className="how-card">
          <div className="icon-box"><LuFlaskConical /></div>
          <h3>Quality Testing</h3>
          <p>Lab tested for purity, safety, and effectiveness.</p>
        </div>

        <div className="arrow">→</div>

        <div className="how-card">
          <div className="icon-box"><LuBadgeCheck /></div>
          <h3>Certified Delivery</h3>
          <p>AYUSH approved products ready for safe use.</p>
        </div>
      </div>
    </section>
  );
}
