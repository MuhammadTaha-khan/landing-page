"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Run for Fund?",
    answer:
      "Run for Fund is a platform for setting challenges and raising funds through your activities.Run for Fund is a platform for setting challenges and raising funds through your activities.Run for Fund is a platform for setting challenges and raising funds through your activities.",
  },
  {
    question: "How do I get started with Run for Fund?",
    answer:
      "Run for Fund is a platform for setting challenges and raising funds through your activities.Run for Fund is a platform for setting challenges and raising funds through your activities.Run for Fund is a platform for setting challenges and raising funds through your activities.",
  },
  {
    question: "What types of challenges are available?",
    answer:
      "Run for Fund is a platform for setting challenges and raising funds through your activities.Run for Fund is a platform for setting challenges and raising funds through your activities.Run for Fund is a platform for setting challenges and raising funds through your activities.",
  },
  {
    question: "How do I share my challenge with others?",
    answer:
      "Run for Fund is a platform for setting challenges and raising funds through your activities.Run for Fund is a platform for setting challenges and raising funds through your activities.Run for Fund is a platform for setting challenges and raising funds through your activities.",
  },
  {
    question: "Can I create my own challenge?",
    answer:
      "Run for Fund is a platform for setting challenges and raising funds through your activities.Run for Fund is a platform for setting challenges and raising funds through your activities.Run for Fund is a platform for setting challenges and raising funds through your activities.",
  },
  {
    question: "Is there a fee to use Run for Fund?",
    answer:
      "Run for Fund is a platform for setting challenges and raising funds through your activities.Run for Fund is a platform for setting challenges and raising funds through your activities.Run for Fund is a platform for setting challenges and raising funds through your activities.",
  },
  {
    question: "How do I join a challenge?",
    answer:
      "Run for Fund is a platform for setting challenges and raising funds through your activities.Run for Fund is a platform for setting challenges and raising funds through your activities.Run for Fund is a platform for setting challenges and raising funds through your activities.",
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <img src="/slider.png" alt="" className="w-full pt-10 pb-2" />
      <div className="max-w-3xl mx-auto p-6 " id="faq">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-12 mt-16 font-tomorrow">
          Run for Fund FAQ
        </h1>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 mb-4 pb-4 px-5 pt-3 group hover:bg-gray-100 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold font-tomorrow">
                {faq.question}
              </h2>
              <span>
                {activeIndex === index ? (
                  <FaMinus className="w-6 h-6 text-black border border-gray-300 rounded-full p-1" />
                ) : (
                  // <FaPlus className="w-4 h-4 text-gray-600" />
                  <FaPlus className="w-6 h-6 text-black border border-gray-300 rounded-full p-1" />
                )}
              </span>
            </div>
            <div
              className={`mt-2 text-gray-600 text-md max-w-100 font-tomorrow ${
                activeIndex === index ? "block" : "hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
