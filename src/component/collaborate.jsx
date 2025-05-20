import './collaborate.css';

function Collaborate() {
  return (
    <div className="Collaborate">
      {/* Left mesh sphere graphic */}
      <div className="mesh-graphic">
        <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
          <circle cx="160" cy="160" r="150" stroke="#fff" strokeOpacity="0.12" strokeWidth="2" />
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1={160}
              y1={160}
              x2={160 + 150 * Math.cos((i * 2 * Math.PI) / 12)}
              y2={160 + 150 * Math.sin((i * 2 * Math.PI) / 12)}
              stroke="#fff"
              strokeOpacity="0.12"
              strokeWidth="1"
            />
          ))}
          {[...Array(6)].map((_, j) =>
            [...Array(12)].map((_, i) => {
              const r = (150 * (j + 1)) / 6;
              return (
                <circle
                  key={i + '-' + j}
                  cx={160 + r * Math.cos((i * 2 * Math.PI) / 12)}
                  cy={160 + r * Math.sin((i * 2 * Math.PI) / 12)}
                  r="2"
                  fill="#fff"
                  fillOpacity="0.12"
                />
              );
            })
          )}
        </svg>
      </div>

      <header className="Collaborate-header">
        <p className="subtitle">LET'S COLLABORATE</p>
        <div className="headline-wrapper">
          <div className="main-heading">LET'S WORK</div>
          <div className="main-heading together">TOGETHER</div>
          <button className="circle-btn">
            <span className="arrow-icon">↗</span>
            <span className="btn-text">Get In Touch</span>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Collaborate;
