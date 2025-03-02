import { useEffect } from "react";
import "./WhyChooseSnabbit.css"; 

const WhyChooseSnabbit = () => {
  useEffect(() => {
    const section = document.querySelector(".why-choose-snabbit");
    const cards = document.querySelectorAll(".why-choose-snabbit .card");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("arranged");
          cards.forEach((card) => card.classList.add("arrange"));
        } else {
          section.classList.remove("arranged");
          cards.forEach((card) => card.classList.remove("arrange"));
        }
      },
      { threshold: 0.8 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const cardsData = [
    {
      img: "https://snabbit.com/assets/what-makes-snabbit/trusted-experts.png",
      text: "Background Verified and Trusted Experts",
    },
    {
      img: "https://snabbit.com/assets/what-makes-snabbit/flexible-booking.svg",
      text: "Professionally Trained For Home Cleaning",
    },
    {
      img: "https://snabbit.com/assets/what-makes-snabbit/reschedule-or-cancel.svg",
      text: "Freedom to Cancel or Reschedule",
    },
    {
      img: "https://snabbit.com/assets/what-makes-snabbit/maid.png",
      text: "Powered By Strong Women Workforce",
    },
    {
      img: "https://snabbit.com/assets/what-makes-snabbit/rating.svg",
      text: "Quality You Can Trust",
    },
    {
      img: "https://snabbit.com/assets/what-makes-snabbit/trusted-by-numbers.svg",
      text: "Trusted By 6000+ Families",
    },
  ];

  return (
    <section id="why-us" className="why-choose-snabbit">
      <h1>
        WHY CHOOSE <span>SNABBIT</span>
      </h1>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.img} alt="Snabbit feature" />
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSnabbit;
