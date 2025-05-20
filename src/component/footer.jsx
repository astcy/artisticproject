import React, { useState } from "react";
import "./footer.css";
import {
  FaPhoneAlt,
  FaPinterestP,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const InboxIcon = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <rect x="9" y="12" width="20" height="14" rx="3" stroke="#B6FF5B" strokeWidth="2" fill="none" />
    <polyline points="9,12 19,21 29,12" stroke="#B6FF5B" strokeWidth="2" fill="none" />
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20">
    <g stroke="currentColor" strokeWidth="2">
      <line x1="4" y1="4" x2="16" y2="16" />
      <line x1="16" y1="4" x2="4" y2="16" />
    </g>
  </svg>
);

function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!email) {
      setError("Please fill out this field.");
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      alert("Subscribed successfully!");
      setEmail("");
      setSubmitted(false);
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Logo & Contact */}
        <div className="footer__section footer__logo-contact">
          <div className="footer__logo-row">
            <div className="footer__logo-icon">
              <svg width="48" height="48" viewBox="0 0 48 48">
                <path d="M24 5L7 15L12 36H36L41 15L24 5Z" fill="#B6FF5B" />
              </svg>
            </div>
            <span className="footer__logo-text">
              artistic<span className="footer__logo-dot">.</span>
            </span>
          </div>
          <div className="footer__contact-row">
            <span className="footer__contact-icon">
              <FaPhoneAlt />
            </span>
            <span className="footer__contact-info">(309) 8855–314</span>
          </div>
          <div className="footer__contact-row">
            <span className="footer__contact-icon">
              <InboxIcon />
            </span>
            <span className="footer__contact-info">info@domainname.com</span>
          </div>
        </div>

        {/* Quick Link */}
        <div className="footer__section">
          <h3 className="footer__title">Quick Link</h3>
          <ul className="footer__list">
            <li className="footer__list-item">Home</li>
            <li className="footer__list-item">About Us</li>
            <li className="footer__list-item">Services</li>
            <li className="footer__list-item">Blog</li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer__section">
          <h3 className="footer__title">Support</h3>
          <ul className="footer__list">
            <li className="footer__list-item">Contact us</li>
            <li className="footer__list-item">Terms & Conditions</li>
            <li className="footer__list-item">Career</li>
            <li className="footer__list-item">Help</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer__section footer__newsletter-section">
          <h3 className="footer__title">Subscribe Our Newsletter</h3>
          <form className="footer__newsletter-form" onSubmit={handleSubmit} noValidate>
            <div className="footer__newsletter-input-wrapper">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                  setSubmitted(false);
                }}
                aria-label="Enter your email"
                className={`footer__input ${error ? "footer__input--error" : ""}`}
                required
              />
              <button type="submit" className="footer__subscribe-button">Subscribe</button>
            </div>
          </form>
          {submitted && error && (
            <div>
              <div className="footer__newsletter-error">{error}</div>
              <div className="footer__newsletter-error-box">
                One or more fields have an error. Please check and try again.
              </div>
            </div>
          )}
          <div className="footer__social-icons">
            <a href="#" aria-label="Pinterest" className="footer__social-icon">
              <FaPinterestP />
            </a>
            <a href="#" aria-label="X" className="footer__social-icon">
              <XIcon />
            </a>
            <a href="#" aria-label="Facebook" className="footer__social-icon">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="footer__social-icon">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        Copyright © 2024 All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
