import React, { useState } from 'react';

const CheckOut = ({ setCart }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod) {
      setSubmitted(true);
      setCart([]);
    } else {
      alert("Please select a payment method");
    }
  };

  if (submitted) {
    return (
      <div className="p-6 text-center mt-56">
        <h1 className="text-3xl font-bold text-green-700 mb-4">✅ Payment Successful!</h1>
        <p className="text-lg text-gray-600 mb-6">Thank you for shopping with Shopora!</p>
        <a href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded">🏠 Back to Home</a>
        <a href="/track-order" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded ml-4">📍 Track Your Order</a>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow mt-56">
      <h1 className="text-3xl font-bold mb-6 text-center">💳 Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 text-lg font-medium">Select Payment Method:</label>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" value="credit" onChange={(e) => setPaymentMethod(e.target.value)} />
              Credit / Debit Card
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" value="paypal" onChange={(e) => setPaymentMethod(e.target.value)} />
              PayPal
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" value="cod" onChange={(e) => setPaymentMethod(e.target.value)} />
              Cash on Delivery
            </label>
          </div>
        </div>
        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded">💰 Pay Now</button>
      </form>
    </div>
  );
};

export default CheckOut;
