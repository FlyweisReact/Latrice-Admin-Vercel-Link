import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

const AddPolicies = () => {
  const [activeTab, setActiveTab] = useState("About Us");

  const tabs = [
    "About Us",
    "Privacy Policy",
    "Terms Of Service",
    "Support",
    "Cookies",
    "FAQs",
  ];

  return (
    <div className="w-full p-2 font-[Rasa]">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2F2F2F]">
          Add Your Policies
        </h1>
        <button className="flex items-center gap-2 border border-[#C5C5C5] rounded-lg px-4 py-2 text-[#2F2F2F] text-sm sm:text-base hover:bg-gray-100">
          <span className="text-lg">＋</span> Create A Policy
        </button>
      </div>

      {/* Tabs Section */}
      <div className="flex flex-wrap w-full bg-[#D9D9D9] rounded-[80px] overflow-hidden mb-6 p-1 justify-center sm:justify-start gap-2 sm:gap-0 sm:h-[60px]">
        {tabs.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`py-1 px-5 sm:px-7 text-[16px] sm:text-[20px] lg:text-[24px] font-semibold font-[Rasa] rounded-[80px] transition-all duration-200 ${
              activeTab === item
                ? "bg-white text-[#2F2F2F]"
                : "text-[#2F2F2F80]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Content Card */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-[#2F2F2F]">
            {activeTab}
          </h2>
          <div className="flex items-center gap-3">
            <button className="text-gray-500 hover:text-gray-700">
              <Pencil size={18} />
            </button>
            <button className="text-red-500 hover:text-red-700">
              <Trash2 size={18} />
            </button>
          </div>
        </div>
        <p className="text-sm sm:text-base text-[#2F2F2F80] leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages
        </p>
      </div>
    </div>
  );
};

export default AddPolicies;
