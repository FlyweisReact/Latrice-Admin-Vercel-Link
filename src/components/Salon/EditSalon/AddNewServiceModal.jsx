import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const AddNewServiceModal = ({ isOpen, onClose }) => {
  const [serviceName, setServiceName] = useState("");
  const [serviceSize, setServiceSize] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [isSizeOpen, setIsSizeOpen] = useState(false);
  const [images, setImages] = useState([]);

  const serviceSizes = [
    { size: "Micro", length: "Shoulder Length" },
    { size: "Small", length: "Bra Strap Length" },
    { size: "Medium", length: "Mid Back Length" },
    { size: "Large", length: "Waist Length" },
    { size: "Jumbo", length: "Butt Length" },
  ];

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages].slice(0, 3)); // max 3
  };

  const handleClearAll = () => {
    setServiceName("");
    setServiceSize("");
    setPrice("");
    setDuration("");
    setDescription("");
    setImages([]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[900px] p-6 font-poppins shadow-lg relative">
        {/* Header */}
        <div className="flex justify-between items-center  pb-4 mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Add A New Service</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
        </div>

        {/* Form */}
        <div className="grid grid-cols-2 gap-4">
          {/* Service Name */}
          <select
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-teal-600"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
          >
            <option value="">Haircuts (Men, Women, Kids)</option>
            <option value="coloring">Hair Coloring</option>
            <option value="styling">Styling</option>
          </select>

          {/* Service Size / Custom Dropdown */}
          <div className="relative">
            <div className="border border-gray-300 rounded-md">
              <button
              type="button"
              onClick={() => setIsSizeOpen(!isSizeOpen)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm flex justify-between items-center focus:ring-2 focus:ring-teal-600"
            >
              {serviceSize || "Select service size/Length"}
              <span className="ml-2">▾</span>
            </button>
            </div>

            {isSizeOpen && (
              <div className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 shadow-lg max-h-40 overflow-y-auto">
                {serviceSizes.map((option, idx) => (
                  <label
                    key={idx}
                    className="flex justify-between items-center px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  >
                    <span>{option.size}</span>
                    <div className="flex items-center space-x-2">
                      <span>{option.length}</span>
                      <input
                        type="radio"
                        name="serviceSize"
                        value={option.size}
                        checked={serviceSize === option.size}
                        onChange={() => {
                          setServiceSize(option.size);
                          setIsSizeOpen(false);
                        }}
                        className="accent-red-500"
                      />
                    </div>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Price */}
          <div className="flex border border-gray-300 rounded overflow-hidden">
            <input
              type="number"
              className="w-full px-3 py-2 text-sm outline-none"
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
              className="w-full px-3 py-2 text-sm outline-none"
              placeholder="Durations"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
            <span className="bg-gray-100 px-3 flex items-center border-l">mins</span>
          </div>

          {/* Row 3: Description + Images + Buttons */}
          <div className="col-span-2 flex items-start space-x-4">
            {/* Description */}
            <textarea
              className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm h-24 focus:ring-2 focus:ring-teal-600"
              placeholder="Add a description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            {/* Add Images */}
            <div className="flex space-x-2">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="preview"
                  className="w-20 h-20 object-cover rounded border"
                />
              ))}
              {images.length < 3 && (
                <label className="w-20 h-20 border-2 border-dashed border-gray-300 flex items-center justify-center rounded cursor-pointer text-sm text-gray-500">
                  + Add
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-col justify-between space-y-2">
              <button
                onClick={handleClearAll}
                className="px-4 py-2 bg-[#FF827F] text-white rounded hover:opacity-90 text-sm"
              >
                Clear All
              </button>
              <button className="px-4 py-2 bg-[#123E41] text-white rounded hover:opacity-90 text-sm">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewServiceModal;
