import React from "react";
import "./readmore.css";

const articles = [
  {
    image: "https://picsum.photos/600?random=1",
    title: "UI/UX Design Principles for Better User Engagement",
    link: "#",
  },
  {
    image: "https://picsum.photos/600?random=2",
    title: "Why Your Business Needs a Mobile–Optimized Website",
    link: "#",
  },
  {
    image: "https://picsum.photos/600?random=3",
    title: "Content Marketing Essentials for Growing Your Brand",
    link: "#",
  },
];

export default function ReadMore() {
  return (
    <div className="readmore-bg">
      <div className="readmore-row">
        {articles.map((article, idx) => (
          <div className="readmore-card" key={idx}>
            <div className="readmore-img-wrap">
              <img src={article.image} alt={article.title} className="readmore-img" />
            </div>
            <div className="readmore-info">
              <h2 className="readmore-title">{article.title}</h2>
              <a href={article.link} className="readmore-link">
                Read More <span className="readmore-arrow">↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
