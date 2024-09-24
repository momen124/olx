import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">Dubizzle Clone</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 hover:text-blue-500">Home</Link></li>
            <li><Link to="/search-results" className="text-blue-500">Search</Link></li>
            <li><Link to="/chat" className="text-gray-600 hover:text-blue-500">Chat</Link></li>
            <li><Link to="/login" className="text-gray-600 hover:text-blue-500">Login</Link></li>
            <li><Link to="/register" className="text-gray-600 hover:text-blue-500">Register</Link></li>
            <li><Link to="/profile" className="text-gray-600 hover:text-blue-500">Profile</Link></li>

            <li><Link to="/create" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Post Ad</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
