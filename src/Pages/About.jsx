import React, { useEffect, useRef } from "react";
import "./About.css";
import Aboutdata from "../Projectdata/Aboutdata";

const About = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const target = entry.target;
          if (entry.isIntersecting) {
            target.classList.add("fade-in-visible");
          } else {
            target.classList.remove("fade-in-visible");
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <h2>Who AM I ? </h2>
        <p>A quick look at my journey and capabilities</p>
      </div>

      <div className="cards-wrapper">
        {Aboutdata.map((item, idx) => (
          <div
            key={item.title}
            className="info-card"
            ref={el => (cardsRef.current[idx] = el)}
          >
            <h3>{item.title}</h3>
            {item.content}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;