import { FiEdit2, FiEye, FiTrash2 } from "react-icons/fi";

const users = [
  { id: 1, name: "Wilson George", email: "email@example.com", joined: "06/06/2023", status: "Active" },
  { id: 2, name: "Erin Lubin", email: "email@example.com", joined: "09/10/2023", status: "Active" },
  { id: 3, name: "Miracle Arcand", email: "email@example.com", joined: "03/02/2023", status: "Inactive" },
  { id: 4, name: "Jaydon Saris", email: "email@example.com", joined: "11/08/2023", status: "Blocked" },
];

const statusColors = {
  Active: "text-green-600",
  Inactive: "text-gray-500",
  Blocked: "text-red-600",
};

const UsersTable = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Users</h2>
        <button className="bg-gray-100 px-3 py-2 rounded-lg border">+ Add A New User</button>
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3">#</th>
            <th className="p-3">Full Name</th>
            <th className="p-3">Email Address</th>
            <th className="p-3">Joined On</th>
            <th className="p-3">Status</th>
            <th className="p-3">Block/Unblock</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, idx) => (
            <tr key={u.id} className="border-t">
              <td className="p-3">{idx + 1}</td>
              <td className="p-3">{u.name}</td>
              <td className="p-3">{u.email}</td>
              <td className="p-3">{u.joined}</td>
              <td className={`p-3 font-medium ${statusColors[u.status]}`}>
                {u.status}
              </td>
              <td className="p-3">
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked={u.status === "Active"} />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-green-500 relative after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5"></div>
                </label>
              </td>
              <td className="p-3 flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded"><FiEdit2 /></button>
                <button className="p-2 hover:bg-gray-100 rounded"><FiEye /></button>
                <button className="p-2 hover:bg-gray-100 rounded text-red-500"><FiTrash2 /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
