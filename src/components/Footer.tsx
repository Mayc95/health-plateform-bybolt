import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0056B3] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">MediConnect</h3>
            <p className="text-gray-300">
              Votre plateforme de mise en relation avec les professionnels de santé.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@mediconnect.fr</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>01 23 45 67 89</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>123 Rue de la Santé, 75000 Paris</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} MediConnect. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;