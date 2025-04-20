import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const updateQuantity = (productId, delta) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const getTotalAmount = () =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleBuyNow = () => {
    navigate('/checkout');
  };

  return (
    <div className="p-6 mt-56">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded bg-white shadow-sm gap-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="h-20 w-20 object-cover rounded"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded overflow-hidden">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-4 py-1 bg-gray-200 hover:bg-gray-300 text-xl font-bold"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 text-md bg-white">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-4 py-1 bg-gray-200 hover:bg-gray-300 text-xl font-bold"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-4 py-1 rounded"
                >
                  Remove
                </button>
              </div>

              <div className="text-right">
                <p className="font-bold text-green-700 text-lg">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}

          <div className="text-right mt-6 space-y-4">
            <h2 className="text-2xl font-bold text-blue-700">
              🧾 Grand Total: ${getTotalAmount().toFixed(2)}
            </h2>
            <button
              onClick={handleBuyNow}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
            >
              🛍️ Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
