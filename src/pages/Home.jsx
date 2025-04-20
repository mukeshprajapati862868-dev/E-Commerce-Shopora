import React, { useEffect, useState } from 'react';
import Section from '../component/Section';

const Home = ({ cart, setCart, searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products?delay=1000')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (!exists) {
      setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const generateBenefits = (product) => {
    return [
      `Top-notch quality from ${product.brand}`,
      `Ideal for ${product.category} needs`,
      `Highly rated by customers`,
      
      
    ];
  };

  return (
    <div>
      <Section />
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold">Product Section</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 mt-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => {
              const isAdded = cart.some(cartItem => cartItem.id === item.id);
              return (
                <div
                  key={item.id}
                  className="border p-4 rounded shadow-md bg-white hover:shadow-xl hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-600">Brand: {item.brand}</p>
                  <p className="text-green-700 font-semibold">
                    Price: ${item.price.toFixed(2)}
                  </p>

                  <div className="flex justify-center gap-2 mt-4">
                    {isAdded ? (
                      <button
                        className="bg-gray-400 text-white rounded w-[140px] h-[50px] text-sm"
                        disabled
                        title="Already in Cart"
                      >
                        ✅
                      </button>
                    ) : (
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-red-600 hover:bg-red-700 text-white rounded w-[140px] h-[50px] text-sm"
                        title="Add to Cart"
                      >
                        🛒 Add to Cart
                      </button>
                    )}

                    <button
                      onClick={() => openModal(item)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-black rounded w-[140px] h-[50px] text-sm"
                      title="View Description"
                    >
                      View more!
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="col-span-full text-xl text-gray-500 mt-8">
              No products found for "<strong>{searchTerm}</strong>"
            </p>
          )}
        </div>

        {/* Modal */}
        {isModalOpen && selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl font-bold"
              >
                &times;
              </button>

              <img
                src={selectedProduct.images[0]}
                alt={selectedProduct.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{selectedProduct.title}</h2>
              <p className="text-gray-700 mb-2">Brand: {selectedProduct.brand}</p>
              <p className="text-gray-700 mb-2">Category: {selectedProduct.category}</p>
              <p className="text-green-600 font-semibold mb-2">
                Price: ${selectedProduct.price.toFixed(2)}
              </p>
              <p className="text-gray-800 mt-4">{selectedProduct.description}</p>

              {/* Benefits */}
              <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">✨ Key Benefits</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  {generateBenefits(selectedProduct).map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
