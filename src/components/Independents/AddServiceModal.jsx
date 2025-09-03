// AddServiceModal.jsx
import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

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
    <div className="fixed inset-0 bg-black/30 bg-opacity-30 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-[500px] mx-4">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Add A New Service</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Service Type and Size/Length - Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Haircuts (Men, Women, Kids)
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 bg-white text-gray-900"
                  >
                    <option value="">Select service</option>
                    <option value="Haircuts">Haircuts</option>
                    <option value="Box Braids">Box Braids</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select service size/Length
                  </label>
                  <select
                    name="sizeLength"
                    value={formData.sizeLength}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 bg-white text-gray-900"
                  >
                    <option value="">Select size/length</option>
                    <option value="Small">Small</option>
                    <option value="Jumbo">Jumbo</option>
                  </select>
                </div>
              </div>

              {/* Price and Duration - Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price
                  </label>
                  <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-10 bg-gray-800 text-white text-sm font-medium rounded-l-md">
                      $
                    </div>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      className="w-full pl-12 pr-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="0.00"
                      step="0.01"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Durations
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      className="w-full px-3 pr-12 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="0"
                    />
                    <div className="absolute right-3 top-0 bottom-0 flex items-center text-gray-500 text-sm">
                      mins
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Add a description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 resize-none"
                  placeholder="Enter description"
                />
              </div>

              {/* Image Upload Buttons */}
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="text-center">
                    <button 
                      type="button" 
                      className="w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg py-6 hover:border-gray-400 transition-colors"
                    >
                      <Plus className="w-6 h-6 text-gray-400 mb-2" />
                      <span className="text-xs text-gray-500 font-medium">Add Images</span>
                    </button>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3 pt-4">
                <button 
                  type="button" 
                  onClick={onClose} 
                  className="px-6 py-2.5 bg-red-400 hover:bg-red-500 text-white text-sm font-medium rounded-md transition-colors"
                >
                  Clear All
                </button>
                <button 
                  type="submit" 
                  className="px-8 py-2.5 bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium rounded-md transition-colors"
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddServiceModal;
