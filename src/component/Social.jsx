import React from "react";
import "./Social.css";

function Social() {
  return (
    <div className="socials-row">
      {/* Twitter/X */}
      <div className="social-card">
        <div className="social-icon-holder">
          <div className="icon-bg">
            <span className="icon-x">X</span>
          </div>
        </div>
        <div className="social-info">
          <div className="social-title">Follow Us On Twitter</div>
          <div className="social-handle">@artistic_official</div>
        </div>
        <a className="arrow-btn" href="#" tabIndex={0}>
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
            <circle cx="19" cy="19" r="17" stroke="#fff" strokeWidth="2" />
            <path
              d="M14 24L24 14M24 14H14M24 14V24"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      {/* LinkedIn */}
      <div className="social-card">
        <div className="social-icon-holder">
          <div className="icon-bg">
            <span className="icon-in">in</span>
          </div>
        </div>
        <div className="social-info">
          <div className="social-title">Join Us On LinkedIn</div>
          <div className="social-handle">user.artistic_official</div>
        </div>
        <a className="arrow-btn" href="#" tabIndex={0}>
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
            <circle cx="19" cy="19" r="17" stroke="#fff" strokeWidth="2" />
            <path
              d="M14 24L24 14M24 14H14M24 14V24"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      {/* Instagram */}
      <div className="social-card">
        <div className="social-icon-holder">
          <div className="icon-bg">
            <span className="icon-ig">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="4" y="4" width="20" height="20" rx="7" stroke="#000" strokeWidth="2.5" />
                <circle cx="14" cy="14" r="6" stroke="#000" strokeWidth="2.5" />
                <circle cx="20" cy="8" r="1.5" fill="#000" />
              </svg>
            </span>
          </div>
        </div>
        <div className="social-info">
          <div className="social-title">Follow On Instagram</div>
          <div className="social-handle">@artistic_insta_official</div>
        </div>
        <a className="arrow-btn" href="#" tabIndex={0}>
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
            <circle cx="19" cy="19" r="17" stroke="#fff" strokeWidth="2" />
            <path
              d="M14 24L24 14M24 14H14M24 14V24"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Social;
