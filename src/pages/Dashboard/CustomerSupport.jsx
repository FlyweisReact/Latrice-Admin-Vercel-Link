import React, { useState } from "react";
import { Trash2, Eye } from "lucide-react";

const CustomerSupport = () => {
  const [currentPage, setCurrentPage] = useState(1);

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

  const totalPages = 4;

  return (
    <div className="p-6 lg:p-2 w-full max-w-full font-[Rasa]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4 w-full">
        <h1 className="text-3xl font-bold text-gray-900 font-[Rasa]">
          Customer Support
        </h1>

        {/* Dropdown Filter */}
        <select className="border border-gray-300 rounded px-3 py-2 text-sm w-40">
          <option>All</option>
          <option>Open</option>
          <option>Pending</option>
          <option>Resolved</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow border border-gray-200 w-full">
        <div className="overflow-x-auto w-full">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="py-3 px-4 text-sm font-bold text-gray-700 text-left">#</th>
                <th className="py-3 px-4 text-sm font-bold text-gray-700 text-left">Name</th>
                <th className="py-3 px-4 text-sm font-bold text-gray-700 text-left">Country</th>
                <th className="py-3 px-4 text-sm font-bold text-gray-700 text-left">Email</th>
                <th className="py-3 px-4 text-sm font-bold text-gray-700 text-left">Date</th>
                <th className="py-3 px-4 text-sm font-bold text-gray-700 text-left">Question</th>
                <th className="py-3 px-4 text-sm font-bold text-gray-700 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {supportData.map((ticket) => (
                <tr key={ticket.id}>
                  <td className="py-3 px-4 text-sm text-gray-700">{ticket.id}</td>
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">{ticket.name}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{ticket.country}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{ticket.email}</td>
                  <td className="py-3 px-4 text-sm font-semibold text-gray-700">{ticket.date}</td>
                  <td className="py-3 px-4 text-sm text-gray-700 truncate max-w-xs">{ticket.question}</td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded flex items-center justify-center transition-colors duration-200">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded flex items-center justify-center transition-colors duration-200">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 py-3 bg-gray-50 border-t border-gray-200 w-full">
          <div className="flex items-center space-x-1 justify-center sm:justify-start mb-3 sm:mb-0">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
            >
              ‹
            </button>

            {[1, 2, 3, 4].map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-8 h-8 flex items-center justify-center rounded text-sm font-medium ${
                  currentPage === pageNum
                    ? "bg-gray-900 text-white"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {pageNum}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
            >
              ›
            </button>
          </div>

          <div className="flex items-center justify-center sm:justify-end space-x-2 text-sm text-gray-600 font-[Rasa]">
            <select className="border border-gray-300 rounded px-2 py-1 text-sm">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
            <span>/Page</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
