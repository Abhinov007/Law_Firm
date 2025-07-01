// src/components/AllMediaPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllMediaPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">All Media</h1>
        <button
          onClick={handleBackClick}
          className="m-10 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Back
        </button>
      </div>

      {/* Add your media items or extended blog grid here */}
      <div className="text-gray-600">Media content goes here...</div>
    </div>
  );
};

export default AllMediaPage;
