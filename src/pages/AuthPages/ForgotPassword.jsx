// ./pages/AuthPages/ForgotPassword.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import boyForgotPassword from '../../assets/images/CasualBoyForgotPass.png'
import bgRec from '../../assets/images/YellowRectangleLoginPage.png';
import { FiMail } from 'react-icons/fi';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle send OTP logic
    navigate('/otp');
  };

  return (
    <div className="min-h-screen bg-[#FFEBBA] flex items-center justify-center p-4 font-rasa">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Forgot Password?</h1>
          <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Email Input */}
            <div className="relative">
              <label
                htmlFor="email"
                className="absolute -top-3 left-6 bg-[#FFEBBA] px-2 text-sm font-medium text-[#2F2F2F]"
              >
                Email
              </label>
              <div className="flex items-center border border-[#2F2F2F80] rounded-full px-4 py-3">
                <FiMail className="text-[#2F2F2F80] mr-2" size={18} />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="enter your email"
                  className="flex-1 bg-transparent text-[#2F2F2F] placeholder-[#2F2F2F80] focus:outline-none"
                  required
                />
              </div>
            </div>
            <button type="submit" className="w-full bg-black text-white py-3 rounded-full font-bold mb-1o">
              Get OTP
            </button>
          </form>
          <p className="text-start text-[#2F2F2F] mt-4">
            <button onClick={() => navigate('/')} className="text-[#2F2F2F] font-bold hover:underline">Back to Log In</button>
          </p>
        </div>
        <div className="w-full md:w-1/2 relative hidden md:block h-full min-h-screen">
          <img src={bgRec} alt="Background Rectangle" className="absolute bottom-0 right-0 h-[700px] w-[450px] object-fill" />
          <img src={boyForgotPassword} alt="Illustration" className="absolute top-80 right-28 z-10 w-[300px] md:w-[400px]" /> {/* Replace with actual image */}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;