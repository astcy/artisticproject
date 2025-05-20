import './Join.css'; // Use Join.css if styles are separate, or reuse Design1.css

function Join() {
  return (
    <section className="join-section">
      <div className="join-content">
        <div className="join-left">
          <div className="join-label">
            <span className="join-asterisk">*</span> JOIN AGENCY
          </div>
          <h1 className="join-title">
            Join our <span className="highlight">agency</span> of creative  <br />
           innovators
          </h1>
        </div>
        <div className="join-right">
          <p className="join-desc">
Join our creative community to collaborate, innovate, and thrive together We welcome passionate individuals eager to make.          </p>
          {/* <div className="join-cta-row">
            <button className="join-btn">
              Get Started
            </button>
            <span className="join-btn-icon" aria-label="arrow up right">↗</span>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Join;
