'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'How do I book tickets on THE EVENTIX?',
    answer:
      'It’s simple! Just browse or search for an event, choose your ticket type and quantity, and complete the secure checkout process.',
  },
  {
    question: 'Do I need an account to book tickets?',
    answer:
      "No, you don’t need an account... However, creating an account allows you to manage bookings, view history, and receive updates.",
  },
  {
    question: 'How will I receive my tickets?',
    answer: 'Tickets are sent directly to your email after booking.',
  },
  {
    question: 'Do I need to print my ticket?',
    answer: 'No, you can show the e-ticket on your phone.',
  },
  {
    question: 'What happens if the event is postponed or canceled?',
    answer:
      'You’ll be notified by email and offered a refund or transfer.',
  },
];

const FaqAccordion = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    setOpenIndices((current) =>
      current.includes(index)
        ? current.filter((i) => i !== index)
        : [...current, index]
    );
  };

  return (
    <div
      className="
        mx-auto
        w-full max-w-[1168px]
        min-h-screen
        p-4
        sm:p-6 md:p-8
        bg-white
        rounded-xl
        shadow-lg
        flex flex-col gap-8
        overflow-y-auto
      "
    >
      {faqs.map((faq, index) => {
        const isOpen = openIndices.includes(index);

        return (
          <div
            key={index}
            className={`
              rounded-xl
              bg-gray-100
              transition-all duration-300 shadow-sm
              ${isOpen ? 'pb-6' : ''}
            `}
          >
            <button
              onClick={() => toggleIndex(index)}
              className="
                w-full
                flex justify-between items-center
                p-4 sm:p-6
                text-left
                cursor-pointer
                focus:outline-none 
                select-none
              "
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              id={`faq-header-${index}`}
            >
              <span
                className={`font-medium ${
                  isOpen ? 'text-[#1EBBD7]' : 'text-gray-800'
                } text-base sm:text-lg`}
              >
                {faq.question}
              </span>
              <div className="ml-2 w-8 h-8 rounded-full bg-[#4D94FF] flex items-center justify-center">
                {isOpen ? (
                  <FaChevronUp className="text-white text-sm" />
                ) : (
                  <FaChevronDown className="text-white text-sm" />
                )}
              </div>
            </button>
            {isOpen && (
              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-header-${index}`}
                className="px-4 sm:px-6 pb-6 text-gray-900 font-normal text-sm sm:text-base"
              >
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
