import React from 'react';
import { Search, MapPin } from 'lucide-react';

interface SearchBoxProps {
  onSearch?: (specialty: string, location: string) => void;
  className?: string;
}

const SearchBox = ({ onSearch, className = '' }: SearchBoxProps) => {
  const [specialty, setSpecialty] = React.useState('');
  const [location, setLocation] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(specialty, location);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Spécialité (ex: dentiste, cardiologue)"
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
        />
      </div>
      <div className="relative flex-1">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Localisation (ville ou code postal)"
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-[#007BFF] text-white px-8 py-3 rounded-lg hover:bg-[#0056B3] transition-colors duration-300 shadow-md"
      >
        Rechercher
      </button>
    </form>
  );
};

export default SearchBox;