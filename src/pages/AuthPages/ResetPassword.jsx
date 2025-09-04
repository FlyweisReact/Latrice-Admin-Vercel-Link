// ./pages/AuthPages/ResetPassword.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';
import boyForgotPassword from '../../assets/images/CasualBoyForgotPass.png'
import bgRec from '../../assets/images/YellowRectangleLoginPage.png';

const ResetPassword = () => {
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
    // TODO: Handle reset password logic
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#FFEBBA] flex items-center justify-center p-4 font-rasa">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Enter Your New Password</h1>
          <form onSubmit={handleSubmit} className='space-y-6'>
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
                Re Enter Password
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
            <button type="submit" className="w-full bg-black text-white py-3 rounded-full font-bold mb-4">
              Save
            </button>
          </form>
          <p className="text-start text-gray-600">
            <button onClick={() => navigate('/')} className="text-[#2F2F2F] font-bold hover:underline">Back to Log In</button>
          </p>
        </div>
        <div className="-full md:w-1/2 relative order-1 md:order-2 hidden md:block">
          <img src={bgRec} alt="Background Rectangle" className="absolute top-10 left-5 h-[600px] w-[460px] object-fill" />
          <img src={boyForgotPassword} alt="Illustration" className="relative z-10 w-[350px] mx-auto mt-10 top-20 -left-20 md:mt-0" /> {/* Replace with actual image */}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;