import React from "react";
import { Trash2, Edit2 } from "lucide-react";

const SupportContent = () => {
  const supportData = [
    {
      name: "Name",
      mobile: "+1 321 0945 3345",
      email: "admin@mail.com",
      state: "New York",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Name",
      mobile: "+91 921 0945 3345",
      email: "info@mail.com",
      state: "New York",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Name",
      mobile: "+1 321 0945 3345",
      email: "admin@mail.com",
      state: "New York",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {supportData.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow border border-gray-200 p-4 relative"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <h3 className="font-medium text-gray-800">{item.name}</h3>
            </div>
            <button className="text-red-500 hover:text-red-600">
              <Trash2 size={18} />
            </button>
          </div>

          {/* Details */}
          <div className="text-gray-700 space-y-3">
            <div className="flex items-center justify-between border-b pb-1">
              <div>
                <p className="text-sm font-medium">Mobile number</p>
                <p className="text-sm text-gray-500">{item.mobile}</p>
              </div>
              <Edit2 size={16} className="text-gray-500 cursor-pointer" />
            </div>

            <div className="flex items-center justify-between border-b pb-1">
              <div>
                <p className="text-sm font-medium">Email ID</p>
                <p className="text-sm text-gray-500">{item.email}</p>
              </div>
              <Edit2 size={16} className="text-gray-500 cursor-pointer" />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">State</p>
                <p className="text-sm text-gray-500">{item.state}</p>
              </div>
              <Edit2 size={16} className="text-gray-500 cursor-pointer" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SupportContent;
