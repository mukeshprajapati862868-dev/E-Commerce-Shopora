import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { useState } from 'react';
import logo from '../assets/logo.png';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const Navbar = ({ cartCount, setSearchTerm }) => {
  const [input, setInput] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleSearch = () => {
    setSearchTerm(input);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <>
     <nav className="fixed top-0 left-0 w-full z-50 bg-blue-900 text-white shadow-md">
  <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 px-4 py-1">
    <Link to="/" className="flex items-center gap-1">
      <img src={logo} alt="Shopora Logo" className="h-24 w-48 object-contain" />
    </Link>

    <div className="flex items-center gap-1">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search products..."
        className="px-2 py-1 rounded text-black w-40 sm:w-64"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-sm"
      >
        Search
      </button>
    </div>

    <div className="flex items-center gap-2">
      <button onClick={() => setShowLogin(true)} className="text-white hover:underline text-sm">
        Login
      </button>
      <button onClick={() => setShowSignup(true)} className="text-white hover:underline text-sm">
        Signup
      </button>
      <Link to="/profile">
        <FaUser className="text-xl" />
      </Link>
      <Link to="/cart" className="relative text-xl hover:text-gray-300">
        <FaShoppingCart />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
        )}
      </Link>
    </div>
  </div>
</nav>


      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showSignup && <SignupModal onClose={() => setShowSignup(false)} />}
    </>
  );
};

export default Navbar;
