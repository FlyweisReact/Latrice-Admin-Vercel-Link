import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FiMail, FiLock } from 'react-icons/fi';
import bgRec from '../../assets/images/YellowRectangleLoginPage.png';
import boy from '../../assets/images/youngForLogin.png';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#FFEBBA] flex items-center justify-center p-4 font-rasa">
      <div className="w-full max-w-[1100px] flex flex-col md:flex-row items-center justify-between relative">
        {/* Left side - Form */}
        <div className="w-full md:w-1/2 p-6 md:p-10 z-10">
          <h1 className="text-[32px] md:text-[40px] font-bold text-[#2F2F2F] mb-8 leading-tight">
            Welcome Back!!
          </h1>

          <form className="space-y-6" onSubmit={handleSubmit}>
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

            {/* Forgot Password */}
            <div className="text-right">
              <button
                type="button"
                onClick={() => navigate('/forgot-password')}
                className="text-[#2F2F2F] text-[20px] font-bold hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#2F2F2F] text-white py-3 rounded-full font-semibold text-sm md:text-base"
            >
              Log In
            </button>
          </form>

          {/* Sign Up */}
          <p className="text-start text-[#2F2F2F] text-[24px] md:text-base mt-4">
            Did not have an account please{" "}
            <button
              onClick={() => navigate('/signup')}
              className="font-bold text-[20px] hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>

        {/* Right Side - Illustration */}
        <div className="w-full md:w-1/2 relative hidden md:block h-full min-h-screen">
          <img
            src={bgRec}
            alt="Background Rectangle"
            className="absolute bottom-0 right-0 h-[700px] w-[450px] object-fill"
          />
          <img
            src={boy}
            alt="Boy Illustration"
            className="absolute top-80 right-36 z-10 w-[300px] md:w-[400px]"
          />
        </div>

      </div>
    </div>
  );
};

export default SignIn;
