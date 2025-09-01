import React, { useState } from 'react';
import { Edit, Eye, Trash2, Download, ChevronDown, Plus } from 'lucide-react';

const Salons = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortBy, setSortBy] = useState('name');

  const salonsData = [
    {
      id: 1,
      fullName: 'Alyvia Kelley',
      shopName: 'Sexy Braids',
      joinedOn: '06/06/2023',
      status: 'Active',
      blocked: false
    },
    {
      id: 2,
      fullName: 'Jaiden Nixon',
      shopName: 'Nixon Day Spa',
      joinedOn: '09/10/2023',
      status: 'Active',
      blocked: false
    },
    {
      id: 3,
      fullName: 'Ace Foley',
      shopName: 'Ace Spa',
      joinedOn: '12/22/2023',
      status: 'Active',
      blocked: false
    },
    {
      id: 4,
      fullName: 'Nikolai Schmidt',
      shopName: 'Sc Barber Shop',
      joinedOn: '03/02/2023',
      status: 'Inactive',
      blocked: false
    },
    {
      id: 5,
      fullName: 'Clayton Charles',
      shopName: 'CC Massage',
      joinedOn: '10/10/2023',
      status: 'Active',
      blocked: false
    },
    {
      id: 6,
      fullName: 'Prince Chen',
      shopName: 'Prince Barber Shop',
      joinedOn: '07/05/2023',
      status: 'Active',
      blocked: false
    },
    {
      id: 7,
      fullName: 'Reece Duran',
      shopName: 'RD Skin Care',
      joinedOn: '05/06/2023',
      status: 'Active',
      blocked: false
    },
    {
      id: 8,
      fullName: 'Anastasia Mcdaniel',
      shopName: 'A Nail Shop',
      joinedOn: '02/01/2023',
      status: 'Inactive',
      blocked: false
    },
    {
      id: 9,
      fullName: 'Melvin Boyle',
      shopName: 'Melvin Hair Removal',
      joinedOn: '08/03/2023',
      status: 'Inactive',
      blocked: false
    },
    {
      id: 10,
      fullName: 'Kailee Thomas',
      shopName: 'Thomas Skin Care',
      joinedOn: '11/08/2023',
      status: 'Blocked',
      blocked: true
    },
    {
      id: 11,
      fullName: 'Chance Carder',
      shopName: 'Chance Skin Care',
      joinedOn: '11/08/2023',
      status: 'Inactive',
      blocked: false
    },
    {
      id: 12,
      fullName: 'Lincoln Baptista',
      shopName: 'Baptista Barber Shop',
      joinedOn: '11/08/2023',
      status: 'Blocked',
      blocked: true
    },
    {
      id: 13,
      fullName: 'James Dokidis',
      shopName: 'James Day Spa',
      joinedOn: '11/08/2023',
      status: 'Active',
      blocked: false
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'text-green-600';
      case 'Inactive':
        return 'text-gray-600';
      case 'Blocked':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusDot = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500';
      case 'Inactive':
        return 'bg-gray-500';
      case 'Blocked':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const totalPages = Math.ceil(salonsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = salonsData.slice(startIndex, endIndex);

  const handleToggleBlock = (id) => {
    // Toggle block functionality would go here
    console.log('Toggle block for salon:', id);
  };

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 border-b border-gray-200">
        <h1 className="text-2xl lg:text-3xl font-[Rasa] font-semibold text-gray-900">
          Salons
        </h1>
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Sort Dropdown */}
          <div className="relative">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm font-[Rasa] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-[120px]"
            >
              <option value="name">Sort By</option>
              <option value="date">Date Joined</option>
              <option value="status">Status</option>
              <option value="shop">Shop Name</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>

          {/* Add New Salon Button */}
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-[Rasa] font-medium hover:bg-gray-50 transition-colors flex items-center gap-2 whitespace-nowrap">
            <Plus className="w-4 h-4" />
            Add A New Salon
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Table Header */}
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-[Rasa] font-medium text-gray-500 uppercase tracking-wider w-16">
                #
              </th>
              <th className="px-6 py-4 text-left text-xs font-[Rasa] font-medium text-gray-500 uppercase tracking-wider min-w-[150px]">
                Full Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-[Rasa] font-medium text-gray-500 uppercase tracking-wider min-w-[150px]">
                Shop Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-[Rasa] font-medium text-gray-500 uppercase tracking-wider min-w-[120px]">
                Joined On
              </th>
              <th className="px-6 py-4 text-left text-xs font-[Rasa] font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-[Rasa] font-medium text-gray-500 uppercase tracking-wider min-w-[140px]">
                Block/Unblock
              </th>
              <th className="px-6 py-4 text-left text-xs font-[Rasa] font-medium text-gray-500 uppercase tracking-wider min-w-[120px]">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {currentData.map((salon, index) => (
              <tr key={salon.id} className="hover:bg-gray-50 transition-colors">
                {/* Row Number */}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-[Rasa] text-gray-900">
                  {startIndex + index + 1}
                </td>

                {/* Full Name */}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-[Rasa] text-gray-900">
                  {salon.fullName}
                </td>

                {/* Shop Name */}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-[Rasa] text-gray-900">
                  {salon.shopName}
                </td>

                {/* Joined On */}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-[Rasa] text-gray-600">
                  {salon.joinedOn}
                </td>

                {/* Status */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${getStatusDot(salon.status)}`}></div>
                    <span className={`text-sm font-[Rasa] font-medium ${getStatusColor(salon.status)}`}>
                      {salon.status}
                    </span>
                  </div>
                </td>

                {/* Block/Unblock Toggle */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-[Rasa] text-gray-700">
                      {salon.blocked ? 'Block' : 'Unblock'}
                    </span>
                    <button
                      onClick={() => handleToggleBlock(salon.id)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                        salon.blocked ? 'bg-red-500' : 'bg-green-500'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          salon.blocked ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </td>

                {/* Actions */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-green-600 transition-colors rounded-lg hover:bg-green-50">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center gap-2">
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-1 text-sm font-[Rasa] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
          <span className="text-sm font-[Rasa] text-gray-600">/page</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm font-[Rasa] text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            ‹
          </button>

          {/* Page Numbers */}
          {[...Array(Math.min(5, totalPages))].map((_, index) => {
            const pageNumber = index + 1;
            const isActive = pageNumber === currentPage;
            
            return (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                className={`px-3 py-1 text-sm font-[Rasa] border rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'text-gray-600 border-gray-300 hover:bg-gray-100'
                }`}
              >
                {pageNumber}
              </button>
            );
          })}

          {totalPages > 5 && (
            <>
              <span className="px-2 text-sm font-[Rasa] text-gray-500">...</span>
              <button
                onClick={() => setCurrentPage(totalPages)}
                className={`px-3 py-1 text-sm font-[Rasa] border rounded-lg transition-colors ${
                  currentPage === totalPages
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'text-gray-600 border-gray-300 hover:bg-gray-100'
                }`}
              >
                {totalPages}
              </button>
            </>
          )}

          {/* Next Button */}
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-sm font-[Rasa] text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default Salons;