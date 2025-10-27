import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-200 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">TicketFlow</div>

          <div className="hidden md:flex space-x-4">
            <Link
              to="/#/"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Home
            </Link>
            <Link
              to="/#/dashboard"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Dashboard
            </Link>
          </div>

          <button
            className="md:hidden bg-purple-400 text-white px-3 py-2 rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link
              to="/#/"
              className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/#/dashboard"
              className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
