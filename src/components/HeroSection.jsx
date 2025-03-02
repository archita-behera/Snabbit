import  { useState, useEffect } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsNavbarVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div className="container">
      <nav className={`nav ${isNavbarVisible ? "visible" : "hidden"}`}>
        <div className="nav-logo">
          <a href="#">
            <img
              src="https://snabbit.com/assets/snabbit-icon.svg"
              alt="snabbit"
            />
          </a>
        </div>

        <div className="hamburger" onClick={toggleNav}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-menu ${isNavOpen ? "active" : ""}`}>
          <li><a href="#services">Services</a></li>
          <li><a href="#how-it-works">How it works</a></li>
          <li>
            <a href="#">
              <img
                src="https://snabbit.com/assets/snabbit-icon.svg"
                alt="snabbit"
              />
            </a>
          </li>
          <li><a href="#why-us">Why us?</a></li>
          <li><a href="#faqs">FAQs</a></li>
        </ul>
      </nav>

      <section id="services" className="services">
      
        <img src="../src/assets/cleaner1.png" alt="Left Illustration" className="left-img" />
        <img src="../src/assets/cleaner2.png" alt="Right Illustration" className="right-img" />

        <div className="quick-service">
          <div className="description">
            <img
              className="left-star"
              src="https://snabbit.com/assets/star.svg"
              alt=""
            />
            <h1>INDIAS FIRST</h1>
            <h1>
              <span> QUICK</span> SERVICE APP
            </h1>
            <p>On-demand home services to empower urban households</p>
            <img
              className="right-star"
              src="https://snabbit.com/assets/star.svg"
              alt=""
            />
          </div>
          <div className="app-download-links">
            <img src="https://snabbit.com/assets/star.svg" alt="" />
            <div className="play-store">
              <div>
                <img
                  src="https://snabbit.com/assets/download-app/google-play.svg"
                  alt="Google Play"
                />
              </div>
              <div>
                <p>GET IT ON</p>
                <h6>Google Play</h6>
              </div>
            </div>

            <div className="app-store">
              <div>
                <img
                  src="https://snabbit.com/assets/download-app/apple-app-store.svg"
                  alt="App Store"
                />
              </div>
              <div>
                <p>GET IT ON</p>
                <h6>App Store</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
