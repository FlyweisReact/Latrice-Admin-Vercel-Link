import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const PayoutManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const payoutData = [
    { id: 1, name: "Wilson George", email: "email@example.com", date: "06/06/2023", time: "01:00 PM", amount: "$400" },
    { id: 2, name: "Erin Lubin", email: "email@example.com", date: "09/10/2023", time: "01:00 PM", amount: "$500" },
    { id: 3, name: "Ashlynn Gouse", email: "email@example.com", date: "12/22/2023", time: "01:00 PM", amount: "$750" },
    { id: 4, name: "Miracle Arcand", email: "email@example.com", date: "03/02/2023", time: "01:00 PM", amount: "$369" },
    { id: 5, name: "Cooper Rosser", email: "email@example.com", date: "10/10/2023", time: "01:00 PM", amount: "$240" },
    { id: 6, name: "Livia Herwitz", email: "email@example.com", date: "07/05/2023", time: "01:00 PM", amount: "$470" },
    { id: 7, name: "Justin Botosh", email: "email@example.com", date: "05/06/2023", time: "01:00 PM", amount: "$782" },
    { id: 8, name: "Rayna Donin", email: "email@example.com", date: "02/01/2023", time: "01:00 PM", amount: "$480" },
    { id: 9, name: "Lincoln Aminoff", email: "email@example.com", date: "08/03/2023", time: "01:00 PM", amount: "$367" },
    { id: 10, name: "Jaydon Saris", email: "email@example.com", date: "11/08/2023", time: "01:00 PM", amount: "$785" },
    { id: 11, name: "Ryan Siphron", email: "email@example.com", date: "11/08/2023", time: "01:00 PM", amount: "$350" },
    { id: 12, name: "Makenna Lipshutz", email: "email@example.com", date: "11/08/2023", time: "01:00 PM", amount: "$870" },
    { id: 13, name: "Anika Franci", email: "email@example.com", date: "11/08/2023", time: "01:00 PM", amount: "$480" },
  ];

  const totalPages = 4;

  return (
    <div className="p-6 lg:p-2 w-full max-w-full font-[Rasa]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 w-full">
        <h1 className="text-3xl font-bold text-gray-900 font-[Rasa]">
          Payout Management
        </h1>

        <div className="flex items-center gap-2">
          <button className="px-4 py-1.5 rounded border text-sm font-medium bg-gray-900 text-white">
            Day
          </button>
          <button className="px-4 py-1.5 rounded border text-sm font-medium text-gray-600 bg-gray-100">
            Week
          </button>
          <button className="px-4 py-1.5 rounded border text-sm font-medium text-gray-600 bg-gray-100">
            Month
          </button>
          <button className="px-4 py-1.5 rounded border text-sm font-medium text-gray-600 bg-gray-100">
            Last 3 month
          </button>
          <button className="ml-3 px-4 py-1.5 rounded border text-sm font-medium text-gray-700 bg-white shadow-sm flex items-center gap-2">
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow border border-gray-200 w-full">
        <div className="overflow-x-auto w-full">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="py-3 px-6 text-sm font-bold text-gray-700 text-left">#</th>
                <th className="py-3 px-6 text-sm font-bold text-gray-700 text-left">Full Name</th>
                <th className="py-3 px-6 text-sm font-bold text-gray-700 text-left">Email</th>
                <th className="py-3 px-6 text-sm font-bold text-gray-700 text-left">Date</th>
                <th className="py-3 px-6 text-sm font-bold text-gray-700 text-left">Time</th>
                <th className="py-3 px-6 text-sm font-bold text-gray-700 text-left">Amount</th>
                <th className="py-3 px-6 text-sm font-bold text-gray-700 text-left">Send</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {payoutData.map((item) => (
                <tr key={item.id}>
                  <td className="py-3 px-6 text-sm text-gray-700">{item.id}</td>
                  <td className="py-3 px-6 text-sm font-medium text-gray-900">{item.name}</td>
                  <td className="py-3 px-6 text-sm text-gray-700">{item.email}</td>
                  <td className="py-3 px-6 text-sm text-gray-700">{item.date}</td>
                  <td className="py-3 px-6 text-sm text-gray-700">{item.time}</td>
                  <td className="py-3 px-6 text-sm font-medium text-gray-900">{item.amount}</td>
                  <td className="py-3 px-6">
                    <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-md flex items-center justify-center transition-colors duration-200">
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 py-3 bg-gray-50 border-t border-gray-200 w-full">
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
            <span>/page</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayoutManagement;
