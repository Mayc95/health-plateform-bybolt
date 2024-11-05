import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import DoctorCard from '../components/DoctorCard';

const popularDoctors = [
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
  }
];

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = (specialty: string, location: string) => {
    navigate(`/search?specialty=${encodeURIComponent(specialty)}&location=${encodeURIComponent(location)}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.4)'
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl text-white font-bold text-center mb-8">
            Trouvez le Professionnel de Santé qu'il vous faut
          </h1>
          <div className="w-full max-w-4xl">
            <SearchBox onSearch={handleSearch} className="bg-white/90 p-6 rounded-xl shadow-lg backdrop-blur-sm" />
          </div>
        </div>
      </div>

      {/* Popular Doctors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Professionnels Recommandés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularDoctors.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#E3F2FD] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0056B3] mb-4">
            Vous avez des questions ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Notre équipe est là pour vous aider à trouver le professionnel de santé qui correspond à vos besoins.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-[#007BFF] text-white px-8 py-3 rounded-lg hover:bg-[#0056B3] transition-colors duration-300 shadow-md"
          >
            Contactez-nous pour plus d'informations
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;