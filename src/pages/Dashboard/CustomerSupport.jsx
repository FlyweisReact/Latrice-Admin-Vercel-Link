import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, Trash2, ChevronDown } from "lucide-react";

const CustomerSupport = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filter, setFilter] = useState("All");
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedTicketId, setSelectedTicketId] = useState(null);
  const [supportData, setSupportData] = useState([
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
  ]);

  const handleDeleteClick = (id) => {
    setSelectedTicketId(id);
    setShowDeletePopup(true);
  };

  const handleDeleteConfirm = () => {
    setSupportData((prevData) =>
      prevData.filter((ticket) => ticket.id !== selectedTicketId)
    );
    setShowDeletePopup(false);
    setSelectedTicketId(null);
  };

  const handleDeleteCancel = () => {
    setShowDeletePopup(false);
    setSelectedTicketId(null);
  };

  const totalPages = Math.ceil(supportData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = supportData.slice(startIndex, endIndex);

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-2 border-b border-gray-200">
        <h1 className="text-[50px] font-[Rasa] font-semibold text-[#2f2f2f]">
          Customer Support
        </h1>
        <div className="relative">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-[20px] font-[Rasa] text-[#2f2f2f] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-[120px]"
          >
            <option value="All">All</option>
            <option value="Open">Open</option>
            <option value="Pending">Pending</option>
            <option value="Resolved">Resolved</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>
      </div>
      <div className="py-4 px-2 rounded-xl" style={{ boxShadow: "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040" }}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50 text-[20px]">
              <tr>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF] w-16">#</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF] min-w-[150px]">Name</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF] min-w-[100px]">Country</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF] min-w-[150px]">Email</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF] min-w-[120px]">Date</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF] min-w-[200px]">Question</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF] min-w-[100px]">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentData.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{ticket.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{ticket.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{ticket.country}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{ticket.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{ticket.date}</td>
                  <td className="px-6 py-4 text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF] truncate max-w-xs">{ticket.question}</td>
                  <td className="px-6 py-4 whitespace-nowrap border border-[#E9ECEF]">
                    <div className="flex items-center gap-2">
                      <div className="border-2 rounded-[6px] border-[#E9ECEF]">
                        <button
                          onClick={() => navigate(`/dashboard/customer-support/view/${ticket.id}`)}
                          className="p-2 text-gray-400 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50"
                        >
                          <Eye className="w-4 h-4 text-black" />
                        </button>
                      </div>
                      <div className="border-2 rounded-[6px] border-[#E9ECEF]">
                        <button
                          onClick={() => handleDeleteClick(ticket.id)}
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
              <div className={`${currentPage === i + 1 ? "border border-[#2F2F2F]" : "border border-[#CED4DA] rounded"}`} key={i}>
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "text-black border border-[#2F2F2F]" : "hover:bg-gray-100"}`}
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
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
            <span className="text-sm text-gray-600">/Page</span>
          </div>
        </div>
      </div>
      {showDeletePopup && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-[300px] text-center">
            <h2 className="text-xl font-[Rasa] font-medium text-gray-900 mb-4">Are you sure?</h2>
            <p className="text-sm text-gray-600 mb-4">
              {supportData.find((s) => s.id === selectedTicketId)?.name} -{" "}
              {supportData.find((s) => s.id === selectedTicketId)?.date}
            </p>
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