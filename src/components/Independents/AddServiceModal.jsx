import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const AddServiceModal = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    serviceType: '',
    sizeLength: '',
    price: '',
    duration: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[500px] p-6">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-xl font-medium text-gray-900">Add A New Service</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Haircuts (Men, Women, Kids)</label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="">Select service</option>
                <option value="Haircuts">Haircuts</option>
                <option value="Box Braids">Box Braids</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select service size/Length</label>
              <select
                name="sizeLength"
                value={formData.sizeLength}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="">Select size/length</option>
                <option value="Small">Small</option>
                <option value="Jumbo">Jumbo</option>
              </select>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="0.00"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Durations</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="0 mins"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Add a description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter description"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <button type="button" className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg py-4">
                <Plus className="w-6 h-6 text-gray-400" />
              </button>
              <button type="button" className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg py-4">
                <Plus className="w-6 h-6 text-gray-400" />
              </button>
              <button type="button" className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg py-4">
                <Plus className="w-6 h-6 text-gray-400" />
              </button>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button type="button" onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded-md">Clear All</button>
              <button type="submit" className="px-4 py-2 bg-green-700 text-white rounded-md">Add</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServiceModal;