import React from "react";
import { Trash2, Edit2 } from "lucide-react";

const FAQsContent = () => {
  const faqs = [
    {
      question: "How do I create a new FAQ test?",
      answer:
        "To create a new FAQ test, log into your admin panel and navigate to the FAQ section. Click 'Add FAQ Test' and enter your questions and concise answers. Organize the FAQs logically, grouping similar topics together for clarity. Preview the test to ensure accuracy and proper formatting. Once satisfied, save and publish the test to make it accessible to users. This process ensures your FAQ test is well-structured and user-friendly, providing clear and helpful information.",
    },
    {
      question: "How do I create a new FAQ test?",
      answer:
        "To create a new FAQ test, log into your admin panel and navigate to the FAQ section. Click 'Add FAQ Test' and enter your questions and concise answers. Organize the FAQs logically, grouping similar topics together for clarity. Preview the test to ensure accuracy and proper formatting. Once satisfied, save and publish the test to make it accessible to users. This process ensures your FAQ test is well-structured and user-friendly, providing clear and helpful information.",
    },
    {
      question: "How do I create a new FAQ test?",
      answer:
        "To create a new FAQ test, log into your admin panel and navigate to the FAQ section. Click 'Add FAQ Test' and enter your questions and concise answers. Organize the FAQs logically, grouping similar topics together for clarity. Preview the test to ensure accuracy and proper formatting. Once satisfied, save and publish the test to make it accessible to users. This process ensures your FAQ test is well-structured and user-friendly, providing clear and helpful information.",
    },
    {
      question: "How do I create a new FAQ test?",
      answer:
        "To create a new FAQ test, log into your admin panel and navigate to the FAQ section. Click 'Add FAQ Test' and enter your questions and concise answers. Organize the FAQs logically, grouping similar topics together for clarity. Preview the test to ensure accuracy and proper formatting. Once satisfied, save and publish the test to make it accessible to users. This process ensures your FAQ test is well-structured and user-friendly, providing clear and helpful information.",
    },
    {
      question: "How do I create a new FAQ test?",
      answer:
        "To create a new FAQ test, log into your admin panel and navigate to the FAQ section. Click 'Add FAQ Test' and enter your questions and concise answers. Organize the FAQs logically, grouping similar topics together for clarity. Preview the test to ensure accuracy and proper formatting. Once satisfied, save and publish the test to make it accessible to users. This process ensures your FAQ test is well-structured and user-friendly, providing clear and helpful information.",
    },
  ];

  return (
    <div className="p-4 space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow border border-gray-200 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
        >
          {/* Text */}
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-1">
              {faq.question}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {faq.answer}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 self-end sm:self-center">
            <button className="text-gray-500 hover:text-gray-700">
              <Edit2 size={18} />
            </button>
            <button className="text-red-500 hover:text-red-600">
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQsContent;
