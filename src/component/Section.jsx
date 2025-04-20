import React, { useEffect, useState } from 'react';
import hero from '../assets/hero.png';

function Section() {
  const messages = [
    "Shopora is your one-stop destination for the latest electronics, fashion, and more.",
    "Enjoy seamless shopping with fast delivery and real-time order tracking.",
    "Create your profile, track your orders live, and never miss a deal again!",
    "Secure payment, user-friendly interface, and 24/7 customer support—only at Shopora!"
  ];

  const [index, setIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Shopora</h1>
          <p className="text-lg md:text-xl mb-6 transition-opacity duration-1000 ease-in-out">
            {messages[index]}
          </p>
          <button
            onClick={() => setShowPopup(true)}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white text-lg"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-red-500"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">✨ Product Benefits</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>High-quality and trending products</li>
              <li>Fast and reliable delivery</li>
              <li>Live order tracking</li>
              <li>Safe and secure payments</li>
              <li>24/7 customer support</li>
              <li>Easy return and refund policy</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Section;
