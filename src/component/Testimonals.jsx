import './Testimonals.css';

function Testimonals() {
  return (
    <section className="testimonals-root">
      <div className="testimonals-content">
        <div className="testimonals-left">
          <div className="testimonals-label">
            <span className="testimonals-asterisk">*</span> TESTIMONIALS
          </div>
          <h1 className="testimonals-title">
           Read what they have to say <br/> about <span className="testimonals-highlight">working with us</span> <br />
          </h1>
        </div>
        <div className="testimonals-right">
          <p className="testimonals-desc">
Discover how our clients have achieved success through our innovative solutions and dedicated support.          </p>
          <div className="testimonals-cta-row">
            <button className="testimonals-btn">
All Testimonals            </button>
            <span className="testimonals-btn-icon" aria-label="arrow up right">↗</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonals;
