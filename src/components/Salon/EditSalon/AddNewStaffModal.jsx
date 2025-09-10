import React, { useState } from "react";
import { FaTimes, FaUpload } from "react-icons/fa";

const AddNewStaffModal = ({ isOpen, onClose }) => {
  const [experience, setExperience] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[600px] p-6 shadow-lg font-poppins ">
        {/* Header */}
        <div className="flex justify-between items-center pb-4 mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Add a Staff</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
        </div>

        {/* Profile Picture Upload */}
        <div className="mb-4 flex gap-2 items-center">
          <label className="block text-[18px]  font-semibold text-gray-900 mb-2">
            Add Staff’s Profile Picture
          </label>
          <div className="w-full h-20  border border-gray-400 rounded flex items-center justify-center text-red-500 text-sm cursor-pointer">
            <FaUpload className="mr-2" />
            Click here to upload the image or drag & drop the image
          </div>
        </div>

        {/* Experience In */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-900 mb-1">
            Experience In
          </label>
          <select
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          >
            <option value="">Hair Service</option>
            <option value="nail">Nail Service</option>
            <option value="spa">Spa Service</option>
          </select>
        </div>

        {/* First + Last Name */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              First Name
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Last Name
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
          </div>
        </div>

        {/* Phone + Email */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Phone Number
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Email Address
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
          </div>
        </div>

        {/* Birthday */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-900 mb-1">
            Birthday
          </label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            placeholder="YYYY-MM-DD"
          />
        </div>

        {/* Footer Button */}
        <button className="w-full py-2 bg-black text-yellow-400 font-medium rounded hover:bg-gray-900 transition">
          Add
        </button>
      </div>
    </div>
  );
};

export default AddNewStaffModal;
