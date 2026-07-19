import React from 'react';

const Searchbar = ({ searchTerm, handleSearchChange }) => {
  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Explore Portfolios
        </h1>
        <p className="text-gray-400 mb-8">
          Find developers and get inspired by their work.
        </p>
      </div>
      <div className="max-w-lg mx-auto">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by name..."
          className="w-full px-5 py-3 text-lg text-white bg-gray-800 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
          aria-label="Search portfolios by name"
        />
      </div>
    </div>
  );
};

export default Searchbar;