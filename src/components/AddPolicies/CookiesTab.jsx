import React from "react";

const CookiesTab = ({ isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`py-1 px-5 sm:px-7 text-[16px] sm:text-[20px] lg:text-[24px] font-semibold font-[Rasa] rounded-[80px] transition-all duration-200 ${
      isActive ? "bg-white text-[#2F2F2F]" : "text-[#2F2F2F80]"
    }`}
  >
    Cookies
  </button>
);

export default CookiesTab;