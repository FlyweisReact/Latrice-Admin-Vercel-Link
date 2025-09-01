import React from "react";
import { Trash2 } from "lucide-react";

const PushNotification = () => {
  return (
    <div className="p-6 lg:p-2 w-full font-[Rasa]">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Push Notification
      </h1>

      {/* Notification Form */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Send To */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-800 mb-2">Send To</label>
            <div className="flex gap-2">
              <button className="flex-1 border rounded-md px-4 py-2 text-sm font-medium bg-[#2F2F2F] text-white shadow-sm">
                All
              </button>
              <button className="flex-1 border rounded-md px-4 py-2 text-sm font-medium text-gray-700 bg-white shadow-sm hover:bg-gray-50">
                Single
              </button>
            </div>
          </div>

          {/* To Whom */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-800 mb-2">
              To Whom Would You Send
            </label>
            <select className="border rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400">
              <option>All</option>
            </select>
          </div>

          {/* Select Individual */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-400 mb-2">
              Select The Individual
            </label>
            <select
              disabled
              className="border rounded-md px-3 py-2 text-sm text-gray-400 bg-gray-100"
            >
              <option>Select...</option>
            </select>
          </div>

          {/* Notification Title */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-800 mb-2">
              Notification Title
            </label>
            <input
              type="text"
              placeholder="Write here"
              className="border rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Notification Content */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-800 mb-2">
              Notification Content
            </label>
            <textarea
              rows="3"
              maxLength="10000"
              placeholder="Write here"
              className="border rounded-md px-3 py-2 text-sm text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <p className="text-right text-xs text-gray-400 mt-1">0/10000</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6 w-1/2">
          <button className="flex-1 bg-[#FFCC4E] hover:bg-yellow-500 text-black font-medium rounded-md py-2 shadow">
            Send
          </button>
          <button className="flex-1 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-md py-2 shadow">
            Cancel
          </button>
        </div>
      </div>

      {/* Notifications Table */}
      <div className="mt-8 bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full text-sm text-gray-700">
          <thead className="bg-[#2F2F2F] text-white">
            <tr>
              <th className="px-4 py-3 text-left">NOTIFICATION TITLE</th>
              <th className="px-4 py-3 text-left">NOTIFICATION CONTENT</th>
              <th className="px-4 py-3 text-left">NOTIFICATION STATUS</th>
              <th className="px-4 py-3 text-left">DATE</th>
              <th className="px-4 py-3 text-left">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((i) => (
              <tr
                key={i}
                className="border-t last:border-b bg-white hover:bg-gray-50"
              >
                <td className="px-4 py-3">Notification Title Display Here</td>
                <td className="px-4 py-3">
                  Your Notification Message Display Here...
                </td>
                <td className="px-4 py-3">Unread</td>
                <td className="px-4 py-3">27 Aug 2024</td>
                <td className="px-4 py-3">
                  <button className="text-red-600 hover:text-red-800">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Delete All */}
        <div className="p-4">
          <button className="w-1/4 bg-[#2F2F2F] text-white py-2 rounded-md font-medium hover:bg-gray-900">
            Delete All
          </button>
        </div>
      </div>
    </div>
  );
};

export default PushNotification;
