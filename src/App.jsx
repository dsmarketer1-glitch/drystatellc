import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DryStateExpertWaterDamageRestoration from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen font-sans bg-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={<DryStateExpertWaterDamageRestoration />} />
          <Route path="/:serviceId" element={<ServicePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
