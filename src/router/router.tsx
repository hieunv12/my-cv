import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../PreviewCV/pages/HomePage';
import About from '../ShowCV/About/About';
import Experience from '../ShowCV/Experience/Experience';
import Skills from '../ShowCV/Skills/Skills';

import HeaderMenu from '../components/HeaderMenu';

const RouterPreviewCV = () => {
    return (
    <Router >
          <HeaderMenu />
        <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />

        </Routes>
    </Router>
    )
}

export default RouterPreviewCV;