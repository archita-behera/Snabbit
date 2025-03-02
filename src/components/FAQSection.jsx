import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./FAQSection.css"; // Import external CSS

const faqs = [
  {
    question: "What is Snabbit?",
    answer:
      "Snabbit is India's first on-demand services platform, offering quick and reliable home chore assistance right to your doorstep within 15 minutes.",
  },
  {
    question: "How do I book a service with Snabbit?",
    answer:
      "Booking a service is easy! Just download our app, choose your preferred service and time, and confirm your booking.",
  },
  {
    question: "Can we get multiple tasks done in one booking?",
    answer:
      "Absolutely! When you book a service on Snabbit, our experts can handle a variety of tasks like cleaning, dishwashing, laundry, bathroom cleaning, kitchen prep, and more—no need to specify in advance. Just let them know what you need, and they'll take care of it!",
  },
  {
    question: "How can I trust the Experts sent by Snabbit?",
    answer:
      "All our service professionals are rigorously vetted, background-checked, and trained to deliver top-quality service. Our stringent verification process require government IDs, such as Aadhaar and PAN cards, and passing police verification to ensure no criminal records. Your safety and satisfaction are our top priorities.",
  },
  {
    question: "What if I need to cancel or reschedule my booking?",
    answer:
      "You can easily cancel or reschedule your booking 30 minutes prior to the service start time. Please read our cancellation policy for more details.",
  },
  {
    question: "What should I do if I have a problem with my service?",
    answer:
      "If you encounter any issues with your service, please contact our customer support team through the booking number 9004030470. We are here to help and ensure you have a great experience.",
  },
  {
    question: "How quickly can I get an Expert to my home?",
    answer:
      "With Snabbit, you can get a service professional to your home within 15 minutes, depending on availability and your location.",
  },
  {
    question: "Do you offer regular or subscription-based services?",
    answer:
      "We currently do not offer services over a longer duration. You can book with us whenever you have a requirement, and we will ensure a home help arrives within 15 minutes.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faqs" className="outerdiv" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
      <div className="faq-section">
        <h2 className="faq-title">FAQs</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-box">
              <button className="faq-button" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <FaChevronDown
                  className={`faq-icon ${openIndex === index ? "open" : ""}`}
                />
              </button>
              {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
