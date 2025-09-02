import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ViewSalon = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [salon, setSalon] = useState({
    fullName: '',
    shopName: '',
    joinedOn: '',
    status: '',
    blocked: false
  });

  // Simulated data fetch
  useEffect(() => {
    const salonsData = [
      {
        id: 1,
        fullName: 'Alyvia Kelley',
        shopName: 'Sexy Braids',
        joinedOn: '06/06/2023',
        status: 'Active',
        blocked: false
      },
      // ... other salon data
    ];
    const foundSalon = salonsData.find(s => s.id === parseInt(id)) || salonsData[0];
    setSalon(foundSalon);
  }, [id]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'text-green-600';
      case 'Inactive':
        return 'text-gray-600';
      case 'Blocked':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusDot = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500';
      case 'Inactive':
        return 'bg-gray-500';
      case 'Blocked':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="w-full bg-white min-h-screen p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl lg:text-3xl font-[Rasa] font-semibold text-gray-900">
            View Salon
          </h1>
          <button
            onClick={() => navigate('/dashboard/salons')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-[Rasa] font-medium text-gray-700">
                Full Name
              </label>
              <p className="mt-1 text-gray-900">{salon.fullName}</p>
            </div>
            <div>
              <label className="block text-sm font-[Rasa] font-medium text-gray-700">
                Shop Name
              </label>
              <p className="mt-1 text-gray-900">{salon.shopName}</p>
            </div>
            <div>
              <label className="block text-sm font-[Rasa] font-medium text-gray-700">
                Joined On
              </label>
              <p className="mt-1 text-gray-900">{salon.joinedOn}</p>
            </div>
            <div>
              <label className="block text-sm font-[Rasa] font-medium text-gray-700">
                Status
              </label>
              <div className="flex items-center gap-2 mt-1">
                <div className={`w-2 h-2 rounded-full ${getStatusDot(salon.status)}`}></div>
                <span className={`text-sm font-[Rasa] font-medium ${getStatusColor(salon.status)}`}>
                  {salon.status}
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-[Rasa] font-medium text-gray-700">
                Blocked
              </label>
              <p className="mt-1 text-gray-900">{salon.blocked ? 'Yes' : 'No'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSalon;