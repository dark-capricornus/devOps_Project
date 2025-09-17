import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppointmentScheduler from './components/AppointmentScheduler';
import PatientRecords from './components/PatientRecords';
import DoctorDashboard from './components/DoctorDashboard';
import Authentication from './components/Authentication';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/appointments" element={<AppointmentScheduler />} />
        <Route path="/records" element={<PatientRecords />} />
        <Route path="/dashboard" element={<DoctorDashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
