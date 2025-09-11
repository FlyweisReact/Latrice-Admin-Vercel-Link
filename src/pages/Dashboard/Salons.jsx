import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Edit, Eye, Trash2, Download, ChevronDown, Plus, Wallet } from 'lucide-react';

const Salons = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortBy, setSortBy] = useState('name');
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedSalonId, setSelectedSalonId] = useState(null);
  // Manage salonsData as state
  const [salonsData, setSalonsData] = useState([
    {
      id: 1,
      fullName: 'Alyvia Kelley',
      shopName: 'Sexy Braids',
      joinedOn: '06/06/2023',
      status: 'Active',
      blocked: false,
    },
    {
      id: 2,
      fullName: 'Jaiden Nixon',
      shopName: 'Nixon Day Spa',
      joinedOn: '09/10/2023',
      status: 'Active',
      blocked: false,
    },
    {
      id: 3,
      fullName: 'Ace Foley',
      shopName: 'Ace Spa',
      joinedOn: '12/22/2023',
      status: 'Active',
      blocked: false,
    },
    {
      id: 4,
      fullName: 'Nikolai Schmidt',
      shopName: 'Sc Barber Shop',
      joinedOn: '03/02/2023',
      status: 'Inactive',
      blocked: false,
    },
    {
      id: 5,
      fullName: 'Clayton Charles',
      shopName: 'CC Massage',
      joinedOn: '10/10/2023',
      status: 'Active',
      blocked: false,
    },
    {
      id: 6,
      fullName: 'Prince Chen',
      shopName: 'Prince Barber Shop',
      joinedOn: '07/05/2023',
      status: 'Active',
      blocked: false,
    },
    {
      id: 7,
      fullName: 'Reece Duran',
      shopName: 'RD Skin Care',
      joinedOn: '05/06/2023',
      status: 'Active',
      blocked: false,
    },
    {
      id: 8,
      fullName: 'Anastasia Mcdaniel',
      shopName: 'A Nail Shop',
      joinedOn: '02/01/2023',
      status: 'Inactive',
      blocked: false,
    },
    {
      id: 9,
      fullName: 'Melvin Boyle',
      shopName: 'Melvin Hair Removal',
      joinedOn: '08/03/2023',
      status: 'Inactive',
      blocked: false,
    },
    {
      id: 10,
      fullName: 'Kailee Thomas',
      shopName: 'Thomas Skin Care',
      joinedOn: '11/08/2023',
      status: 'Blocked',
      blocked: true,
    },
    {
      id: 11,
      fullName: 'Chance Carder',
      shopName: 'Chance Skin Care',
      joinedOn: '11/08/2023',
      status: 'Inactive',
      blocked: false,
    },
    {
      id: 12,
      fullName: 'Lincoln Baptista',
      shopName: 'Baptista Barber Shop',
      joinedOn: '11/08/2023',
      status: 'Blocked',
      blocked: true,
    },
    {
      id: 13,
      fullName: 'James Dokidis',
      shopName: 'James Day Spa',
      joinedOn: '11/08/2023',
      status: 'Active',
      blocked: false,
    },
  ]);

  const navigate = useNavigate();

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
    setSalonsData((prevSalonsData) =>
      prevSalonsData.map((salon) =>
        salon.id === id
          ? { ...salon, blocked: !salon.blocked, status: salon.blocked ? 'Active' : 'Blocked' }
          : salon
      )
    );
  };

  const handleDeleteClick = (id) => {
    setSelectedSalonId(id);
    setShowDeletePopup(true);
  };

  const handleDeleteConfirm = () => {
    setSalonsData((prevSalonsData) =>
      prevSalonsData.filter((salon) => salon.id !== selectedSalonId)
    );
    setShowDeletePopup(false);
    setSelectedSalonId(null);
  };

  const handleDeleteCancel = () => {
    setShowDeletePopup(false);
    setSelectedSalonId(null);
  };

  return (
    <div className="w-full min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-2 border-b border-gray-200">
        <h1 className="text-[50px] font-[Rasa] font-semibold text-[#2f2f2f]">
          Salons
        </h1>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-[20px] font-[Rasa] text-[#2f2f2f] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-[120px]"
            >
              <option value="name">Sort By</option>
              <option value="date">Date Joined</option>
              <option value="status">Status</option>
              <option value="shop">Shop Name</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>

         <div className="bg-white border border-gray-300 px-4 py-2 rounded-lg">
           <button
            className="  text-[#2f2f2f]  text-[20px] font-[Rasa] font-medium hover:bg-gray-50 transition-colors flex items-center gap-2 whitespace-nowrap"
            onClick={() => navigate(`/dashboard/salons/add`)}
          >
            <Plus className="w-4 h-4" />
            Add A New Salon
          </button>
         </div>
        </div>
      </div>

      <div className="py-4 px-2 rounded-xl"
        style={{
          boxShadow: "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040",
        }}>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50 text-[20px">
              <tr>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">
                  #
                </th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">
                  Full Name
                </th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">
                  Shop Name
                </th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">
                  Joined On
                </th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">
                  Status
                </th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">
                  Block/Unblock
                </th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {currentData.map((salon, index) => (
                <tr key={salon.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">
                    {startIndex + index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">
                    {salon.fullName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">
                    {salon.shopName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">
                    {salon.joinedOn}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border border-[#E9ECEF]">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getStatusDot(salon.status)}`}></div>
                      <span className={`text-[20px] font-[Rasa] text-[#2f2f2f]{getStatusColor(salon.status)}`}>
                        {salon.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border border-[#E9ECEF]">
                    <div className="flex items-center gap-3">
                      <span className="text-[20px] font-[Rasa] text-[#2f2f2f]">
                        {salon.blocked ? 'Blocked' : 'Unblocked'}
                      </span>
                      <button
                        onClick={() => handleToggleBlock(salon.id)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${salon.blocked ? 'bg-red-500' : 'bg-green-500'
                          }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${salon.blocked ? 'translate-x-6' : 'translate-x-1'
                            }`}
                        />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border border-[#E9ECEF]">
                    <div className="flex items-center gap-2">
                      <div className="border-2 rounded-[6px] border-[#E9ECEF]">
                        <button
                          onClick={() => navigate(`/dashboard/salons/edit/${salon.id}`)}
                          className="p-2 text-gray-400 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50 "
                        >
                          <Edit className="w-4 h-4 text-black  " />
                        </button>
                      </div>

                      <div className="border-2 rounded-[6px] border-[#E9ECEF]">
                        <button
                          onClick={() => navigate(`/dashboard/salons/view/${salon.id}`)}
                          className="p-2 text-gray-400 hover:text-green-600 transition-colors rounded-lg hover:bg-green-50"
                        >
                          <Eye className="w-4 h-4 text-black" />
                        </button>
                      </div>

                      <div className="border-2 rounded-[6px] border-[#E9ECEF]">
                        <button
                          onClick={() => handleDeleteClick(salon.id)}
                          className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4 text-black" />
                        </button>
                      </div>

                      <div className="border-2 rounded-[6px] border-[#E9ECEF]">
                        <button
                          onClick={() => navigate(`/dashboard/salons/wallet/${salon.id}`)}
                          className="p-2 text-gray-400 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50"
                        >
                          <Wallet className="w-4 h-4 text-black" />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-start gap-10 px-4 py-3 bg-gray-50">
          <div className="flex items-center gap-2">
            <div className="border border-[#CED4DA] rounded bg-[#ced4da]">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                ‹
              </button>
            </div>
            {[...Array(totalPages)].map((_, i) => (
              <div className={`${currentPage === i + 1 ? "border border-[#2F2F2F]" : "border border-[#CED4DA] rounded"} `} key={i}>
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border rounded ${currentPage === i + 1
                    ? " text-black border border-[#2F2F2F]"
                    : "hover:bg-gray-100"
                    }`}
                >
                  {i + 1}
                </button>
              </div>
            ))}
            <div className="border border-[#CED4DA] rounded bg-[#ced4da]">
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                ›
              </button>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
            <span className="text-sm text-gray-600">/Page</span>
          </div>
        </div>
      </div>



      {showDeletePopup && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-[300px] text-center">
            <h2 className="text-xl font-[Rasa] font-medium text-gray-900 mb-4">Are you sure?</h2>
            <div className="flex justify-around">
              <button
                onClick={handleDeleteCancel}
                className="px-4 py-2 bg-gray-400 text-white rounded-full hover:bg-gray-500 transition-colors"
              >
                No, Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              >
                Yes, Delete
              </button>
            </div>
            {selectedSalonId && (
              <p className="text-sm text-gray-600 mt-4">
                {salonsData.find((s) => s.id === selectedSalonId)?.shopName} -{' '}
                {salonsData.find((s) => s.id === selectedSalonId)?.joinedOn}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Salons;