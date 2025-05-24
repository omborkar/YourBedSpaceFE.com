import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllBedSpaces } from '../services/api';
import { toast } from 'react-toastify';

const BedSpaces = () => {
    const [ bedSpaces, setBedSpaces ] = useState( [] );

    useEffect( () => {
        const fetchBedSpaces = async () => {
            try {
                const data = await getAllBedSpaces();
                setBedSpaces( data );
            } catch ( error ) {
                toast.error( error.message || 'Error fetching bed spaces' );
            }
        };
        fetchBedSpaces();
    }, [] );

    return (
        <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 sm:p-8 w-full shadow-lg">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Available Bed Spaces</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bedSpaces.length === 0 ? (
                        <p className="text-gray-800">No bed spaces available.</p>
                    ) : (
                        bedSpaces.map( ( bedSpace ) => (
                            <div key={bedSpace.id} className="bg-white bg-opacity-30 rounded-lg p-4 shadow-md">
                                <h2 className="text-xl font-semibold text-gray-900">{bedSpace.name}</h2>
                                <p className="text-gray-800">Location: {bedSpace.location}</p>
                                <p className="text-gray-800">Price: ${bedSpace.price}/month</p>
                                <p className="text-gray-800">WhatsApp: {bedSpace.whatsapp}</p>
                                <Link
                                    to={`/bedspace/${bedSpace.id}`}
                                    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                                >
                                    View Details
                                </Link>

                            </div>
                        ) )
                    )}
                </div>
            </div>
        </div>
    );
};

export default BedSpaces;