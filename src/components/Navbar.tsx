import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-[#007BFF]" />
              <span className="text-xl font-semibold text-[#0056B3]">MediConnect</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#007BFF] transition-colors">
              Accueil
            </Link>
            <Link to="/search" className="text-gray-700 hover:text-[#007BFF] transition-colors">
              Rechercher
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#007BFF] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;