import { FiSearch, FiBell, FiSettings } from "react-icons/fi";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between bg-white p-4 border-b">
      {/* Search */}
      <div className="flex items-center w-full max-w-lg border rounded-lg px-3">
        <FiSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search here..."
          className="flex-1 px-2 py-2 outline-none"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4 ml-6">
        <button className="p-2 bg-yellow-400 rounded">
          <FiSearch />
        </button>
        <FiSettings className="text-gray-600" />
        <FiBell className="text-gray-600" />
        <div className="flex items-center gap-2">
          <img
            src="https://via.placeholder.com/40"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-semibold">Leo Aminoff</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
