import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">TicketFlow</div>
          <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded">
            Home
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
