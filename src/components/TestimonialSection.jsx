import React, { useRef } from "react";

const testimonials = [
  {
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    text: "",
    name: "",
    location: "",
  },
  {
    type: "image",
    src: "/src/assets/Window Cleaning.png",
    text: "I recently started using Snabbit for weekly cleaning and I'm extremely impressed. They deliver quality services quickly at pocket-friendly rates. I now rely on them for weekly cleanings instead of a deep clean every 3 months.",
    name: "Shraddha Musale",
    location: "Powai",
  },
];

const TestimonialSection = () => {
  const sliderRef = useRef(null);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>DON'T JUST TAKE OUR WORD FOR IT</h2>
      <div ref={sliderRef} style={styles.slider}>
        {testimonials.concat(testimonials).map((item, index) => (
          <div key={index} style={styles.card}>
            {item.type === "image" ? (
              <div style={styles.imageContainer}>
                <img src={item.src} alt="testimonial" style={styles.image} />
                <div style={styles.textOverlay}>
                  <p>{item.text}</p>
                  <strong>{item.name}</strong>
                  <span style={styles.location}>{item.location}</span>
                </div>
              </div>
            ) : (
              <video controls style={styles.video}>
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "40px 20px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#4E0E27",
    marginBottom: "20px",
  },
  slider: {
    display: "flex",
    overflowX: "auto", // Manual scrolling enabled
    scrollSnapType: "x mandatory",
    gap: "20px",
    padding: "10px",
    width: "90%",
    margin: "auto",
    scrollbarWidth: "none", // Hides scrollbar in Firefox
    WebkitOverflowScrolling: "touch", // Smooth scrolling for touch devices
  },
  card: {
    width: "280px",
    borderRadius: "20px",
    flex: "0 0 auto",
    scrollSnapAlign: "start",
  },
  imageContainer: {
    position: "relative",
    borderRadius: "20px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "350px",
    objectFit: "cover",
    borderRadius: "20px",
  },
  textOverlay: {
    position: "absolute",
    bottom: "10px",
    left: "10px",
    right: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "10px",
    borderRadius: "15px",
    fontSize: "14px",
  },
  location: {
    display: "inline-block",
    backgroundColor: "#e0e0e0",
    borderRadius: "50%",
    padding: "5px 10px",
    marginLeft: "10px",
  },
  video: {
    width: "100%",
    height: "350px",
    borderRadius: "20px",
  },
};

export default TestimonialSection;
