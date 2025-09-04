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
  FaRegFileAlt,
} from "react-icons/fa";
import NotificationOffcanvas from "../../NotificationOffcanvas";
import DashboardIcon from '../../../assets/Icons/dashboardIcon.png'
import SalonIcon from '../../../assets/Icons/SalonsIcon.png'
import IndependentIcon from '../../../assets/Icons/IndependentsIcon.png'
import UsersIcon from '../../../assets/Icons/UsersIcon.png'
import MonitorHiringIcon from '../../../assets/Icons/MonitorIcon.png'
import DisputeIcon from '../../../assets/Icons/DisputeIcon.png'
import ContentIcon from '../../../assets/Icons/ContentIcon.png'
import CommissionIcon from '../../../assets/Icons/ComissionIcon.png'
import PayoutIcon from '../../../assets/Icons/PayoutIcon.png'
import PromotionIcon from '../../../assets/Icons/PromotionIcon.png'
import PushNotificationIcon from '../../../assets/Icons/NotificationsIcon.png'

const AdminDashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showNotification, setShowNotification] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
   { name: "Dashboard", icon: <img src={DashboardIcon} alt="Dashboard" className="w-6 h-6" />, path: "/dashboard" },
    { name: "Salons", icon: <img src={SalonIcon} alt="Salons" className="w-6 h-6" />, path: "/dashboard/salons" },
    { name: "Independents", icon: <img src={IndependentIcon} alt="Independents" className="w-6 h-6" />, path: "/dashboard/independents" },
    { name: "Users", icon: <img src={UsersIcon} alt="Users" className="w-6 h-6" />, path: "/dashboard/users" },
    { name: "Monitor Hiring", icon: <img src={MonitorHiringIcon} alt="Monitor Hiring" className="w-6 h-6" />, path: "/dashboard/monitor-hiring" },
    { name: "Dispute Resolution", icon: <img src={DisputeIcon} alt="Dispute Resolution" className="w-6 h-6" />, path: "/dashboard/dispute-resolution" },
    { name: "Content Management System", icon: <img src={ContentIcon} alt="Content Management" className="w-6 h-6" />, path: "/dashboard/content-management" },
    { name: "Commission and Revenue Management", icon: <img src={CommissionIcon} alt="Commission" className="w-6 h-6" />, path: "/dashboard/commission-revenue" },
    { name: "Payout Management", icon: <img src={PayoutIcon} alt="Payout" className="w-6 h-6" />, path: "/dashboard/payout-management" },
    { name: "Create Promotions", icon: <img src={PromotionIcon} alt="Promotions" className="w-6 h-6" />, path: "/dashboard/create-promotions" },
    { name: "Push Notification", icon: <img src={PushNotificationIcon} alt="Push Notification" className="w-6 h-6" />, path: "/dashboard/push-notification" },
    { name: "Reports", icon: <FaRegFileAlt className="text-black" />, path: "/dashboard/reports" },
    { name: "Monitor Feedback", icon: <FaComments className="text-black" />, path: "/dashboard/monitor-feedback" },
    { name: "Upload Blogs", icon: <FaBlog className="text-black" />, path: "/dashboard/upload-blogs" },
    { name: "Customer Support", icon: <FaHeadset className="text-black" />, path: "/dashboard/customer-support" },
    { name: "Add Your Policies", icon: <FaFileContract className="text-black" />, path: "/dashboard/add-policies" },
  ];

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
    navigate("/");
  };

  const isSalonsActive = location.pathname.startsWith("/dashboard/salons");
  const isIndependentsActive = location.pathname.startsWith("/dashboard/independents");
  const isUsersActive = location.pathname.startsWith("/dashboard/users");
  const isCreatePromotionsActive = location.pathname.startsWith("/dashboard/create-promotions");
  const isCustomerSupportActive = location.pathname.startsWith("/dashboard/customer-support");
  const isDisputeActive = location.pathname.startsWith("/dashboard/dispute-resolution");

  return (
    <div className="flex h-screen bg-white relative overflow-x-hidden font-rasa">
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
        className={`bg-[#2F2F2F] text-white w-[230px] sm:w-[300px] fixed h-full z-40 transition-all duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
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
                  className={`flex items-center px-4 py-3 text-[20px] font-[Rasa] transition-colors duration-200 rounded-[15px] ${(location.pathname === item.path ||
                    (item.name === "Salons" && isSalonsActive) ||
                    (item.name === "Independents" && isIndependentsActive) ||
                    (item.name === "Users" && isUsersActive) ||
                    (item.name === "Create Promotions" && isCreatePromotionsActive) ||
                    (item.name === "Customer Support" && isCustomerSupportActive) ||
                    (item.name === "Dispute Resolution" && isDisputeActive))
                    ? "bg-[#FFEBBA] text-black"
                    : "hover:bg-gray-800"
                    }`}
                  onClick={() => windowWidth < 768 && setIsMobileMenuOpen(false)}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex justify-center items-center mr-3 ${(location.pathname === item.path ||
                      (item.name === "Salons" && isSalonsActive) ||
                      (item.name === "Independents" && isIndependentsActive) ||
                      (item.name === "Users" && isUsersActive) ||
                      (item.name === "Create Promotions" && isCreatePromotionsActive) ||
                      (item.name === "Customer Support" && isCustomerSupportActive) ||
                      (item.name === "Dispute Resolution" && isDisputeActive))
                      ? "bg-white"
                      : "bg-[#FFCC4E]"
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
              <FaSignOutAlt className="text-black" />
            </div>
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 md:ml-[300px] w-full">
        {/* Header */}
        <header className="bg-[#2F2F2F] text-white px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between shadow-md fixed top-0 right-0 left-0 md:left-[300px] z-30 gap-3">
          {/* Left: Menu + Search */}
          <div className="flex items-center w-full md:w-auto flex-1">
            <button
              data-menu-toggle
              className="md:hidden mr-3 text-white focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Open menu"
            >
              <FiMenu size={24} />
            </button>

            {/* Search Bar */}
            <div className="flex items-center w-full xl:w-[600px] bg-white rounded-md overflow-hidden px-3 font-rasa">
              <FiSearch className="text-black text-lg" />
              <input
                type="search"
                placeholder="Search here..."
                className="w-full px-3 py-2 text-black focus:outline-none"
              />
            </div>

            {/* Search button only for desktop */}
            <button className="hidden md:flex bg-[#FBC02D] py-3 px-8 ml-3 items-center justify-center rounded-lg">
              <FiSearch className="text-black text-lg" />
            </button>
          </div>

          {/* Right: Icons + Profile */}
          <div className="flex items-center justify-between md:justify-end w-full md:w-auto space-x-4">
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
            <NotificationOffcanvas
              showNotification={showNotification}
              setShowNotification={setShowNotification}
            />

            <div className="flex items-center">
              {/* Name hidden on mobile */}
              <span className="hidden md:inline mr-3 font-medium">Leo Aminoff</span>
              <img
                src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=80&h=60&fit=crop"
                alt="Avatar"
                className="w-9 h-9 rounded-full object-cover"
              />
            </div>
          </div>
        </header>


        <main className="p-4 pt-28 md:pt-24 w-full overflow-x-hidden bg-[#FAF9F6] min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
