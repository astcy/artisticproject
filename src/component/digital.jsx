import React from "react";
import "./digital.css";

export default function Digital() {
  return (
    <div className="digital-section">
      <div className="digital-left">
        <div className="digital-badge">
          <span className="digital-star">*</span> WHY CHOOSE
        </div>
        <h1 className="digital-title">
          Expertise for <span className="digital-highlight">your digital</span>
          <br />
          growth journey
        </h1>
        <div className="digital-card-group">
          <div className="digital-card">
            <div className="digital-card-title">Data-Driven Approach</div>
            <div className="digital-card-desc">
              We leverage data and insights to make informed decisions that lead to more effective and efficient solutions.
            </div>
          </div>
          <div className="digital-card">
            <div className="digital-card-title">Competitive Pricing</div>
            <div className="digital-card-desc">
              We offer our top-quality services at competitive prices, providing you with great value for your investment.
            </div>
          </div>
          <div className="digital-card">
             <div className="digital-card-title">Competitive Pricing</div>
            <div className="digital-card-desc">
              We offer our top-quality services at competitive prices, providing you with great value for your investment.
            </div>
          </div>
        </div>
      </div>
      <div className="digital-right">
        <div className="digital-right-desc">
          Our dedicated team is committed to understanding your unique needs, ensuring that we provide innovative strategies that drive results. With a focus on quality and integrity.
        </div>
        <div className="digital-image-bg">
          {/* Replace with your own image if needed */}
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
            alt="Business discussion"
            className="digital-image"
          />
        </div>
      </div>
      {/* Sidebar icons, if needed, can be reused from your service.jsx */}
    </div>
  );
}
