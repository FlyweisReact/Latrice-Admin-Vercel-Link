import React, { useState } from "react";
import { ChevronDown, Send, ArrowUpRight } from "lucide-react";

const CommissionRevenue = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const commissionData = [
    { id: 1, name: "Miracle Siphron", invitedPeople: 10, status: "Completed", amount: "$100", statusType: "completed" },
    { id: 2, name: "Wilson Curtis", invitedPeople: 10, status: "Completed", amount: "$100", statusType: "completed" },
    { id: 3, name: "Maria Ekstrom", invitedPeople: 8, status: "2 Remaining", amount: "$80", statusType: "remaining" },
    { id: 4, name: "Cooper Dias", invitedPeople: 7, status: "3 Remaining", amount: "$70", statusType: "remaining" },
    { id: 5, name: "Tiana Levin", invitedPeople: 8, status: "2 Remaining", amount: "$80", statusType: "remaining" },
    { id: 6, name: "Gustavo Press", invitedPeople: 1, status: "9 Remaining", amount: "$10", statusType: "remaining" },
    { id: 7, name: "Emery Baptista", invitedPeople: 4, status: "6 Remaining", amount: "$40", statusType: "remaining" },
    { id: 8, name: "Makenna Dias", invitedPeople: 3, status: "7 Remaining", amount: "$30", statusType: "remaining" },
    { id: 9, name: "Marilyn Workman", invitedPeople: 2, status: "8 Remaining", amount: "$20", statusType: "remaining" },
    { id: 10, name: "Haylie Carder", invitedPeople: 9, status: "1 Remaining", amount: "$90", statusType: "remaining" },
    { id: 11, name: "Angel Torff", invitedPeople: 6, status: "4 Remaining", amount: "$60", statusType: "remaining" },
    { id: 12, name: "Nolan Bergson", invitedPeople: 7, status: "3 Remaining", amount: "$70", statusType: "remaining" },
    { id: 13, name: "Talan Siphron", invitedPeople: 9, status: "1 Remaining", amount: "$90", statusType: "remaining" },
  ];

  const totalPages = 10;
  const pageNumbers = [1, 2, 3, 4];

  const StatusBadge = ({ status, type }) =>
    type === "completed" ? (
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500 text-white">
        {status}
      </span>
    ) : (
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-400 text-white">
        {status}
      </span>
    );

  const ActionButton = ({ type }) =>
    type === "completed" ? (
      <button className="w-8 h-8 bg-green-500 hover:bg-green-600 text-white rounded-md flex items-center justify-center transition-colors duration-200 shadow-sm">
        <Send className="w-4 h-4" />
      </button>
    ) : (
      <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-md flex items-center justify-center transition-colors duration-200">
        <ArrowUpRight className="w-4 h-4" />
      </button>
    );

  return (
    <div className="p-4 lg:p-2 w-full max-w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 font-[Rasa]">
          Commission and Revenue Management
        </h1>
        <div className="relative w-full sm:w-auto">
          <select className="appearance-none w-full sm:w-48 bg-white border border-gray-300 rounded-md px-4 py-2 pr-10 text-sm text-gray-700">
            <option>Sort By</option>
            <option>Name</option>
            <option>Amount</option>
            <option>Status</option>
            <option>Invited People</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow border border-gray-200 w-full">
        <div className="overflow-x-auto w-full">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="py-3 px-4 sm:px-6 text-sm font-bold text-gray-700 font-[Rasa] text-left">#</th>
                <th className="py-3 px-4 sm:px-6 text-sm font-bold text-gray-700 font-[Rasa] text-left">Name</th>
                <th className="py-3 px-4 sm:px-6 text-sm font-bold text-gray-700 font-[Rasa] text-left">Invited People</th>
                <th className="py-3 px-4 sm:px-6 text-sm font-bold text-gray-700 font-[Rasa] text-left">Status</th>
                <th className="py-3 px-4 sm:px-6 text-sm font-bold text-gray-700 font-[Rasa] text-left">Amount</th>
                <th className="py-3 px-4 sm:px-6 text-sm font-bold text-gray-700 font-[Rasa] text-left">Send</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {commissionData.map((item) => (
                <tr key={item.id}>
                  <td className="py-3 px-4 sm:px-6 text-sm text-gray-700 font-[Rasa]">{item.id}</td>
                  <td className="py-3 px-4 sm:px-6 text-sm text-gray-900 font-medium font-[Rasa]">{item.name}</td>
                  <td className="py-3 px-4 sm:px-6 text-sm text-gray-700 font-[Rasa]">
                    {item.invitedPeople.toString().padStart(2, "0")}
                  </td>
                  <td className="py-3 px-4 sm:px-6">
                    <StatusBadge status={item.status} type={item.statusType} />
                  </td>
                  <td className="py-3 px-4 sm:px-6 text-sm text-gray-900 font-medium font-[Rasa]">{item.amount}</td>
                  <td className="py-3 px-4 sm:px-6">
                    <ActionButton type={item.statusType} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3 bg-gray-50 border-t border-gray-200 w-full">
          <div className="flex items-center space-x-1 justify-center sm:justify-start mb-3 sm:mb-0">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
            >
              ‹
            </button>

            {pageNumbers.map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-8 h-8 flex items-center justify-center rounded text-sm font-medium ${
                  currentPage === pageNum
                    ? "bg-blue-600 text-white"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {pageNum}
              </button>
            ))}

            <span className="w-8 h-8 flex items-center justify-center text-gray-400">...</span>

            <button
              onClick={() => setCurrentPage(totalPages)}
              className={`w-8 h-8 flex items-center justify-center rounded text-sm font-medium ${
                currentPage === totalPages
                  ? "bg-blue-600 text-white"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {totalPages}
            </button>

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
            <span>/page</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommissionRevenue;
