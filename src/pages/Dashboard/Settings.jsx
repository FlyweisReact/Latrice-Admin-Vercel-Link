import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const Settings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  return (
    <div className="p-2 text-black font-[rasa]">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Profile Picture */}
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24">
              <img
                src="https://via.placeholder.com/100"
                alt="profile"
                className="w-24 h-24 rounded-full object-cover"
              />
              <button className="absolute bottom-1 right-1 bg-yellow-400 p-1 rounded-full shadow">
                <MdEdit className="text-black text-sm" />
              </button>
            </div>
          </div>

          {/* Profile Details */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Profile Details</h2>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 border rounded-md font-medium transition"
              >
                Change Password
              </button>
            </div>

            {/* Profile Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  defaultValue="Leo"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  defaultValue="Aminoff"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="email@example.com"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  defaultValue="+1 (778) 745 2369"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Date Of Birth
                </label>
                <input
                  type="date"
                  defaultValue="1990-05-12"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-medium mb-1">Role</label>
                <input
                  type="text"
                  defaultValue="Admin"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>

              {/* Password */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    defaultValue="password123"
                    className="w-full border rounded-md px-3 py-2 pr-10"
                  />
                  <FaEye className="absolute right-3 top-3 text-sky-500 cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end mt-6">
              <button className="bg-yellow-400 hover:bg-yellow-500 transition px-6 py-2 rounded-md font-medium">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Change Password Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Change Password</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-600 hover:text-black text-xl"
              >
                ×
              </button>
            </div>

            {/* Form */}
            <div className="space-y-4">
              {/* New Password */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="enter your password here"
                    className="w-full border rounded-md px-3 py-2 pr-10"
                  />
                  <FaEye
                    className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  e.g. P@ssw0rd2024!
                </p>
              </div>

              {/* Re-enter Password */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Re-enter Password
                </label>
                <div className="relative">
                  <input
                    type={showRePassword ? "text" : "password"}
                    placeholder="enter your password here"
                    className="w-full border rounded-md px-3 py-2 pr-10"
                  />
                  <FaEye
                    className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                    onClick={() => setShowRePassword(!showRePassword)}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  e.g. P@ssw0rd2024!
                </p>
              </div>

              {/* Password Rules */}
              <div className="text-xs text-gray-600 space-y-1">
                <p>
                  <span className="font-semibold">Length:</span> Minimum 8
                  characters, maximum 20 characters.
                </p>
                <p>
                  <span className="font-semibold">Complexity:</span> Must
                  include at least one of each:
                </p>
                <ul className="list-disc list-inside ml-2">
                  <li>Uppercase Letter (A-Z)</li>
                  <li>Lowercase Letter (a-z)</li>
                  <li>
                    Special Character (@#$%^&*()_+=?{}[]!-.)
                  </li>
                  <li>Number (0-9)</li>
                </ul>
              </div>

              {/* Save Button */}
              <div className="flex justify-center mt-4">
                <button className="bg-yellow-400 hover:bg-yellow-500 transition px-6 py-2 rounded-md font-medium">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
