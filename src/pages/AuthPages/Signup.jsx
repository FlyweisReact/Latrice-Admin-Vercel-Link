// ./pages/AuthPages/Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import bgRec from '../../assets/images/YellowRectangleLoginPage.png';
import boy from '../../assets/images/young man_sinup.png';

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
    <div className="min-h-screen bg-[#FFEBBA] flex items-center justify-center p-4">
      <div className="w-full max-w-[1100px] flex flex-col md:flex-row-reverse items-center justify-between relative">
        <div className="w-full md:w-1/2 p-6 md:p-10 z-10 order-2 md:order-1">
          <h1 className="text-[32px] md:text-[40px] font-bold text-[#2F2F2F] mb-6 md:mb-8 leading-tight">Create Account</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <label className="block text-[#2F2F2F] text-sm md:text-base mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-[10px] border border-[#D9D9D9] focus:outline-none focus:border-[#FFCC4E] bg-white text-[#2F2F2F] placeholder-[#A3A3A3]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#2F2F2F] text-sm md:text-base mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-[10px] border border-[#D9D9D9] focus:outline-none focus:border-[#FFCC4E] bg-white text-[#2F2F2F] placeholder-[#A3A3A3]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#A3A3A3] hover:text-[#FFCC4E]"
                >
                  {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                </button>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-[#2F2F2F] text-sm md:text-base mb-2">Re-Enter Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-[10px] border border-[#D9D9D9] focus:outline-none focus:border-[#FFCC4E] bg-white text-[#2F2F2F] placeholder-[#A3A3A3]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#A3A3A3] hover:text-[#FFCC4E]"
                >
                  {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                </button>
              </div>
            </div>
            <button type="submit" className="w-full bg-[#2F2F2F] text-white py-3 rounded-[10px] font-semibold text-sm md:text-base mt-4">
              Sign Up
            </button>
          </form>
          <p className="text-center text-[#2F2F2F] text-sm md:text-base mt-4">
            Already have an account? <button onClick={() => navigate('/')} className="text-[#FFCC4E] hover:underline">Log In</button>
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