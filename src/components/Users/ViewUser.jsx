import React from 'react';
import { ArrowLeft, Edit3 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const ViewUser = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // ✅ get ID from route params
  return (
    <div className="min-h-screen p-4 md:p-2">
      <div className="w-full mx-auto rounded-lg ">
        {/* Header */}
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-3">
            <ArrowLeft className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors" onClick={()=>navigate('/dashboard/users')}/>
            <h1 className="text-xl font-semibold text-gray-900">Wilson George</h1>
          </div>
        </div>

        {/* Profile Section */}
        <div className="p-6 space-y-6">

          <div className="flex items-start gap-6 bg-white border border-gray-200 px-10 py-10 rounded-lg">

            {/* Profile Picture */}

            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                  alt="Wilson George"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* User Details Grid */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-gray-900 mb-1">Wilson George</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">+1 (778) 745 2369</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Email ID : email@example.com</div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600">DOB : 1990-05-12</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">User ID: U01431</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Country: United States of America</div>
                </div>
              </div>
            </div>
            <Edit3 className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors"
              onClick={() => navigate(`/dashboard/users/edit/${id}`)} // ✅ uses ID from params
            />

          </div>

          {/* Address Section */}
          <div className="pt-6 bg-white border border-gray-200 px-10 py-10 rounded-lg">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Address</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Address and City Row */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <div className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm text-gray-900 bg-gray-50">
                  47 W 13th St, New York
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <div className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm text-gray-900 bg-gray-50">
                  New York
                </div>
              </div>

              {/* Postal Code and Country Row */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Postal Code
                </label>
                <div className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm text-gray-900 bg-gray-50">
                  10011
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <div className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm text-gray-900 bg-gray-50">
                  USA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;