import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CVPage from './ManagementCV/pages/CVPage';
import HomePage from './PreviewCV/pages/HomePage';
import FormCV from './formCV/FormCV';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path='/FormCV' element={<FormCV />} />
        
      </Routes>
    </Router>
  );
};

export default App;
