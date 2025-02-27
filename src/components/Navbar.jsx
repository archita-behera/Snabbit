import React, { useEffect } from "react";
import "./HeroSection.css"; 

const Navbar = () => {
  useEffect(() => {
    const nav = document.querySelector("nav");
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        nav.style.transform = "translateY(-120%)";
      } else {
        nav.style.transform = "translateY(0)"; 
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1>My Navbar</h1>
      </div>
    </nav>
  );
};

export default Navbar;
