import React from 'react';
import { ArrowLeft, Edit3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EditUser = () => {
  const navigate = useNavigate(); 
  return (
    <div className="min-h-screen p-4 md:p-2 font-[rasa]">
      <div className="w-full mx-auto rounded-lg">
        {/* Header */}
        <div className="flex items-center gap-3 p-6 ">
          <ArrowLeft className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors" onClick={()=>navigate(-1)}/>
          <h1 className="text-3xl font-semibold text-gray-900">Edit Profile</h1>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Profile Picture and Details Header */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center">
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-500 transition-colors">
                  <Edit3 className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>
            <h2 className="text-lg font-medium text-gray-900">Profile Details</h2>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            {/* First Row - First Name and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="enter first name here"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="enter last name here"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Second Row - Email and User ID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="enter a email id"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  User ID
                </label>
                <input
                  type="text"
                  placeholder="enter a id"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Third Row - Phone and Date of Birth */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number <span className="text-gray-500">(optional)</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-600">
                    +1
                  </span>
                  <input
                    type="tel"
                    placeholder="enter phone no"
                    className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Date Of Birth <span className="text-gray-500">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="enter dob here"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Address Details Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                Address Details <span className="text-gray-500 font-normal">(optional)</span>
              </h3>

              {/* Fourth Row - Address and City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="enter here"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="enter city"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Fifth Row - Postal Code and Country */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    placeholder="enter postal code here"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <input
                    type="text"
                    placeholder="enter country"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Add Button */}
            <div className="flex justify-end pt-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-8 py-2.5 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;