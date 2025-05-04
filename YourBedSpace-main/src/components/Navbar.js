import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState( false );

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/50 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 py-3">
          <div className="flex justify-between items-center">
            {/* Brand */}
            <Link to="/" className="text-gray-900 text-base xs:text-lg sm:text-xl font-semibold">
              YourBedSpace
            </Link>

            {/* Hamburger Menu Button */}
            <button
              className="md:hidden text-gray-900 focus:outline-none"
              onClick={() => setIsOpen( !isOpen )}
            >
              <div className="space-y-1.5">
                <span className="block w-6 h-0.5 bg-gray-900"></span>
                <span className="block w-6 h-0.5 bg-gray-900"></span>
                <span className="block w-6 h-0.5 bg-gray-900"></span>
              </div>
            </button>

            {/* Nav Links (Desktop) */}
            <div className="hidden md:flex md:items-center md:space-x-3 lg:space-x-5">
              <Link
                to="/"
                className="text-gray-900 text-xs sm:text-sm lg:text-base py-1 px-1 sm:px-2 hover:underline underline-offset-4"
              >
                Home
              </Link>
              <Link
                to="/bedspaces"
                className="text-gray-900 text-xs sm:text-sm lg:text-base py-1 px-1 sm:px-2 hover:underline underline-offset-4"
              >
                Bed Spaces
              </Link>
              <Link
                to="/create-bedspace"
                className="text-gray-900 text-xs sm:text-sm lg:text-base py-1 px-1 sm:px-2 hover:underline underline-offset-4"
              >
                Post Bed Space
              </Link>
              <Link
                to="/profile"
                className="text-gray-900 text-xs sm:text-sm lg:text-base py-1 px-1 sm:px-2 hover:underline underline-offset-4"
              >
                Profile
              </Link>
              <Link
                to="/login"
                className="text-gray-900 text-xs sm:text-sm lg:text-base py-1 px-1 sm:px-2 hover:underline underline-offset-4"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-gray-900 text-xs sm:text-sm lg:text-base py-1 px-1 sm:px-2 hover:underline underline-offset-4"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar (Mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white/50 backdrop-blur-md shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="flex flex-col p-4 space-y-3 mt-16">
          <button
            className="self-end text-gray-900 focus:outline-none"
            onClick={() => setIsOpen( false )}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Link
            to="/"
            className="text-gray-900 text-base py-2 px-3 hover:underline underline-offset-4"
            onClick={() => setIsOpen( false )}
          >
            Home
          </Link>
          <Link
            to="/bedspaces"
            className="text-gray-900 text-base py-2 px-3 hover:underline underline-offset-4"
            onClick={() => setIsOpen( false )}
          >
            Bed Spaces
          </Link>
          <Link
            to="/create-bedspace"
            className="text-gray-900 text-base py-2 px-3 hover:underline underline-offset-4"
            onClick={() => setIsOpen( false )}
          >
            Post Bed Space
          </Link>
          <Link
            to="/profile"
            className="text-gray-900 text-base py-2 px-3 hover:underline underline-offset-4"
            onClick={() => setIsOpen( false )}
          >
            Profile
          </Link>
          <Link
            to="/login"
            className="text-gray-900 text-base py-2 px-3 hover:underline underline-offset-4"
            onClick={() => setIsOpen( false )}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-gray-900 text-base py-2 px-3 hover:underline underline-offset-4"
            onClick={() => setIsOpen( false )}
          >
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;