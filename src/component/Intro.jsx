import React, { useEffect, useState } from 'react';
import './Intro.css';
import WaterRippleCanvas from './WaterRippleCanvas';

const phrases = ["Digital World", "Social Marketing"];

const Intro = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setDisplayText((prev) => {
        if (charIndex < phrases[index].length) {
          setCharIndex(charIndex + 1);
          return prev + phrases[index][charIndex];
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setCharIndex(0);
            setDisplayText('');
            setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          }, 1500);
          return prev;
        }
      });
    }, 100);

    return () => clearInterval(typingInterval);
  }, [charIndex, index]);

  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    const moveCursor = (e) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="intro-wrapper">
      <WaterRippleCanvas />
      <div className="custom-cursor"></div>

      <section className="intro-section">
        <h1 className="headline">
          <div style={{ lineHeight: 1.2 }}>
            <div>Innovative solutions</div>
            <div>
              for{' '}
              <span
                className="highlight-green"
                style={{
                  display: 'inline-block',
                  minHeight: '1.5em',
                  verticalAlign: 'middle',
                }}
              >
                {displayText}
              </span>
            </div>
          </div>
        </h1>

        <div className="play-and-paragraph-wrapper">
          <div className="play-learnmore-wrapper" style={{ margin: 0 }}>
            <div className="circle-button" onClick={() => setShowVideo(true)}>
              <div className="triangle"></div>
            </div>
            <span className="learn-more-label">LEARN MORE</span>
          </div>

          <p
            className="side-paragraph"
            style={{ fontSize: '1rem', maxWidth: '700px', width: '100%' }}
          >
            At our Creative Digital Agency, we bring your ideas to life by crafting engaging,
            impactful digital experiences that captivate audiences and drive results. From
            innovative web design to compelling content and cutting–edge digital strategies.
          </p>
        </div>

        <div
          className="button-with-arrow"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '2rem',
          }}
        >
          <button
            className="get-in-touch"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              backgroundColor: '#a1ff5c',
              color: '#000',
              border: 'none',
              borderRadius: '25px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Get in touch
          </button>
          <span
            className={`arrow-circle ${hover ? 'rotate-right' : 'rotate-top'}`}
            style={{
              display: 'inline-block',
              fontSize: '1.5rem',
              backgroundColor: '#2e2e2e',
              borderRadius: '50%',
              width: '2.5rem',
              height: '2.5rem',
              lineHeight: '2.5rem',
              textAlign: 'center',
              color: 'white',
              transition: 'transform 0.3s ease',
              marginTop: '0px', // keeps it aligned
            }}
          >
            ↑
          </span>
        </div>

        {showVideo && (
          <div className="video-overlay" onClick={() => setShowVideo(false)}>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </div>
        )}
      </section>

      <div className="full-width-scrolling-text">
        <div className="scrolling-track">
          <span className="scrolling-text">
            Marketing ✶ Custom Branding ✶ Website Design ✶ Digital Marketing ✶ Analytics & Reporting
            ✶ Marketing ✶ Custom Branding ✶ Website Design ✶
          </span>
          <span className="scrolling-text">
            Marketing ✶ Custom Branding ✶ Website Design ✶ Digital Marketing ✶ Analytics & Reporting
            ✶ Marketing ✶ Custom Branding ✶ Website Design ✶
          </span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
