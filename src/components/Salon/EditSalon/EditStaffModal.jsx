import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const EditStaffModal = ({ isOpen, onClose, staff }) => {
  const [experience, setExperience] = useState(staff?.experience || "");
  const [firstName, setFirstName] = useState(staff?.firstName || "");
  const [lastName, setLastName] = useState(staff?.lastName || "");
  const [phone, setPhone] = useState(staff?.phone || "");
  const [email, setEmail] = useState(staff?.email || "");
  const [birthday, setBirthday] = useState(staff?.birthday || "");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[650px] p-6 font-[Rasa] shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center pb-4 mb-4 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Edit Staff</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
        </div>

        {/* Profile Picture Upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Update Staff’s Profile Picture
          </label>
          <div className="w-full h-20 border-2 border-dashed border-gray-300 rounded flex items-center justify-center text-red-500 text-sm cursor-pointer">
            Click here to upload the image or drag & drop the image
          </div>
        </div>

        {/* Experience */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Experience In
          </label>
          <select
            className="w-full border border-gray-300 rounded p-2 text-sm"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          >
            <option value="">Hair Service</option>
            <option value="nail">Nail Service</option>
            <option value="spa">Spa Service</option>
          </select>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            className="w-full border border-gray-300 rounded p-2 text-sm"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="w-full border border-gray-300 rounded p-2 text-sm"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            className="w-full border border-gray-300 rounded p-2 text-sm"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className="w-full border border-gray-300 rounded p-2 text-sm"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Birthday */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Birthday
          </label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded p-2 text-sm"
            placeholder="YYYY-MM-DD"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>

        {/* Footer Button */}
        <div className="flex justify-center">
          <button className="w-full py-2 bg-black text-yellow-400 font-medium rounded hover:bg-gray-900">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditStaffModal;
