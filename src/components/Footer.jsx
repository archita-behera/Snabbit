import React from "react";

const Footer = () => {
  return (
    <div style={styles.footerContainer}>
      <div style={styles.content}>
        <div style={styles.textContainer}>
          <h2 style={styles.title1}>INDIA'S FIRST</h2>
          <h2 style={styles.title}>
            <span style={{ color: "#FF3366", fontWeight: "bold" ,}}>QUICK</span>{" "}
            SERVICE APP
          </h2>
          <p style={styles.subtitle}>
            On-demand home services to empower urban households
          </p>
        </div>

        <div style={styles.storeButtons}>
          <img
           src="/src/assets/google-play.svg"
            alt="Google Play"
            style={styles.storeIcon}
          />
          <img
           src="/src/assets/apple-app-store.svg"
            alt="App Store"
            style={styles.storeIcon}
          />
        </div>
      </div>



      <div style={styles.bottomContainer}>
        <p style={styles.copyright}>
          © 2025 MaestroEdge Solutions Pvt. Ltd. All rights reserved.
        </p>
        
        <div style={styles.links}>
          <a href="/" style={styles.link}>Terms of Use</a>
          <a href="/" style={styles.link}>Privacy Policy</a>
          <a href="/" style={styles.link}>Equal Opportunity Policy</a>
          <a href="/" style={styles.link}>Refund & Cancellation Policy</a>
        </div>
        <hr style={styles.line} />
        
      </div>
      <img
  src="/src/assets/snabbit-icon.svg"
  alt="App Store"
  style={{
    width: "100%",
    height: "320px",
    objectFit: "cover",
    objectPosition: "top",
    opacity: "0.1",
  
  }}
/>

    </div>
  );
};

const styles = {

  
  footerContainer: {
    backgroundColor: "rgb(93 15 54 / var(--tw-bg-opacity, 1))",
    color: "white",
    textAlign: "center",
   
    fontFamily: "Arial, sans-serif",
    position: "relative",
    borderTopLeftRadius: "50px", // Left Border Curve
    borderTopRightRadius: "50px", // Right Border Curve
    overflow: "hidden", // Hide Overflow Content
    
   
  },
  content: {
    margin: "100px 0 100px 0",
  },
  textContainer: {
    marginBottom: "50px",
  },
  title1:{
    fontSize: "40px",
    fontWeight: "900",
    letterSpacing: "-0.01em",
  },

  title: {
    fontSize: "50px",
    fontWeight: "900",
    letterSpacing: "-0.01em",
    margin: "0",
  },
  subtitle: {
    fontSize: "16px",
    opacity: "0.8",
   
  },
  storeButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  storeIcon: {
    width: "150px",
    cursor: "pointer",
    backgroundColor:"black",
    padding:"10px 20px 10px 20px",
    borderRadius:"10px"
  },
  line: {
    border: "0.5px solid rgba(255, 255, 255, 0.2)",
    margin: "20px auto",
    width: "100%",
  },
  bottomContainer: {
    display: "flex",
    justifyContent: "space-between", // Left-Right layout
    alignItems: "center", 
    flexWrap: "wrap", // Handles responsiveness
    padding: "10px 20px",
  },
  copyright: {
    fontSize: "14px",
    opacity: "0.8",
  },
  links: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "14px",
    opacity: "0.8",
  },
};

export default Footer;
