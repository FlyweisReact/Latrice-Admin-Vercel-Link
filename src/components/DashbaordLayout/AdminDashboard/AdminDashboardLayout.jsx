import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiSettings,
  FiBell,
} from "react-icons/fi";

import {
  FaHome,
  FaStore,
  FaUserTie,
  FaUsers,
  FaEye,
  FaGavel,
  FaCog,
  FaMoneyBillWave,
  FaCreditCard,
  FaBullhorn,
  FaBell as FaBellSolid,
  FaFileAlt,
  FaComments,
  FaBlog,
  FaHeadset,
  FaFileContract,
  FaSignOutAlt,
} from "react-icons/fa";

const AdminDashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showNotification, setShowNotification] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Sidebar items
  const navItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { name: "Salons", icon: <FaStore />, path: "/dashboard/salons" },
    { name: "Independents", icon: <FaUserTie />, path: "/dashboard/independents" },
    { name: "Users", icon: <FaUsers />, path: "/dashboard/users" },
    { name: "Monitor Hiring", icon: <FaEye />, path: "/dashboard/monitor-hiring" },
    { name: "Dispute Resolution", icon: <FaGavel />, path: "/dashboard/dispute-resolution" },
    { name: "Content Management System", icon: <FaCog />, path: "/dashboard/content-management" },
    { name: "Commission and Revenue Management", icon: <FaMoneyBillWave />, path: "/dashboard/commission-revenue" },
    { name: "Payout Management", icon: <FaCreditCard />, path: "/dashboard/payout-management" },
    { name: "Create Promotions", icon: <FaBullhorn />, path: "/dashboard/create-promotions" },
    { name: "Push Notification", icon: <FaBellSolid />, path: "/dashboard/push-notification" },
    { name: "Reports", icon: <FaFileAlt />, path: "/dashboard/reports" },
    { name: "Monitor Feedback", icon: <FaComments />, path: "/dashboard/monitor-feedback" },
    { name: "Upload Blogs", icon: <FaBlog />, path: "/dashboard/upload-blogs" },
    { name: "Customer Support", icon: <FaHeadset />, path: "/dashboard/customer-support" },
    { name: "Add Your Policies", icon: <FaFileContract />, path: "/dashboard/add-policies" },
  ];

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    // TODO: Add logout logic
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-white relative overflow-x-hidden">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && windowWidth < 768 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <aside
        id="mobile-sidebar"
        className={`bg-[#2F2F2F] text-white w-[230px] sm:w-[300px] fixed h-full z-40 transition-all duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 flex flex-col`}
      >
        <div className="p-4 md:block flex items-center justify-between w-full">
          <h1 className="text-[40px] font-bold text-[#FFE6D8] font-[Rasa] text-center">
            Latrice
          </h1>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <FiX size={24} />
          </button>
        </div>

        <nav className="mt-4 flex-1 overflow-hidden">
          <ul className="h-full overflow-y-auto pr-1">
            {navItems.map((item) => (
              <li key={item.name} className="mb-2 pl-4 pr-1">
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 text-[20px] font-[Rasa] transition-colors duration-200 rounded-[15px] ${
                    location.pathname === item.path
                      ? "bg-[#FFEBBA] text-black"
                      : "hover:bg-gray-800"
                  }`}
                  onClick={() => windowWidth < 768 && setIsMobileMenuOpen(false)}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex justify-center items-center mr-3 ${
                      location.pathname === item.path ? "bg-white" : "bg-[#FFCC4E]"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="w-full px-4 pb-12 mt-2">
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-3 text-[20px] font-[Rasa] hover:bg-gray-800 rounded-l-full w-full"
          >
            <div className="w-8 h-8 rounded-full bg-yellow-400 flex justify-center items-center mr-3">
              <FaSignOutAlt />
            </div>
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 md:ml-[300px] w-full">
        {/* Header */}
        <header className="bg-[#2F2F2F] text-white px-4 py-3 flex items-center justify-between shadow-md fixed top-0 right-0 left-0 md:left-[300px] z-30">
          {/* Mobile Menu Button */}
          <button
            data-menu-toggle
            className="md:hidden mr-2 text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Open menu"
          >
            <FiMenu size={24} />
          </button>

          {/* Search Box */}
          <div className="flex-1 flex items-center max-w-xl">
            <div className="flex w-full bg-white rounded-md overflow-hidden">
              <input
                type="search"
                placeholder="Search here..."
                className="w-full px-4 py-2 text-black focus:outline-none"
              />
              <button className="bg-[#FBC02D] px-5 flex items-center justify-center">
                <FiSearch className="text-black text-lg" />
              </button>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4 ml-6">
            <button
              onClick={() => navigate("/dashboard/settings")}
              className="w-9 h-9 flex items-center justify-center rounded-md bg-white"
            >
              <FiSettings className="text-gray-700" />
            </button>
            <button
              onClick={() => setShowNotification(true)}
              className="w-9 h-9 flex items-center justify-center rounded-md bg-white"
            >
              <FiBell className="text-red-500" />
            </button>

            {/* User Section */}
            <div className="flex items-center">
              <span className="mr-3 font-medium">Leo Aminoff</span>
              <img
                src="/path/to/avatar.jpg"
                alt="Avatar"
                className="w-9 h-9 rounded-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-4 pt-20 md:pt-24 w-full overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
