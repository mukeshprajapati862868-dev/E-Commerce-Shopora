import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ onClose, onLogin }) => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handleLogin = () => {
    const credentials = {
      email: email.current.value,
      password: password.current.value,
    };
    onLogin(credentials);
    onClose();
    navigate('/profile'); // 🔁 redirect to user profile
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-80 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl font-bold">&times;</button>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input ref={email} className="w-full border mb-2 p-2 rounded" type="email" placeholder="Email" />
        <input ref={password} className="w-full border mb-4 p-2 rounded" type="password" placeholder="Password" />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
