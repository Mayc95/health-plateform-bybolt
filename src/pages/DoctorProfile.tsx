import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Star, Phone, Mail, Clock } from 'lucide-react';
import Calendar from '../components/Calendar';
import TimeSlots from '../components/TimeSlots';

const mockDoctor = {
  id: '1',
  name: 'Dr. Sophie Martin',
  specialty: 'Cardiologue',
  location: 'Paris 75008',
  address: '123 Avenue des Champs-Élysées',
  rating: 4.8,
  image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
  description: 'Spécialiste en cardiologie interventionnelle avec plus de 15 ans d\'expérience.',
  phone: '01 23 45 67 89',
  email: 'dr.martin@mediconnect.fr',
  education: [
    'Doctorat en Médecine - Université Paris Descartes',
    'Spécialisation en Cardiologie - AP-HP'
  ],
  languages: ['Français', 'Anglais', 'Espagnol']
};

const availableSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00',
  '14:00', '14:30', '15:00', '15:30', '16:00'
];

const DoctorProfile = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState<string>();

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedSlot(undefined);
  };

  const handleSlotSelect = (slot: string) => {
    setSelectedSlot(slot);
  };

  const handleBookAppointment = () => {
    if (!selectedSlot) return;
    // Handle appointment booking
    console.log('Booking appointment for:', {
      date: selectedDate,
      time: selectedSlot,
      doctorId: id
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Doctor Info */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={mockDoctor.image}
                    alt={mockDoctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">{mockDoctor.name}</h1>
                      <p className="text-[#007BFF] font-medium">{mockDoctor.specialty}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1 text-gray-600">{mockDoctor.rating}</span>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{mockDoctor.address}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>{mockDoctor.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>{mockDoctor.email}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-600">{mockDoctor.description}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Formation</h2>
                <ul className="space-y-2">
                  {mockDoctor.education.map((edu, index) => (
                    <li key={index} className="text-gray-600">{edu}</li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200 px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Langues parlées</h2>
                <div className="flex gap-2">
                  {mockDoctor.languages.map((lang, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Appointment Booking */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Prendre rendez-vous
              </h2>
              <Calendar
                selectedDate={selectedDate}
                onDateSelect={handleDateSelect}
                availableSlots={['2024-03-20', '2024-03-22', '2024-03-25']}
              />
            </div>

            {selectedDate && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Créneaux disponibles
                </h3>
                <TimeSlots
                  slots={availableSlots}
                  selectedSlot={selectedSlot}
                  onSelectSlot={handleSlotSelect}
                />
                {selectedSlot && (
                  <button
                    onClick={handleBookAppointment}
                    className="mt-6 w-full bg-[#007BFF] text-white py-3 px-4 rounded-lg hover:bg-[#0056B3] transition-colors"
                  >
                    Confirmer le rendez-vous
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;