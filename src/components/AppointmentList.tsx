import React from 'react';
import { Clock, Calendar as CalendarIcon, MapPin } from 'lucide-react';

interface Appointment {
  id: string;
  doctorName: string;
  specialty: string;
  location: string;
  date: Date;
  status: 'upcoming' | 'completed' | 'cancelled';
}

interface AppointmentListProps {
  appointments: Appointment[];
  onCancelAppointment?: (id: string) => void;
  onRescheduleAppointment?: (id: string) => void;
}

const AppointmentList = ({ appointments, onCancelAppointment, onRescheduleAppointment }: AppointmentListProps) => {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status: Appointment['status']) => {
    switch (status) {
      case 'upcoming':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
    }
  };

  const getStatusText = (status: Appointment['status']) => {
    switch (status) {
      case 'upcoming':
        return 'À venir';
      case 'completed':
        return 'Terminé';
      case 'cancelled':
        return 'Annulé';
    }
  };

  return (
    <div className="space-y-4">
      {appointments.map((appointment) => (
        <div
          key={appointment.id}
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {appointment.doctorName}
              </h3>
              <p className="text-[#007BFF]">{appointment.specialty}</p>
            </div>
            <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(appointment.status)}`}>
              {getStatusText(appointment.status)}
            </span>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center text-gray-600">
              <CalendarIcon className="h-4 w-4 mr-2" />
              <span>{formatDate(appointment.date)}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{appointment.location}</span>
            </div>
          </div>

          {appointment.status === 'upcoming' && (
            <div className="mt-4 flex space-x-4">
              <button
                onClick={() => onRescheduleAppointment?.(appointment.id)}
                className="flex-1 bg-[#007BFF] text-white py-2 px-4 rounded hover:bg-[#0056B3] transition-colors"
              >
                Reprogrammer
              </button>
              <button
                onClick={() => onCancelAppointment?.(appointment.id)}
                className="flex-1 border border-red-500 text-red-500 py-2 px-4 rounded hover:bg-red-50 transition-colors"
              >
                Annuler
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AppointmentList;