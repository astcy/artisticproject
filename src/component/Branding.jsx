import React, { useState } from 'react';
import './Branding.css';

const cardData = [
  {
    id: 1,
    title: "Dynamic E-Commerce Platform",
    category: "Branding & Identity",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Innovative Identity Design",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Dynamic Digital Campaign",
    category: "Branding & Identity",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "SEO Strategy Development",
    category: "SEO & Analytics",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Responsive Website Design",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Marketing Analytics Dashboard",
    category: "Branding & Identity",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

const categories = ["All", "Branding & Identity", "Digital Marketing", "SEO & Analytics", "Web Design"];

function Branding() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredCards = activeFilter === "All"
    ? cardData
    : cardData.filter(card => card.category === activeFilter);

  return (
    <div className="branding-container">
      {/* Filter */}
      <div className="filter-container">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn${activeFilter === category ? ' active' : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="cards-grid">
        {filteredCards.map(card => (
          <div className="card" key={card.id}>
            <div className="card-image-container">
              <img src={card.image} alt={card.title} className="card-image" />
              <div className="card-category">{card.category}</div>
              <div className="card-hover-overlay">
                <div className="card-arrow-circle">
                  <span className="arrow">↗</span>
                </div>
              </div>
            </div>
            <h3 className="card-title">{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Branding;
