// ./pages/AuthPages/ForgotPassword.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle send OTP logic
    navigate('/otp');
  };

  return (
    <div className="min-h-screen bg-yellow-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Forgot Password?</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-yellow-500"
                required
              />
            </div>
            <button type="submit" className="w-full bg-black text-white py-3 rounded-full font-bold mb-4">
              Get OTP
            </button>
          </form>
          <p className="text-center text-gray-600">
            <button onClick={() => navigate('/')} className="text-gray-800 hover:underline">Back to Log In</button>
          </p>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="absolute top-0 right-0 h-96 w-96 bg-yellow-400 rounded-bl-full"></div>
          <img src="/path/to/forgot-illustration.png" alt="Illustration" className="relative z-10 mx-auto" /> {/* Replace with actual image */}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;