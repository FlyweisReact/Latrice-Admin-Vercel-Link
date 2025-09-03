import { Edit } from 'lucide-react';
import React, { useState } from 'react';

const EditCategoryModal = ({ isOpen, onClose }) => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryImage, setCategoryImage] = useState(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[400px] p-6 relative">
        <button
          onClick={onClose}
          className="absolute w-2.5 h-3.5 top-4 right-4 text-black font-bold hover:text-gray-700 font-sans"
        >
          X
        </button>
        <h2 className="text-lg font-bold mb-4">Edit Category</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">CATEGORY NAME</label>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Category name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">ADD CATEGORY IMAGE</label>
            <div className="border border-gray-300 border-dashed rounded-md p-4 text-center">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setCategoryImage(e.target.files[0])}
                className="hidden"
                id="categoryImage"
              />
              <label htmlFor="categoryImage" className="cursor-pointer text-sm text-gray-500">
                <span className="flex justify-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  Click here or drag & drop your new photo
                </span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white rounded-md py-2 text-sm font-medium hover:bg-gray-800"
          >
            Save
          </button>
        </form>
       
      </div>
    </div>
  );
};

export default EditCategoryModal;