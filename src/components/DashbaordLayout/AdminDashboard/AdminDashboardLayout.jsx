import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiSearch, FiSettings, FiBell } from "react-icons/fi";
import { FaHome, FaStore, FaUserTie, FaUsers, FaEye, FaGavel, FaCog, FaMoneyBillWave, FaCreditCard, FaBullhorn, FaBell, FaSignOutAlt } from "react-icons/fa"; // Using react-icons as placeholders
// import NotificationOffcanvas from "../../Notification Offcanvas/NotificationOffcanvas"; // Assume this exists
import { Outlet } from 'react-router-dom';

/**
 * Admin Dashboard Layout Component
 *
 * Updated to match the provided image: black sidebar with yellow accents, simplified header, new sidebar items.
 */
const AdminDashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showNotification, setShowNotification] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // New navigation items based on the image
  const navItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { name: "Salons", icon: <FaStore />, path: "/dashboard/salons" },
    { name: "Independents", icon: <FaUserTie />, path: "/dashboard/independents" },
    { name: "Users", icon: <FaUsers />, path: "/dashboard/users" },
    { name: "Monitor Hiring", icon: <FaEye />, path: "/dashboard/monitor-hiring" },
    { name: "Dispute Resolution", icon: <FaGavel />, path: "/dashboard/dispute-resolution" },
    { name: "System Management", icon: <FaCog />, path: "/dashboard/system-management" },
    { name: "Commission and Revenue Management", icon: <FaMoneyBillWave />, path: "/dashboard/commission-revenue" },
    { name: "Payout Management", icon: <FaCreditCard />, path: "/dashboard/payout-management" },
    { name: "Create Promotions", icon: <FaBullhorn />, path: "/dashboard/create-promotions" },
    { name: "Push Notification", icon: <FaBell />, path: "/dashboard/push-notification" },
  ];

  // Dynamic title based on path
  const pathToTitle = {
    '/dashboard': 'Dashboard',
    '/dashboard/salons': 'Salons',
    '/dashboard/independents': 'Independents',
    '/dashboard/users': 'Users',
    '/dashboard/monitor-hiring': 'Monitor Hiring',
    '/dashboard/dispute-resolution': 'Dispute Resolution',
    '/dashboard/system-management': 'System Management',
    '/dashboard/commission-revenue': 'Commission and Revenue Management',
    '/dashboard/payout-management': 'Payout Management',
    '/dashboard/create-promotions': 'Create Promotions',
    '/dashboard/push-notification': 'Push Notification',
  };

  const title = pathToTitle[location.pathname] || 'Dashboard';

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && windowWidth < 768) {
        const sidebar = document.getElementById("mobile-sidebar");
        if (sidebar && !sidebar.contains(event.target)) {
          if (!event.target.closest("[data-menu-toggle]")) {
            setIsMobileMenuOpen(false);
          }
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen, windowWidth]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    // TODO: Handle logout logic
    navigate('/');
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
        className={`bg-black text-white w-[230px] sm:w-[260px] fixed h-full z-40 transition-all duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 flex flex-col`}
      >
        <div className="p-4 md:block flex items-center justify-between w-full">
          <h1 className="text-2xl font-bold text-white">Latrice</h1>
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
                  className={`flex items-center px-4 py-3 text-sm transition-colors duration-200 rounded-l-full ${
                    location.pathname === item.path ? "bg-yellow-200 text-black" : "hover:bg-gray-800"
                  }`}
                  onClick={() => windowWidth < 768 && setIsMobileMenuOpen(false)}
                >
                  <div className={`w-8 h-8 rounded-full flex justify-center items-center mr-3 ${
                    location.pathname === item.path ? "bg-white" : "bg-yellow-400"
                  }`}>
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
            className="flex items-center px-4 py-3 text-sm hover:bg-gray-800 rounded-l-full w-full"
          >
            <div className="w-8 h-8 rounded-full bg-yellow-400 flex justify-center items-center mr-3">
              <FaSignOutAlt />
            </div>
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 md:ml-[260px] w-full">
        {/* Header */}
        <header className="bg-black text-white p-4 flex items-center justify-between shadow-md fixed top-0 right-0 left-0 md:left-[260px] z-30">
          <button
            data-menu-toggle
            className="md:hidden mr-2 text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Open menu"
          >
            <FiMenu size={24} />
          </button>
          <div className="flex-1 flex items-center">
            <h1 className="text-xl font-bold mr-4">Latrice</h1>
            <div className="flex-1 relative">
              <input
                type="search"
                placeholder="Search here.."
                className="w-full px-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-yellow-400 rounded-full">
                <FiSearch className="text-black" />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FiSettings className="cursor-pointer" onClick={() => navigate('/dashboard/settings')} />
            <FiBell className="cursor-pointer" onClick={() => setShowNotification(true)} />
            <div className="flex items-center">
              <span className="mr-2">Leo Aminoff</span>
              <img src="/path/to/avatar.jpg" alt="Avatar" className="w-8 h-8 rounded-full" /> {/* Replace with actual */}
            </div>
          </div>
          {/* <NotificationOffcanvas
            showNotification={showNotification}
            setShowNotification={setShowNotification}
          /> */}
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