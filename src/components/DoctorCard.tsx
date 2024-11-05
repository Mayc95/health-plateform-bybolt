import React from 'react';
import { Star, MapPin } from 'lucide-react';

interface DoctorCardProps {
  doctor: {
    id: string;
    name: string;
    specialty: string;
    location: string;
    rating: number;
    image: string;
    description: string;
  };
  horizontal?: boolean;
}

const DoctorCard = ({ doctor, horizontal = false }: DoctorCardProps) => {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg ${
      horizontal ? 'flex' : ''
    }`}>
      <div className={`${horizontal ? 'w-1/4' : 'w-full h-48'}`}>
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className={`p-6 ${horizontal ? 'w-3/4' : ''}`}>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
            <p className="text-[#007BFF] font-medium">{doctor.specialty}</p>
          </div>
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-600">{doctor.rating}</span>
          </div>
        </div>
        <div className="mt-4 flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{doctor.location}</span>
        </div>
        <p className="mt-4 text-gray-600">{doctor.description}</p>
        <button className="mt-6 w-full bg-[#007BFF] text-white py-2 px-4 rounded-lg hover:bg-[#0056B3] transition-colors duration-300">
          Prendre Rendez-vous
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;