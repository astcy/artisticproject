import React from "react";
import "./card1.css";

const Card1 = () => (
  <div className="card-group">
    {/* Card 1 */}
    <div className="card">
      <div className="card-header">
        <div className="card-title">Discovery Phase</div>
        <div className="card-arrow">
          <span className="arrow-circle">
            <svg width="22" height="22" viewBox="0 0 22 22" stroke="currentColor" fill="none">
              <path d="M8 14l6-6M14 14V8H8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
      <div className="card-desc">
        Initial consultation to understand your brand, goals, and target audience<br/>
        Conducting research and analysis of market trends.
      </div>
      <div className="card-bottom">
        <div>
          <div className="card-step-label">STEP</div>
          <div className="card-step-number">01</div>
        </div>
        <div className="card-icon-box">
          <svg width="36" height="36" viewBox="0 0 36 36" stroke="currentColor" fill="none">
            <circle cx="11" cy="11" r="3" strokeWidth="2"/>
            <circle cx="25" cy="11" r="3" strokeWidth="2"/>
            <circle cx="11" cy="25" r="3" strokeWidth="2"/>
            <circle cx="25" cy="25" r="3" strokeWidth="2"/>
          </svg>
        </div>
      </div>
    </div>
    {/* Card 2 */}
    <div className="card">
      <div className="card-header">
        <div className="card-title">Implementation</div>
        <div className="card-arrow">
          <span className="arrow-circle">
            <svg width="22" height="22" viewBox="0 0 22 22" stroke="currentColor" fill="none">
              <path d="M8 14l6-6M14 14V8H8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
      <div className="card-desc">
        Initial consultation to understand your brand, goals, and target audience<br/>
        Conducting research and analysis of market trends.
      </div>
      <div className="card-bottom">
        <div>
          <div className="card-step-label">STEP</div>
          <div className="card-step-number">02</div>
        </div>
        <div className="card-icon-box">
          <svg width="36" height="36" viewBox="0 0 36 36" stroke="currentColor" fill="none">
            <polygon points="18,10 28,15 18,20 8,15" strokeWidth="2"/>
            <polygon points="18,20 28,25 18,30 8,25" strokeWidth="2"/>
          </svg>
        </div>
      </div>
    </div>
    {/* Card 3 */}
    <div className="card">
      <div className="card-header">
        <div className="card-title">Collaboration</div>
        <div className="card-arrow">
          <span className="arrow-circle">
            <svg width="22" height="22" viewBox="0 0 22 22" stroke="currentColor" fill="none">
              <path d="M8 14l6-6M14 14V8H8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
      <div className="card-desc">
        Initial consultation to understand your brand, goals, and target audience<br/>
        Conducting research and analysis of market trends.
      </div>
      <div className="card-bottom">
        <div>
          <div className="card-step-label">STEP</div>
          <div className="card-step-number">03</div>
        </div>
        <div className="card-icon-box">
          <svg width="46" height="46" viewBox="0 0 36 36" stroke="currentColor" fill="none">
            <ellipse cx="18" cy="13" rx="8" ry="4" strokeWidth="2"/>
            <rect x="10" y="13" width="16" height="10" rx="5" strokeWidth="2"/>
            <ellipse cx="18" cy="23" rx="8" ry="4" strokeWidth="2"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default Card1;
