import React from "react";
import "./support.css";

const features = [
  {
    number: "01",
    icon: (
      <svg width="48" height="48" fill="none" stroke="#baff39" strokeWidth="2.2" viewBox="0 0 24 24">
        <rect x="5" y="4" width="14" height="16" rx="2" stroke="#baff39" strokeWidth="2.2" />
        <rect x="8" y="2" width="8" height="4" rx="1" stroke="#baff39" strokeWidth="2.2" />
      </svg>
    ),
    title: "Personalized Approach",
    desc: "We customize strategies to fit your brand's specific needs, ensuring alignment.",
  },
  {
    number: "02",
    icon: (
      <svg width="48" height="48" fill="none" stroke="#baff39" strokeWidth="2.2" viewBox="0 0 24 24">
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#baff39" strokeWidth="2.2"/>
        <circle cx="12" cy="12" r="5" stroke="#baff39" strokeWidth="2.2"/>
      </svg>
    ),
    title: "Experienced Team",
    desc: "Combines industry knowledge and creativity to exceptional results for your brand.",
  },
  {
    number: "03",
    icon: (
      <svg width="48" height="48" fill="none" stroke="#baff39" strokeWidth="2.2" viewBox="0 0 24 24">
        <rect x="5" y="4" width="14" height="16" rx="2" stroke="#baff39" strokeWidth="2.2" />
        <rect x="8" y="2" width="8" height="4" rx="1" stroke="#baff39" strokeWidth="2.2" />
      </svg>
    ),
    title: "Data-Driven Decisions",
    desc: "We utilize data insights to refine strategies, optimize and ensure impactful, measurable results.",
  },
  {
    number: "04",
    icon: (
      <svg width="48" height="48" fill="none" stroke="#baff39" strokeWidth="2.2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" stroke="#baff39" strokeWidth="2.2"/>
        <path d="M6 18v-2a2 2 0 0 1 2-2h0M18 18v-2a2 2 0 0 0-2-2h0M9 22h6" stroke="#baff39" strokeWidth="2.2"/>
        <circle cx="16" cy="10" r="1.3" fill="#baff39" />
        <circle cx="8" cy="10" r="1.3" fill="#baff39" />
        <path d="M10 14h4" stroke="#baff39" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Ongoing Support",
    desc: "We provide continuous support and maintenance to keep your digital assets at their best.",
  },
];

export default function Support() {
  return (
    <div className="support-bg">
      <div className="support-row">
        {features.map((f, i) => (
          <div className="support-card" key={i}>
            <div className="support-number">{f.number}</div>
            <div className="support-icon">{f.icon}</div>
            <div className="support-title">{f.title}</div>
            <div className="support-desc">{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
