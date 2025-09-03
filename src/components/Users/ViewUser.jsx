import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const ViewUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Mock data fetch (replace with actual API call)
  useEffect(() => {
    const mockUser = {
      id: id,
      fullName: 'Alyvia Kelley',
      shopName: 'Sexy Braids',
      joinedOn: '06/06/2023',
      status: 'Active',
      blocked: false
    };
    setUser(mockUser);
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full bg-white min-h-screen p-6">
      <div className="flex items-center mb-6">
        <button onClick={() => navigate('/dashboard/users')} className="mr-4">
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <h1 className="text-2xl font-[Rasa] font-semibold text-gray-900">User Details</h1>
      </div>

      <div className="max-w-lg bg-gray-50 p-6 rounded-lg shadow-sm">
        <div className="mb-4">
          <h3 className="text-sm font-[Rasa] text-gray-600">Full Name</h3>
          <p className="text-lg font-[Rasa] text-gray-900">{user.fullName}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-sm font-[Rasa] text-gray-600">Shop Name</h3>
          <p className="text-lg font-[Rasa] text-gray-900">{user.shopName}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-sm font-[Rasa] text-gray-600">Joined On</h3>
          <p className="text-lg font-[Rasa] text-gray-900">{user.joinedOn}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-sm font-[Rasa] text-gray-600">Status</h3>
          <p className={`text-lg font-[Rasa] ${user.status === 'Active' ? 'text-green-600' : user.status === 'Inactive' ? 'text-gray-600' : 'text-red-600'}`}>
            {user.status}
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-sm font-[Rasa] text-gray-600">Blocked</h3>
          <p className="text-lg font-[Rasa] text-gray-900">{user.blocked ? 'Yes' : 'No'}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;