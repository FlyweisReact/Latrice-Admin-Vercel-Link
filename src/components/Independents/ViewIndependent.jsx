import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ViewIndependent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [independent, setIndependent] = useState(null);

  // Mock data fetching - replace with actual API call
  useEffect(() => {
    // Simulating fetching independent data by ID
    const mockIndependent = {
      id,
      fullName: 'Alyvia Kelley',
      shopName: 'Sexy Braids',
      email: 'alyvia@example.com',
      phone: '123-456-7890',
      address: '123 Main St, City',
      status: 'Active',
      joinedOn: '06/06/2023'
    };
    setIndependent(mockIndependent);
  }, [id]);

  if (!independent) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-800 font-sans">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate('/dashboard/independents')}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-2xl font-[Rasa] font-semibold text-gray-900">
            View Independent
          </h1>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-[Rasa] font-medium text-gray-700">Full Name</h3>
              <p className="mt-1 text-gray-900">{independent.fullName}</p>
            </div>
            <div>
              <h3 className="text-sm font-[Rasa] font-medium text-gray-700">Shop Name</h3>
              <p className="mt-1 text-gray-900">{independent.shopName}</p>
            </div>
            <div>
              <h3 className="text-sm font-[Rasa] font-medium text-gray-700">Email</h3>
              <p className="mt-1 text-gray-900">{independent.email}</p>
            </div>
            <div>
              <h3 className="text-sm font-[Rasa] font-medium text-gray-700">Phone</h3>
              <p className="mt-1 text-gray-900">{independent.phone}</p>
            </div>
            <div>
              <h3 className="text-sm font-[Rasa] font-medium text-gray-700">Address</h3>
              <p className="mt-1 text-gray-900">{independent.address}</p>
            </div>
            <div>
              <h3 className="text-sm font-[Rasa] font-medium text-gray-700">Status</h3>
              <p className="mt-1 text-gray-900">{independent.status}</p>
            </div>
            <div>
              <h3 className="text-sm font-[Rasa] font-medium text-gray-700">Joined On</h3>
              <p className="mt-1 text-gray-900">{independent.joinedOn}</p>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={() => navigate('/dashboard/independents')}
              className="px-4 py-2 text-sm font-[Rasa] text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewIndependent;