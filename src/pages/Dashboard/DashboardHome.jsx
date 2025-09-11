import React, { useState } from 'react';
import { Eye, Trash2, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DashboardHome = () => {
  const navigate = useNavigate();
  const [professionalsFilter, setProfessionalsFilter] = useState('All');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [newProfessionals, setNewProfessionals] = useState([
    { id: 1, shopName: 'Sexy Braids', email: 'email@example.com' },
    { id: 2, shopName: 'Az Salon', email: 'email@example.com' },
    { id: 3, shopName: 'NZ Barber Shop', email: 'email@example.com' },
    { id: 4, shopName: 'KS Nail Shop', email: 'email@example.com' },
    { id: 5, shopName: 'JJ HairCut', email: 'email@example.com' }
  ]);
  const [newUsers, setNewUsers] = useState([
    { id: 1, userName: 'Desiree Gouse', email: 'email@example.com' },
    { id: 2, userName: 'Omar Lubin', email: 'email@example.com' },
    { id: 3, userName: 'Erin Westervelt', email: 'email@example.com' },
    { id: 4, userName: 'Addison Dias', email: 'email@example.com' },
    { id: 5, userName: 'Mira Calzoni', email: 'email@example.com' }
  ]);
  const [recentDisputes, setRecentDisputes] = useState([
    {
      id: 1,
      shopName: 'Sexy Braids',
      userName: 'Marilyn Kenter',
      description: 'Lorem ipsum is simply dummy text of the...',
      photos: [
        'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
        'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
        'https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop'
      ]
    },
    {
      id: 2,
      shopName: 'Az Salon',
      userName: 'Brandon Korsgaard',
      description: 'Lorem ipsum is simply dummy text of the...',
      photos: [
        'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
        'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
        'https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop'
      ]
    },
    {
      id: 3,
      shopName: 'Sexy Braids',
      userName: 'Marilyn Kenter',
      description: 'Lorem ipsum is simply dummy text of the...',
      photos: [
        'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
        'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
        'https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop'
      ]
    }
  ]);

  const handleDeleteClick = (item) => {
    setDeleteTarget(item);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (deleteTarget) {
      if (deleteTarget.shopName) {
        if (deleteTarget.description) {
          // Dispute
          setRecentDisputes((prev) => prev.filter((item) => item.id !== deleteTarget.id));
        } else {
          // Professional
          setNewProfessionals((prev) => prev.filter((item) => item.id !== deleteTarget.id));
        }
      } else if (deleteTarget.userName) {
        // User
        setNewUsers((prev) => prev.filter((item) => item.id !== deleteTarget.id));
      }
    }
    setIsDeleteModalOpen(false);
    setDeleteTarget(null);
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setDeleteTarget(null);
  };

  return (
    <div className="w-full min-h-screen p-2">
      {/* Welcome Header */}
      <div className="mb-6 border-b border-gray-200 pb-4">
        <h1 className="text-[50px] font-[Rasa] font-semibold text-[#2f2f2f]">
          Welcome Davis Lubin!
        </h1>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-[#E8F4FD] rounded-lg p-4 border border-gray-200">
          <h3 className="text-sm font-[Rasa] text-[#2f2f2f] mb-2">Total Users</h3>
          <p className="text-[40px] font-[Rasa] font-bold text-[#2f2f2f] mb-1">2.80M</p>
          <p className="text-sm font-[Rasa] text-green-600 flex items-center">
            +6.08% <span className="ml-1">↗</span>
          </p>
        </div>
        <div className="bg-[#E8F5E8] rounded-lg p-4 border border-gray-200">
          <h3 className="text-sm font-[Rasa] text-[#2f2f2f] mb-2">Total Salons</h3>
          <p className="text-[40px] font-[Rasa] font-bold text-[#2f2f2f] mb-1">182, 2</p>
          <p className="text-sm font-[Rasa] text-green-600 flex items-center">
            +6.08% <span className="ml-1">↗</span>
          </p>
        </div>
        <div className="bg-[#F0F0F0] rounded-lg p-4 border border-gray-200">
          <h3 className="text-sm font-[Rasa] text-[#2f2f2f] mb-2">Total Independent Salons</h3>
          <p className="text-[40px] font-[Rasa] font-bold text-[#2f2f2f] mb-1">182, 2</p>
          <p className="text-sm font-[Rasa] text-green-600 flex items-center">
            +6.08% <span className="ml-1">↗</span>
          </p>
        </div>
        <div className="bg-[#FFE8E8] rounded-lg p-4 border border-gray-200">
          <h3 className="text-sm font-[Rasa] text-[#2f2f2f] mb-2">Blocked & Inactive</h3>
          <p className="text-[40px] font-[Rasa] font-bold text-[#2f2f2f]">182, 2</p>
        </div>
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        {/* New Professionals Table */}
        <div className="bg-white rounded-xl border border-gray-200" style={{ boxShadow: "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040" }}>
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-[20px] font-[Rasa] font-semibold text-[#2f2f2f]">New Professionals</h2>
            <div className="relative">
              <select
                value={professionalsFilter}
                onChange={(e) => setProfessionalsFilter(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-[20px] font-[Rasa] text-[#2f2f2f] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-[120px]"
              >
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50 text-[20px]">
                <tr>
                  <th className="px-6 py-4 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF] w-16">Sr.No</th>
                  <th className="px-6 py-4 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF] min-w-[150px]">Shop Name</th>
                  <th className="px-6 py-4 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF] min-w-[150px]">Email</th>
                  <th className="px-6 py-4 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF] min-w-[100px]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {newProfessionals.map((professional, index) => (
                  <tr key={professional.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{professional.shopName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{professional.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap border border-[#E9ECEF]">
                      <div className="flex items-center gap-2">
                        <div className="border-2 rounded-[6px] border-[#E9ECEF]">
                          <button
                            onClick={() => navigate(`/dashboard/salons`)}
                            className="p-2 text-gray-400 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50"
                          >
                            <Eye className="w-4 h-4 text-black" />
                          </button>
                        </div>
                        <div className="border-2 rounded-[6px] border-[#E9ECEF]">
                          <button
                            onClick={() => handleDeleteClick(professional)}
                            className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4 text-black" />
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* New Users Table */}
        <div className="bg-white rounded-xl border border-gray-200" style={{ boxShadow: "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040" }}>
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-[20px] font-[Rasa] font-semibold text-[#2f2f2f]">New Users</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50 text-[20px]">
                <tr>
                  <th className="px-6 py-4 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF] w-16">Sr.No</th>
                  <th className="px-6 py-4 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF] min-w-[150px]">User's Name</th>
                  <th className="px-6 py-4 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF] min-w-[150px]">Email</th>
                  <th className="px-6 py-4 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF] min-w-[100px]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {newUsers.map((user, index) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{user.userName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap border border-[#E9ECEF]">
                      <div className="flex items-center gap-2">
                        <div className="border-2 rounded-[6px] border-[#E9ECEF]">
                          <button
                            onClick={() => navigate(`/dashboard/users`)}
                            className="p-2 text-gray-400 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50"
                          >
                            <Eye className="w-4 h-4 text-black" />
                          </button>
                        </div>
                        <div className="border-2 rounded-[6px] border-[#E9ECEF]">
                          <button
                            onClick={() => handleDeleteClick(user)}
                            className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4 text-black" />
                          </button>
                        </div>
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
      <div className="bg-white rounded-xl border border-gray-200" style={{ boxShadow: "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040" }}>
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-[20px] font-[Rasa] font-semibold text-[#2f2f2f]">Recent Disputes</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50 text-[20px]">
              <tr>
                <th className="px-6 py-4 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF] w-16">Sr.No</th>
                <th className="px-6 py-4 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF] min-w-[150px]">Shop Name</th>
                <th className="px-6 py-4 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF] min-w-[150px]">User's Name</th>
                <th className="px-6 py-4 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF] min-w-[200px]">Description</th>
                <th className="px-6 py-4 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF] min-w-[150px]">Photos</th>
                <th className="px-6 py-4 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF] min-w-[100px]">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentDisputes.map((dispute, index) => (
                <tr key={dispute.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{dispute.shopName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{dispute.userName}</td>
                  <td className="px-6 py-4 text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF] max-w-[200px] truncate">{dispute.description}</td>
                  <td className="px-6 py-4 border border-[#E9ECEF]">
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
                  <td className="px-6 py-4 whitespace-nowrap border border-[#E9ECEF]">
                    <div className="flex items-center gap-2">
                      <div className="border-2 rounded-[6px] border-[#E9ECEF]">
                        <button
                          onClick={() => navigate(`/dashboard/dispute-resolution`)}
                          className="p-2 text-gray-400 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50"
                        >
                          <Eye className="w-4 h-4 text-black" />
                        </button>
                      </div>
                      <div className="border-2 rounded-[6px] border-[#E9ECEF]">
                        <button
                          onClick={() => handleDeleteClick(dispute)}
                          className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4 text-black" />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-[300px] text-center">
            <h2 className="text-xl font-[Rasa] font-medium text-gray-900 mb-4">Are you sure?</h2>
            <p className="text-sm text-gray-600 mb-4">
              {deleteTarget?.shopName || deleteTarget?.userName}
            </p>
            <div className="flex justify-around">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 bg-gray-400 text-white rounded-full hover:bg-gray-500 transition-colors"
              >
                No, Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardHome;