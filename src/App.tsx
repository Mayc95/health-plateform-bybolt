import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import Contact from './pages/Contact';
import DoctorProfile from './pages/DoctorProfile';
import PatientProfile from './pages/PatientProfile';
import AppointmentList from './pages/AppointmentList';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/doctor/:id" element={<DoctorProfile />} />
            <Route path="/profile" element={<PatientProfile />} />
            <Route path="/appointments" element={<AppointmentList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;