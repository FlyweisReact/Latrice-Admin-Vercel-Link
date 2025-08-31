// ./pages/AuthPages/Otp.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Otp = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length <= 1 && !isNaN(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Verify OTP
    navigate('/reset-password');
  };

  useEffect(() => {
    inputs.current[0].focus();
  }, []);

  return (
    <div className="min-h-screen bg-yellow-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Enter OTP</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center mb-6 space-x-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputs.current[index] = el)}
                  type="text"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-12 text-center text-xl font-bold border border-gray-300 rounded-full focus:outline-none focus:border-yellow-500"
                  maxLength={1}
                  required
                />
              ))}
            </div>
            <button type="submit" className="w-full bg-black text-white py-3 rounded-full font-bold mb-4">
              Next
            </button>
          </form>
          <p className="text-center text-gray-600">
            <button onClick={() => navigate('/')} className="text-gray-800 hover:underline">Back to Log In</button>
          </p>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="absolute top-0 right-0 h-96 w-96 bg-yellow-400 rounded-bl-full"></div>
          <img src="/path/to/otp-illustration.png" alt="Illustration" className="relative z-10 mx-auto" /> {/* Replace with actual image */}
        </div>
      </div>
    </div>
  );
};

export default Otp;