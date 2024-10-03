'use client';
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What is Run for Fund?',
    answer: 'Run for Fund is a platform for setting challenges and raising funds through your activities.Run for Fund is a platform for setting challenges and raising funds through your activities.Run for Fund is a platform for setting challenges and raising funds through your activities.',
  },
  {
    question: 'How do I get started with Run for Fund?',
    answer: 'Download the Run for Fund app, create an account, choose a challenge, and start tracking your activity.',
  },
  {
    question: 'What types of challenges are available?',
    answer: 'You can participate in running, walking, cycling, and other activity-based challenges.',
  },
  {
    question: 'How do I share my challenge with others?',
    answer: 'You can share your challenge via social media or directly through the app.',
  },
  {
    question: 'Can I create my own challenge?',
    answer: 'Yes, you can create personalized challenges that fit your goals.',
  },
  {
    question: 'Is there a fee to use Run for Fund?',
    answer: 'There is no fee to use Run for Fund. You can join and start fundraising for free.',
  },
  {
    question: 'How do I join a challenge?',
    answer: 'Join any available challenge by selecting it in the app and following the setup instructions.',
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 ">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-12 mt-6">Run for Fund FAQ</h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-300 mb-4 pb-4 px-5 pt-3 group hover:bg-gray-100 cursor-pointer"
          onClick={() => toggleFAQ(index)}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">{faq.question}</h2>
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
            className={`mt-2 text-gray-600 text-md max-w-100 ${
              activeIndex === index ? 'block' : 'hidden'
            }`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
