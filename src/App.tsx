import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CVPage from './ManagementCV/pages/CVPage';
import HomePage from './PreviewCV/pages/HomePage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
    </Router>
  );
};

export default App;
