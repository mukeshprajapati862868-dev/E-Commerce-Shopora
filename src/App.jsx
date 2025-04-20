import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './component/Navbar';
import Cart from './pages/Cart';
import Footer from './component/Footer';
import CheckOut from './pages/CheckOut';
import LiveTracking from './component/LiveTracking';
import UserProfile from './pages/UserProfile';

const App = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} searchTerm={searchTerm} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<CheckOut setCart={setCart} />} />
        <Route path="/track-order" element={<LiveTracking />} />
        <Route path='/userprofile' element={<UserProfile/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
