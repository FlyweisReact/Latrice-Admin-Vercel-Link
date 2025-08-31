import { FiUsers, FiHome, FiSettings } from "react-icons/fi";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  const menuItems = [
    { label: "Dashboard", icon: FiHome },
    { label: "Salons", icon: FiUsers },
    { label: "Independents", icon: FiUsers },
    { label: "Users", icon: FiUsers, active: true },
    { label: "Monitor Hiring", icon: FiUsers },
    { label: "Dispute Resolution", icon: FiUsers },
    { label: "Content Management System", icon: FiUsers },
    { label: "Commission and Revenue Management", icon: FiUsers },
    { label: "Payout Management", icon: FiUsers },
    { label: "Create Promotions", icon: FiUsers },
    { label: "Push Notification", icon: FiUsers },
  ];

  return (
    <div className="bg-black text-white w-64 h-screen flex flex-col">
      <div className="text-2xl font-bold px-6 py-4 border-b border-gray-700">
        Latrice
      </div>
      <nav className="flex-1 overflow-y-auto">
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-gray-800 ${
              item.active ? "bg-yellow-100 text-black font-semibold" : ""
            }`}
          >
            <item.icon className="text-lg" />
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
      <div className="px-6 py-4 flex items-center gap-3 cursor-pointer hover:bg-gray-800">
        <MdLogout /> Log Out
      </div>
    </div>
  );
};

export default Sidebar;
