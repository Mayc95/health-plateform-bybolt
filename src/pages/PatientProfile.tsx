import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Lock } from 'lucide-react';

interface PatientData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  birthDate: string;
  gender: string;
}

const PatientProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [patientData, setPatientData] = useState<PatientData>({
    firstName: 'Marie',
    lastName: 'Dupont',
    email: 'marie.dupont@email.com',
    phone: '06 12 34 56 78',
    address: '45 Rue du Commerce, 75015 Paris',
    birthDate: '1990-05-15',
    gender: 'female'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // Handle profile update
    console.log('Updated profile:', patientData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setPatientData({
      ...patientData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Mon Profil</h1>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-[#007BFF] hover:text-[#0056B3] transition-colors"
              >
                {isEditing ? 'Annuler' : 'Modifier'}
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Prénom</label>
                  <div className="mt-1 relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="firstName"
                      value={patientData.firstName}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#007BFF] focus:ring-[#007BFF] disabled:bg-gray-50 disabled:text-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Nom</label>
                  <div className="mt-1 relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="lastName"
                      value={patientData.lastName}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#007BFF] focus:ring-[#007BFF] disabled:bg-gray-50 disabled:text-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="mt-1 relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={patientData.email}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#007BFF] focus:ring-[#007BFF] disabled:bg-gray-50 disabled:text-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Téléphone</label>
                  <div className="mt-1 relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={patientData.phone}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#007BFF] focus:ring-[#007BFF] disabled:bg-gray-50 disabled:text-gray-500"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Adresse</label>
                  <div className="mt-1 relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="address"
                      value={patientData.address}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#007BFF] focus:ring-[#007BFF] disabled:bg-gray-50 disabled:text-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Date de naissance</label>
                  <input
                    type="date"
                    name="birthDate"
                    value={patientData.birthDate}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#007BFF] focus:ring-[#007BFF] disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Genre</label>
                  <select
                    name="gender"
                    value={patientData.gender}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#007BFF] focus:ring-[#007BFF] disabled:bg-gray-50 disabled:text-gray-500"
                  >
                    <option value="female">Femme</option>
                    <option value="male">Homme</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
              </div>

              {isEditing && (
                <div className="mt-6 flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#007BFF] text-white py-2 px-4 rounded-lg hover:bg-[#0056B3] transition-colors"
                  >
                    Enregistrer les modifications
                  </button>
                </div>
              )}
            </form>
          </div>

          <div className="border-t border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-600">
                <Lock className="h-5 w-5 mr-2" />
                <span>Mot de passe</span>
              </div>
              <button
                className="text-[#007BFF] hover:text-[#0056B3] transition-colors"
                onClick={() => console.log('Change password')}
              >
                Modifier le mot de passe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;