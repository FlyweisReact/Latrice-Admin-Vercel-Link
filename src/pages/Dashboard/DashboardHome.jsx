import React, { useState } from 'react';
import { Eye, Trash2, ChevronDown } from 'lucide-react';

const DashboardHome = () => {
  const [professionalsFilter, setProfessionalsFilter] = useState('All');

  // Sample data for New Professionals
  const newProfessionals = [
    { id: 1, shopName: 'Sexy Braids', email: 'email@example.com' },
    { id: 2, shopName: 'Az Salon', email: 'email@example.com' },
    { id: 3, shopName: 'NZ Barber Shop', email: 'email@example.com' },
    { id: 4, shopName: 'KS Nail Shop', email: 'email@example.com' },
    { id: 5, shopName: 'JJ HairCut', email: 'email@example.com' }
  ];

  // Sample data for New Users
  const newUsers = [
    { id: 1, userName: 'Desiree Gouse', email: 'email@example.com' },
    { id: 2, userName: 'Omar Lubin', email: 'email@example.com' },
    { id: 3, userName: 'Erin Westervelt', email: 'email@example.com' },
    { id: 4, userName: 'Addison Dias', email: 'email@example.com' },
    { id: 5, userName: 'Mira Calzoni', email: 'email@example.com' }
  ];

  // Sample data for Recent Disputes
  const recentDisputes = [
    { 
      id: 1, 
      shopName: 'Sexy Braids', 
      userName: 'Marilyn Kenter', 
      description: 'Lorem ipsum is simply dummy text of the...',
      photos: ['https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop', 
               'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
               'https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop']
    },
    { 
      id: 2, 
      shopName: 'Az Salon', 
      userName: 'Brandon Korsgaard', 
      description: 'Lorem ipsum is simply dummy text of the...',
      photos: ['https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop', 
               'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
               'https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop']
    },
    { 
      id: 3, 
      shopName: 'Sexy Braids', 
      userName: 'Marilyn Kenter', 
      description: 'Lorem ipsum is simply dummy text of the...',
      photos: ['https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop', 
               'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
               'https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop']
    }
  ];

  return (
    <div className="w-full  min-h-screen p-4 lg:p-6">
      {/* Welcome Header */}
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-[Rasa] font-semibold text-gray-900">
          Welcome Davis Lubin!
        </h1>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Total Users Card */}
        <div className="bg-[#E8F4FD] rounded-lg p-4">
          <h3 className="text-sm font-[Rasa] font-medium text-gray-700 mb-2">Total Users</h3>
          <p className="text-2xl lg:text-3xl font-[Rasa] font-bold text-gray-900 mb-1">2.80M</p>
          <p className="text-sm font-[Rasa] text-green-600 flex items-center">
            +6.08% <span className="ml-1">↗</span>
          </p>
        </div>

        {/* Total Salons Card */}
        <div className="bg-[#E8F5E8] rounded-lg p-4">
          <h3 className="text-sm font-[Rasa] font-medium text-gray-700 mb-2">Total Salons</h3>
          <p className="text-2xl lg:text-3xl font-[Rasa] font-bold text-gray-900 mb-1">182, 2</p>
          <p className="text-sm font-[Rasa] text-green-600 flex items-center">
            +6.08% <span className="ml-1">↗</span>
          </p>
        </div>

        {/* Total Independent Salons Card */}
        <div className="bg-[#F0F0F0] rounded-lg p-4">
          <h3 className="text-sm font-[Rasa] font-medium text-gray-700 mb-2">Total Independent Salons</h3>
          <p className="text-2xl lg:text-3xl font-[Rasa] font-bold text-gray-900 mb-1">182, 2</p>
          <p className="text-sm font-[Rasa] text-green-600 flex items-center">
            +6.08% <span className="ml-1">↗</span>
          </p>
        </div>

        {/* Blocked & Inactive Card */}
        <div className="bg-[#FFE8E8] rounded-lg p-4">
          <h3 className="text-sm font-[Rasa] font-medium text-gray-700 mb-2">Blocked & Inactive</h3>
          <p className="text-2xl lg:text-3xl font-[Rasa] font-bold text-gray-900">182, 2</p>
        </div>
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        {/* New Professionals Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-[Rasa] font-semibold text-gray-900">New Professionals</h2>
            <div className="relative">
              <select 
                value={professionalsFilter}
                onChange={(e) => setProfessionalsFilter(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-1.5 pr-8 text-sm font-[Rasa] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#E8F4FD]">
                  <th className="px-4 py-3 text-left text-xs font-[Rasa] font-medium text-gray-700 uppercase tracking-wider">
                    Sr.No
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-[Rasa] font-medium text-gray-700 uppercase tracking-wider">
                    Shop Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-[Rasa] font-medium text-gray-700 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-[Rasa] font-medium text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {newProfessionals.map((professional, index) => (
                  <tr key={professional.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-sm font-[Rasa] text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3 text-sm font-[Rasa] text-gray-900">
                      {professional.shopName}
                    </td>
                    <td className="px-4 py-3 text-sm font-[Rasa] text-gray-600">
                      {professional.email}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors rounded hover:bg-blue-50">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-gray-400 hover:text-red-600 transition-colors rounded hover:bg-red-50">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* New Users Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-[Rasa] font-semibold text-gray-900">New Users</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#E8F4FD]">
                  <th className="px-4 py-3 text-left text-xs font-[Rasa] font-medium text-gray-700 uppercase tracking-wider">
                    Sr.No
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-[Rasa] font-medium text-gray-700 uppercase tracking-wider">
                    User's Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-[Rasa] font-medium text-gray-700 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-[Rasa] font-medium text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {newUsers.map((user, index) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-sm font-[Rasa] text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3 text-sm font-[Rasa] text-gray-900">
                      {user.userName}
                    </td>
                    <td className="px-4 py-3 text-sm font-[Rasa] text-gray-600">
                      {user.email}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors rounded hover:bg-blue-50">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-gray-400 hover:text-red-600 transition-colors rounded hover:bg-red-50">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Recent Disputes Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-[Rasa] font-semibold text-gray-900">Recent Disputes</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#E8F4FD]">
                <th className="px-4 py-3 text-left text-xs font-[Rasa] font-medium text-gray-700 uppercase tracking-wider">
                  Sr.No
                </th>
                <th className="px-4 py-3 text-left text-xs font-[Rasa] font-medium text-gray-700 uppercase tracking-wider">
                  Shop Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-[Rasa] font-medium text-gray-700 uppercase tracking-wider">
                  User's Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-[Rasa] font-medium text-gray-700 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-4 py-3 text-left text-xs font-[Rasa] font-medium text-gray-700 uppercase tracking-wider">
                  Photos
                </th>
                <th className="px-4 py-3 text-left text-xs font-[Rasa] font-medium text-gray-700 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentDisputes.map((dispute, index) => (
                <tr key={dispute.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-sm font-[Rasa] text-gray-900">
                    {index + 1}
                  </td>
                  <td className="px-4 py-3 text-sm font-[Rasa] text-gray-900">
                    {dispute.shopName}
                  </td>
                  <td className="px-4 py-3 text-sm font-[Rasa] text-gray-900">
                    {dispute.userName}
                  </td>
                  <td className="px-4 py-3 text-sm font-[Rasa] text-gray-600 max-w-[200px] truncate">
                    {dispute.description}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      {dispute.photos.map((photo, photoIndex) => (
                        <img
                          key={photoIndex}
                          src={photo}
                          alt={`Dispute photo ${photoIndex + 1}`}
                          className="w-8 h-8 rounded object-cover border border-gray-200"
                        />
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors rounded hover:bg-blue-50">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-red-600 transition-colors rounded hover:bg-red-50">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;