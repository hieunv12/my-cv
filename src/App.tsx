import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import CVPage from "./ManagementCV/pages/CVPage";
import HomePage from "./PreviewCV/pages/HomePage";
import HomeCVTemplate from "./ShowCV/HomeCVTemplate";
import AboutPage from "./ShowCV/AboutPage/AboutPage";
import EducationPage from "./ShowCV/EducationPage/EducationPage";
import ExperiencePage from "./ShowCV/ExperiencePage/ExperiencePage";
import SkillsPage from "./ShowCV/SkillsPage/SkillsPage";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
const ShowUserMenuOnHome = () => {
  const location = useLocation(); // Lấy URL hiện tại

  // Chỉ hiển thị UserHeaderMenu khi URL là /user/home
  return location.pathname.startsWith("/user") ? (
    <HeaderMenu>
      <Routes>
        <Route path="/user" element={<Navigate to="/user/about" />} />
        <Route path="/user/about" element={<AboutPage />} />
        <Route path="/user/experience" element={<ExperiencePage />} />
        <Route path="/user/skills" element={<SkillsPage />} />
        <Route path="/user/education" element={<EducationPage />} />
      </Routes>
    </HeaderMenu>
  ) : null;
};
const App: React.FC = () => {
  return (
    <Router>
      <ShowUserMenuOnHome />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/home" element={<HomeCVTemplate />} />
      </Routes>
    </Router>
  );
};

export default App;
