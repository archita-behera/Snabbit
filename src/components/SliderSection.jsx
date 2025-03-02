import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./SliderSection.css"; // External CSS Import

const SliderSection = () => {
  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: containerRef });

  // Mobile mockup size animation
  const phoneSize = useTransform(scrollYProgress, [0, 0.3], ["30%", "20%"]);
  // Mobile mockup position animation (move to center)
  const phoneTop = useTransform(scrollYProgress, [0, 0.3], ["-50vh", "10vh"]);

  const services = [
    { img: "https://snabbit.com/assets/services/Kitchen%20Prep.png", title: "Kitchen" },
    { img: "https://snabbit.com/assets/services/Fan%20Cleaning.png", title: "Fan Cleaning" },
    { img: "https://snabbit.com/assets/services/Kitchen%20Prep.png", title: "Kitchen" },
    { img: "https://snabbit.com/assets/services/Fan%20Cleaning.png", title: "Fan Cleaning" },
    { img: "https://snabbit.com/assets/services/Kitchen%20Prep.png", title: "Kitchen" },
    { img: "https://snabbit.com/assets/services/Fan%20Cleaning.png", title: "Fan Cleaning" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section ref={containerRef} id="services" className="slider-section bg-[#580c2b] text-white py-16 px-6">
      <h2 className="text-center text-4xl font-bold">
        ONE BOOKING, <span className="text-pink-500 italic">MANY</span> <span className="text-pink-500 italic">TASKS</span>
      </h2>

      {/* Mobile mockup section */}
      <div className="relative flex flex-wrap justify-center items-center mt-10">
        <motion.div className="phone-mockup" style={{ width: phoneSize, height: phoneSize, top: phoneTop }}>
          <img src="https://snabbit.com/assets/phone-mockup.png" alt="Mobile Mockup" />
        </motion.div>
      </div>

      {/* Carousel Section */}
      <div className="carousel-container">
        <div
          className="carousel"
          ref={carouselRef}
          style={{ transform: `translateX(-${currentIndex * 120}px)`, transition: "transform 0.5s ease" }}
        >
          {services.map((service, index) => (
            <div className="card" key={index}>
              <img src={service.img} alt={service.title} />
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
