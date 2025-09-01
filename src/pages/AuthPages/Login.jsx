// ./pages/AuthPages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import bgRec from '../../assets/images/YellowRectangleLoginPage.png';
import boy from '../../assets/images/youngForLogin.png';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle login logic with Redux
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#FFEBBA] flex items-center justify-center p-4">
      <div className="w-full max-w-[1100px] flex flex-col md:flex-row items-center justify-between relative">
        <div className="w-full md:w-1/2 p-6 md:p-10 z-10">
          <h1 className="text-[32px] md:text-[40px] font-bold text-[#2F2F2F] mb-6 md:mb-8 leading-tight">Welcome Back!!</h1>
          <form className="space-y-4">
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
            <div className="mb-2">
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
            <div className="text-right">
              <button type="button" onClick={() => navigate('/forgot-password')} className="text-[#2F2F2F] text-sm md:text-base hover:underline">
                Forgot Password?
              </button>
            </div>
            <button type="submit" onClick={()=>navigate('/dashboard')} className="w-full bg-[#2F2F2F] text-white py-3 rounded-[10px] font-semibold text-sm md:text-base mt-4">
              Log In
            </button>
          </form>
          <p className="text-center text-[#2F2F2F] text-sm md:text-base mt-4">
            Don’t have an account? <button onClick={() => navigate('/signup')} className="text-[#FFCC4E] hover:underline">Sign Up</button>
          </p>
        </div>
        <div className="w-full md:w-1/2 relative hidden md:block">
          <img src={bgRec} alt="Background Rectangle" className="absolute -top-4 right-0 h-[600px] w-[400px] object-fill" />
          <img src={boy} alt="Boy Illustration" className="relative top-28  z-10 w-[300px] md:w-[400px] mx-auto mt-10 md:mt-0" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;