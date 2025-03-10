import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const FaqsMessage = () => {
  const faqs: FaqItem[] = [
    {
      id: 1,
      question: "How do I open a bank account?",
      answer:
        "You can open an account online through our website or visit any of our branches with valid ID and proof of address.",
    },
    {
      id: 2,
      question: "What are your banking hours?",
      answer:
        "Our branches are open Monday to Friday, 9:00 AM to 5:00 PM. Online banking is available 24/7.",
    },
    {
      id: 3,
      question: "How do I reset my online banking password?",
      answer:
        "You can reset your password through the 'Forgot Password' link on our login page or contact our customer support.",
    },
    {
      id: 4,
      question: "What types of loans do you offer?",
      answer:
        "We offer personal loans, home loans, car loans, and business loans with competitive interest rates.",
    },
  ];

  return (
    <div className="w-full">
      <div className="backdrop-blur-xl bg-white/20 rounded-2xl p-6 shadow-xl">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.id}
              className="group bg-gray-800/50 rounded-xl transition-all duration-200"
            >
              <summary className="list-none p-4 cursor-pointer select-none">
                <div className="flex items-center justify-between">
                  <h3 className="text-gray-200 font-medium">{faq.question}</h3>
                  <span className="transform transition-transform duration-200 group-open:rotate-180">
                    <MdKeyboardArrowDown className="text-gray-400" size={24} />
                  </span>
                </div>
              </summary>
              <div className="px-4 pb-4 text-gray-300 text-sm">
                <p className="animate-fadeIn">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqsMessage;
