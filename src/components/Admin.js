import React from 'react';
import AdminPortfolioUploader from './AdminPortfolioUploader';

const Admin = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-24 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Admin Dashboard</h1>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Upload Portfolios</h2>
        <AdminPortfolioUploader />
      </div>
    </div>
  );
};

export default Admin;