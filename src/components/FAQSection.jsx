import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is Snabbit?",
    answer: "Snabbit is an on-demand service platform that connects users with professional service providers.",
  },
  {
    question: "How do I book a service with Snabbit?",
    answer: "You can book a service by selecting the desired category, choosing a provider, and confirming your booking.",
  },
  {
    question: "Can we get multiple tasks done in one booking?",
    answer: "Yes, you can add multiple tasks while booking a service, depending on provider availability.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faqs" className="bg-gray-100 py-12 px-6 md:px-20 rounded-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#5B0D3B] mb-8">
        FAQs
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm">
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-lg font-medium text-gray-900 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <FaChevronDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180 text-[#5B0D3B]" : "text-gray-500"
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
