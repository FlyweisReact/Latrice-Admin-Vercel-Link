import React, { use } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ViewSupportTicket = () => {
  const navigate=useNavigate();
  return (
    <div className="min-h-screen font-[rasa] p-4">
      {/* Header */}
      <div className="flex items-center mb-6">
        <ArrowLeft className="w-6 h-6 mr-2" onClick={()=>navigate('/dashboard/customer-support')}/>
        <h1 className="text-2xl font-bold">Review &amp; Reply</h1>
      </div>

      {/* Form Section */}
      <div className="max-w-full mx-auto space-y-5">
        {/* Full Name & Country */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">Full Name</label>
            <input
              type="text"
              value="Wilson George"
              readOnly
              className="w-full border rounded-md px-3 py-2 outline-none"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Country</label>
            <input
              type="text"
              value="United States of America"
              readOnly
              className="w-full border rounded-md px-3 py-2 outline-none"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">Email Address</label>
            <input
              type="email"
              value="email@example.com"
              readOnly
              className="w-full border rounded-md px-3 py-2 outline-none"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Phone Number</label>
            <input
              type="text"
              value="+1 778 9874 369"
              readOnly
              className="w-full border rounded-md px-3 py-2 outline-none"
            />
          </div>
        </div>

        {/* Question */}
        <div>
          <label className="block font-semibold mb-1">Question</label>
          <textarea
            rows="6"
            readOnly
            value={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
            className="w-full border rounded-md px-3 py-2 outline-none"
          />
        </div>

        {/* Reply Button */}
        <div className="flex justify-center">
          <button className="bg-black text-yellow-400 font-semibold px-12 py-2 rounded-md shadow-md hover:opacity-90">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewSupportTicket;
