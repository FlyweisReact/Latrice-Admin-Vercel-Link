// ./pages/Dashboard/DashboardHome.jsx
import React from 'react';

const DashboardHome = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome Davis Lubin!</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-green-100 p-4 rounded-lg">
          <h2>Total Users</h2>
          <p className="text-3xl">2.80M</p>
          <p className="text-green-500">+6.00% ↑</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg">
          <h2>Total Salons</h2>
          <p className="text-3xl">182,2</p>
          <p className="text-green-500">+6.00% ↑</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg">
          <h2>Total Independent Salons</h2>
          <p className="text-3xl">182,2</p>
          <p className="text-green-500">+6.00% ↑</p>
        </div>
        <div className="bg-pink-100 p-4 rounded-lg">
          <h2>Blocked & Inactive</h2>
          <p className="text-3xl">182,2</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="mb-2">New Professionals</h2>
          <table className="w-full">
            <thead>
              <tr className="bg-blue-100">
                <th>Sr.No</th>
                <th>Shop Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Sexy Braids</td>
                <td>email@example.com</td>
                <td>Icons</td>
              </tr>
              {/* Add more rows as in image */}
            </tbody>
          </table>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="mb-2">New Users</h2>
          <table className="w-full">
            <thead>
              <tr className="bg-blue-100">
                <th>Sr.No</th>
                <th>User's Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Desiree Gouse</td>
                <td>email@example.com</td>
                <td>Icons</td>
              </tr>
              {/* Add more */}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="mb-2">Recent Disputes</h2>
        <table className="w-full">
          <thead>
            <tr className="bg-blue-100">
              <th>Sr.No</th>
              <th>Shop Name</th>
              <th>User's Name</th>
              <th>Description</th>
              <th>Photos</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sexy Braids</td>
              <td>Marilyn Kentner</td>
              <td>Lorem ipsum...</td>
              <td>Images</td>
              <td>Icons</td>
            </tr>
            {/* Add more */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardHome;