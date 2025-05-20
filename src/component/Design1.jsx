import './Design1.css';

function Design1() {
  return (
    <section className="features-section">
      <div className="features-content">
        <div className="features-left">
          <div className="features-label">
            <span className="features-asterisk">*</span> HOW IT WORK
          </div>
          <h1 className="features-title">
            Our proven <span className="highlight">process</span> for<br />
            achieving success
          </h1>
        </div>
        <div className="features-right">
          <p className="features-desc">
            Our digital services empower brands with innovative strategies and solutions for sustainable growth and engagement.
          </p>
          {/* <div className="features-cta-row">
            <button className="features-btn">
              Leran More
            </button>
            <span className="features-btn-icon" aria-label="arrow up right">↗</span>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Design1;