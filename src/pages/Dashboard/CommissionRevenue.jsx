import React, { useState } from "react";
import { ArrowUpRight, ChevronDown, Send } from "lucide-react";

const CommissionRevenue = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

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

  const getStatusColor = (statusType) => {
    switch (statusType) {
      case "completed":
        return "bg-[#56BA28] text-white px-7 py-1 rounded-[100px] ";
      case "remaining":
        return "bg-[#FFCC4E] text-[#2F2F2F] px-7 py-1 rounded-[100px] ";
      default:
        return "bg-gray-600";
    }
  };

  const getStatusDot = (statusType) => {
    switch (statusType) {
      case "completed":
        return "bg-green-500";
      case "remaining":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  const totalPages = Math.ceil(commissionData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = commissionData.slice(startIndex, endIndex);

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-2 border-b border-gray-200">
        <h1 className="text-[50px] font-[Rasa] font-semibold text-[#2f2f2f]">
          Commission and Revenue Management
        </h1>
        <div className="relative">
          <select
            className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-[20px] font-[Rasa] text-[#2f2f2f] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-[120px]"
          >
            <option>Sort By</option>
            <option>Name</option>
            <option>Amount</option>
            <option>Status</option>
            <option>Invited People</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>
      </div>
      <div className="py-4 px-2 rounded-xl" style={{ boxShadow: "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040" }}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50 text-[20px]">
              <tr>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">#</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Name</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Invited People</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Status</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Amount</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Send</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">
                    {item.invitedPeople.toString().padStart(2, "0")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border border-[#E9ECEF]">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full`}></div>
                      <span className={`text-[20px] font-[Rasa] ${getStatusColor(item.statusType)}`}>{item.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{item.amount}</td>
                  <td className="px-2 py-4 whitespace-nowrap border border-[#E9ECEF]">
                    <div className={`flex items-center justify-center  }`}>
                      <button
                        className=" text-gray-400 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50"
                      >
                      <ArrowUpRight className={`w-6 h-6 ${item.statusType === "remaining" ? "border border-[#E9ECEF]" : "text-white rounded bg-[#56BA28]" }`} />
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

export default CommissionRevenue;