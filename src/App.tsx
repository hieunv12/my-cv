import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CVPage from './ManagementCV/pages/CVPage';
import HomePage from './PreviewCV/pages/HomePage';
import HomeCVTemplate from './ShowCV/HomeCVTemplate';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/home" element={<HomeCVTemplate />} />
      </Routes>
    </Router>
  );
};

export default App;
