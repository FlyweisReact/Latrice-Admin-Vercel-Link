// app/dashboard/page.tsx (Next.js App Router)
"use client";
import { useState } from "react";
import { FiHome, FiUsers, FiBell, FiSettings, FiEye, FiTrash2 } from "react-icons/fi";
import { MdOutlineContentPaste } from "react-icons/md";
import { BsWallet2 } from "react-icons/bs";
import { TbMessage2 } from "react-icons/tb";
import { FaScissors } from "react-icons/fa";

const menuItems = [
  { label: "Dashboard", icon: <FiHome /> },
  { label: "Salons", icon: <FaScissors /> },
  { label: "Independents", icon: <FaScissors /> },
  { label: "Users", icon: <FiUsers /> },
  { label: "Monitor Hiring", icon: <FiUsers /> },
  { label: "Dispute Resolution", icon: <TbMessage2 /> },
  { label: "Content Management System", icon: <MdOutlineContentPaste /> },
  { label: "Commission and Revenue Management", icon: <BsWallet2 /> },
  { label: "Payout Management", icon: <BsWallet2 /> },
  { label: "Create Promotions", icon: <TbMessage2 /> },
  { label: "Push Notification", icon: <FiBell /> },
  { label: "Log Out", icon: <FiSettings /> },
];

const data = [
  { id: 1, user: "Wilson George", shop: "Sexy Braids", date: "06/06/2023", time: "01:00 PM", service: "Loc Retwist", price: "$80" },
  { id: 2, user: "Erin Lubin", shop: "Nixon Day Spa", date: "09/10/2023", time: "01:00 PM", service: "Loc Retwist", price: "$80" },
  { id: 3, user: "Ashlynn Gouse", shop: "Ace Spa", date: "12/22/2023", time: "01:00 PM", service: "Loc Retwist", price: "$80" },
  { id: 4, user: "Miracle Arcand", shop: "SC Barber Shop", date: "03/02/2023", time: "01:00 PM", service: "Loc Retwist", price: "$80" },
];

export default function Dashboard() {
  const [active, setActive] = useState("Dispute Resolution");

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-black text-white flex flex-col">
        <div className="text-2xl font-bold p-6">Latrice</div>
        <nav className="flex-1">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActive(item.label)}
              className={`flex items-center gap-3 w-full px-6 py-3 text-left hover:bg-yellow-600/20 ${
                active === item.label ? "bg-yellow-600 text-black rounded-lg mx-3" : "text-gray-300"
              }`}
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-white shadow">
          <div className="flex items-center w-1/2">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full px-4 py-2 border rounded-l-md focus:outline-none"
            />
            <button className="bg-yellow-500 px-4 py-2 rounded-r-md">
              🔍
            </button>
          </div>
          <div className="flex items-center gap-4">
            <FiSettings className="text-xl cursor-pointer" />
            <FiBell className="text-xl cursor-pointer" />
            <div className="flex items-center gap-2">
              <img
                src="https://i.pravatar.cc/40"
                className="w-10 h-10 rounded-full border"
                alt="profile"
              />
              <span className="font-semibold">Leo Aminoff</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-6">{active}</h1>

          {/* Table */}
          <div className="bg-white rounded-xl shadow p-4">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b text-gray-600">
                  <th className="p-3">#</th>
                  <th className="p-3">User Name</th>
                  <th className="p-3">Shop Name</th>
                  <th className="p-3">Dispute Date</th>
                  <th className="p-3">Time</th>
                  <th className="p-3">Service</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{row.id}</td>
                    <td className="p-3">{row.user}</td>
                    <td className="p-3">{row.shop}</td>
                    <td className="p-3">{row.date}</td>
                    <td className="p-3">{row.time}</td>
                    <td className="p-3">{row.service}</td>
                    <td className="p-3">{row.price}</td>
                    <td className="p-3 flex gap-2">
                      <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
                        <FiEye />
                      </button>
                      <button className="p-2 bg-gray-100 rounded hover:bg-red-200">
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-2">
                <button className="px-3 py-1 border rounded">1</button>
                <button className="px-3 py-1 border rounded">2</button>
                <button className="px-3 py-1 border rounded">3</button>
              </div>
              <div className="flex items-center gap-2">
                <span>10</span>
                <span>/Page</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
