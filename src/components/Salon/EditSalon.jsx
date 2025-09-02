import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Save, ArrowLeft } from 'lucide-react';

const EditSalon = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [salon, setSalon] = useState({
    fullName: '',
    shopName: '',
    joinedOn: '',
    status: 'Active',
    blocked: false
  });

  // Simulated data fetch
  useEffect(() => {
    // In a real app, fetch salon data by ID from an API
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSalon(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, save changes to API
    console.log('Saving salon:', salon);
    navigate('/dashboard/salons');
  };

  return (
    <div className="w-full bg-white min-h-screen p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl lg:text-3xl font-[Rasa] font-semibold text-gray-900">
            Edit Salon
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
              <input
                type="text"
                name="fullName"
                value={salon.fullName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-[Rasa] font-medium text-gray-700">
                Shop Name
              </label>
              <input
                type="text"
                name="shopName"
                value={salon.shopName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-[Rasa] font-medium text-gray-700">
                Joined On
              </label>
              <input
                type="text"
                name="joinedOn"
                value={salon.joinedOn}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-[Rasa] font-medium text-gray-700">
                Status
              </label>
              <select
                name="status"
                value={salon.status}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Blocked">Blocked</option>
              </select>
            </div>
            <div className="flex items-center gap-3">
              <label className="block text-sm font-[Rasa] font-medium text-gray-700">
                Blocked
              </label>
              <button
                onClick={() => setSalon(prev => ({ ...prev, blocked: !prev.blocked }))}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  salon.blocked ? 'bg-red-500' : 'bg-green-500'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    salon.blocked ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={handleSubmit}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSalon;