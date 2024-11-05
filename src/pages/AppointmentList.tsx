import React, { useState } from 'react';
import AppointmentListComponent from '../components/AppointmentList';

const mockAppointments = [
  {
    id: '1',
    doctorName: 'Dr. Sophie Martin',
    specialty: 'Cardiologue',
    location: 'Paris 75008',
    date: new Date(2024, 2, 20, 9, 30),
    status: 'upcoming' as const
  },
  {
    id: '2',
    doctorName: 'Dr. Thomas Bernard',
    specialty: 'Dentiste',
    location: 'Lyon 69002',
    date: new Date(2024, 2, 22, 14, 0),
    status: 'upcoming' as const
  },
  {
    id: '3',
    doctorName: 'Dr. Marie Dubois',
    specialty: 'Pédiatre',
    location: 'Marseille 13008',
    date: new Date(2024, 2, 15, 10, 0),
    status: 'completed' as const
  }
];

const AppointmentList = () => {
  const [appointments, setAppointments] = useState(mockAppointments);

  const handleCancelAppointment = (id: string) => {
    setAppointments(appointments.map(apt => 
      apt.id === id ? { ...apt, status: 'cancelled' as const } : apt
    ));
  };

  const handleRescheduleAppointment = (id: string) => {
    // Handle reschedule logic
    console.log('Reschedule appointment:', id);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Mes rendez-vous</h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Rendez-vous à venir</h2>
            <AppointmentListComponent
              appointments={appointments.filter(apt => apt.status === 'upcoming')}
              onCancelAppointment={handleCancelAppointment}
              onRescheduleAppointment={handleRescheduleAppointment}
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Historique des rendez-vous</h2>
            <AppointmentListComponent
              appointments={appointments.filter(apt => apt.status !== 'upcoming')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentList;