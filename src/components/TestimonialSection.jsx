import  { useRef } from "react";

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
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    text: "I recently started using Snabbit for weekly cleaning and I'm extremely impressed. They deliver quality services quickly at pocket-friendly rates. I now rely on them for weekly cleanings instead of a deep clean every 3 months.",
    name: "Shraddha Musale",
    location: "Powai",
  },
  {
    type: "video",
    src: "https://snabbit.com/assets/testimonials/imgur_vid.mp4",
    text: "",
    name: "",
    location: "",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    text: "Snabbit’s home cleaning service is top-notch! The team is professional, efficient, and my home feels brand new after every session. Highly recommended!",
    name: "Rajesh Kumar",
    location: "Andheri",
  },
  {
    type: "video",
    src: "https://snabbit.com/assets/testimonials/shraddha_tripathi.mp4",
    text: "",
    name: "",
    location: "",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    text: "As a business owner, I needed reliable office cleaning. Snabbit has exceeded my expectations with their consistency and attention to detail.",
    name: "Ayesha Sharma",
    location: "Bandra",
  },
  {
    type: "video",
    src: "https://www.w3schools.com/html/movie.mp4",
    text: "",
    name: "",
    location: "",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
    text: "My carpets look as good as new after Snabbit’s service. The team is punctual and professional. I’ll definitely be using their services again.",
    name: "Vikram Joshi",
    location: "Juhu",
  }
];


const TestimonialSection = () => {
  const sliderRef = useRef(null);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>DONT JUST TAKE OUR </h2>
      <h2 style={styles.heading}>WORD FOR IT</h2>
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
    fontSize: "50px",
    fontWeight: "bold",
    color:" #5B0D3B",
    
  },
  slider: {
    display: "flex",
    overflowX: "auto", // Manual scrolling enabled
    scrollSnapType: "x mandatory",
    gap: "20px",
    padding: "100px 0 50px 0",
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
