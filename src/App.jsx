import React, { useState, useEffect } from 'react';
import Loader from './component/Loader';
import Intro from './component/Intro';
import About from './component/About';
import Service from './component/service'; 
import Digital from './component/digital';
import Design1 from './component/Design1.jsx';
import Design2 from './component/Design2.jsx';
import Card1 from './component/card1.jsx';
import Card2 from './component/Card2.jsx';
import Branding from './component/Branding';
import Collaborate from './component/collaborate';
import Footer from './component/footer.jsx';
import Join from './component/Join.jsx';
import Strategy from './component/Strategy.jsx';
import Social from './component/Social.jsx';
import Design11 from './component/Design11.jsx';
import Design12 from './component/Design12.jsx';
import Testimonals from './component/Testimonals.jsx';
import Experience from './component/Experience.jsx';
import ReadMore from './component/readmore.jsx';
import Support from './component/support.jsx';
import Permission from './component/permission.jsx';
import Team from './component/team.jsx';
import './App.css';
import {
  FaFacebook,
  FaInstagram,
  FaRegFileAlt,
  FaShoppingCart,
  FaBars,
  FaTimes
} from 'react-icons/fa';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHideHeader(currentScrollY > lastScrollY && currentScrollY > 100);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* Header/Navbar */}
          <header className={`header ${hideHeader ? 'hide-header' : ''}`}>
            <div className="logo">artistic.</div>
            <nav className="nav-links">
              <div className="dropdown">
                <a href="#" className="dropbtn">Home</a>
                <div className="dropdown-content">
                  <a href="#">Services 1</a>
                  <a href="#">Services 2</a>
                  <a href="#">Services 3</a>
                </div>
              </div>

              <a href="#">About Us</a>
              <a href="#">Services</a>

              <div className="dropdown">
                <a href="#" className="dropbtn">Pages</a>
                <div className="dropdown-content green-bg">
                  <a href="#">Page 1</a>
                  <a href="#">Page 2</a>
                  <a href="#">Page 3</a>
                </div>
              </div>

              <a href="#">Contact Us</a>
            </nav>
            <div className="header-right">
              <FaFacebook className="icon" />
              <FaInstagram className="icon" />
              <FaBars className="icon menu-icon" onClick={() => setShowSidebar(true)} />
            </div>
          </header>

          {/* Sidebar */}
          {showSidebar && (
            <div className="sidebar">
              <FaTimes className="close-btn" onClick={() => setShowSidebar(false)} />
              <h3>Contact Info</h3>
              <p><strong>Email:</strong> info@artistic.com</p>
              <p><strong>Phone:</strong> +123-456-7890</p>
              <p><strong>Address:</strong> 123 Creative Ave, Design City</p>
            </div>
          )}

          {/* Floating Icons */}
          <div className="floating-container">
      <FaRegFileAlt
        className="floating-icon"
        onClick={() => window.open("https://docs.awaikenthemes.com/artistics/", "_blank")}
        style={{ cursor: "pointer" }}
        title="Open Documentation"
      />
      <FaShoppingCart
        className="floating-icon"
        onClick={() => window.open("https://themeforest.net/item/artistic-creative-digital-agency-wordpress-theme/55617765?clickid=VTYS7sznxxycRfjW45UsUTW0UksTWn14ZSvgRQ0&iradid=275988&irpid=1947200&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=", "_blank")}
        style={{ cursor: "pointer" }}
        title="Open ThemeForest Link"
      />
    </div>

          <main className="main-content">
            <Intro />
            <About />
          <Service/>
          <Digital/>
          <Join/>
          <Social/>
         <Design1/>
         <Card1/>
         <Design2/>
         <Card2/>
         <Strategy/>
          <Design1/>
          <Branding/>
          <Testimonals/>
          <Permission/>
          <Design12/>
          <Support/>
          <Design11/>
          <Collaborate/>
          <Footer/>
          </main>
        </>
      )}
    </div>
  );
};

export default App;
