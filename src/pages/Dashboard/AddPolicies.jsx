import React, { useState, useEffect } from "react";
import { Pencil, Trash2 } from "lucide-react";
import AboutUsTab from "../../components/AddPolicies/AboutUsTab";
import PrivacyPolicyTab from "../../components/AddPolicies/PrivacyPolicyTab";
import TermsOfServiceTab from "../../components/AddPolicies/TermsOfServiceTab";
import SupportTab from "../../components/AddPolicies/SupportTab";
import CookiesTab from "../../components/AddPolicies/CookiesTab";
import FAQsTab from "../../components/AddPolicies/FAQsTab";
import AboutUsContent from "../../components/AddPolicies/AboutUsContent";
import PrivacyPolicyContent from "../../components/AddPolicies/PrivacyPolicyContent";
import TermsOfServiceContent from "../../components/AddPolicies/TermsOfServiceContent";
import SupportContent from "../../components/AddPolicies/SupportContent";
import CookiesContent from "../../components/AddPolicies/CookiesContent";
import FAQsContent from "../../components/AddPolicies/FAQsContent";

const AddPolicies = () => {
  const tabs = [
    { name: "About Us", tabComponent: AboutUsTab, contentComponent: AboutUsContent },
    { name: "Privacy Policy", tabComponent: PrivacyPolicyTab, contentComponent: PrivacyPolicyContent },
    { name: "Terms Of Service", tabComponent: TermsOfServiceTab, contentComponent: TermsOfServiceContent },
    { name: "Support", tabComponent: SupportTab, contentComponent: SupportContent },
    { name: "Cookies", tabComponent: CookiesTab, contentComponent: CookiesContent },
    { name: "FAQs", tabComponent: FAQsTab, contentComponent: FAQsContent },
  ];

  // Initialize activeTab from URL query parameter or default to "About Us"
  const [activeTab, setActiveTab] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get("tab");
    return tabs.some((tab) => tab.name === tabParam) ? tabParam : "About Us";
  });

  // Update URL query parameter when activeTab changes
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("tab", activeTab);
    window.history.replaceState({}, "", `${window.location.pathname}?${params}`);
  }, [activeTab]);

  // State for popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreatePolicy = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setTitle("");
    setDescription("");
  };

  const handleAddPolicy = () => {
    // Handle the add logic here (e.g., save to state or API)
    console.log("Added Policy:", { title, description });
    handleClosePopup();
  };

  const ActiveContent = tabs.find((tab) => tab.name === activeTab)?.contentComponent;

  return (
    <div className="w-full p-2 font-[Rasa]">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2F2F2F]">
          Add Your Policies
        </h1>
        <button
          onClick={handleCreatePolicy}
          className="flex items-center gap-2 border border-[#C5C5C5] rounded-lg px-4 py-2 text-[#2F2F2F] text-sm sm:text-base hover:bg-gray-100"
        >
          <span className="text-lg">＋</span> Create A Policy
        </button>
      </div>

      {/* Tabs Section */}
      <div className="flex flex-wrap w-full bg-[#D9D9D9] rounded-[80px] overflow-hidden mb-6 p-1 justify-center sm:justify-start gap-2 sm:gap-0 sm:h-[60px]">
        {tabs.map(({ name, tabComponent: TabComponent }) => (
          <TabComponent
            key={name}
            isActive={activeTab === name}
            onClick={() => setActiveTab(name)}
          />
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
        {ActiveContent && <ActiveContent />}
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[20px] p-6 w-[90%] max-w-[500px] relative shadow-lg border border-gray-300">
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Terms Of Service
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Terms Of Service Title"
                className="w-full p-2 border border-gray-300 rounded-lg text-gray-600"
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="w-full h-32 p-2 border border-gray-300 rounded-lg text-gray-600"
              />
              <button
                onClick={handleAddPolicy}
                className="w-full bg-gray-800 text-yellow-400 font-bold py-2 rounded-lg hover:bg-gray-700"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPolicies;