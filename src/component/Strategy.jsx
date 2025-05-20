import React from 'react';
import './Strategy.css';
import {
  FaTrello,
  FaSlack,
  FaChartPie,
  FaBriefcase,
  FaMoneyBillWave,
  FaBehance
} from 'react-icons/fa';

const brands = [
  { name: "Trello", icon: <FaTrello color="#0079BF" />, color: "#fff" },
  { name: "Slack", icon: <FaSlack color="#4A154B" />, color: "#fff" },
  { name: "Asana", icon: <FaChartPie color="#FC636B" />, color: "#fff" },
  { name: "Upwork", icon: <FaBriefcase color="#6fda44" />, color: "#fff" },
  { name: "Fiverr", icon: <FaMoneyBillWave color="#1dbf73" />, color: "#fff" },
  { name: "Behance", icon: <FaBehance color="#1769ff" />, color: "#fff" },
];

export default function Strategy() {
  return (
    <div className="strategy-section">
      <div className="strategy-content">
        <div className="strategy-text">
          <h2 className="strategy-title">Content Creation And Strategy</h2>
          <p className="strategy-desc">
            High-quality, engaging content across blogs, videos, and graphics<br />
            designed to captivate and retain audiences.
          </p>
        </div>
        <div className="strategy-consult">
          <div className="consult-btn">
            <span className="consult-circle-text">
              Get free consultation · Get free consultation ·
            </span>
            <span className="consult-arrow">↗</span>
          </div>
        </div>
      </div>
      {/* Scrollable brand track */}
      <div className="strategy-brands">
        <div className="brand-track">
          {brands.map((brand) => (
            <div className="brand-card" key={brand.name}>
              <span className="brand-icon">{brand.icon}</span>
              <span className="brand-name" style={{ color: brand.color, marginLeft: '0.5rem' }}>
                {brand.name}
              </span>
            </div>
          ))}
          {/* Duplicate for continuous scroll effect if needed */}
          {brands.map((brand) => (
            <div className="brand-card" key={`${brand.name}-duplicate`}>
              <span className="brand-icon">{brand.icon}</span>
              <span className="brand-name" style={{ color: brand.color, marginLeft: '0.5rem' }}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
