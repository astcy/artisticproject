import React from "react";
import "./permission.css";

function Permission() {
  return (
    <div className="permission-container">
      <div className="permission-card">
        {/* Low Cost */}
        <div className="permission-feature">
          <div className="permission-icon">
            {/* Money Bag SVG */}
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M24 10C21 10 18 7 18 7M24 10C27 10 30 7 30 7M24 10V14M18 7C18 7 13 13 13 18C13 28 24 41 24 41C24 41 35 28 35 18C35 13 30 7 30 7M24 14C24 14 17 14 17 18C17 22 24 29 24 29C24 29 31 22 31 18C31 14 24 14 24 14Z" stroke="#C7FF6B" strokeWidth="2" strokeLinejoin="round"/>
              <text x="19" y="25" fontSize="12" fill="#C7FF6B" fontFamily="Arial">$</text>
            </svg>
          </div>
          <div className="permission-title">Low Cost</div>
          <ul>
            <li>Competitive fee</li>
            <li>Flexible rates</li>
          </ul>
        </div>
        <div className="permission-divider"></div>

        {/* Permission Less */}
        <div className="permission-feature">
          <div className="permission-icon">
            {/* Bank SVG */}
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M12 20H36V34H12V20Z" stroke="#C7FF6B" strokeWidth="2"/>
              <path d="M16 20V34" stroke="#C7FF6B" strokeWidth="2"/>
              <path d="M24 20V34" stroke="#C7FF6B" strokeWidth="2"/>
              <path d="M32 20V34" stroke="#C7FF6B" strokeWidth="2"/>
              <path d="M10 20L24 10L38 20" stroke="#C7FF6B" strokeWidth="2"/>
            </svg>
          </div>
          <div className="permission-title">Permission Less</div>
          <ul>
            <li>Open for integration</li>
            <li>Run your own nodes</li>
          </ul>
        </div>
        <div className="permission-divider"></div>

        {/* Secure Data */}
        <div className="permission-feature">
          <div className="permission-icon">
            {/* Target SVG */}
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="16" stroke="#C7FF6B" strokeWidth="2"/>
              <circle cx="24" cy="24" r="8" stroke="#C7FF6B" strokeWidth="2"/>
              <line x1="24" y1="8" x2="24" y2="16" stroke="#C7FF6B" strokeWidth="2"/>
              <line x1="24" y1="32" x2="24" y2="40" stroke="#C7FF6B" strokeWidth="2"/>
              <line x1="8" y1="24" x2="16" y2="24" stroke="#C7FF6B" strokeWidth="2"/>
              <line x1="32" y1="24" x2="40" y2="24" stroke="#C7FF6B" strokeWidth="2"/>
            </svg>
          </div>
          <div className="permission-title">Secure Data</div>
          <ul>
            <li>Open source sheet</li>
            <li>360 Security</li>
          </ul>
        </div>
        <div className="permission-divider"></div>

        {/* 24x7 Support */}
        <div className="permission-feature">
          <div className="permission-icon">
            {/* Headset SVG */}
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="18" stroke="none"/>
              <path d="M12 30V24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24V30" stroke="#C7FF6B" strokeWidth="2"/>
              <rect x="10" y="30" width="6" height="8" rx="3" stroke="#C7FF6B" strokeWidth="2"/>
              <rect x="32" y="30" width="6" height="8" rx="3" stroke="#C7FF6B" strokeWidth="2"/>
            </svg>
          </div>
          <div className="permission-title">24 X 7 Support</div>
          <ul>
            <li>Toll free number</li>
            <li>Ticket systems</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Permission;
