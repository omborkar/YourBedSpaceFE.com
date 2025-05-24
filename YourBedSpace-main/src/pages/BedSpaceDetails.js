// src/pages/BedSpaceDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getBedSpaceById } from '../services/api'; // import your helper


const BedSpaceDetails = () => {
  const { id } = useParams();
  const [bedSpace, setBedSpace] = useState(null);

  useEffect(() => {
    const fetchBedSpace = async () => {
      try {
        const data = await getBedSpaceById(id);
        setBedSpace(data);
      } catch (error) {
        toast.error(error);
      }
    };

    fetchBedSpace();
  }, [id]);

  if (!bedSpace) {
    return (
      <div className="container mx-auto p-4 text-center">
        <p>Loading bedspace details...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
      <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-lg p-6 sm:p-8 w-full max-w-xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{bedSpace.name}</h1>
        <p className="text-gray-800 mb-2"><strong>Location:</strong> {bedSpace.location}</p>
        <p className="text-gray-800 mb-2"><strong>Price:</strong> ₹{bedSpace.price}/month</p>
        <p className="text-gray-800 mb-2"><strong>Description:</strong> {bedSpace.description}</p>
        <p className="text-gray-800 mb-2"><strong>WhatsApp Number:</strong> {bedSpace.whatsappNumber}</p>
        <p className="text-gray-800 mb-4"><strong>Still Available:</strong> {bedSpace.stillAvailable ? 'Yes' : 'No'}</p>
        <Link
          to="/bedspaces"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Back to List
        </Link>
      </div>
    </div>
  );
};

export default BedSpaceDetails;
