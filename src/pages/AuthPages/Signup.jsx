// ./pages/AuthPages/Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import bgRec from '../../assets/images/YellowRectangleLoginPage.png';
import boy from '../../assets/images/young man_sinup.png';
import { FiLock, FiMail } from 'react-icons/fi';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // TODO: Handle signup logic with Redux
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#FFEBBA] flex items-center justify-center p-4 font-rasa">
      <div className="w-full max-w-[1100px] flex flex-col md:flex-row-reverse items-center justify-between relative">
        <div className="w-full md:w-1/2 p-6 md:p-10 z-10 order-2 md:order-1">
          <h1 className="text-[32px] md:text-[40px] font-bold text-[#2F2F2F] mb-6 md:mb-8 leading-tight">Create Account</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
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

            {/* Password Input */}
            <div className="relative">
              <label
                htmlFor="password"
                className="absolute -top-3 left-6 bg-[#FFEBBA] px-2 text-sm font-medium text-[#2F2F2F]"
              >
                Password
              </label>
              <div className="flex items-center border border-[#2F2F2F80] rounded-full px-4 py-3">
                <FiLock className="text-[#2F2F2F80] mr-2" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="enter your password"
                  className="flex-1 bg-transparent text-[#2F2F2F] placeholder-[#2F2F2F80] focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="ml-2 text-[#2F2F2F80] hover:text-[#2F2F2F]"
                >
                  {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                </button>
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="absolute -top-3 left-6 bg-[#FFEBBA] px-2 text-sm font-medium text-[#2F2F2F]"
              >
                Password
              </label>
              <div className="flex items-center border border-[#2F2F2F80] rounded-full px-4 py-3">
                <FiLock className="text-[#2F2F2F80] mr-2" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="enter your password"
                  className="flex-1 bg-transparent text-[#2F2F2F] placeholder-[#2F2F2F80] focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="ml-2 text-[#2F2F2F80] hover:text-[#2F2F2F]"
                >
                  {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                </button>
              </div>
            </div>
            <button type="submit" className="w-full bg-[#2F2F2F] text-white py-3 rounded-[10px] font-semibold text-sm md:text-base mt-4">
              Sign Up
            </button>
          </form>
          <p className="text-start text-[#2F2F2F] text-[24px] md:text-base mt-4">
            Already have an account? <button onClick={() => navigate('/')} className="font-bold text-[20px] hover:underline">Log In</button>
          </p>
        </div>
        <div className="w-full md:w-1/2 relative order-1 md:order-2 hidden md:block">
          <img src={bgRec} alt="Background Rectangle" className="absolute top-0 left-0 h-[600px] w-[460px] object-fill" />
          <img src={boy} alt="Boy Illustration" className="relative z-10 w-[500px] mx-auto mt-10 top-20 left-12 md:mt-0" />
        </div>
      </div>
    </div>
  );
};

export default Signup;