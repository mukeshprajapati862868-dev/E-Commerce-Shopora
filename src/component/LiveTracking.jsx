import React, { useState, useEffect } from 'react';

const trackingSteps = [
  "Order Confirmed",
  "Packed & Ready",
  "Shipped from Warehouse",
  "In Transit",
  "Out for Delivery",
  "Delivered",
];

const LiveTracking = () => {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex(prev => (prev < trackingSteps.length - 1 ? prev + 1 : prev));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded mt-56">
      <h1 className="text-2xl font-bold mb-4 text-center">📍 Live Order Tracking</h1>
      <ul className="space-y-4">
        {trackingSteps.map((step, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full ${index <= stepIndex ? 'bg-green-500' : 'bg-gray-300'}`}></div>
            <span className={`${index <= stepIndex ? 'text-green-700 font-semibold' : 'text-gray-500'}`}>{step}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveTracking;