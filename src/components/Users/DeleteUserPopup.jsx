import React from 'react';
import { Trash2 } from 'lucide-react';

const DeleteUserPopup = ({ isOpen, onClose, onConfirm, userId }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full">
        <div className="flex items-center justify-center mb-4">
          <Trash2 className="w-8 h-8 text-red-600" />
        </div>
        <h2 className="text-xl font-[Rasa] font-semibold text-gray-900 text-center mb-4">
          Delete User
        </h2>
        <p className="text-sm font-[Rasa] text-gray-600 text-center mb-6">
          Are you sure you want to delete this user? This action cannot be undone.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-[Rasa] hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(userId)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg font-[Rasa] hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserPopup;