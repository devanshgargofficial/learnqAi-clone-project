import React from "react";
import './App.css';

const PricingCard = ({ plan, price, features, buttonText, isHighlighted }) => (
  <div
    className={`p-6 rounded-lg shadow-lg border text-center ${
      isHighlighted ? "bg-blue-50 border-blue-500" : "bg-white border-gray-300"
    }`}
  >
    <h3 className="text-lg font-semibold text-blue-600 uppercase mb-2">{plan}</h3>
    <p className="text-3xl font-bold text-gray-900">{price}</p>
    <ul className="mt-4 space-y-2 text-gray-700">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center space-x-2">
          <span className="text-green-500">&#10003;</span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button
      className={`mt-6 px-4 py-2 font-semibold rounded-lg shadow-md ${
        isHighlighted
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
    >
      {buttonText}
    </button>
  </div>
);

const PricingSection = () => {
  const plans = [
    {
      plan: "FREE PLAN",
      price: "FREE",
      features: [
        "No Card Required",
        "10 Ask Mia - AI Tutor Chats",
        "5 Topic-wise Tests in total",
        "1 Digital SAT Diagnostic Test",
      ],
      buttonText: "Start For Free",
      isHighlighted: true,
    },
    {
      plan: "STARTER",
      price: "$59 Annually",
      features: [
        "2 Digital SAT Full-Length Practice Tests",
        "150 Ask Mia - AI Tutor Chats",
        "2 Topic-wise Tests for each topic",
        "2 Digital SAT Diagnostic Test",
      ],
      buttonText: "Buy Now",
      isHighlighted: false,
    },
    {
      plan: "ESSENTIAL",
      price: "$149 Annually",
      features: [
        "7 Digital SAT Full-Length Practice Tests",
        "300 Ask Mia - AI Tutor Chats",
        "5 Topic-wise Tests for each topic",
        "3 Digital SAT Diagnostic Tests",
      ],
      buttonText: "Buy Now",
      isHighlighted: false,
    },
    {
      plan: "ADVANCED",
      price: "$199 Annually",
      features: [
        "15 Digital SAT Full-Length Practice Tests",
        "1000 Ask Mia - AI Tutor Chats",
        "20 Topic-wise Tests for each topic",
        "3 Digital SAT Diagnostic Tests",
      ],
      buttonText: "Buy Now",
      isHighlighted: false,
    },
  ];

  return (
    <section className="py-16 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Pricing and Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
      <div className="mt-12 bg-teal-500 p-6 rounded-lg text-center flex justify-evenly">
        <div>
        <h3 className="text-lg font-bold mb-2">What else do you get with every plan?</h3>
        <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
          Get Started Now
        </button>
        </div>
        {/* <div className="flex"> */}
            <div>
            <p className="text-gray-700">Free Personalized Study Plan</p>
            <p className="text-gray-700">AI-Powered Study Recommendations</p>
            <p className="text-gray-700">SAT Projected Score</p>
            <p className="text-gray-700">AI Accuracy, Time, & Mastery Analytics</p>
            </div>
            <div>
            <p className="text-gray-700">Discord Community Support</p>
            <p className="text-gray-700">Test Review with AI Tutor Mia</p>
            <p className="text-gray-700">Discord Community Support</p>
            <p className="text-gray-700">Test Review with AI Tutor Mia</p>
            </div>
        {/* </div> */}
        
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          
          
        </div> */}
        
      </div>

      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg shadow-md flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Score Higher or Get a Full Refund—Guaranteed!</h3>
          <p className="text-gray-700">
            LearnQ guarantees a full refund if a student’s actual Digital SAT score is
            below their projected score from the initial diagnostic test on LearnQ.ai.
          </p>
          <a
            href="#"
            className="text-blue-600 font-semibold underline mt-2 inline-block"
          >
            *Read the full Terms & Conditions -&gt;
          </a>
        </div>
        <img
          src="money-back.webp"
          alt="Money Back Guarantee"
          className="w-20 h-20"
        />
      </div>
    </section>


  );
};

export default PricingSection;