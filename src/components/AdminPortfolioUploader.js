import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const AdminPortfolioUploader = () => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      setMessage('Please select at least one JSON file.');
      return;
    }

    setUploading(true);
    setMessage('');

    for (const file of files) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const portfolioData = JSON.parse(e.target.result);
          const { error } = await supabase.from('portfolios').insert([portfolioData]);

          if (error) {
            setMessage(`Error uploading ${file.name}: ${error.message}`);
            console.error(error);
          } else {
            setMessage(`Successfully uploaded ${file.name}`);
          }
        } catch (err) {
          setMessage(`Error parsing ${file.name}. Please ensure it is a valid JSON.`);
        }
      };
      reader.readAsText(file);
    }

    setUploading(false);
  };

  return (
    <div>
      <input
        type="file"
        multiple
        accept=".json"
        onChange={handleFileChange}
        className="mb-4 p-2 bg-gray-700 rounded w-full"
      />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
      >
        {uploading ? 'Uploading...' : 'Upload Files'}
      </button>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default AdminPortfolioUploader;