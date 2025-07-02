// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import AllMediaPage from './components/AllMediaPage'; 
import LawyerDashboard from './pages/LawyerDashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/media" element={<AllMediaPage />} /> {/* 👈 Add route */}
        <Route path="/lawyer-dashboard" element={<LawyerDashboard />} />

      </Routes>
    </>
  );
}

export default App;
