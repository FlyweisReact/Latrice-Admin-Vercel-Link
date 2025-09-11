import React from "react";
import { ArrowUpRight, ChevronLeft, ExternalLink } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const WalletIndependent = () => {
  const nav = useNavigate();
  const data = [
    {
      id: 1,
      name: "Alyvia Kelley",
      service: "Hair Cut",
      date: "06/06/2023",
      mode: "Credit Card",
      amount: "$180.00",
      txn: "12345678910111213",
    },
    {
      id: 2,
      name: "Jaiden Nixon",
      service: "Hair Cut",
      date: "09/10/2023",
      mode: "UPI",
      amount: "$180.00",
      txn: "12345678910111213",
    },
    {
      id: 3,
      name: "Ace Foley",
      service: "Hair Cut",
      date: "12/22/2023",
      mode: "PayPal",
      amount: "$180.00",
      txn: "12345678910111213",
    },
    {
      id: 4,
      name: "Nikolai Schmidt",
      service: "Hair Cut",
      date: "03/02/2023",
      mode: "Wallet",
      amount: "$180.00",
      txn: "12345678910111213",
    },
    {
      id: 5,
      name: "Clayton Charles",
      service: "Box Braids",
      date: "10/10/2023",
      mode: "Debit Card",
      amount: "$180.00",
      txn: "12345678910111213",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full overflow-x-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-3 font-[rasa]">
        <div className="flex items-center space-x-2">
          <div className="cursor-pointer" onClick={() => nav(-1)}><FaArrowLeft /></div>
          <h2 className="text-xl font-semibold">Sexy Braids’s Wallet</h2>
        </div>
        <h2 className="text-xl font-bold">$100</h2>
        <div className="flex space-x-4 text-sm">
          {["Daily", "Weekly", "Monthly", "Yearly"].map((label, idx) => (
            <label
              key={label}
              className="flex items-center space-x-1 cursor-pointer"
            >
              <input
                type="radio"
                name="range"
                defaultChecked={idx === 0}
                className="accent-black"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-sm text-gray-700">
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">User Name</th>
              <th className="p-3 text-left">Service Name</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Payment Mode</th>
              <th className="p-3 text-left">Payment Amount</th>
              <th className="p-3 text-left">Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={row.id}
                className="border-b last:border-0 hover:bg-gray-50 text-sm"
              >
                <td className="p-3">{idx + 1}</td>
                <td className="p-3">{row.name}</td>
                <td className="p-3">{row.service}</td>
                <td className="p-3 font-medium">{row.date}</td>
                <td className="p-3 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span>{row.mode}</span>
                </td>
                <td className="p-3">{row.amount}</td>
                <td className="p-3 flex items-center justify-start space-x-2">
                  <Link
                    to={`/dashboard/independents/wallet/transaction/${row.txn}`}
                    className="hover:underline"
                  >
                    {row.txn}
                  </Link>
                  <Link
                    to={`/dashboard/independents/wallet/transaction/${row.txn}`}
                    className="w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-md flex items-center justify-center transition-colors duration-200"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-3">
        <div className="flex items-center space-x-2 text-sm">
          <button className="px-2 py-1 border rounded bg-gray-100">‹</button>
          <button className="px-2 py-1 border rounded bg-black text-white">
            1
          </button>
          <button className="px-2 py-1 border rounded">2</button>
          <button className="px-2 py-1 border rounded">3</button>
          <button className="px-2 py-1 border rounded">4</button>
          <button className="px-2 py-1 border rounded bg-gray-100">›</button>
        </div>

        <div className="text-sm flex items-center space-x-2">
          <select className="border rounded px-2 py-1">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          <span>/Page</span>
        </div>
      </div>
    </div>
  );
};

export default WalletIndependent;
