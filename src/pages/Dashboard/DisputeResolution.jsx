import React, { useState } from 'react';
import { Eye, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const DisputeResolution = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortBy, setSortBy] = useState('name');
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedDisputeId, setSelectedDisputeId] = useState(null);

  const handleDeleteClick = (id) => {
    setSelectedDisputeId(id);
    setShowDeletePopup(true);
  };

  const handleDeleteConfirm = () => {
    setDisputesData((prevData) => prevData.filter((dispute) => dispute.id !== selectedDisputeId));
    setShowDeletePopup(false);
    setSelectedDisputeId(null);
  };

  const handleDeleteCancel = () => {
    setShowDeletePopup(false);
    setSelectedDisputeId(null);
  };

  const disputesData = [
    { id: 1, userName: 'Wilson George', shopName: 'Sexy Braids', disputeDate: '06/06/2023', time: '01:00 PM', service: 'Loc Retwist', price: '$80' },
    { id: 2, userName: 'Erin Lubin', shopName: 'Nixon Day Spa', disputeDate: '09/10/2023', time: '01:00 PM', service: 'Loc Retwist', price: '$80' },
    { id: 3, userName: 'Ashlynn Goose', shopName: 'Ace Spa', disputeDate: '12/22/2023', time: '01:00 PM', service: 'Loc Retwist', price: '$80' },
    { id: 4, userName: 'Miracle Arcand', shopName: 'Sc Barber Shop', disputeDate: '03/02/2023', time: '01:00 PM', service: 'Loc Retwist', price: '$80' },
    { id: 5, userName: 'Cooper Rosser', shopName: 'CC Massage', disputeDate: '10/10/2023', time: '01:00 PM', service: 'Loc Retwist', price: '$80' },
    { id: 6, userName: 'Livia Herwitz', shopName: 'Prince Barber Shop', disputeDate: '07/05/2023', time: '01:00 PM', service: 'Loc Retwist', price: '$80' },
    { id: 7, userName: 'Justin Botoosh', shopName: 'RD Skin Care', disputeDate: '05/06/2023', time: '01:00 PM', service: 'Loc Retwist', price: '$80' },
    { id: 8, userName: 'Rayna Donin', shopName: 'A Nail Shop', disputeDate: '02/01/2023', time: '01:00 PM', service: 'Loc Retwist', price: '$80' },
    { id: 9, userName: 'Lincoln Aminoff', shopName: 'Melvin Hair Removal', disputeDate: '08/03/2023', time: '01:00 PM', service: 'Loc Retwist', price: '$80' },
    { id: 10, userName: 'Jaydon Sarris', shopName: 'Thomas Skin Care', disputeDate: '11/08/2023', time: '01:00 PM', service: 'Loc Retwist', price: '$80' },
    { id: 11, userName: 'Ryan Siphron', shopName: 'Chance Skin Care', disputeDate: '11/08/2023', time: '01:00 PM', service: 'Loc Retwist', price: '$80' },
    { id: 12, userName: 'Makenna Lipshutz', shopName: 'Baptista Barber Shop', disputeDate: '11/08/2023', time: '01:00 PM', service: 'Loc Retwist', price: '$80' },
    { id: 13, userName: 'Anika Franci', shopName: 'James Day Spa', disputeDate: '11/08/2023', time: '01:00 PM', service: 'Loc Retwist', price: '$80' },
  ];

  const totalPages = Math.ceil(disputesData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = disputesData.slice(startIndex, endIndex);

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4  border-gray-200 ">
        <h1 className="text-[#2F2F2F]  text-[50px]  font-semibold font-[Rasa]">Dispute Resolution</h1>
      </div>
      <div className="py-4 px-2"
        style={{
          boxShadow: "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040",
        }}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50 text-[20px]">
              <tr>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-gray-200">#</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-gray-200">User Name</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-gray-200">Shop Name</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-gray-200">Dispute Date</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-gray-200">Time</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-gray-200">Service</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-gray-200">Price</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-gray-200">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {currentData.map((dispute, index) => (
                <tr key={dispute.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-2 whitespace-nowrap text-[20px] text-[#2F2F2F2] border border-gray-200">{startIndex + index + 1}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-[20px] text-[#2F2F2F2] border border-gray-200">{dispute.userName}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-[20px] text-[#2F2F2F2] border border-gray-200">{dispute.disputeDate}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-[20px] text-[#2F2F2F2] border border-gray-200">{dispute.shopName}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-[20px] text-[#2F2F2F2] border border-gray-200">{dispute.time}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-[20px] text-[#2F2F2F2] border border-gray-200">{dispute.service}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-[20px] text-[#2F2F2F2] border border-gray-200">{dispute.price}</td>
                  <td className="px-4 py-2 whitespace-nowrap border border-gray-200">
                    <div className="flex items-center gap-2">
                      <Link to={`/dashboard/dispute-resolution/view/${dispute.id}`} className="p-1 text-gray-400 hover:text-green-600 transition-colors rounded">
                        <Eye className="w-5 h-5" />
                      </Link>
                      <button onClick={() => handleDeleteClick(dispute.id)} className="p-1 text-gray-400 hover:text-red-600 transition-colors rounded">
                        <Trash2 className="w-5 h-5" />
                      </button>
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
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-[300px] text-center">
            <h2 className="text-xl font-medium text-gray-900 mb-4">Are you sure?</h2>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default DisputeResolution;