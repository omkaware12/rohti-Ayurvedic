import { useState } from "react";
import "../styles/DiseaseCarousel.css";
const data = [
  {
    title: "PCOD",
    desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
  },
  {
    title: "Uterine Disorders",
    desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
  },
  {
    title: "Male Infertility",
    desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
  },
  {
    title: "Female Infertility",
    desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const cardWidth = 360; // card + gap

  const next = () => {
    if (index < data.length - 3) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="disease-section">
      <h2 className="title">
        <span>Know</span> Your Diseases !
      </h2>
      <p className="subtitle">
        Understand the root cause behind complex infertility, from Low AMH to
        Sperm issues, and how we treat them.
      </p>

      <div className="carousel-wrapper">
        <button className="arrow left" onClick={prev}>
          &#8249;
        </button>

        <div className="carousel">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${index * cardWidth}px)` }}
          >
            {data.map((item, i) => (
              <div className="card" key={i}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <div className="stats">
                  <div>
                    <strong>15+</strong>
                    <span>Specialists</span>
                  </div>
                  <div>
                    <strong>500+</strong>
                    <span>Procedures</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="arrow right" onClick={next}>
          &#8250;
        </button>
      </div>
    </section>
  );
}
