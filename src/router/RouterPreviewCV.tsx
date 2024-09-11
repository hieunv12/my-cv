import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../PreviewCV/pages/HomePage';
import AboutPage from '../ShowCV/AboutPage/AboutPage';
import ExperiencePage from '../ShowCV/ExperiencePage/ExperiencePage';
import SkillsPage from '../ShowCV/SkillsPage/SkillsPage';
import EducationPage from '../ShowCV/EducationPage/EducationPage';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';

const RouterPreviewCV = () => {
    return (
    <Router >
          <HeaderMenu />
        <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/education" element={<EducationPage />} />
        </Routes>
    </Router>
    )
}

export default RouterPreviewCV;