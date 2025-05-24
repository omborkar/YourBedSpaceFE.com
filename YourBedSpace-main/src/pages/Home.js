import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
        <div className="bg-white/70 backdrop-blur-md rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-md sm:max-w-lg md:max-w-xl shadow-lg">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                Welcome to YourBedSpace
            </h1>
            <h5 className="text-sm sm:text-base md:text-lg text-gray-800 mb-6 text-center">
                "Leave the bed spaces to us! Focus on your tasks, and know we’re here like family, ready to support you. You’re never alone!"
            </h5>
            <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-8 text-center">
                Find and book affordable bed spaces easily.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center">
                <Link
                    to="/bedspaces"
                    className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition text-center"
                >
                    View Available Bed Spaces
                </Link>
                <Link
                    to="/create-bedspace"
                    className="bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-green-700 transition text-center"
                >
                    Post a Bed Space
                </Link>
            </div>
        </div>
    </div>
);

export default Home;