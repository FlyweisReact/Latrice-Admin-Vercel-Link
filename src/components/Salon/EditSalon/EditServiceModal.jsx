import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const EditServiceModal = ({ isOpen, onClose, service }) => {
  const [serviceLength, setServiceLength] = useState(service?.length || "");
  const [serviceSize, setServiceSize] = useState(service?.size || "");
  const [price, setPrice] = useState(service?.price || "");
  const [duration, setDuration] = useState(service?.duration || "");
  const [description, setDescription] = useState(service?.description || "");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[900px] p-6 font-[Rasa] shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-lg font-semibold text-gray-900 uppercase">
            {service?.name || "Edit Service"}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
        </div>

        {/* Form */}
        <div className="grid grid-cols-2 gap-4">
          {/* Service Length */}
          <select
            className="w-full border border-gray-300 rounded p-2 text-sm"
            value={serviceLength}
            onChange={(e) => setServiceLength(e.target.value)}
          >
            <option value="">Select service length</option>
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
          </select>

          {/* Service Size */}
          <select
            className="w-full border border-gray-300 rounded p-2 text-sm"
            value={serviceSize}
            onChange={(e) => setServiceSize(e.target.value)}
          >
            <option value="">Select service size</option>
            <option value="small">Small</option>
            <option value="regular">Regular</option>
            <option value="large">Large</option>
          </select>

          {/* Price */}
          <div className="flex border border-gray-300 rounded overflow-hidden">
            <input
              type="number"
              className="w-full p-2 text-sm outline-none"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <span className="bg-gray-100 px-3 flex items-center border-l">$</span>
          </div>

          {/* Duration */}
          <div className="flex border border-gray-300 rounded overflow-hidden">
            <input
              type="number"
              className="w-full p-2 text-sm outline-none"
              placeholder="Durations"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
            <span className="bg-gray-100 px-3 flex items-center border-l">mins</span>
          </div>

          {/* Description */}
          <textarea
            className="col-span-2 w-full border border-gray-300 rounded p-2 text-sm h-20"
            placeholder="Add a description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* Add Images */}
          <div className="col-span-2 flex space-x-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-28 h-24 border-2 border-dashed border-gray-300 flex items-center justify-center rounded cursor-pointer text-sm text-gray-500"
              >
                + Add Images
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end space-x-4 mt-6">
          <button className="px-6 py-2 bg-red-300 text-white rounded hover:bg-red-400">
            Clear All
          </button>
          <button className="px-6 py-2 bg-teal-900 text-white rounded hover:bg-teal-800">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditServiceModal;
