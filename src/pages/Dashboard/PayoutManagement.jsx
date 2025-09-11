import React, { useState } from "react";
import { Send, Plus, ArrowUpRight } from "lucide-react";

const PayoutManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

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

  const totalPages = Math.ceil(payoutData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = payoutData.slice(startIndex, endIndex);

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-2 border-b border-gray-200">
        <h1 className="text-[50px] font-[Rasa] font-semibold text-[#2f2f2f]">
          Payout Management
        </h1>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-[20px] font-[Rasa] text-[#2f2f2f] hover:bg-gray-50 transition-colors">
            Day
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-[20px] font-[Rasa] text-[#2f2f2f] hover:bg-gray-50 transition-colors">
            Week
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-[20px] font-[Rasa] text-[#2f2f2f] hover:bg-gray-50 transition-colors">
            Month
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-[20px] font-[Rasa] text-[#2f2f2f] hover:bg-gray-50 transition-colors">
            Last 3 Months
          </button>
          <button className="ml-3 px-4 py-2 bg-white border border-gray-300 rounded-lg text-[20px] font-[Rasa] text-[#2f2f2f] hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>
      <div className="py-4 px-2 rounded-xl" style={{ boxShadow: "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040" }}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50 text-[20px]">
              <tr>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">#</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Full Name</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Email</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Date</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Time</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Amount</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Send</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{item.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{item.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{item.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{item.amount}</td>
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
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
            <span className="text-sm text-gray-600">/Page</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayoutManagement;