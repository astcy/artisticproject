import React from 'react';
import './service.css';

const services = [
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#B0FF2A" strokeWidth="2">
        <polygon points="24,6 6,18 24,42 42,18" />
        <line x1="6" y1="18" x2="42" y2="18" />
        <line x1="24" y1="6" x2="24" y2="42" />
      </svg>
    ),
    title: 'Branding And Identity',
    desc: 'Developing a compelling brand identity through strategy, visuals, and to build strong customer connections.',
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#B0FF2A" strokeWidth="2">
        <rect x="8" y="12" width="32" height="24" rx="6" />
        <polyline points="12,24 20,24 24,18 28,30 32,24 36,24" />
      </svg>
    ),
    title: 'Digital Marketing',
    desc: 'Developing a compelling brand identity through strategy, visuals, and to build strong customer connections.',
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#B0FF2A" strokeWidth="2">
        <circle cx="18" cy="24" r="10" />
        <circle cx="30" cy="24" r="10" />
        <circle cx="24" cy="32" r="10" />
      </svg>
    ),
    title: 'Creative Content Production',
    desc: 'Developing a compelling brand identity through strategy, visuals, and to build strong customer connections.',
  },
];

export default function Service() {
  return (
    <div className="service-wrapper">
      <section className="service-header-row">
        <div className="service-header-left">
          <span className="service-badge">* OUR SERVICES</span>
          <h1>
            Our <span className="highlight">digital services</span> to grow your brand
          </h1>
        </div>
        <div className="service-header-right">
          <p className="service-join">
            Join our creative community to collaborate, innovate, and thrive together. We welcome passionate individuals eager to make.
          </p>
          <div className="service-cta">
            <button className="service-btn">All Services</button>
            <span className="service-arrow">&#8599;</span>
          </div>
        </div>
      </section>
      <div className="service-cards-row">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <div className="service-icon">{s.icon}</div>
            <div className="service-card-arrow">&#8599;</div>
            <h2>{s.title}</h2>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
      {/* Floating sidebar icons */}
  <div
  className="expertise-above-text"
  style={{ marginTop: "48px", marginBottom: "40px",textAlign: "center" }}
>
  Let's make something great work together. <span className="expertise-quote">Get Free Quote</span>
</div>

     <div className="expertise-section">
  <div className="expertise-inner">
    <div className="expertise-left">
      <h2>
        Expertise that drives<br />
        digital <span className="expertise-highlight">success</span>
      </h2>
      <div className="expertise-stats">
        <div>
          <span className="expertise-stat-main">+60%</span>
          <div className="expertise-stat-desc">By optimizing your website for search engines.</div>
        </div>
        <div>
          <span className="expertise-stat-main">+30%</span>
          <div className="expertise-stat-desc">Rise in revenue as more visitors convert into paying customers.</div>
        </div>
      </div>
    </div>
    <div className="expertise-right">
      <div className="expertise-service">
        <span className="expertise-star">*</span>
        <span>
          <span className="expertise-service-title">Social Media Management:</span>
          &nbsp;Our social media management services focus on building and enhancing your brand's online presence. We create engaging content, manage your social media accounts, and analyze performance.
        </span>
      </div>
      <div className="expertise-service">
        <span className="expertise-star">*</span>
        <span>
          <span className="expertise-service-title">E-commerce Solutions:</span>
          &nbsp;Our e-commerce solutions are designed to create seamless online shopping experiences. From user-friendly website design to secure payment processing and inventory management.
        </span>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
