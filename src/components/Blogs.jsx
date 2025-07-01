import React from 'react';
import ContactUs from './ContactUs';
import BlogCard from './BlogCard';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
  const navigate = useNavigate();

  const handleMoreClick = () => {
    navigate('/media');
  };

  return (
    <div
      className="max-w-screen-xl w-full h-auto my-10 mx-auto py-5 px-4 sm:px-6 md:px-10 bg-white shadow-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      id="blog"
    >
      {/* Header */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col sm:flex-row justify-between items-center px-2 py-2 border-b shadow-md">
        <div className="text-xl font-semibold mb-2 sm:mb-0">MEDIA</div>
        <ContactUs />
      </div>

      {/* BlogCard */}
      <div className="p-2 rounded-sm shadow-lg">
        <BlogCard />
      </div>

      {/* Placeholder cards */}
      <div className="w-full h-48 rounded-sm shadow-lg bg-gray-100 flex items-center justify-center">
        Placeholder 1
      </div>
      <div className="w-full h-48 rounded-sm shadow-lg bg-gray-100 flex items-center justify-center">
        Placeholder 2
      </div>
      <div className="w-full h-48 rounded-sm shadow-lg bg-gray-100 flex items-center justify-center">
        Placeholder 3
      </div>
      <div className="w-full h-48 rounded-sm shadow-lg bg-gray-100 flex items-center justify-center">
        Placeholder 4
      </div>

      {/* "More" Button */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-end mt-4">
        <button
          onClick={handleMoreClick}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          More
        </button>
      </div>
    </div>
  );
};

export default Blogs;
