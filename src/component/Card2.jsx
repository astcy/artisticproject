import React from "react";
import "./Card2.css";

const cards = [
  {
    title: "Custom Branding Solutions",
    description: "Unique brand identity development, including logos, color palettes.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Data-Driven Digital Marketing",
    description: "Strategies combining SEO, PPC, content marketing",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
];

const Card2 = () => (
  <div className="card2-row">
    {cards.map((card, index) => (
      <div className="card2-card" key={index}>
        <img src={card.image} alt={card.title} className="card2-image" />
        <div className="card2-content">
          <h2 className="card2-title">{card.title}</h2>
          <p className="card2-description">{card.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Card2;
