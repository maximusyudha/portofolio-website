"use client";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {}, []);
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-filter backdrop-blur-lg z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <a
                href="/"
                className="flex items-center py-5 px-2 text-gray-700 hover:text-purple-900"
              >
                <svg
                  className="h-6 w-6 mr-1 text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v18m9-9H3"
                  />
                </svg>
                <span className="font-bold">Maximus Yudha</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="/"
                className="py-5 px-3 text-gray-700 hover:text-purple-900"
              >
                Home
              </a>
              <a
                href="/About"
                className="py-5 px-3 text-gray-700 hover:text-purple-900"
              >
                About
              </a>
              <a
                href="/"
                className="py-5 px-3 text-gray-700 hover:text-purple-900"
              >
                Contact
              </a>
            </div>
          </div>
          <div
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center"
          >
            <button className="mobile-menu-button">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`mobile-menu text-white ${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden`}
      >
        <a href="/about" className="block py-2 px-4 text-sm hover:bg-gray-200">
          About
        </a>
        <a
          href="/services"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Services
        </a>
        <a
          href="/contact"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
