import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter } from 'lucide-react';
import SearchBox from '../components/SearchBox';
import DoctorCard from '../components/DoctorCard';

const mockDoctors = [
  {
    id: '1',
    name: 'Dr. Sophie Martin',
    specialty: 'Cardiologue',
    location: 'Paris 75008',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
    description: 'Spécialiste en cardiologie interventionnelle avec plus de 15 ans d\'expérience.'
  },
  {
    id: '2',
    name: 'Dr. Thomas Bernard',
    specialty: 'Dentiste',
    location: 'Lyon 69002',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400',
    description: 'Expert en implantologie et chirurgie dentaire esthétique.'
  },
  {
    id: '3',
    name: 'Dr. Marie Dubois',
    specialty: 'Pédiatre',
    location: 'Marseille 13008',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
    description: 'Pédiatre attentionnée spécialisée dans le développement de l\'enfant.'
  },
  {
    id: '4',
    name: 'Dr. Jean Petit',
    specialty: 'Dermatologue',
    location: 'Paris 75016',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400',
    description: 'Dermatologue spécialisé dans le traitement des maladies de la peau et la dermatologie esthétique.'
  }
];

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('rating');
  const [distance, setDistance] = useState('10');

  const specialty = searchParams.get('specialty') || '';
  const location = searchParams.get('location') || '';

  const handleSearch = (newSpecialty: string, newLocation: string) => {
    setSearchParams({ specialty: newSpecialty, location: newLocation });
  };

  const filteredDoctors = mockDoctors
    .filter(doctor => 
      (!specialty || doctor.specialty.toLowerCase().includes(specialty.toLowerCase())) &&
      (!location || doctor.location.toLowerCase().includes(location.toLowerCase()))
    )
    .sort((a, b) => sortBy === 'rating' ? b.rating - a.rating : 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <SearchBox
            onSearch={handleSearch}
            className="mb-4"
          />
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center text-[#007BFF] hover:text-[#0056B3] transition-colors"
          >
            <Filter className="h-5 w-5 mr-2" />
            {showFilters ? 'Masquer les filtres' : 'Afficher les filtres'}
          </button>
          
          {showFilters && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Trier par
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#007BFF] focus:ring-[#007BFF]"
                  >
                    <option value="rating">Note</option>
                    <option value="distance">Distance</option>
                    <option value="availability">Disponibilité</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Distance maximale
                  </label>
                  <select
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#007BFF] focus:ring-[#007BFF]"
                  >
                    <option value="5">5 km</option>
                    <option value="10">10 km</option>
                    <option value="20">20 km</option>
                    <option value="50">50 km</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          {filteredDoctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} horizontal />
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">
              Aucun professionnel de santé ne correspond à vos critères de recherche.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;