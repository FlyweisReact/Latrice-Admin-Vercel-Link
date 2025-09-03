import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2, Eye } from "lucide-react";

const CustomerSupport = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filter, setFilter] = useState("All");
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedSalonId, setSelectedSalonId] = useState(null);

  const handleDeleteClick = (id) => {
    setSelectedSalonId(id);
    setShowDeletePopup(true);
  };

  const handleDeleteConfirm = () => {
    setSalonsData((categoriesData) =>
      categoriesData.filter((salon) => salon.id !== selectedSalonId)
    );
    setShowDeletePopup(false);
    setSelectedSalonId(null);
  };

  const handleDeleteCancel = () => {
    setShowDeletePopup(false);
    setSelectedSalonId(null);
  };

  const supportData = [
    { id: 1, name: "Wilson George", country: "USA", email: "email@example.com", date: "06/06/2023", question: "Lorem Ipsum is simply dummy text..." },
    { id: 2, name: "Erin Lubin", country: "USA", email: "email@example.com", date: "09/10/2023", question: "Lorem Ipsum is simply dummy text..." },
    { id: 3, name: "Ashlynn Gouse", country: "USA", email: "email@example.com", date: "12/22/2023", question: "Lorem Ipsum is simply dummy text..." },
    { id: 4, name: "Miracle Arcand", country: "USA", email: "email@example.com", date: "03/02/2023", question: "Lorem Ipsum is simply dummy text..." },
    { id: 5, name: "Cooper Rosser", country: "USA", email: "email@example.com", date: "10/10/2023", question: "Lorem Ipsum is simply dummy text..." },
    { id: 6, name: "Livia Herwitz", country: "USA", email: "email@example.com", date: "07/05/2023", question: "Lorem Ipsum is simply dummy text..." },
    { id: 7, name: "Justin Botosh", country: "USA", email: "email@example.com", date: "05/06/2023", question: "Lorem Ipsum is simply dummy text..." },
    { id: 8, name: "Rayna Donin", country: "USA", email: "email@example.com", date: "02/01/2023", question: "Lorem Ipsum is simply dummy text..." },
    { id: 9, name: "Lincoln Aminoff", country: "USA", email: "email@example.com", date: "08/03/2023", question: "Lorem Ipsum is simply dummy text..." },
    { id: 10, name: "Jaydon Saris", country: "USA", email: "email@example.com", date: "11/08/2023", question: "Lorem Ipsum is simply dummy text..." },
    { id: 11, name: "Ryan Siphron", country: "USA", email: "email@example.com", date: "11/08/2023", question: "Lorem Ipsum is simply dummy text..." },
    { id: 12, name: "Makenna Lipshutz", country: "USA", email: "email@example.com", date: "11/08/2023", question: "Lorem Ipsum is simply dummy text..." },
    { id: 13, name: "Anika Franci", country: "USA", email: "email@example.com", date: "11/08/2023", question: "Lorem Ipsum is simply dummy text..." },
  ];

  const totalPages = Math.ceil(supportData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = supportData.slice(startIndex, endIndex);

  const handleDelete = (id) => {
    // Implement delete logic here (e.g., API call)
    console.log("Delete ticket:", id);
  };

  return (
    <div className="p-6 w-full max-w-full font-[Rasa] min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 border-b border-gray-200 pb-4">
        <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">
          Customer Support
        </h1>

        {/* Dropdown Filter */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm font-[Rasa] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-40"
        >
          <option value="All">All</option>
          <option value="Open">Open</option>
          <option value="Pending">Pending</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow border border-gray-200 w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="py-3 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider text-left w-16">#</th>
              <th className="py-3 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider text-left min-w-[150px]">Name</th>
              <th className="py-3 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider text-left min-w-[100px]">Country</th>
              <th className="py-3 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider text-left min-w-[150px]">Email</th>
              <th className="py-3 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider text-left min-w-[120px]">Date</th>
              <th className="py-3 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider text-left min-w-[200px]">Question</th>
              <th className="py-3 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider text-left min-w-[100px]">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentData.map((ticket) => (
              <tr key={ticket.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-3 px-6 text-sm text-gray-700">{ticket.id}</td>
                <td className="py-3 px-6 text-sm font-medium text-gray-900">{ticket.name}</td>
                <td className="py-3 px-6 text-sm text-gray-700">{ticket.country}</td>
                <td className="py-3 px-6 text-sm text-gray-700">{ticket.email}</td>
                <td className="py-3 px-6 text-sm font-semibold text-gray-700">{ticket.date}</td>
                <td className="py-3 px-6 text-sm text-gray-700 truncate max-w-xs">{ticket.question}</td>
                <td className="py-3 px-6 flex items-center gap-2">
                  <button
                    onClick={() => navigate(`/dashboard/customer-support/view/${ticket.id}`)}
                    className="w-8 h-8 bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-600 rounded flex items-center justify-center transition-colors duration-200"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(ticket.id)}
                    className="w-8 h-8 bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-600 rounded flex items-center justify-center transition-colors duration-200"
                  >
                    <Trash2 className="w-4 h-4" onClick={() => handleDeleteClick(ticket.id)}/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 py-4 bg-gray-50 border-t border-gray-200 w-full">
          <div className="flex items-center gap-2">
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="border border-gray-300 rounded-lg px-3 py-1 text-sm font-[Rasa] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
            <span className="text-sm font-[Rasa] text-gray-600">/page</span>
          </div>

          <div className="flex items-center gap-2 justify-center sm:justify-end mt-3 sm:mt-0">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              ‹
            </button>

            {[...Array(totalPages)].map((_, index) => {
              const pageNum = index + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-8 h-8 flex items-center justify-center rounded text-sm font-medium ${currentPage === pageNum
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              ›
            </button>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerSupport;