import React from "react";

const Footer = () => {
  return (
    <div style={styles.footerContainer}>
      <div style={styles.content}>
        <div style={styles.textContainer}>
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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
            alt="Google Play"
            style={styles.storeIcon}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple_app_store_badge.svg/512px-Apple_app_store_badge.svg.png"
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
    width: "100vw", // Full width of the viewport
    height: "auto", // Maintain aspect ratio
    display: "block", // Removes extra space below the image
    opacity: "0.1",
  }}
/>

    </div>
  );
};

const styles = {
  
  footerContainer: {
    backgroundColor: "#4D0833",
    color: "white",
    textAlign: "center",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    position: "relative",
    borderTopLeftRadius: "50px", // Left Border Curve
    borderTopRightRadius: "50px", // Right Border Curve
    overflow: "hidden", // Hide Overflow Content
    clipPath: "inset(0px 0px 170px 0px)", // Bottom Cut Effect
   
  },
  content: {
    marginBottom: "30px",
  },
  textContainer: {
    marginBottom: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
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
  },
  line: {
    border: "0.5px solid rgba(255, 255, 255, 0.2)",
    margin: "20px auto",
    width: "80%",
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
