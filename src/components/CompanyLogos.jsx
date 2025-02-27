import React from "react";
import step1 from "../assets/yourstory.svg";
import inc42 from "../assets/inc42.svg";
import moneyControl from "../assets/money-control.svg";
import economicTimes from "../assets/economic-times.svg";

const CompanyLogos = () => {
  const logos = [
    { src: step1, alt: "YourStory" },
    { src: inc42, alt: "Inc42" },
    { src: moneyControl, alt: "MoneyControl" },
    { src: economicTimes, alt: "Economic Times" },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        <span style={styles.highlight}>IN THE SPOTLIGHT</span>
      </h2>
      <div style={styles.logoContainer}>
        {logos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} style={styles.logo} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "40px 20px",
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#000",
  },
  highlight: {
    color: "#E91E63",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "100px",
    flexWrap: "wrap",
  },
  logo: {
    maxWidth: "5550px",
    height: "auto",
    objectFit: "contain",
  },
};

export default CompanyLogos;
