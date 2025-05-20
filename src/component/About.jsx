import React, { useState } from 'react';
import './About.css';
import { FaCube, FaDatabase, FaLayerGroup, FaShapes } from 'react-icons/fa';

const About = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="about-page">
      {/* Left Fixed Section */}
      <div
        className="about-left"
        style={{
          paddingLeft: '0',
          paddingRight: '3rem',
          paddingTop: '5rem',
          paddingBottom: '5rem',
        }}
      >
        <h4
          style={{
            color: '#ffff',
            fontWeight: 500,
            letterSpacing: '2px',
            marginLeft: '1rem',
            marginBottom: '1rem',
            fontSize:'2rem',
          }}
        >
          * About Agency
        </h4>

        <h1
          style={{
            fontSize: '3.5rem',
            lineHeight: 1.3,
            marginBottom: '2rem',
            fontWeight: 400,
            marginLeft: '1rem',
          }}
        >
          Crafting{' '}
          <span style={{ fontWeight: 'bold', color: '#a1ff5c' }}>unique digital</span> <br />
          experiences that elevate your brand
        </h1>

        {/* Button and arrow aligned horizontally */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginLeft: '13rem',
            marginTop: '2rem',
          }}
        >
          <button
            className="about-button"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              backgroundColor: '#a1ff5c',
              color: 'black',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              lineHeight: '1',
              marginTop:'-10px',
            }}
          >
            Contact Us
          </button>
          <span
            className={`arrow-circle ${hover ? 'rotate-right' : 'rotate-top'}`}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.5rem',
              backgroundColor: '#2e2e2e',
              borderRadius: '50%',
              width: '2.5rem',
              height: '2.5rem',
              color: 'white',
              transition: 'transform 0.3s ease',
              margin: '0',
            }}
          >
            ↑
          </span>
        </div>
      </div>

      {/* Right Scrollable Section */}
      <div className="about-right">
        <div className="about-section">
          <FaShapes className="about-icon" />
          <h2>Your Success, Our Mission</h2>
          <p>
            We measure our success by the success of our clients. With a focus on results and
            dedication to quality, our mission is to deliver digital solutions that make a real impact.
          </p>
        </div>

        <div className="about-section">
          <FaCube className="about-icon" />
          <h2>Creators Of Digital Excellence</h2>
          <p>
            At the core of our agency is a commitment to excellence and creativity. We specialize in
            crafting digital solutions that not only meet your needs but also elevate your brand.
          </p>
        </div>

        <div className="about-section">
          <FaLayerGroup className="about-icon" />
          <h2>Innovating the Digital Landscape</h2>
          <p>
            Our agency is committed to building forward-thinking solutions. Creativity and
            performance go hand in hand in every product we design.
          </p>
        </div>

        <div className="about-section">
          <FaDatabase className="about-icon" />
          <h2>Helping Brands Thrive Online</h2>
          <p>
            We help brands succeed in the digital age. We're passionate about building strong
            relationships and crafting custom strategies that drive results.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default About;
