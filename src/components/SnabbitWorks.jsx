import  { useEffect } from "react";
import Swiper from "swiper";
import "./SnabbitWorks.css";

const SnabbitWorks = () => {
  useEffect(() => {
    new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 2000,
      },
    });
  }, []);

  return (
    <section id="how-it-works" className="how-snabbit-works">
      <h1>
        HOW SNABBIT <span>WORKS?</span>
      </h1>
      <div className="swiper-container">
        <div className="cards swiper-wrapper">
          <div className="card swiper-slide">
            <aside>
              <img
                src="https://snabbit.com/assets/how-snabbit-works/card1.png"
                alt="step1"
              />
            </aside>
            <div>
              <button>STEP 1</button>
              <p>SNABBIT YOUR WAY</p>
              <p>
                Need help now? Get a Snabbit expert at your doorstep in just 15
                minutes. Prefer a later time? Schedule what works best for you.
              </p>
            </div>
          </div>
          <div className="card swiper-slide">
            <aside>
              <img
                src="https://snabbit.com/assets/how-snabbit-works/card2.png"
                alt="step2"
              />
            </aside>
            <div>
              <button>STEP 2</button>
              <p>SET TIME & DURATION</p>
              <p>
                Choose a time, set the duration, and get multiple tasks done in
                one booking.
              </p>
            </div>
          </div>
          <div className="card swiper-slide">
            <aside>
              <img
                src="https://snabbit.com/assets/how-snabbit-works/card3.png"
                alt="step3"
              />
            </aside>
            <div>
              <button>STEP 3</button>
              <p>EXPERTS ARRIVE ON-TIME</p>
              <p>
                Our experts reach your doorstep at the scheduled time. Share the
                OTP to start the service and enjoy a smooth, hassle-free
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SnabbitWorks;
