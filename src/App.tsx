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
import About from "./ShowCV/About/About";
import Experience from "./ShowCV/Experience/Experience";
import Skills from "./ShowCV/Skills/Skills";
import Education from "./ShowCV/Education/Education";
import HeaderMenu from "./components/HeaderMenu";
const ShowUserMenuOnHome = () => {
  const location = useLocation(); // Lấy URL hiện tại

  // Chỉ hiển thị UserHeaderMenu khi URL là /user/home
  return location.pathname.startsWith("/user") ? (
    <HeaderMenu>
      <Routes>
        <Route path="/user" element={<Navigate to="/user/about" />} />
        <Route path="/user/about" element={<About />} />
        <Route path="/user/experience" element={<Experience />} />
        <Route path="/user/skills" element={<Skills />} />
        <Route path="/user/education" element={<Education />} />
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
        <Route path="/homeCV" element={<HeaderMenu />} />
      </Routes>
    </Router>
  );
};

export default App;