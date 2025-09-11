import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TransactionViewIndependent = () => {
    const navigate=useNavigate();
  return (
    <div className="w-full min-h-screen bg-[#FAF9F6]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <FaArrowLeft className="text-black text-xl cursor-pointer"  onClick={()=>navigate(-1)}/>
        <h1 className="font-rasa text-[36px] font-bold text-black">
          Transaction Details
        </h1>
      </div>

      {/* User & Shop Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 rounded-lg bg-white"
        style={{
            boxShadow: "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040",
          }}>
        {/* User Details */}
        <div className=" rounded-lg p-5 "
  
        >
          <h2 className="font-poppins text-xl font-semibold mb-4">
            User Details
          </h2>
          <div className="flex items-center gap-4  rounded-lg p-4"
          style={{
            boxShadow: "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040",
          }}>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="user"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="font-poppins text-sm">
              <p className="font-semibold text-black">Wilson George</p>
              <p className="text-gray-700">+1 (778) 745 2369</p>
              <p className="text-gray-700">Email ID : email@example.com</p>
            </div>
          </div>
        </div>

        {/* Shop Details */}
        <div className=" rounded-lg p-5 "
        >
          <h2 className="font-poppins text-xl font-semibold mb-4">
            Shop Details
          </h2>
          <div className="flex items-center gap-4  rounded-lg p-4"
          style={{
            boxShadow: "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040",
          }}>
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=100&q=80"
              alt="shop"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="font-poppins text-sm">
              <p className="font-semibold text-black">Sexy Braids</p>
              <p className="text-gray-700">+1 (778) 745 2369</p>
              <p className="text-gray-700">Email ID : email@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Details */}
      <div className="bg-white rounded-lg px-10 py-8 shadow-md" 
        style={{
            boxShadow: "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040",
          }}
      >
        <h2 className="font-poppins text-xl font-semibold mb-6">
          Payment Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-poppins">
          {/* Total Amount */}
          <div>
            <p className="text-gray-700 mb-2">Total Amount</p>
            <input
              type="text"
              value="$180"
              readOnly
              className="w-full border rounded-md px-3 py-2 bg-white"
            />
          </div>

          {/* Status */}
          <div>
            <p className="text-gray-700 mb-2">Status</p>
            <input
              type="text"
              value="Completed"
              readOnly
              className="w-full border rounded-md px-3 py-2 bg-white"
            />
          </div>

          {/* Payment Method */}
          <div>
            <p className="text-gray-700 mb-2">Payment Method</p>
            <input
              type="text"
              value="Credit Card"
              readOnly
              className="w-full border rounded-md px-3 py-2 bg-white"
            />
          </div>

          {/* Transaction ID */}
          <div>
            <p className="text-gray-700 mb-2">Transaction ID</p>
            <input
              type="text"
              value="1234567891011213"
              readOnly
              className="w-full border rounded-md px-3 py-2 bg-white"
            />
          </div>

          {/* Service */}
          <div>
            <p className="text-gray-700 mb-2">Service</p>
            <input
              type="text"
              value="Hair Cut"
              readOnly
              className="w-full border rounded-md px-3 py-2 bg-white"
            />
          </div>

          {/* Date */}
          <div>
            <p className="text-gray-700 mb-2">Date</p>
            <input
              type="text"
              value="06/08/2023"
              readOnly
              className="w-full border rounded-md px-3 py-2 bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionViewIndependent;
