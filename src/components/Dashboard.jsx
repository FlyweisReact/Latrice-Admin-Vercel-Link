import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import UsersTable from "./UsersTable";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-6 bg-gray-50 flex-1 overflow-y-auto">
          <UsersTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
