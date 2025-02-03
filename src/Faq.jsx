import React from 'react'
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

 function Accordion() {
    const faqs = [
      {
        question: "What is Tailwind CSS?",
        answer: "Tailwind CSS is a utility-first CSS framework for rapid UI development.",
      },
      {
        question: "How do I use this Accordion?",
        answer: "Click on a question to expand or collapse the answer.",
      },
      {
        question: "Is Tailwind CSS better than Bootstrap?",
        answer: "It depends on your project needs. Tailwind offers more flexibility with utility classes.",
      },
    ];
  
    return (
      <div className="flex justify-center items-center min-h-screen  p-4">
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 w-300">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between items-center w-full p-4 text-left text-lg font-medium text-gray-900  rounded-lg hover:bg-gray-300 transition duration-200">
                    {faq.question}
                    <ChevronUpIcon
                      className={`w-5 h-5 transition-transform duration-200 ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="p-4 text-gray-700 rounded-lg">
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    );
  }

function Faq() {
  return (
    <div className='flex flex-col items-center py-20'>
        <div className='px-20 py-5 rounded-3xl bg-cyan-100 mb-10'>SAT questions and answers</div>
        <span className='text-5xl font-bold'>Digital SAT FAQs</span>
        <div className='border-4 border-blue flex flex-col p-20 rounded-3xl'>
            <div className='flex justify-evenly'>
            <button>Digital SAT</button>
            <button>LearnQ.ai</button>

            </div>
            <div>
                <Accordion/>
            </div>
            

        </div>
      
    </div>
  )
}

export default Faq
