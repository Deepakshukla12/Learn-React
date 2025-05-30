import React from 'react';

function ConfirmLogout({ isOpen, title, message, onCancel, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 transition-opacity duration-300">
      <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-2xl w-[90%] max-w-md transform transition-all scale-100">
        <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
        <p className="mb-6 text-center text-gray-300">{message}</p>
        <div className="flex justify-center space-x-6">
          <button
            onClick={onCancel}
            className="px-6 py-2 rounded-full border border-gray-400 text-gray-300 hover:bg-gray-700 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmLogout;
