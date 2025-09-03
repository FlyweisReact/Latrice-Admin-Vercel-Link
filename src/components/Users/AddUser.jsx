import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const AddUser = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    shopName: '',
    joinedOn: '',
    status: 'Active',
    blocked: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add API call or state update logic here
    console.log('New user data:', formData);
    navigate('/dashboard/users');
  };

  return (
    <div className="w-full bg-white min-h-screen p-6">
      <div className="flex items-center mb-6">
        <button onClick={() => navigate('/dashboard/users')} className="mr-4">
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <h1 className="text-2xl font-[Rasa] font-semibold text-gray-900">Add New User</h1>
      </div>

      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label className="block text-sm font-[Rasa] text-gray-700 mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-[Rasa] text-gray-700 mb-2" htmlFor="shopName">
            Shop Name
          </label>
          <input
            type="text"
            name="shopName"
            value={formData.shopName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-[Rasa] text-gray-700 mb-2" htmlFor="joinedOn">
            Joined On
          </label>
          <input
            type="date"
            name="joinedOn"
            value={formData.joinedOn}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-[Rasa] text-gray-700 mb-2" htmlFor="status">
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Blocked">Blocked</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-[Rasa] hover:bg-blue-700 transition-colors"
        >
          Save User
        </button>
      </form>
    </div>
  );
};

export default AddUser;