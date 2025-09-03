import React from "react";
import { Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreatePromotions = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 lg:p-2 w-full font-[Rasa]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Create Promotions</h1>
        <button
          onClick={() => navigate("/dashboard/create-promotions/add")}
          className="mt-4 md:mt-0 flex items-center gap-2 border rounded-md px-4 py-2 text-sm font-medium text-gray-700 bg-white shadow-sm hover:bg-gray-50"
        >
          <Plus className="w-4 h-4" />
          Create A Promotion
        </button>
      </div>

      {/* Promotions Container */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Promotion Card */}
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_150px] rounded-lg shadow-md bg-white overflow-hidden">
          {/* Left Side */}
          <div className="p-4 flex flex-col">
            <h2 className="text-lg font-semibold text-gray-900">
              Black Friday Sale At 2025
            </h2>

            <div className="mt-2 text-sm text-gray-700 space-y-1">
              <div className="flex justify-between">
                <span className="font-semibold">Start Date</span>
                <span>10.08.2025</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">End Date</span>
                <span>10.08.2025</span>
              </div>
            </div>

            {/* Deal Info */}
            <div className="mt-4">
              <div className="grid grid-cols-4 text-xs font-medium text-gray-600">
                <span>No. Deal</span>
                <span>Price</span>
                <span>Offer Price</span>
                <span className="text-right">Total Amount</span>
              </div>
              <div className="grid grid-cols-4 text-sm font-medium mt-1">
                <span>01</span>
                <span>$200</span>
                <span>$100</span>
                <span className="text-right text-pink-600">$100</span>
              </div>
            </div>
          </div>

          {/* Right Side Coupon */}
          <div className="relative flex flex-col items-center justify-center bg-gradient-to-br from-red-400 to-teal-900 text-white p-6">
            <button className="absolute top-2 right-2 p-1 bg-white text-gray-600 rounded hover:bg-gray-100 shadow">
              <Trash2 className="w-4 h-4" />
            </button>
            <h3 className="text-lg font-semibold">Latrice</h3>
            <p className="mt-2 text-xs uppercase tracking-wide text-gray-200">
              Coupon Code
            </p>
            <p className="mt-1 text-sm font-medium">SGCP 5902378</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePromotions;