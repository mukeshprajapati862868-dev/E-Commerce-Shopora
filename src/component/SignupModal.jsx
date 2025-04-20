import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupModal = ({ onClose }) => {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handleSignup = () => {
    const user = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    // You can store in localStorage or just log for now
    console.log("Signed up user:", user);
    onClose();
    navigate('/login'); // 🔁 redirect to login page
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-80 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl font-bold">&times;</button>
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <input ref={name} className="w-full border mb-2 p-2 rounded" type="text" placeholder="Name" />
        <input ref={email} className="w-full border mb-2 p-2 rounded" type="email" placeholder="Email" />
        <input ref={password} className="w-full border mb-4 p-2 rounded" type="password" placeholder="Password" />
        <button onClick={handleSignup} className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignupModal;
