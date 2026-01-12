import { useState } from "react";
import "../styles/testimonials.css";
const testimonials = [
  {
    title:
      "Overcoming PCOS: After Many Failed Treatments, Ayurved Gave Me “Good News”",
    text:
      "After struggling with PCOD and multiple failed treatments, we finally found hope through Ayurveda. The holistic care and natural approach helped us conceive naturally.",
    name: "Pooja Lende",
    meta: "PCOD • 2 months ago",
    image: "/pooja-family.png",
  },
  {
    title:
      "11 Years of Marriage, 7 Miscarriages – Conceived Naturally in 5 Months",
    text:
      "After years of heartbreak and repeated losses, Ayurveda restored our hope. Within five months of treatment, we conceived naturally.",
    name: "Mamta Kocharekar, Mumbai",
    meta: "PCOD • 2 months ago",
    image: "/Rasika_Ghate.png",
  },
  {
    title: "Natural Healing Brought Us Joy After Years of Waiting",
    text:
      "The Ayurvedic approach focused on the root cause, lifestyle, and nutrition. We finally welcomed our baby naturally.",
    name: "Sneha Patil",
    meta: "Infertility • 3 months ago",
    image: "/Seema Hungarge_.png",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const t = testimonials[index];

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">
        <span>Our</span> Testimonials
      </h2>

      <p className="testimonial-sub">
        The happy families we’ve built speak for our success in turning dreams
        into parenthood.
      </p>

      <div className="testimonial-carousel">
        <button className="arrow left" onClick={prev}>
          &#8249;
        </button>

        <div className="testimonial-card">
          <div className="testimonial-content">
            <div className="quote-mark">“</div>

            <h3 className="testimonial-title">{t.title}</h3>

            <p className="testimonial-text">{t.text}</p>

            <div className="testimonial-author">
              <strong>{t.name}</strong>
              <span>{t.meta}</span>
              <div className="stars">★★★★★</div>
            </div>
          </div>

          <div className="testimonial-image">
            <img src={t.image} alt={t.name} />
          </div>
        </div>

        <button className="arrow right" onClick={next}>
          &#8250;
        </button>
      </div>
    </section>
  );
}
