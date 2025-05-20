import './Design2.css';

function Design2() {
  return (
    <section className="design2-root features-section">
      <div className="features-content">
        <div className="features-left">
          <div className="features-label">
            <span className="features-asterisk">*</span> FEATURES
          </div>
          <h1 className="features-title">
            Innovative <span className="highlight">features</span> for<br />
            your digital success
          </h1>
        </div>
        <div className="features-right">
          <p className="features-desc">
            Our digital services empower brands with innovative strategies and solutions for sustainable growth and engagement.
          </p>
          <div className="features-cta-row">
            <button className="features-btn">
              Learn More
            </button>
            <span className="features-btn-icon" aria-label="arrow up right">↗</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Design2;
